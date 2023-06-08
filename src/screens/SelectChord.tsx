import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  Pause,
  Play,
  Home,
  Restart,
  MusicDoubleNote,
} from 'iconoir-react-native';
import {DARKCOLORS} from '../constants/colors';
import {FONTFAMILY} from '../constants/fonts';
import {FONTSIZE} from '../constants/sizes';
import CountDown from '../components/Global/CountDown';
import Modal from 'react-native-modal';
import {BlurView} from '@react-native-community/blur';
import Chord from '../components/Global/AnimatedChord';
import {ScreenDimensions} from '../constants/dimensions';

interface SeleactChord {
  goBack: () => void;
  restart: () => void;
}
interface Turn {
  id: number;
  status: boolean;
}
const turnsArray: Turn[] = [
  {id: 1, status: true},
  {id: 2, status: true},
  {id: 3, status: true},
  {id: 4, status: true},
];
const SelectChord: React.FC<SeleactChord> = props => {
  const [isPause, setIsPause] = useState<boolean>(false);
  const [turns, setTurns] = useState<Turn[]>(turnsArray);
  const [score, setScore] = useState<number>(0);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const handleTurns = (): void => {
    setTurns(prevTurn => {
      const updatedTurns = [...prevTurn];
      const turnIndex = updatedTurns.findIndex(turn => turn.status === true);
      if (turnIndex !== -1) {
        updatedTurns[turnIndex].status = false;
      }
      return updatedTurns;
    })
  };

  const handlePause = () => {
    setIsPause(!isPause);
    toggleModal();
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const continuteHandle = () => {
    setModalVisible(!isModalVisible);
    setIsPause(!isPause);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.btnPause} onPress={handlePause}>
          {isPause ? (
            <Play color={DARKCOLORS.iconColor} width={35} height={35} />
          ) : (
            <Pause color={DARKCOLORS.iconColor} width={35} height={35} />
          )}
        </Pressable>
        <Text style={styles.score}>{score}</Text>
        <CountDown initialTime={15}/>
      </View>
      <View style={styles.GameScreen}>
        <View style={styles.ChordScreen}>
          <Chord width={220} height={250} />
          <View style={styles.listNote}>
            {turns.map((item: any, index: number) => (
              <View key={index} style={styles.containerBlurNote}>
                <MusicDoubleNote
                  color={
                    item?.status
                      ? DARKCOLORS.hightLightColor
                      : DARKCOLORS.iconColor
                  }
                  width={20}
                  height={20}
                />
              </View>
            ))}
          </View>
        </View>
        <View style={styles.keyboard}>
          <TouchableOpacity activeOpacity={0.8} style={styles.key}>
            <Text style={styles.Keyname}>Bm</Text>
          </TouchableOpacity>
          <TouchableOpacity  activeOpacity={0.8} style={styles.key}>
            <Text style={styles.Keyname}>Am</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.key}>
            <Text style={styles.Keyname}>Bm</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.key}>
            <Text style={styles.Keyname}>Bm</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationOut={'pulse'}
        animationIn={'pulse'}
        backdropColor="black"
        isVisible={isModalVisible}>
        <View style={styles.containerModal}>
          <BlurView
            style={styles.absolute}
            reducedTransparencyFallbackColor="white">
            <View style={styles.containerBtn}>
              <Pressable style={styles.btn} onPress={props.goBack}>
                <Home color={DARKCOLORS.iconColor} width={25} height={25} />
                <Text style={styles.text}>Home</Text>
              </Pressable>
              <Pressable style={styles.btn} onPress={props.restart}>
                <Restart color={DARKCOLORS.iconColor} width={25} height={25} />
                <Text style={styles.text}>Restart</Text>
              </Pressable>
              <Pressable style={styles.btn} onPress={continuteHandle}>
                <Play color={DARKCOLORS.iconColor} width={25} height={25} />
                <Text style={styles.text}>Continute</Text>
              </Pressable>
            </View>
          </BlurView>
        </View>
      </Modal>
    </View>
  );
};

export default SelectChord;

const styles = StyleSheet.create({
  container: {
    height: ScreenDimensions.ScreenHeight,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: ScreenDimensions.ScreenHeight / 10,
  },
  btnPause: {
    paddingHorizontal: 10,
  },
  score: {
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.size_1,
    color: DARKCOLORS.textColor_1,
    position: 'absolute',
    left: '48%',
  },
  containerModal: {
    borderWidth: 0.5,
    borderColor: DARKCOLORS.iconColor,
    height: '25%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  containerBtn: {
    display: 'flex',
    flexDirection: 'column',
  },
  btn: {
    width: '100%',
    height: '33.333%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    borderWidth: 0.5,
    borderColor: DARKCOLORS.textColor_1,
  },
  text: {
    fontSize: FONTSIZE.size_2,
    color: DARKCOLORS.iconColor,
    textAlign: 'center',
  },
  GameScreen: {
    width: '100%',
    height: ScreenDimensions.ScreenHeight - ScreenDimensions.ScreenHeight / 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ChordScreen: {
    height:
      ((ScreenDimensions.ScreenHeight - ScreenDimensions.ScreenHeight / 10) *
        70) /
      100,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboard: {
    height:
      ((ScreenDimensions.ScreenHeight - ScreenDimensions.ScreenHeight / 10) *
        30) /
      100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    marginVertical: 10,
    gap: 10,
  },
  key: {
    width: '45%',
    height: '45%',
    backgroundColor: DARKCOLORS.sencentColor,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Keyname: {
    fontSize: FONTSIZE.size_2,
    color: DARKCOLORS.textColor_1,
  },
  listNote: {
    position: 'absolute',
    right: 0,
    display: 'flex',
    // flexDirection:'row',
    gap: 10,
  },
  containerBlurNote: {
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: DARKCOLORS.iconColor,
    overflow: 'hidden',
    backgroundColor: DARKCOLORS.sencentColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
