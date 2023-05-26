import {
  ViewStyle,
  TextStyle,
  StyleProp,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import React from 'react';
import {DARKCOLORS} from '../../constants/colors';
import {FONTFAMILY} from '../../constants/fonts';
import {FONTSIZE} from '../../constants/sizes';

interface SearchTopicsItemProps {
  onPress?: () => void;
  title: string;
  styleBG?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  id?: any;
}

const SearchTopicsItem: React.FC<SearchTopicsItemProps> = props => {
  return (
    <Pressable
      key={props.id}
      onPress={props.onPress}
      style={[styles.container, props.styleBG]}>
      <Text style={[styles.title, props.styleText]}>{props.title}</Text>
    </Pressable>
  );
};

export default SearchTopicsItem;

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: 45,
    backgroundColor: DARKCOLORS.sencentColor,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  title: {
    textAlign: 'center',
    paddingHorizontal: 20,
    fontFamily: FONTFAMILY.regular,
    fontSize: FONTSIZE.size_3,
    color: DARKCOLORS.textColor_1,
  },
});
