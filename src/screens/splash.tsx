import { Image, StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import { DARKCOLORS } from '../constants/colors'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/Stack';
import Lottie from 'lottie-react-native';

type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Splash'
>;
type Props = {
  navigation: SplashScreenNavigationProp;
};
 
const Splash = ({navigation}:Props) => {
    const[loader,setLoader] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoader(true)
        },3200)
    },[])
    useEffect(() => {
        if(loader){
            navigation.replace('MyTabs')
        }
    },[loader])
  return (
    <View style={styles.container}>
        <Lottie source={require('../assets/images/logoGuitarPlayer.json')} autoPlay loop/>
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