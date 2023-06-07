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
  const Data = [{
    status: true,
    chordList: [{name: 'C'}, {name: 'Am'}, {name: 'Em'}, {name: 'G'}],
    scrore: 1,
    title: "4 Base chords"
  }, {
    status: true,
    chordList: [{name: 'F'}, {name: 'Fm'}, {name: 'A'}, {name: 'Amaj7'}],
    scrore: 0.3,
    title: "4 Base chords"
  }, {
    status: false,
    chordList: [{name: 'C'}, {name: 'Am'}, {name: 'Em'}, {name: 'G'}],
    scrore: 0,
    title: "4 Base chords"
  }];
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
            title= {item.title}
          />
        )}
      />
    </MainContainer>
  );
};

export default ChordGame;

const styles = StyleSheet.create({});
