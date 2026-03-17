import Images from "@/constants/Images";
import {
	Montserrat_600SemiBold,
	useFonts,
} from "@expo-google-fonts/montserrat";
import {
	FontAwesome,
	FontAwesome6,
	MaterialCommunityIcons,
	MaterialIcons,
} from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { useState } from "react";
import {
	Image,
	Pressable,
	SafeAreaView,
	ScrollView,
	StatusBar,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

const CardData = [
	{
		id: "1",
		size: "M",
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
		size: "M",
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
		size: "M",
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
		size: "M",
		images: Images.CardImag4,
		title: "Men Running Sports Shoes",
		description: "Lightweight shoes with durable sole.",
		price: "₹1799",
		oldPrice: "₹3299",
		discount: "45% Off",
		rating: 2.4,
		reviews: "15,420",
	},
];
export default function CategoriesScreen() {
	const [isQuentity, setIsQuantity] = useState(1);
	const [fontsLoaded] = useFonts({
		Montserrat_600SemiBold,
	});

	if (!fontsLoaded) {
		return null;
	}

	const isNext = () => {
		setIsQuantity((prev) => prev + 1);
	};
	const isPrev = () => {
		if (isQuentity > 0) {
			setIsQuantity((prev) => prev - 1);
		}
	};
	return (
		<SafeAreaView className="flex-1 bg-gray-200">
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
          paddingTop:10
				}}>
				<View className="flex flex-row items-center px-3 justify-between">
					<View className="flex flex-row items-center gap-3">
						<AntDesign name="arrowleft" size={22} color="black" onPress={()=> router.push("/(main)/(tab)")} />
						<Text
							style={{ fontFamily: "Montserrat_600SemiBold" }}
							className="text-[14px]">
							My Cart
						</Text>
					</View>
				</View>

				<View className="flex flex-row justify-between items-center mt-3">
					<Text
						className="text-[#1a1d1d]"
						style={{ fontFamily: "Montserrat_700SemiBold" }}>
						Deliver to :{" "}
						<Text style={{ fontFamily: "Montserrat_600SemiBold" }}>
							Haridwar
						</Text>
					</Text>
					<Pressable className="border border-[#0a9396] py-2 px-6 rounded-lg">
						<Text
							className="text-[#0a9396]"
							style={{ fontFamily: "Montserrat_700SemiBold" }}>
							Change
						</Text>
					</Pressable>
				</View>
			</View>

			{/* Scrollable List */}
			<ScrollView
				className="flex-1"
				contentContainerStyle={{ padding: 10, paddingBottom: 10 }}
				showsVerticalScrollIndicator={false}>
				{CardData.map((item, index) => (
					<View
						className="bg-white my-2  rounded-lg"
						key={index}
						style={{
							shadowColor: "#000",
							shadowOffset: { width: 0, height: 2 },
							shadowOpacity: 0.1,
							shadowRadius: 3,
							elevation: 4,
						}}>
						<View className="px-1 flex-row gap-5 items-center rounded-lg">
							{/* Left Image + Quantity */}
							<View className="flex flex-col mb-4">
								<View className="w-[90px] h-[130px] rounded-lg  py-2">
									<Image
										source={item.images}
										className="w-full h-full rounded-lg"
										resizeMode="cover"
									/>
								</View>
								{/* Quantity Selector */}
								<View className="flex-row items-center gap-3  bg-white border border-green-800 rounded-lg w-[90px] px-[9px] py-1">
									<Pressable
										className="w-5 h-8 items-center justify-center"
										onPress={isPrev}
										disabled={isQuentity <= 0}>
										<Text
											className={`text-xl ${
												isQuentity <= 0 ? "text-gray-400" : "text-[#0a9396]"
											}`}
											style={{ fontFamily: "Montserrat_700SemiBold" }}>
											–
										</Text>
									</Pressable>
									<View className="w-5 h-8 items-center justify-center">
										<Text
											className="text-[#0a9396] text-lg"
											style={{ fontFamily: "Montserrat_700SemiBold" }}>
											{isQuentity}
										</Text>
									</View>
									<Pressable
										className="w-5 h-8 items-center justify-center"
										onPress={isNext}>
										<Text
											className="text-[#0a9396] text-xl"
											style={{ fontFamily: "Montserrat_700SemiBold" }}>
											+
										</Text>
									</Pressable>
								</View>
							</View>

							{/* Right Content */}
							<View className="flex-1 bg-white mb-3 ">
								{/* Title */}
								<Text
									style={{ fontFamily: "Montserrat_600SemiBold" }}
									className="text-[12px] pb-2 px-1 text-black"
									numberOfLines={1}
									ellipsizeMode="tail">
									{item.title}
								</Text>
								<Text
									style={{ fontFamily: "Montserrat_900SemiBold" }}
									className="text-md px-1 text-gray-400"
									numberOfLines={1}
									ellipsizeMode="tail">
									Size: {item.size}
								</Text>

								{/* ⭐ Rating */}
								<View className="flex-row items-center gap-2 mt-2">
									{Array.from({ length: 5 }).map((_, index) => {
										if (index + 1 <= Math.floor(item.rating)) {
											return (
												<FontAwesome
													key={index}
													name="star"
													size={20}
													color="#FFD700"
												/>
											);
										} else if (index < item.rating) {
											return (
												<FontAwesome
													key={index}
													name="star-half-empty"
													size={20}
													color="#FFD700"
												/>
											);
										} else {
											return (
												<FontAwesome
													key={index}
													name="star-o"
													size={20}
													color="#d1d5db"
												/>
											);
										}
									})}
									<Text
										style={{
											marginLeft: 6,
											fontFamily: "Montserrat_600Medium",
											color: "green",
										}}>
										{item.rating.toFixed(1)}
									</Text>
								</View>

								{/* 💰 Price Section */}
								<View className="flex-row items-center mt-2 gap-3">
									<Text
										style={{
											fontFamily: "Montserrat_600SemiBold",
											color: "#15803d",
											fontSize: 14,
										}}>
										{item.discount}
									</Text>
									<Text
										style={{
											fontFamily: "Montserrat_700Bold",
											textDecorationLine: "line-through",
											color: "#9ca3af",
											fontSize: 14,
										}}>
										{item.oldPrice}
									</Text>
									<Text
										style={{
											fontFamily: "Montserrat_600SemiBold",
											fontSize: 14,
											color: "#111827",
										}}>
										{item.price}
									</Text>
								</View>
								<Text
									style={{ fontFamily: "Montserrat_700SemiBold" }}
									className="text-md px-1 text-gray-500"
									numberOfLines={1}
									ellipsizeMode="tail">
									or Pay ₹ 467 +{" "}
									<MaterialCommunityIcons
										name="hand-coin-outline"
										size={17}
										color="#FFD700"
									/>
									25
								</Text>
							</View>
						</View>
						<View className="flex flex-row items-center px-3 gap-2   py-2">
							<Text>
								<FontAwesome6 name="truck-fast" size={17} color="black" />
							</Text>
							<Text style={{ fontFamily: "Montserrat_600SemiBold" }}>
								Express
							</Text>

							<Text style={{ fontFamily: "Montserrat_700SemiBold" }}>
								Delivery in 2 days, sat
							</Text>
						</View>

						<View
							className="flex flex-row items-center px-3 justify-between  py-3"
							>
							<TouchableOpacity
								activeOpacity={0.8}
								className="bg-red-500 px-6 py-3 rounded-2xl flex flex-row items-center justify-center shadow-md"
								style={{
									shadowColor: "#000",
									shadowOffset: { width: 0, height: 2 },
									shadowOpacity: 0.15,
									shadowRadius: 3,
									elevation: 4,
								}}>
								<MaterialIcons
									name="delete"
									size={22}
									color="white"
									style={{ marginRight: 8 }}
								/>
								<Text
									className="text-white text-[16px]"
									style={{ fontFamily: "Montserrat_700Bold" }}>
									Remove
								</Text>
							</TouchableOpacity>

							<TouchableOpacity
								activeOpacity={0.8}
								className="bg-black px-6 py-3 rounded-2xl flex flex-row items-center justify-center shadow-md"
								style={{
									shadowColor: "#000",
									shadowOffset: { width: 0, height: 2 },
									shadowOpacity: 0.2,
									shadowRadius: 3,
									elevation: 5,
								}}>
								<MaterialCommunityIcons
									name="cart-arrow-right"
									size={22}
									color="white"
									style={{ marginRight: 8 }}
								/>
								<Text
									className="text-white text-[16px]"
									style={{ fontFamily: "Montserrat_700Bold" }}>
									Buy Now
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				))}
			</ScrollView>

			{/* Bottom Bar */}
			<View
				className="flex flex-row items-center px-3 justify-between bg-white py-3"
				style={{
					shadowColor: "#000",
					shadowOffset: { width: 0, height: 2 },
					shadowOpacity: 0.1,
					shadowRadius: 3,
					elevation: 4,
				}}>
				<View className="">
					<Text
						style={{ fontFamily: "Montserrat_600SemiBold", textDecorationLine:"line-through" }}
						className="text-[12px] text-gray-400">
						12,000
					</Text>
					<Text
						style={{ fontFamily: "Montserrat_600SemiBold" }}
						className="text-[16px]">
						8,000
					</Text>
				</View>
				<TouchableOpacity
					activeOpacity={0.8}
					className="bg-green-600 px-6 py-3 rounded-2xl flex flex-row items-center justify-center shadow-md"
					style={{
						shadowColor: "#000",
						shadowOffset: { width: 0, height: 2 },
						shadowOpacity: 0.15,
						shadowRadius: 3,
						elevation: 4,
					}}>
					<Text
						className="text-white text-[16px]"
						style={{ fontFamily: "Montserrat_600Bold" }}>
						Place Order
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
