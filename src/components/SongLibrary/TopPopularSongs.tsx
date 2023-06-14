import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';
import {GENERALSTLE} from '../../styles/generalStyle';
import CustomTitle from '../Global/CustomTitle';
import {FlatList} from 'react-native-gesture-handler';
import TopSong from './TopSong';
import {useNavigation} from '@react-navigation/native';
import {RootStackScreenProps} from '../../types/navigation/types';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../stores/reducers/_index';
import topSongsHandle from '../../utils/sortTopSongs';
import { fetchSongsRequest } from '../../stores/actions/songAction';

const TopPopularSongs = () => {
  const {pending, songs, error} = useSelector((state: RootState) => state.song);
  const navigation =
    useNavigation<RootStackScreenProps<'MyTabs'>['navigation']>();
  const handleNavigate = (id: any) => {
    navigation.navigate('SongDetail', {id: id});
  };
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(fetchSongsRequest())
  },[])
  const topSongs = topSongsHandle(songs);
  return (
    <View>
      <View style={GENERALSTLE.paddingHorizontal}>
        <CustomTitle title="Top popular songs" moreIcon={true} />
      </View>
      <FlatList
        style={styles.Topsong}
        data={pending ? [...Array(3)] : topSongs}
        contentContainerStyle={styles.content}
        renderItem={({item}) =>
          pending ? (
            <TopSong loader={pending} />
          ) : (
            <TopSong
              onPress={() => handleNavigate(item.id)}
              title={item.songName}
              image={item.image}
              loader={pending}
              artistName={item.artistName}
            />
          )
        }
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TopPopularSongs;

const styles = StyleSheet.create({
  Topsong: {
    marginVertical: 20,
  },
  content: {
    paddingHorizontal: 5,
  },
});
