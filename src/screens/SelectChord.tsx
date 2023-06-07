import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import {Pause, Play, Home, Restart} from 'iconoir-react-native';
import {DARKCOLORS} from '../constants/colors';
import {FONTFAMILY} from '../constants/fonts';
import {FONTSIZE} from '../constants/sizes';
import CountDown from '../components/Global/CountDown';
import Modal from 'react-native-modal';
import {BlurView} from '@react-native-community/blur';

interface SeleactChord {
  goBack: () => void;
  restart: () => void;
}
const SelectChord: React.FC<SeleactChord> = props => {
  const [isPause, setIsPause] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const handlePause = () => {
    setIsPause(!isPause);
    toggleModal();
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
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
        <CountDown seconds={15} />
      </View>

      <Modal backdropColor="black" isVisible={isModalVisible}>
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
              <Pressable style={styles.btn}>
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
    marginVertical: 10,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
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
    // fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.size_2,
    color: DARKCOLORS.iconColor,
    textAlign: 'center',
  },
});
