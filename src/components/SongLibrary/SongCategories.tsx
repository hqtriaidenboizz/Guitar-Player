import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {GENERALSTLE} from '../../styles/generalStyle';
import CustomTitle from '../Global/CustomTitle';
import SongCategoryItem from './SongCategoryItem';
import {useDispatch, useSelector} from 'react-redux';
import {RoodState} from '../../stores/store';
import {fetchGenresRequest} from '../../stores/actions/genreAction';
import {useNavigation} from '@react-navigation/native';
import {RootStackScreenProps} from '../../types/navigation/types';
import {Genre} from '../../types/genres';

const SongCategories = () => {
  const {pending, error, genres} = useSelector(
    (state: RoodState) => state.genre,
  );
  const navigation =
    useNavigation<RootStackScreenProps<'MyTabs'>['navigation']>();
  const dispatch = useDispatch();
  const handleNavigate = (Genre: Genre) => {
    navigation.navigate('SongGenre', {Genre: Genre});
  };
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
        data={pending ? [...Array(4)] : genres}
        horizontal
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) =>
          pending ? (
            <SongCategoryItem loading={pending} />
          ) : (
            <SongCategoryItem
              onPress={() => handleNavigate(item)}
              name={item.categoryName}
              color={item.color}
              image={item.image}
            />
          )
        }
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
