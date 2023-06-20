import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';
import { DARKCOLORS } from '../../constants/colors';
import { ScreenDimensions } from '../../constants/dimensions';
import { FONTFAMILY } from '../../constants/fonts';
import { FONTSIZE } from '../../constants/sizes';

const Loading = () => {
  return (
    <View style={styles.background}>
      <View style={styles.animation}>
         <Lottie autoPlay source={require('../../assets/images/loading.json')}/>
      </View>
      <Text style={styles.text}>Loading</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  background:{
    position:'absolute',
    backgroundColor: DARKCOLORS.primaryColor,
    opacity: 0.9,
    width: ScreenDimensions.ScreenWidth,
    height: ScreenDimensions.ScreenHeight,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  animation: {
    width:ScreenDimensions.ScreenWidth/5,
    height: ScreenDimensions.ScreenWidth/5
  },
  text: {
    color:DARKCOLORS.hightLightColor,
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.size_3
  }
})