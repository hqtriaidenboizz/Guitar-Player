import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GENERALSTLE} from '../../styles/generalStyle';
import CustomTitle from '../Global/CustomTitle';
import SongCategoryItem from './SongCategoryItem';
import { SongCategoryData } from '../../assets/Data/FakeData';



const SongCategories = () => {
  return (
    <View>
      <View style={GENERALSTLE.paddingHorizontal}>
        <CustomTitle title="Categories" moreIcon={true} />
      </View>
      <FlatList
        style={styles.flatlist}
        data={SongCategoryData}
        horizontal
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <SongCategoryItem
            name={item.title}
            color={item.color}
            image={item.image}></SongCategoryItem>
        )}
      />
    </View>
  );
};

export default SongCategories;

const styles = StyleSheet.create({
  flatlist: {
    marginVertical: 20,
  },
  content: {
    paddingHorizontal: 5,
  },
});
