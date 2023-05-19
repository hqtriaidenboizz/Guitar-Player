import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import { DARKCOLORS } from '../constants/colors'
import CustomStatusBar from '../constants/StatusBar'
import SearchBar from '../components/SearchBar'
import SearchTopics from '../components/SearchTopics'
import CustomTitle from '../components/CustomTitle'
import { GENERALSTLE } from '../styles/generalStyle'
import ResultSearch from '../components/ResultSearch'

const Search = () => {
  return (
    <ScrollView  style={styles.container}>
      <CustomStatusBar/>
      <SearchBar autoFocus={true}/>
      <SearchTopics/>
      <View style={styles.resultContainer}>
        <ResultSearch/>
      </View>
    </ScrollView>

  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor:DARKCOLORS.primaryColor
    },
    resultContainer:{
        marginVertical: 20
    }
})