import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import {DARKCOLORS} from '../../constants/colors';
import {FONTFAMILY} from '../../constants/fonts';
import {FONTSIZE} from '../../constants/sizes';
import {BlurView} from '@react-native-community/blur';
import {Lock, NoLock} from 'iconoir-react-native';


const GameItem = () => {
  return (
    <Pressable style={styles.container}>
      <Progress.Circle
        borderWidth={1}
        thickness={12}
        color={DARKCOLORS.hightLightColor}
        strokeCap="round"
        animated={true}
        showsText={true}
        size={120}
        progress={0.64}
      />
      <View style={styles.containerRight}>
        <Text style={styles.title}>4 Basic chords</Text>
        <View style={styles.chordList}>
          <Text style={styles.chord}>Dm</Text>
          <Text style={styles.chord}>F</Text>
          <Text style={styles.chord}>C</Text>
          <Text style={styles.chord}>C</Text>
        </View>
      </View>
      <BlurView style={styles.containerUnlock}>
        <View >
          <Pressable style={styles.btnUnLock}>
              <Lock color={DARKCOLORS.textColor_3} width={50} height={50} />
            <Text>UnLock</Text>
          </Pressable>
        </View>
      </BlurView>
    </Pressable>
  );
};

export default GameItem;

const styles = StyleSheet.create({
  chordList: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    flexDirection: 'row',
    gap: 5,
  },
  chord: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 100,
    fontFamily: FONTFAMILY.regular,
    fontSize: FONTSIZE.size_3,
    lineHeight: 20,
    color: DARKCOLORS.textColor_3,
    backgroundColor: DARKCOLORS.textColor_1,
  },
  container: {
    backgroundColor: DARKCOLORS.sencentColor,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 170,
    paddingHorizontal: 20,
    gap: 20,
    borderWidth: 0.5,
    borderColor: DARKCOLORS.iconColor,
    overflow: 'hidden',
  },
  containerRight: {
    flex: 1,
  },
  title: {
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.size_2,
  },
  containerUnlock: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 20,
  },
  btnUnLock: {
    backgroundColor: DARKCOLORS.hightLightColor,
    borderRadius: 360,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center'

  },
});
