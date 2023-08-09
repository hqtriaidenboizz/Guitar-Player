import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, { useEffect } from 'react';
import MainContainer from '../components/Global/MainContainer';
import ScreenHeader from '../components/Global/ScreenHeader';
import {useNavigation} from '@react-navigation/native';
import {RootStackScreenProps} from '../types/navigation/types';
import GameItem from '../components/Games/GameItem';
import {GENERALSTLE} from '../styles/generalStyle';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLessonsRequest } from '../stores/actions/lessonsAction';
import { RootState } from '../stores/reducers/_index';

const ChordGame = () => {
  const navigation =
    useNavigation<RootStackScreenProps<'ChordLibrary'>['navigation']>();
  const handleNaivgate = () => {
    navigation.goBack();
  };
  const {lessons} =useSelector((state: RootState) =>
  state.lesson)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchLessonsRequest())
  },[])

  return (
    <MainContainer>
      <ScreenHeader
        onPress={handleNaivgate}
        title="Chord Games"
        iconRight={false}
      />
      <FlatList
        style={GENERALSTLE.paddingHorizontal}
        data={lessons}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        renderItem={({item}) => (
          <GameItem
            status={item.status}
            chordList={item.chordList}
            score={item.score}
            title={item.title}
          />
        )}
      />
    </MainContainer>
  );
};

export default ChordGame;

const styles = StyleSheet.create({});
