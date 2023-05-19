import {FlatList, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { DARKCOLORS } from '../constants/colors'
import SongCategories from '../components/SongCategories'
import YourPlaylist from '../components/YourPlaylist'
import CustomStatusBar from '../constants/StatusBar'
import TopPopularSongs from '../components/TopPopularSongs'
import SearchBar from '../components/SearchBar'
import { useNavigation } from '@react-navigation/native'
import { RootStackScreenProps } from '../types/navigation/types'

const Home = () => {
  const navigation = useNavigation<RootStackScreenProps<'Search'>['navigation']>()
  const handleNavigate = () => {
    navigation.navigate('Search')
  }
  return (
    <View style={styles.container}>
      <CustomStatusBar/>
      <SearchBar showSoftInputOnFocus={false} onFocus={() => handleNavigate()}/>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPopularSongs/>
        <SongCategories/>
        <YourPlaylist />
        <View style={{height: 120}}>
          
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARKCOLORS.primaryColor,
  },
})