import {FlatList, StyleSheet, Text, View, LogBox} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackScreenProps} from '../../types/navigation/types';
import {GENERALSTLE} from '../../styles/generalStyle';
import CustomTitle from '../Global/CustomTitle';
import SongItem from '../SongLibrary/SongItem';
import {Song} from '../../types/song';

interface ResultSearchProps {
  data?: Song[];
}

const ResultSearch: React.FC<ResultSearchProps> = props => {
  const navigation =
    useNavigation<RootStackScreenProps<'MyTabs'>['navigation']>();

  const handleNavigate = (id: any) => {
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
        data={props.data}
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
