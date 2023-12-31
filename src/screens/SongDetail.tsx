import {Animated, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {DARKCOLORS} from '../constants/colors';
import {useNavigation, useRoute} from '@react-navigation/native';
import {RootStackScreenProps} from '../types/navigation/types';
import MainContainer from '../components/Global/MainContainer';
import ScreenHeader from '../components/Global/ScreenHeader';
import {FONTFAMILY} from '../constants/fonts';
import SongInfo from '../components/SongDetail/SongInfo';
import {GENERALSTLE} from '../styles/generalStyle';
import SongLyrics from '../components/SongDetail/SongLyrics';
import ChordsOfSong from '../components/SongDetail/ChordsOfSong';
import {useDispatch, useSelector} from 'react-redux';
import {fetchSongDetailRequest} from '../stores/actions/songAction';
import {RootState} from '../stores/reducers/_index';
import SongDetailLoader from '../components/Global/SongDetailLoader';

const SongDetail = () => {
  const [inPlayList,setInPlayList] = useState<boolean>(false)
  const {songDetail, pending, error} = useSelector(
    (state: RootState) => state.songDetail,
  );
  const navigation =
    useNavigation<RootStackScreenProps<'SongDetail'>['navigation']>();
  const route = useRoute<RootStackScreenProps<'SongDetail'>['route']>();
  const handleNavigate = () => {
    navigation.goBack();
  };
  const ref = useRef<any>(null);
  const id = route.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSongDetailRequest(id));
  }, []);
  const {favSongs} = useSelector(
    (state: RootState) => state.favSongs,
  );
  const findSongById = (songId: number) => {
  return favSongs.find((item) => item.songId === songId);
};
  const favSong = findSongById(id)
    
  const isInPlayList = favSongs.some((item) =>item.songId === id);
  return (
    <MainContainer
      onTouchStart={() => {
        pending ? null : ref.current.unSelect();
      }}>
      <ScreenHeader 
        songId={id}
        idFavSong={favSong?.id}
        inPlayList={isInPlayList}
        onPress={handleNavigate}
        iconRight={true} />
      {pending ? (
        <SongDetailLoader />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {songDetail.map(item => (
            <View key={item?.id}>
              <SongInfo
                image={item?.image}
                title={item?.songName}
                artistName={item?.artistName}
                style={styles?.songItem}
              />
              <View style={[GENERALSTLE.paddingHorizontal, styles.chords]}>
                <ChordsOfSong ref={ref} value={item?.chords} />
                <SongLyrics lyrics={item?.lyrics} />
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </MainContainer>
  );
};

export default SongDetail;

const styles = StyleSheet.create({
  songItem: {
    height: 400,
  },
  songName: {
    fontSize: 30,
    fontFamily: FONTFAMILY.bold,
  },
  chords: {
    marginVertical: 20,
  },
  chordsList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 10,
    columnGap: 10,
    marginVertical: 5,
  },
  activeBG: {
    backgroundColor: DARKCOLORS.hightLightColor,
  },
  activeText: {
    color: DARKCOLORS.primaryColor,
  },
  chord: {
    width: 90,
    height: 130,
    backgroundColor: DARKCOLORS.hightLightColor,
    borderRadius: 15,
    position: 'absolute',
    bottom: 70,
    left: 20,
  },
  unshow: {
    display: 'none',
  },
  chord1: {
    color: 'red',
  },
  lyrics: {
    color: 'blue',
  },
});
