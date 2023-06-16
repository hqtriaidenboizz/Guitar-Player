import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';

import {DARKCOLORS} from '../constants/colors';
import CustomStatusBar from '../constants/StatusBar';
import SearchBar from '../components/Search/SearchBar';
import SearchTopics from '../components/Search/SearchTopics';
import ResultSearch from '../components/Search/ResultSearch';
import MainContainer from '../components/Global/MainContainer';
import {useSelector} from 'react-redux';
import {RootState} from '../stores/reducers/_index';
import {Song} from '../types/song';
import {FONTFAMILY} from '../constants/fonts';
import {FONTSIZE} from '../constants/sizes';
import {GENERALSTLE} from '../styles/generalStyle';

const Search = () => {
  const {songs} = useSelector((state: RootState) => state.song);
  const [searchField, setSearchField] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Song[]>([]);

  const handleOnChange = (text: string) => {
    const filteredSongs = songs.filter(item =>
      item.artistName.toLowerCase().includes(text.toLowerCase()),
    );
    setSearchField(text);
    setSearchResults(filteredSongs);
  };

  const handleRefres = () => {
    setSearchField('');
    setSearchResults([]);
  };
  
  return (
    <MainContainer>
      <CustomStatusBar />
      <SearchBar
        value={searchField}
        onPress={handleRefres}
        onChangeText={text => handleOnChange(text)}
        autoFocus={true}
      />
      <SearchTopics />
      <ScrollView style={styles.container}>
        <View style={styles.resultContainer}>
          {searchResults.length === 0 ? (
            <View style={[styles.notFound, GENERALSTLE.paddingHorizontal]}>
              <Text style={styles.notFoundText}>
                Not results found for "{searchField}"
              </Text>
            </View>
          ) : (
            <ResultSearch data={searchResults} />
          )}
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
  notFound: {
    paddingVertical: 20,
  },
  notFoundText: {
    textAlign: 'center',
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.size_3,
    color: DARKCOLORS.textColor_1,
  },
});
