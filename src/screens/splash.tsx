import {StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';

import Lottie from 'lottie-react-native';
import CustomStatusBar from '../constants/StatusBar';
import {useNavigation} from '@react-navigation/native';
import {RootStackScreenProps} from '../types/navigation/types';
import MainContainer from '../components/Global/MainContainer';
import {getValueFromAsyncStorage} from '../utils/getValueAsyncStore';
import {fetchUserRequest} from '../stores/actions/userAction';
import {useDispatch, useSelector} from 'react-redux';

const Splash = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [play, setPlay] = useState<boolean>(true);
  const [loader, setLoader] = useState<boolean>(false);
  const [access_token, setAccess_token] = useState<string>('');
  const [userId, setUserId] = useState<string>('');
  const navigation =
    useNavigation<RootStackScreenProps<'Splash'>['navigation']>();
  const dispatch = useDispatch();
  
  useEffect(() => {
    handleGetAccessToken();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 3000);
  }, []);
  useEffect(() => {
    if (loader === true) {
      navigation.replace(isLogin ? 'MyTabs' : 'SignIn');
    }
  }, [loader]);

  const handleGetAccessToken = async () => {
    const user_Info = await getValueFromAsyncStorage('user_Info');
    if (user_Info) {
      setAccess_token(user_Info?.access_token);
      setUserId(user_Info?.user_id);
      setIsLogin(!isLogin);
    }
    if (user_Info) {
      dispatch(fetchUserRequest(user_Info?.user_id));
    }
  };

  return (
    <MainContainer>
      <CustomStatusBar />
      <Lottie
        loop={false}
        source={require('../assets/images/logoGuitarPlayer.json')}
        autoPlay={play}
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
