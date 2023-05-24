import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { DARKCOLORS } from '../constants/colors'
import { StackNavigationProp } from '@react-navigation/stack';

import { useNavigation, useRoute } from '@react-navigation/native';
import { RootStackScreenProps } from '../types/navigation/types';
import MainContainer from '../components/MainContainer';
import ScreenHeader from '../components/ScreenHeader';
import { FONTFAMILY } from '../constants/fonts';
import SongInfo from '../components/SongInfo';
import { GENERALSTLE } from '../styles/generalStyle';
import CustomTitle from '../components/CustomTitle';
import ChordButton from '../components/ChordButton';
import SongLyrics from '../components/SongLyrics';

const Data =
 {
  songName: "Yummy",
  artistName: "Justin Bieber",
  view: 5,
  chords: ["Fmaj7", "Em7", "Dm7", "C7"],
  image: "image 1",
  lyrics: {
    Intro: [
      [
        {
          chord: "Fmaj7",
          lyric: ""
        },
        {
          chord: "Em7",
          lyric: ""
        },
        {
          chord: "Dm7",
          lyric: ""
        },
        {
          chord: "Cmaj7",
          lyric: ""
        },
      ]
    ],
    Chorus: [
      [
        {
        chord: "",
        lyric: "I got my peaches out in"
      },
      {
        chord: "Fmaj7",
        lyric: "Georgia (Oh, yeah, shit)"
      }
      ],
       [
        {
        chord: "",
        lyric: "I get my weed from"
      },
      {
        chord: "Fmaj7",
        lyric: "California (That's that shit)"
      }
      ],
      [
        {
          chord:"",
          lyric: "And I say"
        },
        {
          chord: "Fmaj7",
          lyric: "oh (oh), the way I breathe you"
        },
        {
          chord:"Em7",
          lyric:"in (In)"
        }
      ],
    ],
    Outtro: [
      [
        {
          chord: "Fmaj7",
          lyric: ""
        },
        {
          chord: "Em7",
          lyric: ""
        },
        {
          chord: "Dm7",
          lyric: ""
        },
        {
          chord: "Cmaj7",
          lyric: ""
        },
      ],
      [
        {
          chord: "Fmaj7",
          lyric: ""
        },
        {
          chord: "Em7",
          lyric: ""
        },
        {
          chord: "Dm7",
          lyric: ""
        },
        {
          chord: "Cmaj7",
          lyric: ""
        },
      ]
    ]
  },
  id: "1"
 }
const SongDetail = () => {
    const navigation = useNavigation<RootStackScreenProps<'SongDetail'>['navigation']>()
    const route= useRoute<RootStackScreenProps<'SongDetail'>['route']>()
    const id = route.params
    const [selectTopic,setSelectTopic] = useState<any>();
    const handleSeclect = (id: any) => {
      setSelectTopic(id)
    }
    const isSelectedTopic= (id: any) => {
      return id === selectTopic
    }
    const handleNavigate = () => {
      navigation.goBack()
    }
  return (
    <MainContainer onTouchStart={() => setSelectTopic(null)
    }>
      <ScreenHeader onPress={handleNavigate} iconRight={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SongInfo  style={styles.songItem} />
        <View style={[GENERALSTLE.paddingHorizontal,styles.chords]}>
          <CustomTitle title='Chords'/>
          <View style={styles.chordsList}>  
              {Data.chords.map((item: string, index: number)=> 
                <View 
                key={index}
                >
                  <View style={isSelectedTopic(index)? styles.chord : styles.unshow}>
                    <Text>{item}</Text>
                  </View>
                  <ChordButton 
                onPress={() => handleSeclect(index)}
                styleText={isSelectedTopic(index) && styles.activeText} 
                styleBG={isSelectedTopic(index) && styles.activeBG}   
                name={item} />
                </View>)}
          </View>
          <SongLyrics lyrics={Data.lyrics}/>
        </View>
      </ScrollView>
    </MainContainer>
  )
}

export default SongDetail

const styles = StyleSheet.create({
  songItem: {
    height: 400
  },
  songName: {
    fontSize: 30,
    fontFamily: FONTFAMILY.bold,
    
  },
  chords: {
    marginVertical: 20,
  },
  chordsList: {
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    rowGap: 10,
    columnGap: 10,
    marginVertical: 5,
  },
  activeBG: {
    backgroundColor:DARKCOLORS.hightLightColor,
  },
  activeText:{
    color: DARKCOLORS.primaryColor
  },
  chord: {
    width: 90,
    height: 130,
    backgroundColor: DARKCOLORS.hightLightColor,
    borderRadius: 15,
    position:'absolute',
    bottom: 70,
    left: 20
  },
  unshow: {
    display:'none'
  },
  chord1: {
    color:'red'
  },
  lyrics: {
    color:'blue'
  }
})