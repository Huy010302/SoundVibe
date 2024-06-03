import AsyncStorage from "@react-native-async-storage/async-storage";

export const setDataToAsyncStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log(`${key} saved successfully!`);
  } catch (error) {
    console.log(`Error saving ${key} data: `, error);
  }
};

export const getDataToAsyncStorage = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (!value) return;
    return JSON.parse(value);
  } catch (error) {
    console.log(`Error get ${key} data: `, error);
  }
};

export const removeDataFromAsyncStorage = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(`Error when remove ${key} data from async storage: `, error);
  }
};
