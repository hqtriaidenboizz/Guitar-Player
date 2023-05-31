import { StyleSheet, Text, View,Pressable,Image } from 'react-native'
import React from 'react'
import { DARKCOLORS } from '../../constants/colors';
import { FONTFAMILY } from '../../constants/fonts';
import { FONTSIZE } from '../../constants/sizes';
interface ToolItemProps{
  title: string;
  image?: string;
  onPress?: () => void
}

const ToolItem: React.FC<ToolItemProps> = (props) => {

  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <View style={styles.title}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
      <Image style={styles.image} source={{uri: `${props.image}`}} />
    </Pressable>
  )
}

export default ToolItem

const styles = StyleSheet.create({
  title: {
    display:'flex',
    alignContent:'center'
  },
  text: {
    fontFamily:FONTFAMILY.medium,
    fontSize:FONTSIZE.size_3,
    paddingVertical: 10,
    paddingLeft: 20
  },
  image: {
    width:"100%",
    height:220,
    resizeMode:'cover'
  },
  container: {
    width: "100%",
    marginVertical: 20,
    borderRadius: 20,
    overflow:'hidden',
    backgroundColor:DARKCOLORS.sencentColor
  }
})