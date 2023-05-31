import {StyleSheet, FlatList} from 'react-native';
import React from 'react';
import MainContainer from '../components/Global/MainContainer';
import ToolItem from '../components/Tools/ToolItem';
import {GENERALSTLE} from '../styles/generalStyle';
import { useNavigation } from '@react-navigation/native';
import { RootStackScreenProps } from '../types/navigation/types';

const Data = [
  {
    id: 1,
    title: 'Chord library',
    address: 'ChordLibrary',
    image:
      'https://i.pinimg.com/564x/29/53/c7/2953c737b6f5818dfefbac16be5d1b1d.jpg',
  },
  {
    id: 2,
    title: 'Chord Game',
    address: 'ChordGame',
    image:
      'https://i.pinimg.com/564x/ea/12/92/ea12928ab10bc7906dcb5b4ae6c73142.jpg',
  },
];
const Tools = () => {
  const navigation = useNavigation<RootStackScreenProps<'MyTabs'>['navigation']>()
  const handleNavigate = (address: any) => {
    navigation.navigate(address)
  }
  return (
    <MainContainer>
      <FlatList
        style={GENERALSTLE.paddingHorizontal}
        data={Data} 
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ToolItem title={item.title} image={item.image} onPress={() => handleNavigate(item.address)} />
        )}
      />
    </MainContainer>
  );
};

export default Tools;

const styles = StyleSheet.create({
  content: {
    paddingBottom: 120,
  },
});
