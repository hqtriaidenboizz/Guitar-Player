import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DARKCOLORS } from '../constants/colors'

const Tune = () => {
  return (
    <View style={{width:'100%', height: '100%', backgroundColor:DARKCOLORS.primaryColor}}>
      <Text>Tune</Text>
    </View>
  )
}

export default Tune

const styles = StyleSheet.create({})