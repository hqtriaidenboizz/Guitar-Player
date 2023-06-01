import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DARKCOLORS } from '../constants/colors'
import MainContainer from '../components/Global/MainContainer'
import ChordChart from '../components/Global/ChordChart'
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
      <ChordChart tuning={[
        "5",
        "7",
        "7",
        "6",
        "5",
        "5"
      ]} chord={[
          "1",
          "3",
          "4",
          "2",
          "1",
          "1"
        ]} showTuning={true}/>
    </MainContainer>
  )
}

export default Tune

const styles = StyleSheet.create({})