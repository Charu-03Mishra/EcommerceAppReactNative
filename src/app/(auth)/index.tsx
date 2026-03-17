import Images from "@/constants/Images";
import { useFonts } from "expo-font";
import { router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState } from "react";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
SplashScreen.preventAutoHideAsync();
export default function index() {
	const [isProduct, setIsProduct] = useState(1);
	const [skipped, setSkipped] = useState(false);
	const [loaded, error] = useFonts({
		"MontserratSubrayada-Regular": require("../../../assets/fonts/MontserratSubrayada-Regular.ttf"),
		"MontserratSubrayada-Bold": require("../../../assets/fonts/MontserratSubrayada-Bold.ttf"),
	});

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	if (!loaded && !error) {
		return null;
	}

	const handleNext = () => {
		if (isProduct < 3) {
			setIsProduct(isProduct + 1);
		}
	};

	const handlePrev = () => {
		if (isProduct > 1) {
			setIsProduct(isProduct - 1);
		}
	};

	const onNext = () => {
		router.push("/(auth)/Login/Login");
	};
	return (
		<SafeAreaView className=" px-5 py-3 flex-1 justify-between">
			<StatusBar
				barStyle="dark-content"
				backgroundColor="white"
				translucent={true}
			/>
			<View className="flex flex-row justify-between">
				<Text className="text-[18px] font-semibold">
					{isProduct}
					<Text className="text-gray-400">/3</Text>
				</Text>
				<Text className="text-[18px] font-semibold" onPress={onNext}>
					Skip
				</Text>
			</View>

			{isProduct === 1 && (
				<View className="flex flex-col items-center">
					<Image source={Images.product} className="w-[300px] h-[200px]" />
					<View className="flex flex-col items-center justify-center w-full pt-6 px-1">
						<Text className="font-montserratRegular text-[26px] font-bold ">
							Choose Products
						</Text>
						<Text className="text-[14px] text-center pt-2 color-gray-500 ">
							Browse a wide range of quality products, compare features, check
							details, and choose the best essentials or new arrivals
							effortlessly.
						</Text>
					</View>
				</View>
			)}
			{isProduct === 2 && (
				<View className="flex flex-col items-center">
					<Image source={Images.order} className="w-[300px] h-[200px]" />
					<View className="flex flex-col items-center justify-center w-full pt-6 px-1">
						<Text className="font-montserratRegular text-[26px] font-bold ">
							Make Payment
						</Text>
						<Text className="text-[14px] text-center pt-2 color-gray-500 ">
							Browse a wide range of quality products, compare features, check
							details, and choose the best essentials or new arrivals
							effortlessly.
						</Text>
					</View>
				</View>
			)}
			{isProduct === 3 && (
				<View className="flex flex-col items-center">
					<Image source={Images.payment} className="w-[300px] h-[200px]" />
					<View className="flex flex-col items-center justify-center w-full pt-6 px-1">
						<Text className="font-montserratRegular text-[26px] font-bold ">
							Get Your Order
						</Text>
						<Text className="text-[14px] text-center pt-2 color-gray-500 ">
							Browse a wide range of quality products, compare features, check
							details, and choose the best essentials or new arrivals
							effortlessly.
						</Text>
					</View>
				</View>
			)}

			<View className="flex flex-row justify-between">
				{isProduct > 1 ? (
					<Text onPress={handlePrev} className="text-[18px] text-gray-500">
						Prev
					</Text>
				) : (
					<Text> </Text>
				)}

				{isProduct < 3 ? (
					<Text onPress={handleNext} className="text-rose-600 text-[18px]">
						Next
					</Text>
				) : (
					<TouchableOpacity onPress={onNext}>
						<Text className="text-rose-600 text-[18px]">GetStarted</Text>
					</TouchableOpacity>
				)}
			</View>
		</SafeAreaView>
	);
}
