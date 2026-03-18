import Images from "@/constants/Images";
import { AntDesign, Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
	Image,
	ScrollView,
	StatusBar,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const orders = [
	{
		name: "GOBOULT",

		routing: "/(main)/Order/Order",
	},
	{
		name: "Ferrari Jacket",
		icon: <AntDesign name="heart" size={16} color="#51A2FF" />,
		routing: "/(main)/WishList/WishList",
	},
	{
		name: "Jeans",

		routing: "/(main)/Coupons/Coupons",
	},
	{
		name: "Saree",

		routing: "/(main)/Help/Help",
	},
];
const RecentlySearch = [
	{
		name: "Suit for Women",
		images: Images.search3,

		routing: "/(main)/Order/Order",
	},
	{
		name: "Ferrari Jacket",
		images: Images.search,
		routing: "/(main)/WishList/WishList",
	},
	{
		name: "Shoes for Man",
		images: Images.search1,
		routing: "/(main)/Coupons/Coupons",
	},
	{
		name: "Watch",
		images: Images.search2,
		routing: "/(main)/Help/Help",
	},
];

const popularProducts = [
	{
		id: 8,
		name: "Laptop Sleeve",
		category: "Electronics",
		price: 699,
		rating: 4.0,
		image:
			"https://i.pinimg.com/736x/50/c0/f4/50c0f4f2f2f136f461cfffaf02c95efa.jpg",
		isPopular: true,
	},
	{
		id: 9,
		name: "Sunglasses",
		category: "Fashion",
		price: 1299,
		rating: 4.3,
		image:
			"https://i.pinimg.com/1200x/64/57/48/645748aa3faeeb8787ca24aba1e69e29.jpg",
		isPopular: true,
	},
	{
		id: 10,
		name: "Wireless Keyboard & Mouse",
		category: "Electronics",
		price: 2199,
		rating: 4.4,
		image:
			"https://i.pinimg.com/736x/e4/b2/cc/e4b2cc5fd16767665d1dd5541f3487d5.jpg",
		isPopular: true,
	},
	{
		id: 11,
		name: "Fitness Tracker Band",
		category: "Electronics",
		price: 1699,
		rating: 4.2,
		image:
			"https://i.pinimg.com/1200x/1a/49/a8/1a49a87fa40e34f82dcabf1b3770289e.jpg",
		isPopular: true,
	},
	{
		id: 12,
		name: "Denim Jeans",
		category: "Fashion",
		price: 1499,
		rating: 4.1,
		image:
			"https://i.pinimg.com/736x/8a/37/5a/8a375a79ddef3f5dd316f591ec2b2781.jpg",
		isPopular: true,
	},
	{
		id: 13,
		name: "Cotton Bedsheet",
		category: "Home & Living",
		price: 1299,
		rating: 4.0,
		image:
			"https://i.pinimg.com/736x/c7/43/82/c74382961b24926b73b7addcc5d2c59f.jpg",
		isPopular: true,
	},
	{
		id: 14,
		name: "Ceramic Coffee Mug",
		category: "Home & Living",
		price: 399,
		rating: 4.3,
		image:
			"https://i.pinimg.com/736x/83/2c/09/832c09795685359c9428377a354c9e62.jpg",
		isPopular: true,
	},
	{
		id: 15,
		name: "Perfume Spray",
		category: "Beauty",
		price: 1099,
		rating: 4.2,
		image:
			"https://i.pinimg.com/736x/24/10/c2/2410c2b382a8b86971460971cb4a9e05.jpg",
		isPopular: true,
	},
];

export default function Search() {
	return (
		<SafeAreaView className="flex-1 ">
			<StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
			{/* <ScrollView> */}
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
						name="arrow-left"
						size={24}
						color="black"
						onPress={() => router.push("/(main)/(tab)")}
					/>

					{/* Search Box */}
					<View className="flex-1">
						<View className="flex-row items-center  border border-gray-400 bg-white rounded-lg px-3 py-1 shadow-sm">
							<Feather name="search" size={20} color="#4B5563" />
							<TextInput
								className="px-2 py-2 text-base "
								placeholder="Search by...."
								placeholderTextColor="#9CA3AF"
							/>
						</View>
					</View>
				</View>
			</View>

			<ScrollView className="flex-1">
				<View
					className="bg-white mb-2 mt-2 px-4"
					style={{
						shadowColor: "#000",
						shadowOffset: { width: 0, height: 2 },
						shadowOpacity: 0.08,
						shadowRadius: 4,
						elevation: 5,
						paddingTop: 12,
					}}>
					<Text style={{ fontFamily: "Poppins_700Bold" }}>Recent Searches</Text>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
						<View className="flex-row flex-wrap gap-2 mt-1 mb-2">
							{RecentlySearch.map((img, index) => (
								<View>
									<TouchableOpacity
										key={index}
										className={`border border-gray-500 rounded-full w-[70px] h-[70px] 
                            `}>
										<Image
											source={img.images}
											className="w-full h-full rounded-full"
										/>
									</TouchableOpacity>
									<Text
										style={{
											maxWidth: 80,
											fontFamily: "Poppins_400Regular",
											fontSize: 12,
											marginTop: 3,
											textAlign: "center",
										}}>
										{img.name}
									</Text>
								</View>
							))}
						</View>
					</ScrollView>
				</View>
				<View
					className="bg-white mb-2 mt-2 px-4"
					style={{
						shadowColor: "#000",
						shadowOffset: { width: 0, height: 2 },
						shadowOpacity: 0.08,
						shadowRadius: 4,
						elevation: 5,
						paddingTop: 12,
					}}>
					<Text style={{ fontFamily: "Poppins_700Bold" }}>
						Trending Searches
					</Text>
					<View className="flex flex-row flex-wrap mb-5 gap-3 mt-4">
						{orders.map((item, index) => (
							<TouchableOpacity
								key={index}
								activeOpacity={0.7}
								className="w-[48%] bg-gray-50 px-3 py-5 rounded-lg border border-gray-200 flex-row items-center  gap-2">
								<Text
									className="text-[13px] text-gray-700"
									style={{ fontFamily: "Poppins_700Bold" }}>
									{item.name}
								</Text>
							</TouchableOpacity>
						))}
					</View>
				</View>

				<View
					className="bg-white mt-2 px-4"
					style={{
						shadowColor: "#000",
						shadowOffset: { width: 0, height: 2 },
						shadowOpacity: 0.08,
						shadowRadius: 4,
						elevation: 5,
						paddingTop: 12,
					}}>
					<Text style={{ fontFamily: "Poppins_700Bold" }}>
						Popular Products
					</Text>

					<View className="mt-2">
						{Array.from({
							length: Math.ceil(popularProducts.length / 3),
						}).map((_, rowIndex) => (
							<View key={rowIndex} className="flex-row gap-[10px] mb-4">
								{popularProducts
									.slice(rowIndex * 3, rowIndex * 3 + 3)
									.map((item, index) => (
										<View key={index} className="items-center">
											<TouchableOpacity
												activeOpacity={0.8}
												className="border border-gray-300 rounded-xl w-[105px] overflow-hidden shadow-sm bg-white">
												<Image
													source={{ uri: item.image }}
													className="w-full h-[130px]"
													resizeMode="cover"
												/>
												<Text
													numberOfLines={1}
													style={{
														fontSize: 12,
														fontFamily: "Poppins_400Regular",

														textAlign: "center",
														color: "white",
														paddingTop: 2,
														paddingBottom: 2,

														backgroundColor: "#0a9396",
													}}>
													{item.name}
												</Text>
											</TouchableOpacity>
										</View>
									))}
							</View>
						))}
					</View>
				</View>
			</ScrollView>
			{/* </ScrollView> */}
		</SafeAreaView>
	);
}
