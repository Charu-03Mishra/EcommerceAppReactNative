import Images from "@/constants/Images";
import * as SplashScreen from "expo-splash-screen";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
SplashScreen.preventAutoHideAsync();
export default function Payment({ setIsProduct, isProduct }) {
	return (
		<SafeAreaView className="">
			{isProduct ? (
				<View className="flex flex-col items-center">
					<Image source={Images.order} className="w-[300px] h-[200px]" />
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
			) : (
				<View className="flex flex-col items-center">
					<Image source={Images.payment} className="w-[300px] h-[200px]" />
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
		</SafeAreaView>
	);
}
