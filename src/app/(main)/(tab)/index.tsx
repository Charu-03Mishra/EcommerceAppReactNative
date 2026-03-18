import Images from "@/constants/Images";
import Card from "@/src/component/Card/Card";
import CategoryCard from "@/src/component/CategoryCard/CategoryCard";
import JwelleryVideoCard from "@/src/component/JwelleryVideoCard/JwelleryVideoCard";
import OfferCard from "@/src/component/OfferCard/OfferCard";
import ProductHearder from "@/src/component/ProductHeader/ProductHearder";
import TopFashionDress from "@/src/component/TopFashionDress/TopFashionDress";
import TrandingCard from "@/src/component/TrandingCard/TrandingCard";
import { getData } from "@/src/utills/LocalStorage";
import {
	useFonts,
	Inter_400Regular,
	Inter_700Bold,
} from "@expo-google-fonts/inter";
import {
	AntDesign,
	Feather,
	FontAwesome,
	FontAwesome6,
	Ionicons,
} from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { ResizeMode, Video } from "expo-av";
import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";

import {
	Image,
	ScrollView,
	StatusBar,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DealHeader from "@/src/component/DealHeader/DealHeader";

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
const TrandingCardData = [
	{
		id: "1",
		images: Images.Teanding1,
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
		images: Images.Teanding2,
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
		images: Images.Teanding3,
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
		images: Images.Teanding4,
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
		images: Images.Teanding5,
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
		images: Images.Teanding6,
		title: "Unisex Digital Smartwatch",
		description: "Track fitness & notifications on the go.",
		price: "₹2499",
		oldPrice: "₹4999",
		discount: "50% Off",
		rating: 1.5,
		reviews: "21,345",
	},
	{
		id: "7",
		images: Images.Teanding7,
		title: "Men Leather Wallet",
		description: "Premium quality wallet with multiple slots.",
		price: "₹799",
		oldPrice: "₹1499",
		discount: "47% Off",
		rating: 3.9,
		reviews: "6,543",
	},
	{
		id: "8",
		images: Images.Teanding8,
		title: "Wireless Bluetooth Earbuds",
		description: "Crystal clear sound with long battery life.",
		price: "₹1999",
		oldPrice: "₹3999",
		discount: "50% Off",
		rating: 4.8,
		reviews: "18,765",
	},
];

const JwlleryCardData = [
	{
		id: "1",
		images: Images.Jwellery1,
		title: "Gold Plated Necklace Set",
		description: "Traditional necklace with matching earrings.",
		price: "₹2999",
		oldPrice: "₹5999",
		discount: "50% Off",
		rating: 4.5,
		reviews: "12,540",
	},
	{
		id: "2",
		images: Images.Jwellery2,
		title: "Silver Oxidized Jhumkas",
		description: "Handcrafted oxidized earrings for ethnic wear.",
		price: "₹799",
		oldPrice: "₹1599",
		discount: "50% Off",
		rating: 4.2,
		reviews: "8,120",
	},
	{
		id: "3",
		images: Images.Jwellery3,
		title: "Diamond Engagement Ring",
		description: "Elegant solitaire ring with premium finish.",
		price: "₹49,999",
		oldPrice: "₹79,999",
		discount: "37% Off",
		rating: 4.8,
		reviews: "5,678",
	},
	{
		id: "4",
		images: Images.Jwellery4,
		title: "Pearl Bracelet",
		description: "Delicate pearl bracelet with adjustable chain.",
		price: "₹1499",
		oldPrice: "₹2799",
		discount: "46% Off",
		rating: 4.0,
		reviews: "7,245",
	},
	{
		id: "5",
		images: Images.Jwellery5,
		title: "Gold Bangles Set",
		description: "Set of 4 bangles with intricate design.",
		price: "₹5999",
		oldPrice: "₹9999",
		discount: "40% Off",
		rating: 4.7,
		reviews: "9,876",
	},
	{
		id: "6",
		images: Images.Jwellery6,
		title: "Kundan Choker Set",
		description: "Bridal choker set with royal Kundan work.",
		price: "₹6999",
		oldPrice: "₹12,999",
		discount: "46% Off",
		rating: 4.9,
		reviews: "15,420",
	},
];

const FashionCardData = [
	{
		id: "1",
		images: Images.Fashion1,
		title: "Women Floral Printed Kurta",
		description: "Comfortable cotton kurta for daily wear.",
		price: "₹1499",
		type: "jpg",
		oldPrice: "₹2499",
		discount: "40% Off",
		rating: 2.3,
		reviews: "12,345",
	},
	{
		id: "2",
		images: Images.Fashion2,
		title: "Men Slim Fit Casual Shirt",
		description: "Stylish and breathable fabric for summer.",
		price: "₹999",
		oldPrice: "₹1899",
		discount: "47% Off",
		type: "mp4",
		rating: 4,
		reviews: "8,210",
	},
	{
		id: "3",
		images: Images.Fashion3,
		title: "Women Party Wear Gown",
		description: "Elegant evening gown with premium finish.",
		price: "₹2999",
		oldPrice: "₹4599",
		type: "jpg",
		discount: "35% Off",
		rating: 4.6,
		reviews: "5,678",
	},
	{
		id: "4",
		images: Images.Fashion4,
		title: "Men Running Sports Shoes",
		description: "Lightweight shoes with durable sole.",
		price: "₹1799",
		oldPrice: "₹3299",
		discount: "45% Off",
		type: "mp4",
		rating: 2.4,
		reviews: "15,420",
	},
	{
		id: "5",
		images: Images.Fashion5,
		title: "Women Handbag",
		description: "Trendy leather handbag with spacious design.",
		price: "₹1299",
		oldPrice: "₹2199",
		discount: "41% Off",
		type: "jpg",
		rating: 5,
		reviews: "9,876",
	},
	{
		id: "6",
		images: Images.Fashion6,
		title: "Unisex Digital Smartwatch",
		description: "Track fitness & notifications on the go.",
		price: "₹2499",
		oldPrice: "₹4999",
		type: "mp4",
		discount: "50% Off",
		rating: 1.5,
		reviews: "21,345",
	},
];

const OfferCardData = [
	{
		id: "1",
		images: Images.offercard,

		discount: "Under 1000",
	},
	{
		id: "2",
		images: Images.offercard1,
		title: "Men Slim Fit Casual Shirt",

		discount: "Under 1500",
	},
	{
		id: "3",
		images: Images.offercard2,
		title: "Women Party Wear Gown",

		discount: "Under 500",
	},
	{
		id: "4",
		images: Images.offercard3,

		discount: "Under 2500",
	},
];

export default function HomeScreen() {
	const videoRef = useRef(null);
	const navigation = useNavigation();
	const simpleBrandsVideoRef = useRef(null);

	return (
		<SafeAreaView className=" ">
			<StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
			{/* <ScrollView showsVerticalScrollIndicator={false}> */}
			{/* 🔹 Header */}
			<View className="flex-row px-3 justify-between items-center pt-4">
				<FontAwesome6
					name="bars-staggered"
					size={24}
					color="black"
					onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
				/>

				<View className="flex-row items-center gap-2">
					<Image source={Images.Logo} className="w-[38px] h-[31px]" />
					<Text
						className="text-[#4392F9] text-[15px] font-bold"
						style={{ fontFamily: "Inter_700Bold" }}>
						Stylish
					</Text>
				</View>

				<View className="flex-row gap-5">
					<Ionicons name="notifications" size={24} color="black" />
					<AntDesign
						name="heart"
						size={24}
						color="black"
						onPress={() => router.push("/(main)/WishList/WishList")}
					/>
				</View>
			</View>

			{/* 🔹 Search Bar */}
			<TouchableOpacity
				activeOpacity={0.9}
				className="px-3 mt-4   "
				onPress={() => router.push("/(main)/(tab)/Search")}>
				<View className="  mb-3 bg-white rounded-lg shadow-md ">
					<View className="flex-row mx-3 py-2  gap-2 items-center">
						<Feather name="search" size={22} color="black" />
						<TextInput
							style={{ fontFamily: "Inter_400Regular" }}
							placeholder="Search any Product..."
							className="flex-1 px-2 text-[15px] placeholder:text-gray-500 placeholder:font-medium placeholder:text-[12px]"
							placeholderTextColor="#999"
						/>
						<FontAwesome name="microphone" size={22} color="black" />
					</View>
				</View>
			</TouchableOpacity>

			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 100 }}>
				{/* 🔹 Product Header */}
				<ProductHearder />

				<ScrollView
					horizontal
					contentContainerStyle={{ paddingRight: 20 }}
					showsHorizontalScrollIndicator={false}
					className="flex-1 px-3  ">
					<View className="flex-row gap-3">
						{JwlleryCardData.map((item, i) => (
							<View
								className="bg-white rounded-[10px] overflow-hidden   mb-2  "
								style={{
									elevation: 2,
									shadowColor: "#93c5fd",
									shadowOffset: { width: 0, height: 5 },
									shadowOpacity: 0.2,
									shadowRadius: 3,
								}}>
								<TrandingCard
									item={item}
									key={i}
									image={item.images}
									price={item.price}
									title={item.title}
									description={item.description}
									oldPrice={item.oldPrice}
									discount={item.discount}
									rating={item.rating}
									reviews={item.reviews}
								/>
							</View>
						))}
					</View>
				</ScrollView>

				<CategoryCard />
				{/* 🔹 Deal Section */}
				<View className="bg-[#0a9396] mx-3 py-5 px-4 rounded-2xl flex-row justify-between items-center mt-2">
					<View>
						<Text
							className="text-white text-[20px] font-bold "
							style={{ fontFamily: "Poppins_700Bold" }}>
							Deal of the Day
						</Text>
						<Text
							className="text-white font-medium text-sm"
							style={{ fontFamily: "Poppins_400Regular" }}>
							22h 55m 20s left
						</Text>
					</View>

					<TouchableOpacity
						className="w-14 h-14 rounded-full bg-white items-center justify-center shadow-md"
						activeOpacity={0.7}>
						<AntDesign name="arrow-right" size={24} color="black" />
					</TouchableOpacity>
				</View>

				{/* 🔹 Product Cards */}
				<View className="mt-5 px-3 flex-row flex-wrap gap-3">
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
							<Card
								item={item}
								key={i}
								type={"jpg"}
								image={item.images}
								price={item.price}
								title={item.title}
								description={item.description}
								oldPrice={item.oldPrice}
								discount={item.discount}
								rating={item.rating}
								reviews={item.reviews}
								onPress={() => router.push("/(main)/(tab)/Product/Product")}
							/>
						</View>
					))}
				</View>

				{/* 🔹 Special Offer */}
				<View
					className="flex-row mx-3 items-center mt-5 bg-white px-2 py-2 rounded-lg gap-4"
					style={{
						elevation: 5,
						shadowColor: "#000",
						shadowOffset: { width: 0, height: 2 },
						shadowOpacity: 0.2,
						shadowRadius: 3,
					}}>
					<Image source={Images.Offer} className="w-24 h-24" />

					<View className="flex-1">
						<Text
							className="text-lg "
							style={{ fontFamily: "Poppins_700Bold" }}>
							Special Offers
						</Text>
						<Text
							className="text-md text-gray-500 leading-5"
							style={{ fontFamily: "Poppins_400Regular" }}>
							We make sure you get the offer you need at the best prices.
						</Text>
					</View>
				</View>
				{/* 🔹 ebazaar */}
				<View
					className="mt-5  mx-3 overflow-hidden"
					style={{
						elevation: 5, // Android shadow
						// shadowColor: "#000", // iOS shadow
						shadowOffset: { width: 0, height: 2 },
						shadowOpacity: 0.9,
						shadowRadius: 4,
					}}>
					<Video
						ref={simpleBrandsVideoRef}
						source={require("@/assets/FolderOfVideo/Catch.mp4")}
						style={{ width: 338, height: 430, borderRadius: 10 }}
						shouldPlay
						isLooping
						isMuted
						resizeMode={ResizeMode.COVER}
					/>
				</View>

				{/* Trending */}

				<View className="mt-5">
					<DealHeader
						arrowup={<AntDesign name="arrow-up" size={18} color="#0a9396" />}
						title="DISCOVER"
						subtitle="Trending"
						see="See All"
						onPress={() => router.push("/(main)/Products/Products")}
						arrowright={<AntDesign name="arrow-right" size={13} color="#fff" />}
					/>
					<ScrollView
						horizontal
						contentContainerStyle={{ paddingRight: 20 }}
						showsHorizontalScrollIndicator={false}
						className="flex-1 px-3 mt-4  ">
						<View className="flex-row gap-3">
							{TrandingCardData.map((item, i) => (
								<View
									className="bg-white rounded-[10px] overflow-hidden   mb-2  "
									style={{
										elevation: 2,
										shadowColor: "#93c5fd",
										shadowOffset: { width: 0, height: 5 },
										shadowOpacity: 0.2,
										shadowRadius: 3,
									}}>
									<TrandingCard
										item={item}
										key={i}
										image={item.images}
										price={item.price}
										title={item.title}
										description={item.description}
										oldPrice={item.oldPrice}
										discount={item.discount}
										rating={item.rating}
										reviews={item.reviews}
									/>
								</View>
							))}
						</View>
					</ScrollView>
				</View>

				{/* Big Sale */}
				<View
					className="mt-5 mx-3 rounded-lg overflow-hidden"
					style={{
						elevation: 5,
						shadowColor: "#000",
						shadowOffset: { width: 0, height: 5 },
						shadowOpacity: 0.2,
						shadowRadius: 3,
					}}>
					<Video
						source={require("@/assets/FolderOfVideo/offerVideo.mp4")}
						ref={videoRef}
						style={{ width: "100%", height: 200 }}
						shouldPlay
						isLooping
						isMuted
						resizeMode={ResizeMode.COVER}
					/>
				</View>
				{/* Jwellery */}
				<View
					className="w-[340px] h-56 mt-5 mx-3 rounded-lg "
					style={{
						elevation: 5,
						shadowColor: "#000",
						shadowOffset: { width: 0, height: 5 },
						shadowOpacity: 0.2,
						shadowRadius: 3,
					}}>
					<Image
						className="w-full h-full rounded-lg"
						source={{
							uri: "https://i.pinimg.com/1200x/62/ca/96/62ca9634ef37461fb3bc5cae58313b8e.jpg",
						}}
					/>
				</View>

				{/* Top deals */}
				<View className="mt-5">
					{/* <View className="flex-row items-center  px-4 justify-between">
						<Text
							className="text-[16px] text-[#0a9396]"
							style={{ fontFamily: "Montserrat_600SemiBold" }}>
							Top deals on Fashion
						</Text>

						<TouchableOpacity
							className="w-11 h-11 rounded-full bg-[#0a9396] items-center justify-center"
							activeOpacity={0.7}
							style={{
								elevation: 4,
								shadowColor: "#0a9396",
								shadowOffset: { width: 0, height: 2 },
								shadowOpacity: 0.25,
								shadowRadius: 3,
							}}>
							<AntDesign name="arrow-right" size={22} color="white" />
						</TouchableOpacity>
					</View> */}
					<DealHeader
						arrowup={<AntDesign name="arrow-up" size={18} color="#0a9396" />}
						title="Top deals on Fashion"
						subtitle="Deals"
						see="See All"
						onPress={() => router.push("/(main)/Products/Products")}
						arrowright={<AntDesign name="arrow-right" size={13} color="#fff" />}
					/>

					<View className="mt-4  px-3 mx-1 flex-row flex-wrap gap-3">
						{FashionCardData.map((item, i) => (
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
								<Card
									item={item}
									key={i}
									video={item.images}
									image={item.images}
									price={item.price}
									title={item.title}
									description={item.description}
									oldPrice={item.oldPrice}
									discount={item.discount}
									rating={item.rating}
									reviews={item.reviews}
									onPress={() => router.push("/(main)/(tab)/Product/Product")}
								/>
								{/* <TopFashionDress item={item}/> */}
							</View>
						))}
					</View>
				</View>

				{/* price damaka */}
				<View className="mt-5 mb-[30px]">
					<DealHeader
						arrowup={<AntDesign name="arrow-up" size={18} color="#0a9396" />}
						title="Prices ka dhamaka 😱"
						subtitle="Prices"
						see="See All"
						onPress={() => router.push("/(main)/Products/Products")}
						arrowright={<AntDesign name="arrow-right" size={13} color="#fff" />}
					/>

					<View className="mt-4  px-3 mx-1 flex-row flex-wrap gap-3">
						{OfferCardData.map((item, i) => (
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
								<OfferCard item={item} />
							</View>
						))}
					</View>
				</View>
			</ScrollView>
			{/* </ScrollView> */}
		</SafeAreaView>
	);
}
