import AsyncStorage from '@react-native-async-storage/async-storage';

const setVolumeInAsyncStorage = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, String(value));
     console.log('thanh cong');
  } catch (error) {
    console.error('Error setting value in AsyncStorage:', error);
  }
};
export default setVolumeInAsyncStorage;


