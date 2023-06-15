import AsyncStorage from '@react-native-async-storage/async-storage';

export const getValueFromAsyncStorage = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    if (jsonValue !== null) {
      const value = JSON.parse(jsonValue);
      return value;
    }
    return null;
  } catch (error) {
    console.error('Error retrieving value from AsyncStorage:', error);
  }
};
