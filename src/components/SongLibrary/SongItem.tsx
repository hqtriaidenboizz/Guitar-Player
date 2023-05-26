import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';
import {Play} from 'iconoir-react-native';
import {DARKCOLORS} from '../../constants/colors';
import {FONTFAMILY} from '../../constants/fonts';
import {FONTSIZE} from '../../constants/sizes';

interface ISongItemProps {
  id?: string;
  image?: string;
  artistName?: string;
  songName?: string;
  onPress: () => void;
}

const SongItem: React.FC<ISongItemProps> = props => {
  return (
    <Pressable onPress={props.onPress} style={styles.container}>
      <Image style={styles.image} source={{uri: `${props.image}`}} />
      <View style={styles.right}>
        <View>
          <Text style={styles.songName}>{props.songName}</Text>
          <Text style={styles.artistName}>{props.artistName}</Text>
        </View>
        <Play color={DARKCOLORS.textColor_2} width={25} height={25} />
      </View>
    </Pressable>
  );
};

export default SongItem;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: 'center',
    borderRadius: 100,
  },
  right: {
    flexShrink: 1,
    marginLeft: 10,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  songName: {
    color: DARKCOLORS.textColor_2,
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.size_3,
  },
  artistName: {
    color: DARKCOLORS.textColor_4,
    fontFamily: FONTFAMILY.regular,
    fontSize: FONTSIZE.size_4,
  },
});
