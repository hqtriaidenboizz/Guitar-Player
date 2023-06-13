import {
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
import {BlurView} from '@react-native-community/blur';
import {FONTFAMILY} from '../../constants/fonts';
import {FONTSIZE} from '../../constants/sizes';
import {ScreenDimensions} from '../../constants/dimensions';

interface ITopSongProps {
  title?: string;
  image?: string;
  artistName?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  loader?: boolean;
}

const TopSong: React.FC<ITopSongProps> = props => {
  return (
    <Pressable onPress={props.onPress} style={styles.container}>
      <View style={styles.absolute}>
        {props.loader ? (
          <>
            <View style={styles.imagePlaceholder}></View>
            <View style={styles.informationPlaceholder}>
              <Text style={styles.titlePlaceholder}></Text>
              <Text style={styles.namePlaceholder}></Text>
            </View>
          </>
        ) : (
          <>
            <Image style={styles.image} source={{uri: `${props.image}`}} />
            <View style={styles.information}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.name}>by {props.artistName}</Text>
            </View>
          </>
        )}
      </View>
    </Pressable>
  );
};

export default TopSong;

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 20,
    marginHorizontal: 10,
    height: 220,
    width: 240,
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
  },
  imagePlaceholder: {
    width: '100%',
    height: '68%',
    borderRadius: 20,
    backgroundColor: DARKCOLORS.placeholderColor,
  },
  informationPlaceholder: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    display: 'flex',
    // alignItems:'center',
    // justifyContent:'center',
    // flexDirection:'column',
    gap: 5,
  },
  information: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.size_3,
    color: DARKCOLORS.textColor_2,
  },
  titlePlaceholder: {
    height: 18,
    width: '70%',
    backgroundColor: DARKCOLORS.placeholderColor,
    borderRadius: ScreenDimensions.ScreenWidth,
  },
  name: {
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.size_4,
    color: DARKCOLORS.textColor_4,
  },
  namePlaceholder: {
    height: 16,
    width: '50%',
    backgroundColor: DARKCOLORS.placeholderColor,
    borderRadius: ScreenDimensions.ScreenWidth,
  },
});
