import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomTitle from '../Global/CustomTitle';
import {DARKCOLORS} from '../../constants/colors';
import {FONTFAMILY} from '../../constants/fonts';
import {FONTSIZE} from '../../constants/sizes';

interface ChordLyric {
  chord?: string;
  lyric?: string;
}
interface LyricsData {}

const SongLyrics: React.FC<{lyrics: LyricsData}> = ({lyrics}) => {
  return (
    <View>
      {Object.entries(lyrics).map(([sectionName, lines], index) => (
        <View key={index}>
          <CustomTitle title={sectionName} />
          <View key={index}>
            {lines.map((segment: [], segmentIndex: number) => (
              <View key={segmentIndex} style={styles.lines}>
                {segment.map((line: ChordLyric, index: number) => (
                  <View key={index} style={{marginRight: 5}}>
                    <Text style={styles.chord}>{line.chord}</Text>
                    <Text style={styles.lyric}>{line.lyric}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};

export default SongLyrics;

const styles = StyleSheet.create({
  lines: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  lyric: {
    color: DARKCOLORS.textColor_2,
    fontFamily: FONTFAMILY.regular,
    fontSize: FONTSIZE.size_3,
    paddingVertical: 5,
    display: 'flex',
    marginBottom: 10,
  },
  chord: {
    fontFamily: FONTFAMILY.bold,
    lineHeight: 21,
    fontSize: FONTSIZE.size_3,
    color: DARKCOLORS.hightLightColor,
    flexWrap: 'wrap',
  },
});
