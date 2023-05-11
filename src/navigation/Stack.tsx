import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/splash';
import Home from '../screens/Home';

export type RootStackParamList = {
  Splash: undefined;  
  Home: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();
const Stack = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name='Splash' component={Splash}/>
        <RootStack.Screen name='Home' component={Home}/>
    </RootStack.Navigator>
  )
}

export default Stack;