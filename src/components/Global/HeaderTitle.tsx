import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {FONTSIZE} from '../../constants/sizes';
import {FONTFAMILY} from '../../constants/fonts';
import {DARKCOLORS} from '../../constants/colors';

interface HeaderTitleProps {
  title: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/logoIcon.png')}
      />
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: FONTSIZE.size_2,
    fontFamily: FONTFAMILY.medium,
    color: DARKCOLORS.hightLightColor,
  },
  logo: {
    width: 50,
    height: 50,
  },
});
