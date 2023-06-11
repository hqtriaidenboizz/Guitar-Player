import {FlatList, StyleSheet, Text, View, LogBox} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackScreenProps} from '../../types/navigation/types';
import {GENERALSTLE} from '../../styles/generalStyle';
import CustomTitle from '../Global/CustomTitle';
import SongItem from '../SongLibrary/SongItem';

const Data = [
  {
    id: 1,
    image:
      'https://www.numberone.com.tr/wp-content/uploads/2018/05/THE-WEEKND--CALL-OUT-MY-NAME-1.jpg',
    artistName: 'The Weeknd',
    songName: 'Call out my name',
  },
  {
    id: 2,
    image:
      'data:image/jpeg;base64,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',
    artistName: 'Ngot band',
    songName: 'Thấy Chưa',
  },
  {
    id: 3,
    image:
      'data:image/jpeg;base64,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',
    artistName: 'Son Tung MTP',
    songName: 'There no one at all',
  },
];

const ResultSearch = () => {
  const navigation =
    useNavigation<RootStackScreenProps<'MyTabs'>['navigation']>();

  const handleNavigate = (id: number) => {
    navigation.navigate('SongDetail', {id: id});
  };
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  return (
    <View style={styles.container}>
      <View style={GENERALSTLE.paddingHorizontal}>
        <CustomTitle title="Recent search" />
      </View>
      <FlatList
        style={[GENERALSTLE.paddingHorizontal]}
        showsVerticalScrollIndicator={false}
        data={Data}
        renderItem={({item}) => (
          <SongItem
            onPress={() => handleNavigate(item.id)}
            image={item.image}
            songName={item.songName}
            artistName={item.artistName}
          />
        )}
      />
    </View>
  );
};

export default ResultSearch;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
  },
});
