import Images from "@/constants/Images";
import WishListCard from "@/src/component/WishListCard/WishListCard";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
export default function WishList() {
	return (
		<SafeAreaView className=" bg-gray-200  ">
			<StatusBar barStyle="dark-content" backgroundColor="white" />

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
							My WishList
						</Text>
					</View>
				</View>
			</View>

			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 50 }}>
				<View className="mt-2 px-3 mb-6 flex-row flex-wrap gap-3">
					{CardData.map((item, i) => (
						<View
							key={item.id}
							className="bg-white rounded-[10px] overflow-hidden"
							style={{
								elevation: 5,
								shadowColor: "#000",
								shadowOffset: { width: 0, height: 2 },
								shadowOpacity: 0.2,
								shadowRadius: 3,
								width: 164
							}}>
							<WishListCard item={item} />
						</View>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
