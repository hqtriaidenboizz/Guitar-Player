import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import MainContainer from '../components/Global/MainContainer';
import ScreenHeader from '../components/Global/ScreenHeader';
import {useNavigation, useRoute} from '@react-navigation/native';
import {RootStackScreenProps} from '../types/navigation/types';
import {useSelector} from 'react-redux';
import {RoodState} from '../stores/store';
import {ScreenDimensions} from '../constants/dimensions';
import {GENERALSTLE} from '../styles/generalStyle';
import {DARKCOLORS} from '../constants/colors';
import {FONTFAMILY} from '../constants/fonts';
import {FONTSIZE} from '../constants/sizes';
import SongItem from '../components/SongLibrary/SongItem';
import {Song} from '../types/song';

const SongGenre = () => {
  const navigation =
    useNavigation<RootStackScreenProps<'SongGenre'>['navigation']>();
  const route = useRoute<RootStackScreenProps<'SongGenre'>['route']>();
  const handlegoBack = () => {
    navigation.goBack();
  };
  const handleNavigate = (id: any) => {
    navigation.navigate('SongDetail', {id: id});
  };
  const Data = route.params.Genre;
  const {songs} = useSelector((state: RoodState) => state.song);
  const [rotateAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    handleAnimation();
  }, []);

  const songGenre = songs.filter(item =>
    item.categoryID.toLocaleString().includes(Data.id),
  );
  const handleAnimation = () => {
    setTimeout(() => {
      Animated.loop(
        Animated.timing(rotateAnimation, {
          toValue: 1,
          duration: 6000,
          useNativeDriver: true,
        }),
      ).start();
    }, 1500);
  };

  const rotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animationStyle = {
    transform: [{rotate: rotating}],
  };

  return (
    <MainContainer>
      <ScreenHeader onPress={handlegoBack} />
      <View style={GENERALSTLE.paddingHorizontal}>
        <View style={styles.imageContainer}>
          <Animated.View style={[animationStyle]}>
            <Image style={styles.image} source={{uri: `${Data.image}`}} />
            <View style={styles.cicle}></View>
          </Animated.View>
          <ImageBackground
            source={{uri: `${Data.image}`}}
            blurRadius={150}
            style={styles.black}>
            <View style={styles.info}>
              <Text style={styles.categoryName}>{Data.categoryName}</Text>
              <Text style={styles.categoryName}>Music</Text>
            </View>
          </ImageBackground>
        </View>
      </View>
      <ScrollView style={[styles.container, GENERALSTLE.paddingHorizontal]}>
        {songGenre.length === 0 ? (
          <View style={[styles.notFound]}>
            <Text style={styles.notFoundText}>
              Not results found for "{Data.categoryName}"
            </Text>
          </View>
        ) : (
          songGenre.map((item: Song) => (
            <SongItem
              key={item.id}
              onPress={() => handleNavigate(item.id)}
              image={item.image}
              songName={item.songName}
              artistName={item.artistName}
            />
          ))
        )}
      </ScrollView>
    </MainContainer>
  );
};

export default SongGenre;

const styles = StyleSheet.create({
  container: {},
  imageContainer: {
    width: '100%',
    height: ScreenDimensions.ScreenHeight / 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: ScreenDimensions.ScreenHeight / 3.2,
    height: ScreenDimensions.ScreenHeight / 3.2,
    borderRadius: ScreenDimensions.ScreenWidth,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: DARKCOLORS.textColor_2,
  },
  black: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '80%',
    height: '100%',
    opacity: 1,
  },
  cicle: {
    backgroundColor: DARKCOLORS.sencentColor,
    width: ScreenDimensions.ScreenHeight / 8,
    height: ScreenDimensions.ScreenHeight / 8,
    position: 'absolute',
    zIndex: 10,
    top:
      ScreenDimensions.ScreenHeight / 3.2 / 2 -
      ScreenDimensions.ScreenHeight / 8 / 2,
    left:
      ScreenDimensions.ScreenHeight / 3.2 / 2 -
      ScreenDimensions.ScreenHeight / 8 / 2,
    borderWidth: 20,
    borderColor: DARKCOLORS.textColor_2,
    borderRadius: ScreenDimensions.ScreenWidth,
  },

  categoryName: {
    color: DARKCOLORS.primaryColor,
    fontFamily: FONTFAMILY.bold,
    fontSize: 45,
    lineHeight: 50,
  },
  info: {
    width: '75%',
    marginLeft: '10%',
    display: 'flex',
    alignItems: 'flex-start',
    height: '100%',
    justifyContent: 'flex-end',
  },
  notFound: {
    paddingVertical: 20,
  },
  notFoundText: {
    textAlign: 'center',
    fontFamily: FONTFAMILY.medium,
    fontSize: FONTSIZE.size_3,
    color: DARKCOLORS.textColor_1,
  },
});
