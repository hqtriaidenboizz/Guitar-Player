import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GENERALSTLE } from '../styles/generalStyle'
import CustomTitle from './CustomTitle'
import SongCategoryItem from './SongCategoryItem'

const Data = [
    {
        id: 1,
        title:"R&B",
        color: '#70EAE6',
        image: 'https://img.websosanh.vn/v10/users/review/images/4629akih9andz/1562149813236_7640013.jpg?compress=85'
    },
    {
        id: 2,
        title:"Rock",
        color: '#F1B6B0',
        image: 'https://schoolofrock.imgix.net/img/news-article-hero-750w/allstarsdallas050-edit-1677013329.jpg?auto=format'
    },
    {
        id: 3,
        title:"Ballad",
        color: '#FFFFFF',
        image: 'https://mellamusic.com/wp-content/uploads/2016/05/Songwriting-Tips-for-Ballads.png'
    },
    {
        id: 4,
        title:"Indie",
        color: '#806CFF',
        image: 'data:image/jpeg;base64,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'
    },
]

const SongCategories = () => {
  return (
    <View>
            <View style={GENERALSTLE.paddingHorizontal}>
              <CustomTitle title='Categories' moreIcon={true}/>
            </View>
                <FlatList
                style={styles.flatlist}
                data={Data}
                horizontal
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => <SongCategoryItem name={item.title} color={item.color} image={item.image}></SongCategoryItem> }/>

    </View>
  )
}

export default SongCategories

const styles = StyleSheet.create({
    flatlist: {
        marginVertical: 20,
        paddingHorizontal: 5,
    }
})