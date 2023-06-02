import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DARKCOLORS } from '../constants/colors'
import MainContainer from '../components/Global/MainContainer'
import ChordChart from '../components/Global/ChordChart'
import ChordList from '../components/Global/ChordList'
import { GUITARTCHORDATA } from '../assets/Data/guitarChords'
const Data = [
  {
    "A": [
    {
      "positions": [
        "5",
        "7",
        "7",
        "6",
        "5",
        "5"
      ],
      "fingerings": [
        [
          "1",
          "3",
          "4",
          "2",
          "1",
          "1"
        ]
      ]
    }
  ],
  "B":[
    {
      "positions": [
        "5",
        "7",
        "7",
        "6",
        "5",
        "5"
      ],
      "fingerings": [
        [
          "1",
          "3",
          "4",
          "2",
          "1",
          "1"
        ]
      ]
    }
  ]
  }
]
const Tune = () => {
  return (
    <MainContainer>
      {/* <ChordList chords={GUITARTCHORDATA}/> */}
    </MainContainer>
  )
}

export default Tune

const styles = StyleSheet.create({})