import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { DARKCOLORS, LIGHTCOLORS } from '../constants/colors'

const Tools = () => {
  return (
    <View style={{width:'100%', height: '100%', backgroundColor:DARKCOLORS.primaryColor}}>
        <Image
        style={{width: '100%', height: '100%', resizeMode:'cover'}}
        source={require('../assets/images/re1.jpg')}
      />
    </View>
  )
}

export default Tools

const styles = StyleSheet.create({})