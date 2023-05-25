import {StyleSheet, Text, View} from 'react-native';
import React, {useState,useEffect, forwardRef, useImperativeHandle, useRef} from 'react';
import CustomTitle from '../Global/CustomTitle';
import ChordButton from '../Global/ChordButton';
import {DARKCOLORS} from '../../constants/colors';

interface Chordprops {
  value: string[];
}
interface MyComponentMethods {
  unSelect: () => void;
}

const ChordsOfSong = forwardRef<MyComponentMethods, Chordprops>((props, ref) => {
    const [selectTopic, setSelectTopic] = useState<any>();
    const viewRef = useRef<View>(null);
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
      viewRef.current?.measure((x: number, y: number, pageX:number, pageY: number) => {
          console.log("view container" + id, x, y,pageX, pageY);
        });
    }  
    
    return (
      <View>
        <CustomTitle title="Chords" />
        <View style={styles.chordsList}>
          {props.value.map((item: string, index: number) => (
            <View ref={viewRef} onLayout={()=> getViewLocation(index)} key={index}>
              <View
                style={isSelectedTopic(index) ? styles.chord : styles.unshow}>
                <Text>{item}</Text>
              </View>
              <ChordButton
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
    left: 20,
  },
  unshow: {
    display: 'none',
  },
});
