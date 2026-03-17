import {
	View,
	Text,
	StatusBar,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Images from "@/constants/Images";
import Card from "@/src/component/Card/Card";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	AntDesign,
	Feather,
	FontAwesome,
	FontAwesome6,
	Fontisto,
	MaterialCommunityIcons,
	MaterialIcons,
} from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import { router } from "expo-router";
import ReactNativeModal from "react-native-modal";
import ShopingAddress from "@/src/component/ShopingAddress/ShopingAddress";
const CardData = [
	{
		id: "1",
		images: Images.CardImag,
		title: "Women Floral Printed Kurta",
		description: "Comfortable cotton kurta for daily wear.",
		price: "₹1499",
		oldPrice: "₹2499",
		discount: "40% Off",
		rating: 2.3,
		reviews: "12,345",
	},
	{
		id: "2",
		images: Images.CardImag2,
		title: "Men Slim Fit Casual Shirt",
		description: "Stylish and breathable fabric for summer.",
		price: "₹999",
		oldPrice: "₹1899",
		discount: "47% Off",
		rating: 4,
		reviews: "8,210",
	},
	{
		id: "3",
		images: Images.CardImag3,
		title: "Women Party Wear Gown",
		description: "Elegant evening gown with premium finish.",
		price: "₹2999",
		oldPrice: "₹4599",
		discount: "35% Off",
		rating: 4.6,
		reviews: "5,678",
	},
	{
		id: "4",
		images: Images.CardImag4,
		title: "Men Running Sports Shoes",
		description: "Lightweight shoes with durable sole.",
		price: "₹1799",
		oldPrice: "₹3299",
		discount: "45% Off",
		rating: 2.4,
		reviews: "15,420",
	},
	{
		id: "5",
		images: Images.CardImag5,
		title: "Women Handbag",
		description: "Trendy leather handbag with spacious design.",
		price: "₹1299",
		oldPrice: "₹2199",
		discount: "41% Off",
		rating: 5,
		reviews: "9,876",
	},
	{
		id: "6",
		images: Images.CardImag6,
		title: "Unisex Digital Smartwatch",
		description: "Track fitness & notifications on the go.",
		price: "₹2499",
		oldPrice: "₹4999",
		discount: "50% Off",
		rating: 1.5,
		reviews: "21,345",
	},
];
export default function Products() {
	const [activeModal, setActiveModal] = useState("");
	return (
		<SafeAreaView className="flex-1 bg-gray-200">
			<StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
			<View
				className="bg-white  pb-4"
				style={{
					shadowColor: "#000",
					shadowOffset: { width: 0, height: 2 },
					shadowOpacity: 0.08,
					shadowRadius: 4,
					elevation: 5,
					paddingTop: 12,
				}}>
				{/* Header Row */}
				<View className="flex-row items-center px-4 gap-6">
					{/* Back Button */}
					<AntDesign
						name="arrowleft"
						size={24}
						color="black"
						onPress={() => router.push("/(main)/(tab)")}
					/>

					{/* Search Box */}
					<View className="flex-1">
						<View className="flex-row items-center  border border-gray-400 bg-white rounded-lg px-3  shadow-sm">
							<Feather name="search" size={20} color="#4B5563" />
							<TextInput
								className="px-2 py-[4px] text-base "
								placeholder="Search by...."
								placeholderTextColor="#9CA3AF"
							/>
						</View>
					</View>
					<FontAwesome name="shopping-cart" size={24} color="black" />
				</View>
			</View>
			<ScrollView contentContainerStyle={{ paddingBottom: 6 }}>
				<View className="mt-2 px-3 flex-row flex-wrap gap-3">
					{CardData.map((item, i) => (
						<View
							key={item.id}
							className="w-[48%] bg-white  rounded-[10px] overflow-hidden"
							style={{
								elevation: 5, // Android shadow
								shadowColor: "#000", // iOS shadow
								shadowOffset: { width: 0, height: 2 },
								shadowOpacity: 0.2,
								shadowRadius: 3,
							}}>
							<Card item={item} key={i} />
						</View>
					))}
				</View>
			</ScrollView>
			<View className="flex flex-row items-center   ">
				{/* Sort Button */}
				<TouchableOpacity
					onPress={() => setActiveModal("sort")}
					activeOpacity={0.85}
					className="flex flex-row items-center justify-center px-16 py-4 bg-white shadow-md"
					style={{
						shadowColor: "#000",
						shadowOffset: { width: 0, height: 2 },
						shadowOpacity: 0.12,
						shadowRadius: 3,
						elevation: 4,
					}}>
					<FontAwesome6 name="arrow-down-wide-short" size={20} color="black" />
					<Text
						className="text-black text-[15px] ml-2"
						style={{ fontFamily: "Montserrat_700Bold" }}>
						Sort
					</Text>
				</TouchableOpacity>

				{/* Filter Button */}
				<TouchableOpacity
					activeOpacity={0.85}
					className="flex flex-row items-center justify-center px-16 py-4  bg-white shadow-md"
					style={{
						shadowColor: "#000",
						shadowOffset: { width: 0, height: 2 },
						shadowOpacity: 0.15,
						shadowRadius: 3,
						elevation: 5,
					}}>
					<Fontisto name="filter" size={20} color="black" />
					<Text
						className="text-black text-[15px] ml-2"
						style={{ fontFamily: "Montserrat_700Bold" }}>
						Filter
					</Text>
				</TouchableOpacity>
			</View>

			{activeModal === "sort" && (
				<ReactNativeModal
					isVisible={true}
					onBackdropPress={() => setActiveModal("")}
					onBackButtonPress={() => setActiveModal("")}
					backdropOpacity={0.5}
					animationIn="slideInUp"
					animationOut="slideOutDown"
					style={{ justifyContent: "flex-end", margin: 0 }}
					useNativeDriver>
					{/* Wrap EditProfile in a rounded container */}
					<View className="  py-3 bg-white rounded-t-3xl">
						<ShopingAddress activeModal={activeModal} />
					</View>
				</ReactNativeModal>
			)}
		</SafeAreaView>
	);
}
