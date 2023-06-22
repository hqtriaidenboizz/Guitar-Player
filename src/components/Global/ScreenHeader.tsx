import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Heart, NavArrowDown} from 'iconoir-react-native';
import {DARKCOLORS} from '../../constants/colors';
import {FONTFAMILY} from '../../constants/fonts';
import {FONTSIZE} from '../../constants/sizes';
import {useDispatch, useSelector} from 'react-redux';
import {
  addFavSongRequest,
  removeFavSongReques,
} from '../../stores/actions/songAction';
import {RootState} from '../../stores/reducers/_index';
import {addFavSongTypes} from '../../types/song';

interface ScreenHeaderProps {
  title?: string;
  iconRight?: boolean;
  inPlayList?: boolean;
  onPress?: () => void;
  songId?: number | undefined;
  idFavSong?: number | undefined;
}

const ScreenHeader: React.FC<ScreenHeaderProps> = props => {
  const [isLove, setIsLove] = useState<boolean | undefined>(props.inPlayList);
  const {favSongs} = useSelector((state: RootState) => state.favSongs);
  const {user} = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const handleLoveIcon = () => {
    if (isLove === true) {
      const payload = {
        id: props.idFavSong,
        FavSongs: favSongs,
      };
      setIsLove(!isLove);
      dispatch(removeFavSongReques(payload));
    } else {
      const addFavSongTypes: addFavSongTypes = {
        songId: props.songId,
        userId: user?.id,
      };
      console.log('loggggg',addFavSongTypes);
      
      const payload = {
        addFavSongTypes,
        favSongs: favSongs,
      };
      setIsLove(!isLove);
      dispatch(addFavSongRequest(payload));
    }
  };
  return (
    <View style={styles.container}>
      <NavArrowDown
        onPress={props.onPress}
        color={DARKCOLORS.textColor_1}
        width={35}
        height={35}
      />
      <Text style={styles.title}>{props.title}</Text>
      {props.iconRight ? (
        <Heart
          onPress={handleLoveIcon}
          color={isLove ? '#F40824' : DARKCOLORS.textColor_1}
          width={30}
          height={30}
        />
      ) : (
        <View style={{width: 30}}></View>
      )}
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    height: 55,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  title: {
    fontFamily: FONTFAMILY.bold,
    fontSize: FONTSIZE.size_2,
    color: DARKCOLORS.textColor_1,
  },
});
