import { Iconoir, AlbumOpen,PlaystationGamepad, VoiceScan,Settings } from 'iconoir-react-native'
import Tune from '../screens/Tune';
import Home from '../screens/Home';
import Tools from '../screens/Tools';
import Setting from '../screens/Setting';
import { Image, StyleSheet, Text, View } from 'react-native'
import { DARKCOLORS } from './colors';
import { FONTSIZE } from './sizes';
import { FONTFAMILY } from './fonts';
export const BottomTabData = [
  {
    route: 'Home',
    options: {
      headerTitle: () => <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/images/logoIcon.png')}/>
        <Text style={styles.title}>Songs</Text>
      </View>,
      tabBarIcon: ({focused} : any) => (
       <View  style={focused? styles.iconFocused: null}  >
        <AlbumOpen color={focused ? DARKCOLORS.primaryColor : DARKCOLORS.iconColor} width={35} height={35} strokeWidth={1.5}/>
       </View>
      )
    },
    component: Home,
  },
  {
    route: 'Tools',
   options: {
    headerTitle: () => <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/images/logoIcon.png')}/>
        <Text style={styles.title}>Tools</Text>
      </View>,
      tabBarIcon: ({focused} : any) => (
      <View  style={focused? styles.iconFocused: null}  >
        <PlaystationGamepad color={focused ? DARKCOLORS.primaryColor : DARKCOLORS.iconColor} width={35} height={35} strokeWidth={1.5}/>
       </View>
      )
    },
    component: Tools,
  },
  {
    route: 'Tune',
    options: {
    headerTitle: () => <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/images/logoIcon.png')}/>
        <Text style={styles.title}>Tune</Text>
      </View>,
      tabBarIcon: ({focused} : any) => (
       <View  style={focused? styles.iconFocused: null}  >
        <VoiceScan color={focused ? DARKCOLORS.primaryColor : DARKCOLORS.iconColor} width={35} height={35} strokeWidth={1.5}/>
       </View>
      )
    },
    component: Tune,
  },
  {
    route: 'Setting',
    options: {
    headerTitle: () => <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/images/logoIcon.png')}/>
        <Text style={styles.title}>Settings</Text>
      </View>,
      tabBarIcon: ({focused} : any) => (
       <View  style={focused? styles.iconFocused: null}  >
        <Settings color={focused ? DARKCOLORS.primaryColor : DARKCOLORS.iconColor} width={35} height={35} strokeWidth={1.5}/>
       </View>
      )
    },
    component: Setting,
  },
];

const styles = StyleSheet.create({
iconFocused: {
    padding: 15,
    backgroundColor: DARKCOLORS.hightLightColor,
    borderRadius: 360,
},
logo:{
  width: 50,
  height: 50,
},
container: {
  display: 'flex',
  flexDirection:'row',
  alignItems:'center',
  gap: 10,
},
title: {
  fontSize: FONTSIZE.size_2,
  fontFamily: FONTFAMILY.medium,
  color:DARKCOLORS.hightLightColor
}
})