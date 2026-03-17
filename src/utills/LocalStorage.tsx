import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveData = async (name: string, value: string) => {
	await AsyncStorage.setItem(name, value);
};

export const getData = async (name: string) => {
	return await AsyncStorage.getItem(name);
};

export const removeData = async (name: string) => {
	await AsyncStorage.removeItem(name);
};

export const clearData = async () => {
	await AsyncStorage.clear();
};
    