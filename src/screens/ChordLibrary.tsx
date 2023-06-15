import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useRef, useState} from 'react';
import MainContainer from '../components/Global/MainContainer';
import ScreenHeader from '../components/Global/ScreenHeader';
import {useNavigation} from '@react-navigation/native';
import {RootStackScreenProps} from '../types/navigation/types';
import ChordButton from '../components/Global/ChordButton';
import {DARKCOLORS} from '../constants/colors';
import {SoundHigh} from 'iconoir-react-native';
import Sound from 'react-native-sound';
import ChordChart from '../components/Global/ChordChart';
import {FONTFAMILY} from '../constants/fonts';
import {FONTSIZE} from '../constants/sizes';
import Chord from '../components/Global/Chord';

const Data = [
  {
    id: 1,
    name: 'C',
  },
  {
    id: 2,
    name: 'Em',
  },
  {
    id: 3,
    name: 'G',
  },
  {
    id: 4,
    name: 'F',
  },
  {
    id: 5,
    name: 'Dm',
  },
  {
    id: 6,
    name: 'Am',
  },
  {
    id: 7,
    name: 'Bb',
  },
];
const ChordLibrary = () => {
  const [selectChord, setSelectChord] = useState<any>(0);
  const FlastlistRef = useRef<any>(null);
  const isSelectChord = (id: any) => {
    return id === selectChord;
  };
  const navigation =
    useNavigation<RootStackScreenProps<'ChordLibrary'>['navigation']>();
  const handleNaivgate = () => {
    navigation.goBack();
  };
  const scrollToIndex = (index: any) => {
    FlastlistRef.current.scrollToIndex({
      index,
      animated: true,
      viewPosition: 0.5,
    });
    setSelectChord(index);
  };
  const playSound = (chord: any) => {
    const sound = new Sound(`${chord}.wav`, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      sound.setVolume(0.5).play(success => {
        if (success) {
          console.log('successfully finished playing');
        }
      });
    });
    
    
  };

  return (
    <MainContainer>
      <ScreenHeader
        onPress={handleNaivgate}
        title="Chord library"
        iconRight={false}
      />
      <View style={styles.ChordTabar}>
        <FlatList
          data={Data}
          horizontal
          ref={FlastlistRef}
          contentContainerStyle={styles.content}
          ItemSeparatorComponent={() => <View style={{width: 10}} />}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <ChordButton
              onPress={() => scrollToIndex(index)}
              styleText={isSelectChord(index) && styles.activeText}
              styleBG={isSelectChord(index) && styles.activeBG}
              name={item.name}
            />
          )}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.ChordContainer}>
          <Chord width={220} height={250} showName={true} nameChord={Data[selectChord].name}/>
        </View>
        <View style={styles.iconSound}>
          <SoundHigh
            onPress={() => playSound(Data[selectChord].name)}
            color={DARKCOLORS.iconColor}
            width={30}
            height={30}
          />
        </View>
      </View>
    </MainContainer>
  );
};

export default ChordLibrary;

const styles = StyleSheet.create({
  ChordTabar: {
    flex: 1,
  },
  content: {
    paddingHorizontal: '42%',
  },
  activeBG: {
    backgroundColor: DARKCOLORS.hightLightColor,
  },
  activeText: {
    color: DARKCOLORS.primaryColor,
  },
  ChordContainer: {
    width: 220,
    height: 320,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DARKCOLORS.hightLightColor,
    borderRadius: 20,
    marginBottom: 100,
  },
  container: {
    flexGrow: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconSound: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: DARKCOLORS.sencentColor,
    padding: 10,
    borderRadius: 15,
    left: 20,
  },
  Chordname: {
    fontFamily: FONTFAMILY.bold,
    fontSize: FONTSIZE.size_2,
    color: DARKCOLORS.sencentColor,
    lineHeight: 23,
  },
});
