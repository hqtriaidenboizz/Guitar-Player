import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/splash';
import SignIn from '../screens/auth/SignIn';
import MyTabs from './BottomTab';
import SongDetail from '../screens/SongDetail';
import {RootStackParamList} from '../types/navigation/types';
import Search from '../screens/Search';
import HeaderTitle from '../components/Global/HeaderTitle';
import {HEADERSTYLE} from '../styles/generalStyle';
import ChordLibrary from '../screens/ChordLibrary';
import ChordGame from '../screens/ChordGame';
import GameDetail from '../screens/GameDetail';
import SongGenre from '../screens/SongGenre';
import AuthNavigaiton from './AuthNavigaiton';
import SignUp from '../screens/auth/SignUp';

const RootStack = createStackNavigator<RootStackParamList>();
const Stack = () => {
  return (
    <RootStack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false, animationEnabled: false}}>
      <RootStack.Group>
        <RootStack.Screen name="Splash" component={Splash} />
      </RootStack.Group>
      <RootStack.Group>
        <RootStack.Screen name="MyTabs" component={MyTabs} />
        <RootStack.Screen name="SongGenre" component={SongGenre} />
        <RootStack.Screen name="SongDetail" component={SongDetail} />
        <RootStack.Screen name="ChordLibrary" component={ChordLibrary} />
        <RootStack.Screen name="ChordGame" component={ChordGame} />
        <RootStack.Screen name="GameDetail" component={GameDetail} />
        <RootStack.Screen
          options={{
            headerShown: true,
            headerStyle: HEADERSTYLE.header,
            headerLeft: () => null,
            headerTitle: () => <HeaderTitle title="Songs" />,
          }}
          name="Search"
          component={Search}
        />
      </RootStack.Group>
      <RootStack.Group>
        <RootStack.Screen name="SignIn" component={SignIn} />
        <RootStack.Screen name="SignUp" component={SignUp} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default Stack;
