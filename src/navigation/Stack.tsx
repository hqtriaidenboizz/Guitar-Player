import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/splash';
import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import MyTabs from './BottomTab';
import SongDetail from '../screens/SongDetail';
import { RootStackParamList } from '../types/navigation/types';

// export type RootStackParamList = {
//   Splash: undefined;  
//   MyTabs: undefined;
//   SignIn: undefined;
//   SongDetail: { id?: number } | undefined ;
// };

const RootStack = createStackNavigator<RootStackParamList>();
const Stack = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name='Splash' component={Splash}/>
        <RootStack.Screen name='MyTabs' component={MyTabs}/>
        <RootStack.Screen name='SongDetail' component={SongDetail} />
    </RootStack.Navigator>
  )
}

export default Stack;