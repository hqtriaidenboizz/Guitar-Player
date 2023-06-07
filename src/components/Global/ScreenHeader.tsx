import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Heart, NavArrowDown} from 'iconoir-react-native';
import {DARKCOLORS} from '../../constants/colors';
import {FONTFAMILY} from '../../constants/fonts';
import {FONTSIZE} from '../../constants/sizes';

interface ScreenHeaderProps {
  title?: string;
  iconRight?: boolean;
  isLove?: boolean;
  onPress?: () => void;
}

const ScreenHeader: React.FC<ScreenHeaderProps> = props => {
  const [isLove, setIsLove] = useState<boolean>(false);
  const handleLoveIcon = () => {
    setIsLove(!isLove);
  };
  return (
    <View style={styles.container}>
      <NavArrowDown
        onPress={props.onPress}
        color={DARKCOLORS.textColor_1}
        width={35}
        height={35}
      />
      <Text style={styles.title}>{props.title}</Text>
      {props.iconRight ? (
          <Heart
          onPress={handleLoveIcon}
          color={isLove ? '#F40824' : DARKCOLORS.textColor_1}
          width={30}
          height={30}
        />
      ): <View style={{width: 30}}>
      </View> }
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    height: 55,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  title: {
    fontFamily: FONTFAMILY.bold,
    fontSize: FONTSIZE.size_2,
    color: DARKCOLORS.textColor_1,
  },
});
