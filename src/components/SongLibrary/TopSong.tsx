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

interface ITopSongProps {
  title?: string;
  image?: string;
  artistName?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const TopSong: React.FC<ITopSongProps> = props => {
  return (
    <Pressable onPress={props.onPress} style={styles.container}>
      <View style={styles.absolute}>
        <Image
          style={styles.image}
          source={require('../../assets/images/re.jpg')}
        />
        <View style={styles.information}>
          <Text style={styles.title}>Yummy</Text>
          <Text style={styles.name}>by {props.title}</Text>
        </View>
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
  name: {
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.size_4,
    color: DARKCOLORS.textColor_4,
  },
});
