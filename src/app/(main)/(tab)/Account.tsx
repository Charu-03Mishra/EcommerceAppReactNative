import EditProfile from "@/src/component/EditProfile/EditProfile";
import ShopingAddress from "@/src/component/ShopingAddress/ShopingAddress";
import {
	Montserrat_600SemiBold,
	useFonts,
} from "@expo-google-fonts/montserrat";
import {
	FontAwesome,
	FontAwesome5,
	Ionicons,
	MaterialIcons,
} from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import ReactNativeModal from "react-native-modal"; // ✅ correct import
import { SafeAreaView } from "react-native-safe-area-context";

const orders = [
	{
		name: "Order",
		icon: <FontAwesome5 name="first-order" size={16} color="#51A2FF" />,
		routing: "/(main)/Order/Order",
	},
	{
		name: "WishList",
		icon: <AntDesign name="hearto" size={16} color="#51A2FF" />,
		routing: "/(main)/WishList/WishList",
	},
	{
		name: "Coupons",
		icon: (
			<MaterialCommunityIcons name="gift-outline" size={16} color="#51A2FF" />
		),
		routing: "/(main)/Coupons/Coupons",
	},
	{
		name: "Help",
		icon: <Entypo name="help-with-circle" size={16} color="#51A2FF" />,
		routing: "/(main)/Help/Help",
	},
];

export default function Account() {
	const [activeModal, setActiveModal] = useState(null);
	const [fontsLoaded] = useFonts({
		Montserrat_600SemiBold,
	});

	if (!fontsLoaded) {
		return null; // or a loader component
	}

	return (
		<SafeAreaView className="bg-gray-100 flex-1">
			<ScrollView showsVerticalScrollIndicator={false} className="px-3">
				{/* Profile Card */}
				<View
					className="bg-white px-3 mt-2 py-4 rounded-2xl shadow-md"
					style={{
						shadowColor: "#000",
						shadowOffset: { width: 0, height: 2 },
						shadowOpacity: 0.08,
						shadowRadius: 3,
						elevation: 3,
					}}>
					<View className="flex-row items-center justify-between">
						<View>
							<Text
								className="text-[15px] text-gray-800"
								style={{ fontFamily: "Montserrat_600SemiBold" }}>
								Aryan
							</Text>
							<Text
								className="text-[12px] text-gray-500"
								style={{ fontFamily: "Montserrat_600SemiBold" }}>
								+91 8976546789
							</Text>
						</View>

						{/* Coin Badge */}
						<View className="flex-row items-center px-2 py-1 rounded-full border border-[#0a9396] bg-[#e6f6f7]">
							<MaterialCommunityIcons
								name="hand-coin-outline"
								size={20}
								color="#0a9396"
							/>
							<Text
								className="ml-1 text-[14px] text-gray-700"
								style={{ fontFamily: "Montserrat_600SemiBold" }}>
								0
							</Text>
						</View>
					</View>

					{/* Order Shortcuts */}
					<View className="flex flex-row flex-wrap gap-3 mt-4">
						{orders.map((item, index) => (
							<TouchableOpacity
								key={index}
								onPress={() =>
									item.routing
										? router.push(item.routing)
										: console.warn("No route defined for", item.name)
								}
								activeOpacity={0.7}
								className="w-[48%] bg-gray-50 px-3 py-5 rounded-lg border border-gray-200 flex-row items-center  gap-2">
								<Text>{item.icon}</Text>
								<Text
									className="text-[13px] text-gray-700"
									style={{ fontFamily: "Montserrat_600SemiBold" }}>
									{item.name}
								</Text>
							</TouchableOpacity>
						))}
					</View>
				</View>

				{/* Settings Section */}
				<View className="bg-white mt-4 rounded-2xl shadow-sm">
					{[
						{
							icon: <Feather name="edit" size={22} color="#4B5563" />,
							label: "Edit Profile",
							type: "modal",
							key: "edit", // unique key for modal
						},
						{
							icon: (
								<FontAwesome name="address-book" size={22} color="#4B5563" />
							),
							label: "Shopping Address",
							type: "modal",
							key: "address",
						},

						{
							icon: <Ionicons name="notifications" size={22} color="#4B5563" />,
							label: "Notification",
						},
						{
							icon: <Feather name="credit-card" size={22} color="#4B5563" />,
							label: "Cards",
						},
						{
							icon: <Ionicons name="settings" size={24} color="black" />,
							label: "Setting",
							route: "/(main)/Setting/Setting",
						},
						{
							icon: (
								<MaterialIcons name="privacy-tip" size={22} color="#4B5563" />
							),
							label: "Privacy Center",
						},
						{
							icon: <FontAwesome name="language" size={22} color="#4B5563" />,
							label: "Language",
						},
					].map((item, i) => (
						<TouchableOpacity
							key={i}
							onPress={() => {
								if (item.type === "modal") {
									setActiveModal(item.key); // ✅ set which modal to open
								} else if (item.route) {
									router.push(item.route);
								}
							}}
							className={`flex-row items-center px-4 py-4 `}
							activeOpacity={0.6}>
							{item.icon}
							<Text
								className="ml-3 text-[13px] text-gray-800"
								style={{ fontFamily: "Montserrat_600SemiBold" }}>
								{item.label}
							</Text>
						</TouchableOpacity>
					))}
				</View>

				{/* Improved Modal */}
				{activeModal === "edit" && (
					<ReactNativeModal
						isVisible={true}
						onBackdropPress={() => setActiveModal(null)}
						onBackButtonPress={() => setActiveModal(null)}
						backdropOpacity={0.5}
						animationIn="slideInUp"
						animationOut="slideOutDown"
						style={{ justifyContent: "flex-end", margin: 0 }}
						useNativeDriver>
						{/* Wrap EditProfile in a rounded container */}
						<View className="flex-auto bg-white rounded-t-3xl">
							<EditProfile setActiveModal={setActiveModal} />
						</View>
					</ReactNativeModal>
				)}

				{activeModal === "address" && (
					<ReactNativeModal
						isVisible={true}
						onBackdropPress={() => setActiveModal(null)}
						onBackButtonPress={() => setActiveModal(null)}
						backdropOpacity={0.5}
						animationIn="slideInUp"
						animationOut="slideOutDown"
						style={{ justifyContent: "flex-end", margin: 0 }}
						useNativeDriver>
						{/* Wrap EditProfile in a rounded container */}
						<View className=" px-4 py-3 bg-white rounded-t-3xl">
							<ShopingAddress activeModal={activeModal} />
						</View>
					</ReactNativeModal>
				)}

				{/* Logout */}
				<TouchableOpacity
					className="mt-5 mb-3 mx-4 py-4 rounded-xl border border-[#0BBCB5] bg-white"
					activeOpacity={0.7}>
					<Text
						className="text-center text-[14px] text-[#0BBCB5]"
						style={{ fontFamily: "Montserrat_600SemiBold" }}>
						Logout
					</Text>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	);
}
