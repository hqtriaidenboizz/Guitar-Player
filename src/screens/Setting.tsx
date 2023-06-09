import {Image, StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import MainContainer from '../components/Global/MainContainer';
import {GENERALSTLE} from '../styles/generalStyle';
import {ScreenDimensions} from '../constants/dimensions';
import {DARKCOLORS} from '../constants/colors';
import {FONTFAMILY} from '../constants/fonts';
import {FONTSIZE} from '../constants/sizes';

const Data = [{}];
const Setting = () => {
  return (
    <MainContainer>
      <View style={GENERALSTLE.paddingHorizontal}>
        <ImageBackground
          blurRadius={5}
          resizeMode="cover"
          source={{
            uri: 'https://cafefcdn.com/thumb_w/640/203337114487263232/2023/3/9/photo1678366776583-16783667766431882646483.jpg',
          }}
          style={styles.InfoAccount}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://cafefcdn.com/thumb_w/640/203337114487263232/2023/3/9/photo1678366776583-16783667766431882646483.jpg',
            }}
          />
          <Text style={styles.name}>Alexander-Arnold</Text>
        </ImageBackground>
        <View style={styles.settings}>
          <View style={styles.setting}>
            <View style={styles.container}>
              <Text style={styles.title}>Themes</Text>
            </View>
          </View>
          <View style={styles.setting}>
            <View style={styles.container}>
              <Text style={styles.title}>Languages</Text>
            </View>
          </View>
        </View>
      </View>
    </MainContainer>
  );
};

export default Setting;

const styles = StyleSheet.create({
  InfoAccount: {
    marginVertical: 20,
    backgroundColor: DARKCOLORS.hightLightColor,
    height: ScreenDimensions.ScreenHeight / 2.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
  avatar: {
    width: ScreenDimensions.ScreenWidth / 4,
    height: ScreenDimensions.ScreenWidth / 4,
    borderRadius: ScreenDimensions.ScreenWidth,
    borderWidth: 2,
    borderColor: DARKCOLORS.textColor_2,
    resizeMode: 'cover',
  },
  name: {
    fontFamily: FONTFAMILY.bold,
    fontSize: FONTSIZE.size_3,
    color: DARKCOLORS.textColor_2,
    marginVertical: 10,
  },
  achievements: {
    position: 'absolute',
    bottom: '8%',
    display: 'flex',
    flexDirection: 'row',
    gap: ScreenDimensions.ScreenWidth / 2.5,
  },
  achievementsItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  achievementsNumber: {
    fontFamily: FONTFAMILY.bold,
    fontSize: FONTSIZE.size_1,
    lineHeight: 28,
    color: DARKCOLORS.textColor_2,
  },
  achievementsText: {
    fontSize: FONTSIZE.size_3,
    color: DARKCOLORS.textColor_2,
  },
  settings: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
  },
  setting: {
    backgroundColor: DARKCOLORS.sencentColor,
    borderRadius: 20,
    width: (ScreenDimensions.ScreenWidth - 20 - 30) / 2,
    height: (ScreenDimensions.ScreenHeight - 300) / 2,
    padding: 15
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  title: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    lineHeight: 20,
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.size_3,
    color: DARKCOLORS.textColor_3,
    backgroundColor: DARKCOLORS.hightLightColor,
    borderRadius: ScreenDimensions.ScreenWidth,
  },
});
