import {
  StyleSheet,
  Text,
  View,
  Animated,
  ViewStyle,
  StyleProp,
} from 'react-native';
import React, {useRef, forwardRef, useState, useEffect} from 'react';
import ChordChart from './ChordChart';
import {DARKCOLORS} from '../../constants/colors';
import {FONTFAMILY} from '../../constants/fonts';
import {FONTSIZE} from '../../constants/sizes';

interface ChordProps {
  width: number;
  height: number;
  style?: any;
  index?: any;
}
const Chord: React.FC<ChordProps> = props => {
  const [chordAnim] = useState(new Animated.Value(0));
  useEffect(() => {
    Chordscale();
},[]);

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
      <Text style={styles.Chordname}>Dm{props.index}</Text>
      <ChordChart
        width={props.width}
        height={props.height}
        tuning={['0', '0', '2', '3', '1', '0']}
        chord={['x', '7', '6', '5', '5', 'x']}
        showTuning={true}
      />
    </Animated.View>
  );
};

export default Chord;

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
