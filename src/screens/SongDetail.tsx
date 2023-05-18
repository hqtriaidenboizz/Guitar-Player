import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DARKCOLORS } from '../constants/colors'
import { StackNavigationProp } from '@react-navigation/stack';

import { useRoute } from '@react-navigation/native';
import { RootStackScreenProps } from '../types/navigation/types';

const SongDetail = () => {
    const route= useRoute<RootStackScreenProps<'SongDetail'>['route']>()
    const id = route.params
    console.log(id);
    
  return (
    <View style={{backgroundColor: DARKCOLORS.primaryColor}}>
      <Text>SongDetail</Text>
    </View> 
  )
}

export default SongDetail

const styles = StyleSheet.create({})