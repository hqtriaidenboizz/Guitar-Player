import {
  Animated,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import {DARKCOLORS} from '../../constants/colors';
import {FONTFAMILY} from '../../constants/fonts';
import {FONTSIZE} from '../../constants/sizes';
import {ScreenDimensions} from '../../constants/dimensions';

interface SongInfoProps {
  title?: string;
  image?: string;
  artistName?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  styleSongName?: StyleProp<ViewStyle>;
  styleArtist?: StyleProp<ViewStyle>;
  loading?: boolean;
}

const SongInfo: React.FC<SongInfoProps> = props => {
  return (
    <Pressable onPress={props.onPress} style={styles.container}>
      {props.loading ? (
        <View style={styles.absolute}>
          <View style={styles.image}></View>
          <View style={styles.informationPlaceholdle}>
            <Text style={styles.titlePlaceholdle}></Text>
            <Text style={styles.namePlaceholdle}></Text>
          </View>
        </View>
      ) : (
        <View style={styles.absolute}>
          <Image style={styles.image} source={{uri: `${props?.image}`}} />
          <View style={styles.information}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.name}>by {props.artistName}</Text>
          </View>
        </View>
      )}
    </Pressable>
  );
};

export default SongInfo;

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 20,
    marginHorizontal: 10,
    height: 400,
  },
  absolute: {
    width: '100%',
    height: '100%',
    backgroundColor: DARKCOLORS.sencentColor,
  },
  image: {
    width: '100%',
    height: '68%',
    borderRadius: 20,
    backgroundColor: DARKCOLORS.placeholderColor,
  },
  information: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  informationPlaceholdle: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    display: 'flex',
    gap: 10,
  },
  title: {
    fontFamily: FONTFAMILY.bold,
    fontSize: 35,
    color: DARKCOLORS.textColor_2,
  },
  titlePlaceholdle: {
    backgroundColor: DARKCOLORS.placeholderColor,
    width: '70%',
    height: 40,
    borderRadius: ScreenDimensions.ScreenWidth,
  },
  namePlaceholdle: {
    backgroundColor: DARKCOLORS.placeholderColor,
    width: '50%',
    height: 30,
    borderRadius: ScreenDimensions.ScreenWidth,
  },
  name: {
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.size_2,
    color: DARKCOLORS.textColor_4,
  },
});
