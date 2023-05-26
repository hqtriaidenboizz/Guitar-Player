import {
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import type {StatusBarStyle} from 'react-native';
import {DARKCOLORS} from './colors';
const CustomStatusBar = () => {
  return (
    <StatusBar backgroundColor={DARKCOLORS.primaryColor} barStyle="default" />
  );
};

export default CustomStatusBar;

const styles = StyleSheet.create({});
