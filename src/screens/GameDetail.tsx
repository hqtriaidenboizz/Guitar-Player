import {StyleSheet, Text, View, Animated, Pressable} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import MainContainer from '../components/Global/MainContainer';
import {useNavigation, useRoute} from '@react-navigation/native';
import {RootStackScreenProps} from '../types/navigation/types';
import {DARKCOLORS} from '../constants/colors';
import {FONTFAMILY} from '../constants/fonts';
import {FONTSIZE} from '../constants/sizes';
import {GENERALSTLE} from '../styles/generalStyle';
import ChordAnimation from '../components/Global/AnimatedChord';
import SelectChord from './SelectChord';

const GameDetail = () => {
  const [step, setStep] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);
  const navigation =
    useNavigation<RootStackScreenProps<'GameDetail'>['navigation']>();
  const handleGoback = () => {
    navigation.goBack();
  };
  const route = useRoute<RootStackScreenProps<'GameDetail'>['route']>();
  const LessonData = route.params;

  const chordItem = LessonData.Lesson.chordList?.[index];
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeOut();
    setTimeout(() => {
      setStep(1);
    }, 2000);
  }, []);

  const handleTab = () => {
    if (index === LessonData.Lesson.chordList.length - 1) {
      setStep(2);
    } else {
      setIndex(index + 1);
    }
  };

  const handleRestart = () => {
    setIndex(0);
    setStep(1);
  };

  return (
    <MainContainer>
      <View style={GENERALSTLE.paddingHorizontal}>
        {step === 0 ? (
          <View style={styles.intro}>
            <Animated.Text style={[styles.title, {opacity: fadeAnim}]}>
              {LessonData.Lesson.title}
            </Animated.Text>
          </View>
        ) : step === 1 ? (
          <View style={styles.container}>
            {chordItem && (
              <View>
                <ChordAnimation
                  nameChord={chordItem}
                  width={220}
                  height={250}
                  key={index}
                  index={index}
                  style={styles.activeChord}
                />
              </View>
            )}
            <Pressable onPress={handleTab} style={styles.btncontainer}>
              <Text style={styles.btnContinue}>Tab to continue</Text>
            </Pressable>
          </View>
        ) : step === 2 ? (
          <SelectChord
            chordList={LessonData.Lesson.chordList}
            restart={handleRestart}
            goBack={handleGoback}
          />
        ) : null}
      </View>
    </MainContainer>
  );
};

export default GameDetail;

const styles = StyleSheet.create({
  activeChord: {
    display: 'flex',
  },
  unactiveChord: {
    display: 'none',
  },
  intro: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.size_1,
    color: DARKCOLORS.hightLightColor,
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContinue: {
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.size_2,
    color: DARKCOLORS.textColor_1,
    marginBottom: '20%',
  },
  btncontainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
