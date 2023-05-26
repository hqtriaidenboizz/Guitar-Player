import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Distance} from '../constants/distance';
import {DARKCOLORS} from '../constants/colors';

export const GENERALSTLE = StyleSheet.create({
  paddingHorizontal: {
    paddingHorizontal: Distance.Pixel,
  },
});

export const HEADERSTYLE = StyleSheet.create({
  header: {
    backgroundColor: DARKCOLORS.primaryColor,
    height: 55,
    elevation: 0,
  },
});
