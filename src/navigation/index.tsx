import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/splash';
import Stack from './Stack';
import AuthNavigaiton from './AuthNavigaiton';
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack/>
    </NavigationContainer>
  )
};

export default Navigation;
