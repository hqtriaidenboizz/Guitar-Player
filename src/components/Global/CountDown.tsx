import {StyleSheet, Text, View} from 'react-native';
import React, {useState,useEffect,useRef} from 'react';
import {DARKCOLORS} from '../../constants/colors';
import {FONTFAMILY} from '../../constants/fonts';
import {FONTSIZE} from '../../constants/sizes';
import {Timer} from 'iconoir-react-native';

interface CountDownProps {
  initialTime: number;
}
const CountDown: React.FC<CountDownProps> = props => {
  const [seconds, setSeconds] = useState<number>(props.initialTime);
  const [isRunning,setIsRunning] = useState<boolean>(false);
  let intervalRef = useRef<number>();

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevTime: number) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current!);
    }
    return () => clearInterval(intervalRef.current!);
  }, [isRunning]);
  

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
