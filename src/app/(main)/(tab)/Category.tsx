import Images from "@/constants/Images";
import {
	Montserrat_600SemiBold,
	useFonts,
} from "@expo-google-fonts/montserrat";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import React, { useState } from "react";
import {
	FlatList,
	Image,
	ScrollView,
	StatusBar,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CategoryImages = [
	{
		id: "1",
		Images: Images.CardImag2,
		categoryName: "Bottomset",
		subItems: [
			Images.Teanding1,
			Images.Bottomset1,
			Images.Bottomset2,
			Images.Bottomset3,
			Images.Bottomset4,
			Images.Bottomset5,
			Images.Bottomset6,
			Images.Teanding1,
			Images.Teanding4,
			Images.CardImag2,
		],
	},
	{
		id: "2",
		Images: Images.CardImag3,
		categoryName: "Tops",
		subItems: [
			Images.Teanding1,
			Images.Teanding4,
			Images.Tops1,
			Images.Tops2,
			Images.Tops3,
			Images.Tops4,
		],
	},
	{
		id: "3",
		Images: Images.Jwellery2,
		categoryName: "Jwellery",
		subItems: [Images.Jwellery1, Images.Jwellery3, Images.Jwellery4],
	},
	{
		id: "4",
		Images: Images.offercard2,
		categoryName: "Offers",
		subItems: [Images.offercard2, Images.CardImag5],
	},
	{
		id: "5",
		Images: Images.Teanding4,
		categoryName: "Trending",
		subItems: [Images.Teanding1, Images.Teanding4, Images.CardImag2],
	},
	{
		id: "6",
		Images: Images.Teanding1,
		categoryName: "Trending",
		subItems: [Images.Teanding4, Images.Teanding1, Images.offercard2],
	},
	{
		id: "7",
		Images: Images.Jwellery3,
		categoryName: "Jwellery",
		subItems: [
			Images.Jwellery1,
			Images.Jwellery2,
			Images.Jwellery4,
			Images.Jwellery6,
		],
	},
	{
		id: "8",
		Images: Images.Jwellery4,
		categoryName: "Jwellery",
		subItems: [Images.Jwellery2, Images.Jwellery3, Images.Jwellery6],
	},
	{
		id: "9",
		Images: Images.CardImag5,
		categoryName: "Bottomset",
		subItems: [Images.CardImag2, Images.CardImag3, Images.CardImag5],
	},
	{
		id: "10",
		Images: Images.offercard2,
		categoryName: "Offers",
		subItems: [Images.offercard2, Images.CardImag3, Images.Teanding1],
	},
	{
		id: "11",
		Images: Images.Jwellery6,
		categoryName: "Jwellery",
		subItems: [Images.Jwellery1, Images.Jwellery3, Images.Jwellery4],
	},
];

export default function Category() {
	const [selected, setSelected] = useState(CategoryImages[0].categoryName);
	const [fontsLoaded] = useFonts({
		Montserrat_600SemiBold,
	});

	if (!fontsLoaded) {
		return null;
	}

	const isselected = CategoryImages.find(
		(cat) => cat.categoryName === selected
	);

	const backToHome = () => {
		router.push("/(main)/(tab)");
	};
	console.log("selected", selected);
	console.log("isselected", isselected);

	return (
		<SafeAreaView className="  bg-gray-200 flex-1">
			{/* Top Header */}
			<StatusBar barStyle="dark-content" backgroundColor="white" />
			<View
				className="flex flex-row items-center px-3 justify-between bg-white  py-3"
				style={{
					shadowColor: "#000",
					shadowOffset: { width: 0, height: 2 },
					shadowOpacity: 0.1,
					shadowRadius: 3,
					elevation: 4,
				}}>
				<View className="flex flex-row  items-center gap-3">
					<AntDesign
						name="arrow-left"
						size={22}
						color="black"
						onPress={backToHome}
					/>
					<Text
						style={{ fontFamily: "Montserrat_600SemiBold" }}
						className="text-[14px]">
						All CATEGORIES
					</Text>
				</View>
				<Ionicons
					name="cart-outline"
					size={30}
					color="black"
					onPress={() => router.push("/(main)/(tab)/AddToCart")}
				/>
			</View>

			<View className="flex flex-row flex-1 mt-2">
				{/* Left Sidebar */}
				<View className="flex-[.3] flex-row">
					<ScrollView
						showsVerticalScrollIndicator={false}
						className="bg-gray-50 px-2 pt-3 rounded-tr-lg">
						{CategoryImages.map((item, i) => (
							<TouchableOpacity
								key={i}
								onPress={() => setSelected(item.categoryName)} // 👈 set full category object
								className="mb-4">
								<View
									className={`w-[55px] h-[55px] rounded-full overflow-hidden border-2 ${
										item.categoryName === selected
											? "border-[#f43f5e] shadow-md"
											: "border-gray-200"
									}`}>
									<Image
										source={item.Images}
										className="w-full h-full rounded-full"
									/>
								</View>
							</TouchableOpacity>
						))}
					</ScrollView>
				</View>

				{/* Right Grid */}
				<FlatList
					data={isselected?.subItems || []}
					numColumns={2}
					keyExtractor={(_, index) => index.toString()}
					columnWrapperStyle={{ justifyContent: "flex-start", gap: 12 }}
					contentContainerStyle={{ padding: 2, gap: 12 }}
					className="flex-1 ml-2"
					renderItem={({ item }) => (
						<TouchableOpacity activeOpacity={0.85}  className="flex-1">
							<View className="bg-white rounded-2xl  shadow-md items-center justify-center w-[120px]">
								<View className="w-[120px] h-[150px] rounded-md overflow-hidden">
									<Image
										className="w-full h-full"
										source={item}
										resizeMode="cover"
									/>
								</View>
							</View>
						</TouchableOpacity>
					)}
					ListHeaderComponent={
						<View className="flex-row items-center justify-between bg-white py-3 px-4 rounded-lg shadow mb-3">
							<Text className="text-base font-semibold text-gray-800">
								{selected || "Category"}
							</Text>
							<Ionicons name="chevron-forward" size={18} color="#666" />
						</View>
					}
				/>
			</View>
		</SafeAreaView>
	);
}
