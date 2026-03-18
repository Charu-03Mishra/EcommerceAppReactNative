import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "../Redux/Store";

import "@/global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getData } from "../utills/LocalStorage";
import { useFonts } from "@expo-google-fonts/montserrat";
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import {
	Poppins_400Regular,
	Poppins_700Bold,
} from "@expo-google-fonts/poppins";
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 2,
			staleTime: 1000 * 60 * 5, // 5 minutes
			gcTime: 1000 * 60 * 10, // 10 minutes (formerly cacheTime)
		},
	},
});

export default function RootNavigation() {
	const [token, setToken] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchToken = async () => {
			const t = await getData("token");
			setToken(t);
			console.log("Token Home Page:", t);
		};
		fetchToken();
	}, []);

	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_700Bold,
		Poppins_400Regular,
		Poppins_700Bold,
	});

	useEffect(() => {
		if (fontsLoaded) SplashScreen.hideAsync();
	}, [fontsLoaded]);

	if (!fontsLoaded) return null;

	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<Stack screenOptions={{ headerShown: false }}>
					<Stack.Screen name="index" />
					<Stack.Screen name="(auth)" />
					<Stack.Screen name="(main)" />
				</Stack>
				{token ? (
					<Redirect href="/(main)/(tab)" />
				) : (
					<Redirect href="/(auth)" />
				)}
			</Provider>
		</QueryClientProvider>
	);
}
