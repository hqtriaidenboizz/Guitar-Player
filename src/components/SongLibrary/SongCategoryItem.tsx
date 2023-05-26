import {StyleSheet, Pressable, Text, View, Image} from 'react-native';
import React from 'react';
import {FONTFAMILY} from '../../constants/fonts';
import {FONTSIZE} from '../../constants/sizes';
import {DARKCOLORS} from '../../constants/colors';
interface ISongCategoriesProps {
  id?: string;
  name?: string;
  image?: string;
  color?: string;
}

const SongCategoryItem: React.FC<ISongCategoriesProps> = props => {
  return (
    <Pressable style={styles.container}>
      <Image style={styles.image} source={{uri: `${props.image}`}} />
      <View style={[styles.containerTitle, {backgroundColor: props.color}]}>
        <Text style={[styles.title]}>{props.name}</Text>
      </View>
    </Pressable>
  );
};

export default SongCategoryItem;

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 90,
    borderRadius: 100,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  containerTitle: {
    position: 'absolute',
    bottom: 0,
    left: -5,
    height: 30,
    width: '100%',
    // backgroundColor:'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{rotate: '10deg'}],
  },
  title: {
    fontFamily: FONTFAMILY.bold,
    fontSize: FONTSIZE.size_3,
    color: DARKCOLORS.primaryColor,
  },
});
