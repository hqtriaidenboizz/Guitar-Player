import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainContainer from '../components/Global/MainContainer';
import HeaderTitle from '../components/Global/HeaderTitle';
import ScreenHeader from '../components/Global/ScreenHeader';
import {useNavigation} from '@react-navigation/native';
import {RootStackScreenProps} from '../types/navigation/types';

const ChordGame = () => {
  const navigation =
    useNavigation<RootStackScreenProps<'ChordLibrary'>['navigation']>();
  const handleNaivgate = () => {
    navigation.goBack();
  };
  return (
    <MainContainer>
      <ScreenHeader
        onPress={handleNaivgate}
        title="Chord Games"
        iconRight={false}
      />
      <Text>ChordGame</Text>
    </MainContainer>
  );
};

export default ChordGame;

const styles = StyleSheet.create({});
