import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native';
import { BlurView } from '@react-native-community/blur';

import { BottomTabData } from '../constants/bottomtab';
import { DARKCOLORS } from '../constants/colors';
import { HEADERSTYLE } from '../styles/generalStyle';
import { RootTabParamList } from '../types/navigation/types';

const Tab = createBottomTabNavigator<RootTabParamList>();

function MyTabs() {
  return (
    <Tab.Navigator 
    screenOptions={{
    headerStyle: HEADERSTYLE.header,
    headerTitleStyle: styles.title,
    tabBarShowLabel: false,
    tabBarStyle: styles.tabBar,
    tabBarBackground: () => (
        <TouchableHighlight style={styles.absolute}>
            <BlurView
                style={styles.absolute}
                blurAmount={20}
                blurType='dark'  
            /> 
        </TouchableHighlight>
    ),
   }}>
        {
            BottomTabData.map((item: any,index: number)=> { 
                return (
                    <Tab.Screen  key={index} name={item.route} component={item.component}
                        options={item.options}/>
                )
            })
        }
    </Tab.Navigator>
  );
}
export default MyTabs;
const styles = StyleSheet.create({
tabBar: {
    position:'absolute',
    height: 100,
    bottom: 15,
    left: 15,
    right: 15,
    borderRadius: 100,
    elevation: 0,
    shadowOpacity: 0,
    borderTopWidth: 0,
  
},  absolute: {
    position: "absolute",
    zIndex:1000,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 100,
    overlayColor:"" ,
    overflow: 'hidden',
    borderWidth: 0.2,
    borderColor: DARKCOLORS.iconColor   
  },

  title: {
    color:DARKCOLORS.hightLightColor
  }
})