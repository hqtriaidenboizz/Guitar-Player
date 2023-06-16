import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Pressable,
} from 'react-native';
import React,{useState} from 'react';
import {GENERALSTLE} from '../../styles/generalStyle';
import {RefreshDouble} from 'iconoir-react-native';
import {DARKCOLORS} from '../../constants/colors';
import CustomInput from '../Global/CustomInput';

interface SearchBarProps {
  onFocus?: () => void;
  autoFocus?: boolean;
  value?:string; 
  onPress?: () => void;
  onChangeText?: (text: string) => void;
  showSoftInputOnFocus?: boolean;
}
const SearchBar: React.FC<SearchBarProps> = props => {
  return (
    <Pressable style={[styles.searchBar, GENERALSTLE.paddingHorizontal]}>
      <View style={styles.search}>
        <CustomInput
          showSoftInputOnFocus={props.showSoftInputOnFocus}
          autoFocus={props.autoFocus}
          onFocus={props.onFocus}
          text={props.value}
          onChangeText={props.onChangeText}
          style={styles.inputStyle}
          placeholder="Search"
        />
      </View>
      <TouchableHighlight style={styles.refreshIcon}>
        <RefreshDouble
          color={DARKCOLORS.iconColor}
          strokeWidth={1.5}
          width={35}
          onPress={props.onPress}
          height={35}
        />
      </TouchableHighlight>
    </Pressable>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  search: {
    width: '80%',
  },
  inputStyle: {
    borderColor: 'none',
  },
  refreshIcon: {
    backgroundColor: DARKCOLORS.sencentColor,
    height: 65,
    width: 65,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
});
