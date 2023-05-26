import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import {DARKCOLORS} from '../../constants/colors';
import {FONTFAMILY} from '../../constants/fonts';
import {FONTSIZE} from '../../constants/sizes';

interface ICustomInputProps {
  onChangeText: (text: string) => void;
  placeholder: string;
  secureText?: boolean;
  error?: string;
  icon?: JSX.Element | null;
  onPress?: () => void;
  onFocus?: () => void;
  style?: StyleProp<ViewStyle>;
  autoFocus?: boolean;
  showSoftInputOnFocus?: boolean;
}

const CustomInput: React.FC<ICustomInputProps> = props => {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        showSoftInputOnFocus={props.showSoftInputOnFocus}
        autoFocus={props.autoFocus}
        onFocus={props.onFocus}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureText}
        placeholderTextColor={DARKCOLORS.textColor_1}
        style={styles.textInput}
        placeholder={props.placeholder}
      />
      {props.icon}
    </View>
  );
};

export default CustomInput;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 65,
    backgroundColor: DARKCOLORS.sencentColor,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 100,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderWidth: 0.5,
    borderColor: DARKCOLORS.textColor_2,
  },
  textInput: {
    width: '80%',
    fontFamily: FONTFAMILY.regular,
    fontSize: FONTSIZE.size_3,
  },
});
