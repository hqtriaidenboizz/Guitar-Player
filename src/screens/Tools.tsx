import {StyleSheet, FlatList} from 'react-native';
import React from 'react';
import MainContainer from '../components/Global/MainContainer';
import ToolItem from '../components/Tools/ToolItem';
import {GENERALSTLE} from '../styles/generalStyle';
import { useNavigation } from '@react-navigation/native';
import { RootStackScreenProps } from '../types/navigation/types';
import { ToolData } from '../assets/Data/FakeData';

const Tools = () => {
  const navigation = useNavigation<RootStackScreenProps<'MyTabs'>['navigation']>()
  const handleNavigate = (address: any) => {
    navigation.navigate(address)
  }
  return (
    <MainContainer>
      <FlatList
        style={GENERALSTLE.paddingHorizontal}
        data={ToolData} 
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
  },
});
