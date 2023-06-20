import {StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {DARKCOLORS} from '../constants/colors';
import {StackNavigationProp} from '@react-navigation/stack';

import Lottie from 'lottie-react-native';
import CustomStatusBar from '../constants/StatusBar';
import {useNavigation} from '@react-navigation/native';
import {RootStackScreenProps} from '../types/navigation/types';
import MainContainer from '../components/Global/MainContainer';
import { getValueFromAsyncStorage } from '../utils/getValueAsyncStore';

const Splash = () => {
  const [isLogin,setIsLogin] = useState<boolean>(false)
  const [access_token,setAccess_token] = useState<string>('')
  const [userId, setUserId] = useState<string>('')
  const navigation =
    useNavigation<RootStackScreenProps<'Splash'>['navigation']>();
  const [loader, setLoader] = useState<boolean>(false);
  
  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 2500);
  }, []);

  useEffect(() => {
    handleGetAccessToken();
    if (loader) {
      navigation.replace(isLogin ? 'MyTabs': 'SignIn');
    }
  }, [loader]);

    const handleGetAccessToken = async () => {
    const user_Info = await getValueFromAsyncStorage('user_Info');
    console.log(user_Info);
    
    if(user_Info){
      setAccess_token(user_Info?.access_token)
      setUserId(user_Info?.user_id)
      setIsLogin(!isLogin)
    }
  }

  return (
    <MainContainer>
      <CustomStatusBar />
      <Lottie
        source={require('../assets/images/logoGuitarPlayer.json')}
        autoPlay
      />
    </MainContainer>
  );
};

export default Splash;

const styles = StyleSheet.create({
  logo: {
    width: 170,
    height: 154,
  },
});
