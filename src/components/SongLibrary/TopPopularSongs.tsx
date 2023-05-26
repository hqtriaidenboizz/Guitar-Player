import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GENERALSTLE} from '../../styles/generalStyle';
import CustomTitle from '../Global/CustomTitle';
import {FlatList} from 'react-native-gesture-handler';
import TopSong from './TopSong';
import {useNavigation} from '@react-navigation/native';
import {RootStackScreenProps} from '../../types/navigation/types';

const Data = [
  {title: 'TheWeeknd', id: 1},
  {title: 'Justin', id: 2},
  {title: 'Thang(Ngot*)', id: 3},
];
const TopPopularSongs = () => {
  const navigation =
    useNavigation<RootStackScreenProps<'MyTabs'>['navigation']>();
  const handleNavigate = (id: any) => {
    navigation.navigate('SongDetail', {id: id});
  };
  return (
    <View>
      <View style={GENERALSTLE.paddingHorizontal}>
        <CustomTitle title="Top popular songs" moreIcon={true} />
      </View>
      <FlatList
        style={styles.Topsong}
        data={Data}
        contentContainerStyle={styles.content}
        renderItem={({item}) => (
          <TopSong onPress={() => handleNavigate(item.id)} title={item.title} />
        )}
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TopPopularSongs;

const styles = StyleSheet.create({
  Topsong: {
    marginVertical: 20,
  },
  content: {
    paddingHorizontal: 5,
  },
});
