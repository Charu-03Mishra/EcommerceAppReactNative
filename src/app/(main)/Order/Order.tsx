import Images from "@/constants/Images";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
	Image,
	ScrollView,
	StatusBar,
	Text,
	TextInput,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CardData = [
	{
		id: "1",
		delivery: "Delivery on March 15",

		status: true,
		images: Images.CardImag,
		title: "Women Floral Printed Kurta",
	},
	{
		id: "2",
		delivery: "Cancelled on March 15",
		images: Images.CardImag2,
		title: "Men Slim Fit Casual Shirt",
		status: false,
	},
	{
		id: "3",
		delivery: "Delivery on June 25",
		status: true,
		images: Images.CardImag3,
		title: "Women Party Wear Gown",
	},
	{
		id: "4",
		images: Images.CardImag4,
		title: "Men Running Sports Shoes",
		delivery: "Cancelled on May 5",
		status: false,
	},
	{
		id: "5",
		delivery: "Delivery on June 25",
		status: true,
		images: Images.CardImag3,
		title: "Women Party Wear Gown",
	},
	{
		id: "6",
		images: Images.CardImag4,
		title: "Men Running Sports Shoes",
		delivery: "Cancelled on May 5",
		status: false,
	},
];
export default function Order() {
	return (
		<SafeAreaView className="flex-1 bg-white">
			{/* StatusBar config */}
			<StatusBar barStyle="dark-content" backgroundColor="white" />

			{/* Header */}
			<View
				className="px-3 bg-white  pb-4"
				style={{
					shadowColor: "#000",
					shadowOffset: { width: 0, height: 2 },
					shadowOpacity: 0.1,
					shadowRadius: 3,
					elevation: 4,
					paddingTop: 10,
				}}>
				<View className="flex flex-row items-center px-3 justify-between">
					<View className="flex flex-row items-center gap-3">
						<AntDesign
							name="arrowleft"
							size={22}
							color="black"
							onPress={() => router.push("/(main)/(tab)")}
						/>
						<Text
							style={{ fontFamily: "Montserrat_600SemiBold" }}
							className="text-[14px]">
							My Order
						</Text>
					</View>
				</View>
			</View>
			<View
				className="px-3 bg-white pb-4 "
				style={{
					shadowColor: "#000",
					shadowOffset: { width: 0, height: 2 },
					shadowOpacity: 0.1,
					shadowRadius: 3,
					elevation: 4,
					paddingTop: 10,
				}}>
				<View className=" bg-white border border-gray-400 rounded-lg shadow-md">
					<View className="flex-row px-3 py-1 gap-2 items-center">
						<Feather name="search" size={22} color="black" />
						<TextInput
							placeholder="Search Your Order...."
							className="flex-1 px-2 text-[15px]"
							placeholderTextColor="#999"
						/>
					</View>
				</View>
			</View>
			<ScrollView style={{ paddingTop: 1 }}>
				<View className=" bg-white  flex-1">
					{CardData.map((item, index) => (
						<View
							className="flex-row px-3 py-3 mb-3 gap-2 bg-white rounded-2xl items-center"
							style={{
								shadowColor: "#000",
								shadowOffset: { width: 0, height: 2 },
								shadowOpacity: 0.1,
								shadowRadius: 3,
								elevation: 4,
							}}>
							{/* Left Image */}
							<View className="w-[90px] h-[110px] rounded-xl overflow-hidden">
								<Image
									source={item.images}
									className="w-full h-full"
									resizeMode="cover"
								/>
							</View>

							{/* Right Content */}
							<View className="flex-1 flex-row items-center justify-between ml-3">
								{/* Texts */}
								<View className="flex-1 pr-2">
									<Text
										style={{ fontFamily: "Montserrat_600SemiBold" }}
										className={`${
											item.status === false ? "text-red-600" : "text-green-700"
										} text-[12px] pb-1`}
										numberOfLines={1}
										ellipsizeMode="tail">
										{item.delivery}
									</Text>

									<Text
										style={{ fontFamily: "Montserrat_600SemiBold" }}
										className="text-[13px] text-black flex-shrink"
										numberOfLines={2}
										ellipsizeMode="tail">
										{item.title}
									</Text>
								</View>

								{/* Arrow */}
								<MaterialIcons
									name="keyboard-arrow-right"
									size={26}
									color="black"
								/>
							</View>
						</View>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
