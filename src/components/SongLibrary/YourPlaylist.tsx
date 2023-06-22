import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import CustomTitle from '../Global/CustomTitle';
import {GENERALSTLE} from '../../styles/generalStyle';
import SongItem from './SongItem';
import {useNavigation} from '@react-navigation/native';
import {RootStackScreenProps} from '../../types/navigation/types';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../stores/reducers/_index';
import {fetchFavSongsRequest} from '../../stores/actions/songAction';
import {handleGetUserInfo} from '../../utils/getUserInfoAsyncStore';

const YourPlaylist = () => {
  const navigation =
    useNavigation<RootStackScreenProps<'MyTabs'>['navigation']>();

  const handleNavigate = (id: number) => {
    navigation.navigate('SongDetail', {id: id});
  };
  const {favSongs, pending, error} = useSelector(
    (state: RootState) => state.favSongs,
  );
  const dispatch = useDispatch(); 
  
  useEffect(() => {
    const getUserId = async () => {
      const user_Info = await handleGetUserInfo();
      if (user_Info) {
        dispatch(fetchFavSongsRequest(user_Info?.user_id));
      }
    };
    getUserId();
  }, []);

  return (
    <View style={styles.container}>
      <View style={GENERALSTLE.paddingHorizontal}>
        <CustomTitle title="Your Playlist"/>
      </View>
      <FlatList
        style={[GENERALSTLE.paddingHorizontal]}
        data={favSongs}
        renderItem={({item}) => (
          <SongItem
            onPress={() => handleNavigate(item.songId)}
            image={item.songs.image}
            songName={item.songs.songName}
            artistName={item.songs.artistName}
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
