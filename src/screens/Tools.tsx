import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { DARKCOLORS, LIGHTCOLORS } from '../constants/colors'
import MainContainer from '../components/Global/MainContainer'

const Tools = () => {
  return (
    <MainContainer>
        <Image
        style={{width: '100%', height: '100%', resizeMode:'cover'}}
        source={require('../assets/images/re1.jpg')}
      />
    </MainContainer>
  )
}

export default Tools

const styles = StyleSheet.create({})