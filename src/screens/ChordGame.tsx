import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import MainContainer from '../components/Global/MainContainer';
import ScreenHeader from '../components/Global/ScreenHeader';
import {useNavigation} from '@react-navigation/native';
import {RootStackScreenProps} from '../types/navigation/types';
import GameItem from '../components/Games/GameItem';
import {GENERALSTLE} from '../styles/generalStyle';

const ChordGame = () => {
  const navigation =
    useNavigation<RootStackScreenProps<'ChordLibrary'>['navigation']>();
  const handleNaivgate = () => {
    navigation.goBack();
  };
  const Data = [
    {
      status: true,
      chordList: ['C', 'Em', 'Dm', 'G'],
      scrore: 50,
      title: 'Basic Chords',
    },
    {
      status: true,
      chordList: ['A', 'E', 'Am', 'Dm'],
      scrore: 20,
      title: 'Basic chords',
    },
    {
      status: false,
      chordList: ['F', 'Fm', 'B', 'Bm'],
      scrore: 0,
      title: 'Barre chords',
    },
    {
      status: false,
      chordList: ['C7', 'Cm7', 'Cmaj7', 'D7'],
      scrore: 0,
      title: 'Barre chords',
    },
    {
      status: false,
      chordList: ['F/C', 'Em7', 'G/B', 'D7'],
      scrore: 0,
      title: 'Barre chords',
    },
  ];
  return (
    <MainContainer>
      <ScreenHeader
        onPress={handleNaivgate}
        title="Chord Games"
        iconRight={false}
      />
      <FlatList
        style={GENERALSTLE.paddingHorizontal}
        data={Data}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        renderItem={({item}) => (
          <GameItem
            status={item.status}
            chordList={item.chordList}
            score={item.scrore}
            title={item.title}
          />
        )}
      />
    </MainContainer>
  );
};

export default ChordGame;

const styles = StyleSheet.create({});
