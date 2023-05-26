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

interface SongInfoProps {
  title?: string;
  image?: string;
  artistName?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  styleSongName?: StyleProp<ViewStyle>;
  styleArtist?: StyleProp<ViewStyle>;
}

const SongInfo: React.FC<SongInfoProps> = props => {
  return (
    <Pressable onPress={props.onPress} style={styles.container}>
      <View style={styles.absolute}>
        <Image
          style={styles.image}
          source={require('../../assets/images/re.jpg')}
        />
        <View style={styles.information}>
          <Text style={styles.title}>Yummy</Text>
          <Text style={styles.name}>by Justin</Text>
        </View>
      </View>
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
  },
  information: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  title: {
    fontFamily: FONTFAMILY.bold,
    fontSize: 35,
    color: DARKCOLORS.textColor_2,
  },
  name: {
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.size_2,
    color: DARKCOLORS.textColor_4,
  },
});
