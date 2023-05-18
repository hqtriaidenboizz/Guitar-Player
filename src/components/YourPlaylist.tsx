import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomTitle from './CustomTitle'
import { GENERALSTLE } from '../styles/generalStyle'  
import SongItem from './SongItem'
import { useNavigation } from '@react-navigation/native'
import { RootStackScreenProps } from '../types/navigation/types'

const Data = [
  {
    id: 1,
    image: 'https://www.numberone.com.tr/wp-content/uploads/2018/05/THE-WEEKND--CALL-OUT-MY-NAME-1.jpg',
    artistName: 'The Weeknd',
    songName: 'Call out my name'
  },
   {
    id: 2,
    image: 'https://www.numberone.com.tr/wp-content/uploads/2018/05/THE-WEEKND--CALL-OUT-MY-NAME-1.jpg',
    artistName: 'The Weeknd',
    songName: 'Call out my name'
  }
  ,
   {
    id: 3,
    image: 'https://www.numberone.com.tr/wp-content/uploads/2018/05/THE-WEEKND--CALL-OUT-MY-NAME-1.jpg',
    artistName: 'The Weeknd',
    songName: 'Call out my name'
  }
]

const YourPlaylist= () => {
  const navigation = useNavigation<RootStackScreenProps<'MyTabs'>['navigation']>();

  const handleNavigate = (id: number) => {
    navigation.navigate('SongDetail',{id: id})
  }

  return (
    <View style={styles.container}>
        <View style={GENERALSTLE.paddingHorizontal}>
             <CustomTitle title='Your Playlist'/>
        </View>
        <FlatList
        style={[GENERALSTLE.paddingHorizontal]}
         data={Data}
         renderItem={({item}) =>
         <SongItem onPress={()=> handleNavigate(item.id)} image={item.image} songName={item.songName} artistName={item.artistName}/>}/>
    </View>
  )
}

export default YourPlaylist

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height:'auto',
    }
})