import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DARKCOLORS} from '../../constants/colors';
import {IProps} from '../../types/generalProps';
interface MainContainerProps {
  children: React.ReactNode;
  onTouchStart?: () => void;
}
const MainContainer: React.FC<MainContainerProps> = props => {
  return (
    <View onTouchStart={props.onTouchStart} style={styles.container}>
      {props.children}
    </View>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARKCOLORS.primaryColor,
  },
});
