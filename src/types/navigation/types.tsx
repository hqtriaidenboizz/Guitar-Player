import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Splash: undefined;
  MyTabs: NavigatorScreenParams<RootTabParamList> | undefined;
  SignIn: undefined;
  SongDetail: {id?: number} | undefined;
  Search: undefined;
  ChordLibrary: undefined;
  ChordGame: undefined;
  GameDetail: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type RootTabParamList = {
  Songs: undefined;
  Tools: undefined;
  Tune: undefined;
  Setting: undefined;
};

export type HomeTabScreenProps<T extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
