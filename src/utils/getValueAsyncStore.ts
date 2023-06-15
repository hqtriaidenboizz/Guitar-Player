import AsyncStorage from '@react-native-async-storage/async-storage';
 
export const getValueFromAsyncStorage = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      const parsedValue = JSON.parse(value);
      return parsedValue;
    }
  } catch (error) {
    console.error('Error retrieving value from AsyncStorage:', error);
  }
};

