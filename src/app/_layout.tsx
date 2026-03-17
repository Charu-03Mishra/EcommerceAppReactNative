import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "../Redux/Store";

import "@/global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
			try {
				const storedToken = await AsyncStorage.getItem("userToken");
				setToken(storedToken);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching token:", error);
				setLoading(false);
			}
		};

		fetchToken();

		// Hide splash screen
		setTimeout(() => {
			SplashScreen.hideAsync();
		}, 1000);
	}, []);

	if (loading) return null; // Show loading until token is checked

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
