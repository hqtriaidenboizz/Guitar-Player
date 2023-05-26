import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomTitle from '../Global/CustomTitle';
import {GENERALSTLE} from '../../styles/generalStyle';
import SongItem from './SongItem';
import {useNavigation} from '@react-navigation/native';
import {RootStackScreenProps} from '../../types/navigation/types';
import {YourPlaylistData} from '../../assets/Data/FakeData';

const YourPlaylist = () => {
  const navigation =
    useNavigation<RootStackScreenProps<'MyTabs'>['navigation']>();

  const handleNavigate = (id: number) => {
    navigation.navigate('SongDetail', {id: id});
  };

  return (
    <View style={styles.container}>
      <View style={GENERALSTLE.paddingHorizontal}>
        <CustomTitle title="Your Playlist" />
      </View>
      <FlatList
        style={[GENERALSTLE.paddingHorizontal]}
        data={YourPlaylistData}
        renderItem={({item}) => (
          <SongItem
            onPress={() => handleNavigate(item.id)}
            image={item.image}
            songName={item.songName}
            artistName={item.artistName}
          />
        )}
      />
    </View>
  );
};

export default YourPlaylist;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
  },
});
