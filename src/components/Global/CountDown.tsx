import {StyleSheet, Text, View} from 'react-native';
import React, {useState,useEffect} from 'react';
import {DARKCOLORS} from '../../constants/colors';
import {FONTFAMILY} from '../../constants/fonts';
import {FONTSIZE} from '../../constants/sizes';
import {Timer} from 'iconoir-react-native';

interface CountDownProps {
  seconds: number;
}
const CountDown: React.FC<CountDownProps> = props => {
  const [seconds, setSeconds] = useState<number>(props.seconds);
  useEffect(() => {
    setTimeout(() => {
      if(seconds >0){
      setSeconds(seconds-1)
      }
    },1000)
  }, [seconds]);

  return (
    <View style={styles.coundDown}>
      <Timer color={DARKCOLORS.iconColor} width={30} height={30} />
      <Text style={styles.time}>
        {seconds<10 ?"0": null}{seconds}s
      </Text>
    </View>
  );
};

export default CountDown;

const styles = StyleSheet.create({
  coundDown: {
    width: "24%",
    padding: 10,
    borderRadius: 10,
    backgroundColor: DARKCOLORS.sencentColor,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    gap: 5
  },
  time: {
    fontSize: FONTSIZE.size_2,
    color: DARKCOLORS.textColor_1,
    textAlign:'center',
    fontWeight: '500'
  },
});
