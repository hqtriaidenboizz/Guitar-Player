import {
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Slider from '@react-native-community/slider';
import MainContainer from '../components/Global/MainContainer';
import {GENERALSTLE} from '../styles/generalStyle';
import {ScreenDimensions} from '../constants/dimensions';
import {DARKCOLORS} from '../constants/colors';
import {FONTFAMILY} from '../constants/fonts';
import {FONTSIZE} from '../constants/sizes';
import {
  HelpCircle,
  LogOut,
  SoundLow,
  NavArrowRight,
} from 'iconoir-react-native';
import {SettingItemData} from '../constants/settingItem';
import setVolumeInAsyncStorage from '../utils/setInAsyncStore';
import AsyncStorage from '@react-native-async-storage/async-storage/lib/typescript/AsyncStorage';
import {getValueFromAsyncStorage} from '../utils/getValueAsyncStore';
const Setting = () => {
  const [volume, setVolume] = useState<any>(0);

  const handleGetVolume = (value: number) => {
    setVolume(value);
    setVolumeInAsyncStorage('volume', value);
  };
  console.log('volume',volume);
  useEffect(() => {
   const value = getValueFromAsyncStorage('volume')
   setVolume(Number(value))
  },[]);

  return (
    <MainContainer>
      <ScrollView>
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
                <View style={styles.languagse}>
                  <Pressable style={styles.languagseItem}>
                    <Text style={styles.languagseText}>Dark theme</Text>
                  </Pressable>
                  <Pressable style={styles.languagseItem}>
                    <Text style={styles.languagseText}>Light theme</Text>
                  </Pressable>
                </View>
              </View>
            </View>
            <View style={styles.setting}>
              <View style={styles.container}>
                <Text style={styles.title}>Languages</Text>
                <View style={styles.languagse}>
                  <Pressable style={styles.languagseItem}>
                    <Text style={styles.languagseText}>English</Text>
                  </Pressable>
                  <Pressable style={styles.languagseItem}>
                    <Text style={styles.languagseText}>Vietnamese</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.voulum}>
            <SoundLow
              color={DARKCOLORS.hightLightColor}
              width={30}
              height={30}
            />
            <Slider
              // value={volume}
              minimumValue={0}
              onValueChange={value => handleGetVolume(value)}
              style={styles.Slider}
              thumbTintColor={DARKCOLORS.hightLightColor}
              maximumValue={1}
              minimumTrackTintColor={DARKCOLORS.hightLightColor}
            />
          </View>
          <View style={styles.settingBottom}>
            {SettingItemData.map((item: any, index: number) => (
              <Pressable key={index} style={styles.settingItem}>
                <View style={styles.settingItemRight}>
                  <View style={styles.icon}>{item.icon}</View>
                  <Text>{item.title}</Text>
                </View>
                <NavArrowRight
                  color={DARKCOLORS.iconColor}
                  width={30}
                  height={30}
                />
              </Pressable>
            ))}
          </View>
          <View></View>
        </View>
      </ScrollView>
    </MainContainer>
  );
};

export default Setting;

const styles = StyleSheet.create({
  icon: {
    padding: 10,
    borderRadius: ScreenDimensions.ScreenWidth,
    backgroundColor: DARKCOLORS.hightLightColor,
  },
  InfoAccount: {
    marginVertical: 20,
    backgroundColor: DARKCOLORS.hightLightColor,
    height: ScreenDimensions.ScreenHeight / 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 20,
    borderRadius: 15,
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
    height: (ScreenDimensions.ScreenHeight - 300) / 3.3,
    padding: 15,
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
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
  languagse: {
    width: '100%',
    paddingVertical: 10,
    display: 'flex',
    gap: 10,
    alignItems: 'flex-start',
  },
  languagseText: {
    fontFamily: FONTFAMILY.regular,
    fontSize: FONTSIZE.size_3,
  },
  languagseItem: {},
  settingBottom: {
    marginVertical: 20,
    display: 'flex',
    gap: 10,
  },
  settingItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  settingItemRight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  voulum: {
    marginTop: 20,
    backgroundColor: DARKCOLORS.sencentColor,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    display: 'flex',
    // gap: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
  Slider: {
    width: '80%',
  },
  voulumText: {},
});
