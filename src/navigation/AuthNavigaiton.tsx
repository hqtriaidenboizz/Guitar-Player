import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../screens/SignIn';
const RootAuthStack = createStackNavigator();

const AuthNavigaiton = () => {
  return (
    <RootAuthStack.Navigator>
      <RootAuthStack.Screen name="SignIn" component={SignIn} />
    </RootAuthStack.Navigator>
  );
};

export default AuthNavigaiton;

const styles = StyleSheet.create({});
