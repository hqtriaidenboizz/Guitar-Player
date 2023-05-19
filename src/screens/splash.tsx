import { Image, StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import { DARKCOLORS } from '../constants/colors'
import { StackNavigationProp } from '@react-navigation/stack';

import Lottie from 'lottie-react-native';
import CustomStatusBar from '../constants/StatusBar';
import { useNavigation } from '@react-navigation/native';
import { RootStackScreenProps } from '../types/navigation/types';


const Splash = () => {
    const navigation = useNavigation<RootStackScreenProps<'Splash'>['navigation']>()
    const[loader,setLoader] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoader(true)
        },2500)
    },[])
    useEffect(() => {
        if(loader){
            navigation.replace('MyTabs')
        }
    },[loader])
  return (
    <View style={styles.container}>
        <CustomStatusBar />
        <Lottie source={require('../assets/images/logoGuitarPlayer.json')} autoPlay/>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: DARKCOLORS.primaryColor,
    },
    logo: {
        width: 170,
        height:154
    }
    
})