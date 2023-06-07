import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import {DARKCOLORS} from '../../constants/colors';
import {FONTFAMILY} from '../../constants/fonts';
import {FONTSIZE} from '../../constants/sizes';
import {BlurView} from '@react-native-community/blur';
import {useNavigation} from '@react-navigation/native';
import {RootStackScreenProps} from '../../types/navigation/types';

interface Chord {
  name: string;
}

interface GameItemProps {
  status: boolean;
  score: number;
  title: string;
  chordList: Chord[];
}

const GameItem: React.FC<GameItemProps> = props => {
  const navigation =
    useNavigation<RootStackScreenProps<'ChordGame'>['navigation']>();
  const handleNavigater = () => {
    {props.status ? navigation.navigate('GameDetail') : null}
  };
  return (
    <Pressable onPress={() => handleNavigater()} style={styles.container}>
      <Progress.Circle
        borderWidth={1}
        thickness={12}
        color={DARKCOLORS.hightLightColor}
        strokeCap="round"
        animated={true}
        showsText={true}
        size={120}
        progress={props.score}
      />
      <View style={styles.containerRight}>
        <Text style={styles.title}>{props.title}</Text>
        <View style={styles.chordList}>
          {props.chordList.map((item: any, index: number) => (
            <Text key={index} style={styles.chord}>
              {item.name}
            </Text>
          ))}
        </View>
      </View>
      {props.status ? null : (
        <BlurView style={styles.containerUnlock}>
          <View style={styles.containerBtn}>
            <Pressable style={styles.btnUnLock}>
              <Text style={styles.text}>UnLock</Text>
            </Pressable>
          </View>
        </BlurView>
      )}
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
    height: 50,
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBtn: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.size_2,
    color: DARKCOLORS.primaryColor,
  },
});
