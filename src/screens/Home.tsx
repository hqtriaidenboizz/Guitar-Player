import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React from 'react';
import {DARKCOLORS} from '../constants/colors';
import SongCategories from '../components/SongLibrary/SongCategories';
import YourPlaylist from '../components/SongLibrary/YourPlaylist';
import CustomStatusBar from '../constants/StatusBar';
import TopPopularSongs from '../components/SongLibrary/TopPopularSongs';
import SearchBar from '../components/Search/SearchBar';
import {useNavigation} from '@react-navigation/native';
import {RootStackScreenProps} from '../types/navigation/types';
import MainContainer from '../components/Global/MainContainer';

const Home = () => {
  const navigation =
    useNavigation<RootStackScreenProps<'Search'>['navigation']>();
  const handleNavigate = () => {
    navigation.navigate('Search');
  };

  return (
    <MainContainer>
      <CustomStatusBar />
      <SearchBar
        showSoftInputOnFocus={false}
        onFocus={() => handleNavigate()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPopularSongs />
        <SongCategories />
        <YourPlaylist />
        <View style={{height: 120}}></View>
      </ScrollView>
    </MainContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARKCOLORS.primaryColor,
  },
});
