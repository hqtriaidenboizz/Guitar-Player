import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DARKCOLORS} from '../../constants/colors';
import {ScreenDimensions} from '../../constants/dimensions';
import ChordButton from './ChordButton';
import CustomTitle from './CustomTitle';
import {GENERALSTLE} from '../../styles/generalStyle';
import MainContainer from './MainContainer';

const SongDetailLoader = () => {
  return (
    <MainContainer>
      <View style={styles.container}>
        <View style={styles.absolute}>
          <View style={styles.image}></View>
          <View style={styles.informationPlaceholdle}>
            <Text style={styles.titlePlaceholdle}></Text>
            <Text style={styles.namePlaceholdle}></Text>
          </View>
        </View>
      </View>
      <View style={GENERALSTLE.paddingHorizontal}>
        <CustomTitle title="" />
        <View style={styles.chordsList}>
          {[...Array(4)].map((item: string, index: number) => (
            <View key={index}>
              <ChordButton styleBG={styles.Bg} name="    " />
            </View>
          ))}
        </View>
      </View>
    </MainContainer>
  );
};

export default SongDetailLoader;

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 20,
    marginHorizontal: 10,
    marginBottom: 20,
    height: 400,
  },
  absolute: {
    width: '100%',
    height: '100%',
    backgroundColor: DARKCOLORS.sencentColor,
  },
  image: {
    width: '100%',
    height: '68%',
    borderRadius: 20,
    backgroundColor: DARKCOLORS.placeholderColor,
  },
  information: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  informationPlaceholdle: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    display: 'flex',
    gap: 10,
  },
  titlePlaceholdle: {
    backgroundColor: DARKCOLORS.placeholderColor,
    width: '70%',
    height: 40,
    borderRadius: ScreenDimensions.ScreenWidth,
  },
  namePlaceholdle: {
    backgroundColor: DARKCOLORS.placeholderColor,
    width: '50%',
    height: 30,
    borderRadius: ScreenDimensions.ScreenWidth,
  },
  chordsList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 10,
    columnGap: 10,
    marginVertical: 5,
  },
  Bg: {
    backgroundColor: DARKCOLORS.sencentColor,
  },
});
