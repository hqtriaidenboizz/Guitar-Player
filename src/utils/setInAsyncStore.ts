import AsyncStorage from '@react-native-async-storage/async-storage';

const setVolumeInAsyncStorage = async (key: string, value: any) : Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error('Error setting value in AsyncStorage:', error);
  }
};
export default setVolumeInAsyncStorage;


