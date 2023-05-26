import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import SearchTopicsItem from '../SongDetail/SearchTopicsItem';
import {DARKCOLORS} from '../../constants/colors';

const Data = [
  {id: 1, name: 'Songs'},
  {id: 2, name: 'Artists'},
  {id: 3, name: 'Albums'},
  {id: 4, name: 'Top'},
  {id: 5, name: 'Albums'},
  {id: 6, name: 'Top'},
];
const SearchTopics = () => {
  const [selectTopic, setSelectTopic] = useState<any>();
  const handleSeclect = (id: any) => {
    setSelectTopic(id);
  };
  const isSelectedTopic = (id: any) => {
    return id === selectTopic;
  };
  return (
    <View>
      <FlatList
        data={Data}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        renderItem={({item}) => (
          <SearchTopicsItem
            onPress={() => handleSeclect(item.id)}
            id={item.id}
            styleText={isSelectedTopic(item.id) && styles.activeText}
            styleBG={isSelectedTopic(item.id) && styles.activeBG}
            title={item.name}
          />
        )}
      />
    </View>
  );
};

export default SearchTopics;

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
  },
  activeBG: {
    backgroundColor: DARKCOLORS.hightLightColor,
  },
  activeText: {
    color: DARKCOLORS.primaryColor,
  },
});
