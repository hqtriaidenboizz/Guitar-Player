import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {DARKCOLORS} from '../constants/colors';
import CustomStatusBar from '../constants/StatusBar';
import SearchBar from '../components/Search/SearchBar';
import SearchTopics from '../components/Search/SearchTopics';
import CustomTitle from '../components/Global/CustomTitle';
import {GENERALSTLE} from '../styles/generalStyle';
import ResultSearch from '../components/Search/ResultSearch';
import MainContainer from '../components/Global/MainContainer';

const Search = () => {
  return (
    <MainContainer>
      <CustomStatusBar />
      <SearchBar autoFocus={true} />
      <SearchTopics />
      <ScrollView style={styles.container}>
        <View style={styles.resultContainer}>
          <ResultSearch />
        </View>
      </ScrollView>
    </MainContainer>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: DARKCOLORS.primaryColor,
  },
  resultContainer: {
    marginVertical: 20,
  },
});
