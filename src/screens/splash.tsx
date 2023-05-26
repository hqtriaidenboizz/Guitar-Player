import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {DARKCOLORS} from '../constants/colors';
import {StackNavigationProp} from '@react-navigation/stack';

import Lottie from 'lottie-react-native';
import CustomStatusBar from '../constants/StatusBar';
import {useNavigation} from '@react-navigation/native';
import {RootStackScreenProps} from '../types/navigation/types';
import MainContainer from '../components/Global/MainContainer';

const Splash = () => {
  const navigation =
    useNavigation<RootStackScreenProps<'Splash'>['navigation']>();
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoader(true);
    }, 2500);
  }, []);
  useEffect(() => {
    if (loader) {
      navigation.replace('MyTabs');
    }
  }, [loader]);
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
