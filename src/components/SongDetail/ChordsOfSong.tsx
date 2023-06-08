import {Permission, Image, StyleSheet, Text, View} from 'react-native';
import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import CustomTitle from '../Global/CustomTitle';
import ChordButton from '../Global/ChordButton';
import {DARKCOLORS} from '../../constants/colors';
import ChordChart from '../Global/ChordChart';
import Chord from '../Global/Chord';

interface Chordprops {
  value: string[];
}
interface MyComponentMethods {
  unSelect: () => void;
}

const ChordsOfSong = forwardRef<MyComponentMethods, Chordprops>(
  (props, ref) => {
    const [selectTopic, setSelectTopic] = useState<any>();
    const chordRef = useRef<View>(null);
    const handleSeclect = (id: any) => {
      setSelectTopic(id);
    };
    const isSelectedTopic = (id: any) => {
      return id === selectTopic;
    };
    const unSelect = () => {
      setSelectTopic(null);
    };
    useImperativeHandle(ref, () => ({
      unSelect,
    }));
    const getViewLocation = (id: any) => {
      chordRef.current?.measure(
        (x: number, y: number, pageX: number, pageY: number) => {
          console.log('view container', x, y, pageX, pageY);
        },
      );
    };

    return (
      <View>
        <CustomTitle title="Chords" />
        <View style={styles.chordsList}>
          {props.value.map((item: string, index: number) => (
            <View key={index}>
              <View
                style={isSelectedTopic(index) ? styles.chord : styles.unshow}>
                <View>
                  <Chord nameChord={item} width={90} height={130}/>
                </View>
              </View>
              <ChordButton
                ref={chordRef}
                onPress={() => handleSeclect(index)}
                styleText={isSelectedTopic(index) && styles.activeText}
                styleBG={isSelectedTopic(index) && styles.activeBG}
                name={item}
              />
            </View>
          ))}
        </View>
      </View>
    );
  },
);

export default ChordsOfSong;

const styles = StyleSheet.create({
  chordsList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 10,
    columnGap: 10,
    marginVertical: 5,
  },
  activeBG: {
    backgroundColor: DARKCOLORS.hightLightColor,
  },
  activeText: {
    color: DARKCOLORS.primaryColor,
  },
  chord: {
    width: 90,
    height: 130,
    backgroundColor: DARKCOLORS.hightLightColor,
    borderRadius: 15,
    position: 'absolute',
    bottom: 70,
    // left: 20,
  },
  unshow: {
    display: 'none',
  },
});
