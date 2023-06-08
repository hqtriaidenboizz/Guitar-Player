import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DARKCOLORS} from '../../constants/colors';
import {FONTFAMILY} from '../../constants/fonts';
import {FONTSIZE} from '../../constants/sizes';
import ChordChart from './ChordChart';
import {GUITARTCHORDATA} from '../../assets/Data/guitarChords';

interface ChordProps {
  width?: number;
  height?: number;
  style?: any;
  index?: any;
  nameChord: string;
  showName?: boolean;
}

const Chord: React.FC<ChordProps> = props => {
  const chordToFind = props.nameChord;
  const foundChord = GUITARTCHORDATA[chordToFind]?.[0];

  return (
    <View style={styles.ChordContainer}>
      {props.showName && (
        <Text style={styles.Chordname}>{props.nameChord}</Text>
      )}
      {foundChord && (
        <ChordChart
          width={props.width}
          height={props.height}
          tuning={foundChord?.fingerings?.[0]}
          chord={foundChord?.positions}
          showTuning={true}
        />
      )}
    </View>
  );
};

export default Chord;

const styles = StyleSheet.create({
  ChordContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Chordname: {
    fontFamily: FONTFAMILY.bold,
    fontSize: FONTSIZE.size_2,
    color: DARKCOLORS.sencentColor,
    lineHeight: 23,
  },
});
