import {
  StyleSheet,
  Text,
  View,
  Animated,
  ViewStyle,
  StyleProp,
} from 'react-native';
import React, {useRef, forwardRef, useState, useEffect} from 'react';

import {DARKCOLORS} from '../../constants/colors';
import {FONTFAMILY} from '../../constants/fonts';
import {FONTSIZE} from '../../constants/sizes';
import Sound from 'react-native-sound';
import Chord from './Chord';

interface ChordProps {
  width: number;
  height: number;
  style?: any;
  index?: any;
  nameChord: string;
}

const ChordAnimation: React.FC<ChordProps> = props => {

  const [chordAnim] = useState(new Animated.Value(0));
  useEffect(() => {
    Chordscale();
    playSound(props.nameChord);
  }, []);

  const playSound = (chord: string) => {
    const sound = new Sound(`${chord}.wav`, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      sound.play(success => {
        if (success) {
          console.log('successfully finished playing');
        }
      });
    });
  };

  const Chordscale = () => {
    Animated.timing(chordAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  
  const animationStyle = {
    transform: [{scale: chordAnim}],
  };

  return (
    <Animated.View style={[props.style, styles.ChordContainer, animationStyle]}>
      <Chord
        width={props.width}
        height={props.height}
        nameChord={props.nameChord}
        showName={true}
      />
    </Animated.View>
  );
};

export default ChordAnimation;

const styles = StyleSheet.create({
  ChordContainer: {
    width: 220,
    height: 320,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: DARKCOLORS.hightLightColor,
    borderRadius: 20,
  },
  Chordname: {
    fontFamily: FONTFAMILY.bold,
    fontSize: FONTSIZE.size_2,
    color: DARKCOLORS.sencentColor,
    lineHeight: 23,
  },
});
