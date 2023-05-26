import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FONTFAMILY} from '../../constants/fonts';
import {FONTSIZE} from '../../constants/sizes';
import {DARKCOLORS} from '../../constants/colors';

interface ICustomTitleProps {
  title: string;
  moreIcon?: boolean;
}

const CustomTitle: React.FC<ICustomTitleProps> = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.icon}>{props.moreIcon ? 'more' : null}</Text>
    </View>
  );
};

export default CustomTitle;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.size_2,
    color: DARKCOLORS.textColor_2,
  },
  icon: {
    fontFamily: FONTFAMILY.regular,
    fontSize: FONTSIZE.size_4,
    color: DARKCOLORS.iconColor,
  },
});
