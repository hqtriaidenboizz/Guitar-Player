import {
  Iconoir,
  AlbumOpen,
  PlaystationGamepad,
  VoiceScan,
  Settings,
} from 'iconoir-react-native';
import Tune from '../screens/Tune';
import Home from '../screens/Home';
import Tools from '../screens/Tools';
import Setting from '../screens/Setting';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DARKCOLORS} from './colors';
import {FONTSIZE} from './sizes';
import {FONTFAMILY} from './fonts';
import HeaderTitle from '../components/Global/HeaderTitle';
export const BottomTabData = [
  {
    route: 'Home',
    options: {
      headerTitle: () => <HeaderTitle title="Songs" />,
      tabBarIcon: ({focused}: any) => (
        <View style={focused ? styles.iconFocused : null}>
          <AlbumOpen
            color={focused ? DARKCOLORS.primaryColor : DARKCOLORS.iconColor}
            width={35}
            height={35}
            strokeWidth={1.5}
          />
        </View>
      ),
    },
    component: Home,
  },
  {
    route: 'Tools',
    options: {
      headerTitle: () => <HeaderTitle title="Tools" />,
      tabBarIcon: ({focused}: any) => (
        <View style={focused ? styles.iconFocused : null}>
          <PlaystationGamepad
            color={focused ? DARKCOLORS.primaryColor : DARKCOLORS.iconColor}
            width={35}
            height={35}
            strokeWidth={1.5}
          />
        </View>
      ),
    },
    component: Tools,
  },
  {
    route: 'Tune',
    options: {
      headerTitle: () => <HeaderTitle title="Tune" />,
      tabBarIcon: ({focused}: any) => (
        <View style={focused ? styles.iconFocused : null}>
          <VoiceScan
            color={focused ? DARKCOLORS.primaryColor : DARKCOLORS.iconColor}
            width={35}
            height={35}
            strokeWidth={1.5}
          />
        </View>
      ),
    },
    component: Tune,
  },
  {
    route: 'Setting',
    options: {
      headerTitle: () => <HeaderTitle title="Settings" />,
      tabBarIcon: ({focused}: any) => (
        <View style={focused ? styles.iconFocused : null}>
          <Settings
            color={focused ? DARKCOLORS.primaryColor : DARKCOLORS.iconColor}
            width={35}
            height={35}
            strokeWidth={1.5}
          />
        </View>
      ),
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
});
