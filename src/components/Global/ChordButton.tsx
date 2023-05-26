import {
  StyleProp,
  ViewStyle,
  TextStyle,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import {DARKCOLORS} from '../../constants/colors';
import {FONTFAMILY} from '../../constants/fonts';
import {FONTSIZE} from '../../constants/sizes';

interface ChordButtonProps {
  name?: string;
  onPress?: () => void;
  styleBG?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  id?: any;
  onLayout?: () => void;
}
const ChordButton = forwardRef<View, ChordButtonProps>((props, ref) => {
  return (
    <View
      ref={ref}
    >
      <Pressable
        onLayout={props.onLayout}
        key={props.id}
        onPress={props.onPress}
        style={[styles.container, props.styleBG]}>
        <Text style={[styles.title, props.styleText]}>{props.name}</Text>
      </Pressable>
    </View>
  );
});

export default ChordButton;

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: 45,
    backgroundColor: DARKCOLORS.sencentColor,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    paddingHorizontal: 25,
    fontFamily: FONTFAMILY.regular,
    fontSize: FONTSIZE.size_3,
    color: DARKCOLORS.textColor_1,
  },
});
