import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {ScreenDimensions} from '../../constants/dimensions';
import {DARKCOLORS} from '../../constants/colors';
import {FONTFAMILY} from '../../constants/fonts';
import {FONTSIZE} from '../../constants/sizes';

interface ICustomButtonProps {
  lable: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const CustomButton: React.FC<ICustomButtonProps> = props => {
  return (
    <Pressable onPress={props.onPress} style={styles.container}>
      <Text style={styles.textBtn}>{props.lable}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 65,
    backgroundColor: DARKCOLORS.hightLightColor,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 100,
  },
  textBtn: {
    color: DARKCOLORS.primaryColor,
    fontFamily: FONTFAMILY.bold,
    fontSize: FONTSIZE.size_2,
    textAlign: 'center',
  },
});
