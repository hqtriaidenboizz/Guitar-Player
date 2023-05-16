import { FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import { RefreshDouble } from 'iconoir-react-native'
import { DARKCOLORS } from '../constants/colors'
import CustomInput from '../components/CustomInput'
import CustomTitle from '../components/CustomTitle'
import TopSong from '../components/TopSong'
import { Distance } from '../constants/distance'
import { GENERALSTLE } from '../styles/generalStyle'
import SongCategories from '../components/SongCategories'

const Data = [
  {title: 'TheWeeknd',
id: 1},
{title: 'Justin',
id: 2},
{title: 'Thang(Ngot*)',
id: 3},
]

const Home = () => {
  return (
    <View style={styles.container}>
          <View style={[styles.searchBar,GENERALSTLE.paddingHorizontal]}>
              <View style={styles.search}>
                   <CustomInput onChangeText={() => {}} style={styles.inputStyle} placeholder='Search'/>
              </View>
            <TouchableHighlight style={styles.refreshIcon}>
              <RefreshDouble color={DARKCOLORS.iconColor} strokeWidth={1.5} width={35} height={35}/>
            </TouchableHighlight>
          </View>

          <View>
            <View style={GENERALSTLE.paddingHorizontal}>
              <CustomTitle title='Top popular songs' moreIcon={true}/>
            </View>
            <FlatList
              style={styles.Topsong}
              data={Data}
              // ItemSeparatorComponent={() => <View style={{width: 20}} />}
              renderItem={({item}) => <TopSong title={item.title}/>}
              horizontal
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
          />
          </View>
            <SongCategories/>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARKCOLORS.primaryColor,
  },
  searchBar: {
    display:"flex",
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical: 20,
  },
  search: {
    width: "80%"
  },
  inputStyle: {
    borderColor: 'none'
  },
  refreshIcon: {
    backgroundColor: DARKCOLORS.sencentColor,
    height: 65,
    width: 65,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 100,
  },
  Topsong: {
    paddingHorizontal:5,
    marginVertical: 20,
  }
})