import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/splash';
import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import MyTabs from './BottomTab';
import SongDetail from '../screens/SongDetail';
import { RootStackParamList } from '../types/navigation/types';
import Search from '../screens/Search';
import HeaderTitle from '../components/Global/HeaderTitle';
import { HEADERSTYLE } from '../styles/generalStyle';

const RootStack = createStackNavigator<RootStackParamList>();
const Stack = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false, animationEnabled: false}}>
        <RootStack.Screen   name='Splash' component={Splash}/>
        <RootStack.Screen name='MyTabs' component={MyTabs}/>
        <RootStack.Screen name='SongDetail' component={SongDetail} />
        <RootStack.Screen options={{
          headerShown: true,
          headerStyle: HEADERSTYLE.header,
          headerLeft: ()=> null,
          headerTitle: () => <HeaderTitle title='Songs'/>
        }} name='Search' component={Search} />
    </RootStack.Navigator>
  )
}

export default Stack;