import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState,useRef,useEffect } from 'react'
import { DARKCOLORS } from '../constants/colors'
import { StackNavigationProp } from '@react-navigation/stack';

import { useNavigation, useRoute } from '@react-navigation/native';
import { RootStackScreenProps } from '../types/navigation/types';
import MainContainer from '../components/Global/MainContainer';
import ScreenHeader from '../components/Global/ScreenHeader';
import { FONTFAMILY } from '../constants/fonts';
import SongInfo from '../components/SongDetail/SongInfo';
import { GENERALSTLE } from '../styles/generalStyle';
import SongLyrics from '../components/SongDetail/SongLyrics';
import ChordsOfSong from '../components/SongDetail/ChordsOfSong';

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
    const handleNavigate = () => {
      navigation.goBack()
    }
    const ref = useRef<any>(null);
  return (
    <MainContainer onTouchStart={() =>{ref.current.unSelect()}}>
      <ScreenHeader onPress={handleNavigate} iconRight={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SongInfo  style={styles.songItem} />
        <View style={[GENERALSTLE.paddingHorizontal,styles.chords]}>
          <ChordsOfSong  ref={ref} value={Data.chords} />
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