import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {GENERALSTLE} from '../../styles/generalStyle';
import CustomTitle from '../Global/CustomTitle';
import SongCategoryItem from './SongCategoryItem';
import {SongCategoryData} from '../../assets/Data/FakeData';
import {useDispatch, useSelector} from 'react-redux';
import {RoodState} from '../../stores/store';
import {fetchGenresRequest} from '../../stores/actions/genreAction';

const SongCategories = () => {
  const {pending, error, genres} = useSelector(
    (state: RoodState) => state.genre,
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGenresRequest());
  }, []);
  return (
    <View>
      <View style={GENERALSTLE.paddingHorizontal}>
        <CustomTitle title="Genres" moreIcon={true} />
      </View>
      <FlatList
        style={styles.flatlist}
        data={pending?[...Array(4)]:genres}
        horizontal
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          pending? <SongCategoryItem loading={pending}/>:
          <SongCategoryItem
            name={item.categoryName}
            color={item.color}
            image={item.image}/>
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
