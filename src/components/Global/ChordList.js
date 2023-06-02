import React from 'react';
import { View, Text, FlatList ,StyleSheet} from 'react-native';

const ChordList = ({ chords }) => {
  const renderChord = ({ item  }) => {
    return (
      <View style={styles.chordContainer}>
        <Text style={styles.chordTitle}>{item}</Text>
        <FlatList
          data={chords[item]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.chordItem}>
              <Text style={styles.chordPositions}>{item.positions.join(' ')}</Text>
              <Text style={styles.chordFingerings}>{item.fingerings[0].join(' ')}</Text>
            </View>
          )}
        />
      </View>
    );
  };

  return (
    <FlatList
      data={Object.keys(chords)}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderChord}
    />
  );
};

const styles = StyleSheet.create({
  chordContainer: {
    marginBottom: 20,
  },
  chordTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chordItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  chordPositions: {
    marginRight: 10,
  },
  chordFingerings: {},
});

export default ChordList;
