import Images from "@/constants/Images";
import {
	Montserrat_600SemiBold,
	useFonts,
} from "@expo-google-fonts/montserrat";
import { Feather, FontAwesome, FontAwesome6, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
	Dimensions,
	Image,
	ScrollView,
	StatusBar,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");
const sizes = ["S", "M", "L", "XL", "XXL"]; // <- your data

export default function ProductScreen() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [selected, setSelected] = useState(null);

	const [fontsLoaded] = useFonts({
		Montserrat_600SemiBold,
	});

	if (!fontsLoaded) {
		return null; // or a loader component
	}

	const product = {
		color: "Maroon",
		images: [
			Images.Bottomset1,
			Images.Bottomset1,
			Images.Bottomset1,
			Images.Bottomset1,
			Images.Bottomset1,
			Images.Bottomset1,
			Images.Bottomset1,
			Images.Bottomset1,
		],
		title: "Women Floral Printed Kurta",
		description: "Comfortable cotton kurta for daily wear.",
		price: "₹1499",
		oldPrice: "₹2499",
		discount: "40% Off",
		rating: 2.3,
		reviews: "12,345",
	};

	return (
	<SafeAreaView className="flex-1 bg-white" edges={['left','right','bottom']}>
  <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
  <ScrollView contentContainerStyle={{ paddingTop: 0, paddingBottom:5 }}>
                <View className=" px-4  flex-row justify-between items-center">
                  <TouchableOpacity
					className=""
					onPress={() => router.push("/(main)/(tab)")}>
					<Ionicons name="arrow-back" size={22} color="black" />
				</TouchableOpacity>
                    <View className="flex-row gap-4 items-center">
                       
                        <TouchableOpacity
									className="  p-2"
									onPress={() => router.push("/(main)/(tab)")}>
										 <Feather name="search" size={22} color="black" />
								</TouchableOpacity>

                        	<TouchableOpacity
									className=" "
									onPress={() => router.push("/(main)/(tab)")}>
										<FontAwesome name="shopping-cart" size={24} color="black" />
								</TouchableOpacity>


                    </View>

                </View>
				{/* Product Carousel */}
<View className="h-[450px]">
	<Carousel
		loop
		width={width}
		height={450}
		data={product.images}
		scrollAnimationDuration={800}
		containerStyle={{ marginTop: 0, paddingTop: 0 }}
		mode="parallax"
		modeConfig={{
			parallaxScrollingScale: 0.9,
			parallaxScrollingOffset: 50,
		}}
		renderItem={({ item }) => (
			<View className="px-2 relative">
				<Image
					source={item}
					className="w-full h-full rounded-2xl"
					style={{
						resizeMode: "cover",
					}}
				/>

				{/* Gradient overlay at top for better icon visibility */}
				<View className="absolute top-0 left-0 right-0 h-20 rounded-t-2xl bg-gradient-to-b from-black/50 to-transparent" />

				
				{/* Heart icon */}
				<TouchableOpacity
					className="absolute top-5 right-5 bg-black/40 p-2 rounded-full shadow-md"
					onPress={() => alert("Heart pressed")}>
					<Ionicons name="heart" size={22} color="white" />
				</TouchableOpacity>
			</View>
		)}
	/>
</View>


				{/* Dots Indicator */}
				{/* <View className="flex-row justify-center mt-2">
					{product.images.map((_, i) => (
						<View
							key={i}
							className={`w-2 h-2 mx-1 rounded-full ${
								i === activeIndex ? "bg-black w-2 h-2 mx-1 rounded-full" : "bg-gray-400"
							}`}
						/>
					))}
				</View> */}

				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					<View className="flex-row flex-wrap gap-2 px-4">
						{product.images.map((img, index) => (
							<TouchableOpacity
								key={index}
								onPress={() => setActiveIndex(index)}
								className={`border-2 rounded-md ${
									activeIndex === index ? "border-[#0a9396]" : "border-gray-300"
								}`}>
								<Image source={img} className="w-[75px] h-28 rounded-md" />
							</TouchableOpacity>
						))}
					</View>
				</ScrollView>

				<View className=" px-4 mt-2 ">
					<Text
						className="text-gray-800 text-[16px]"
						style={{
							fontFamily: "Poppins_700Bold",
						}}>
						{product.title}
					</Text>
					<Text
						className="text-gray-500 text-[14px]"
						style={{
							fontFamily: "Poppins_400Regular",
						}}>
						{product.description}
					</Text>
				</View>
				<View className="flex-row items-center gap-3 px-4  ">
					<Text
						className="text-green-700 text-[16px]"
						style={{
							fontFamily: "Poppins_400Regular",
						}}>
						{product.discount}
					</Text>
					<Text
						className="text-gray-800 text-[16px]"
						style={{
							fontFamily: "Poppins_400Regular",
						}}>
						{product.price}
					</Text>
					<Text
						className="text-gray-500 text-[14px]"
						style={{
							fontFamily: "Poppins_400Regular",
							textDecorationLine:"line-through"
						}}>
						{product.oldPrice}
					</Text>
				</View>
                <View className="flex-row pb-5 border-b border-gray-400 items-center justify-between  px-4  gap-2 pt-2 ">
					{/* ⭐ Rating Stars */}
					<View className="flex-row items-center gap-2">
						{Array.from({ length: 5 }).map((_, index) => {
							if (index + 1 <= Math.floor(product.rating)) {
								return (
									<FontAwesome
										key={index}
										name="star"
										size={18}
										color="green" // gold
									/>
								);
							} else if (index < product.rating) {
								return (
									<FontAwesome
										key={index}
										name="star-half-empty"
										size={18}
										color="green"
									/>
								);
							} else {
								return (
									<FontAwesome
										key={index}
										name="star-o"
										size={18}
										color="green" // light gray for empty stars
									/>
								);
							}
						})}
                        <Text style={{
							color: "green", // Tailwind gray-500
							fontSize: 14,
							
							fontFamily: "Poppins_400Regular",
						}}>{product.rating}</Text>
					</View>

					{/* 📝 Reviews Count */}
					<Text
						className=""
						style={{
							color: "#6b7280", // Tailwind gray-500
							fontSize: 14,
							
							fontFamily: "Poppins_400Regular",
						}}>
						{product.reviews} reviews
					</Text>
				</View>
				<View className="px-4 pt-4">
	<Text style={{ fontFamily: "Poppins_700Bold" }}>Select Size</Text>

	<View className="flex-row flex-wrap mt-2 items-center gap-2">
		{sizes.map((sz) => {
			const active = selected === sz;
			return (
				<TouchableOpacity
					key={sz}
					onPress={() => setSelected(sz)}
					className={`w-12 h-12 rounded-full border flex items-center justify-center ${
						active ? "bg-black border-black" : "bg-white border-gray-300"
					}`}>
					<Text
						className={`${active ? "text-white" : "text-black"} text-[14px]`}
						style={{ fontFamily: "Poppins_400Regular" }}>
						{sz}
					</Text>
				</TouchableOpacity>
			);
		})}
	</View>
</View>


				<View className="px-4 pb-4 mt-8 border-b border-gray-400">
					<Text className="text-[15px]" style={{ fontFamily: "Poppins_700Bold" }}>
						Deliverd to : 249408
					</Text>
					<View className="flex flex-row justify-between items-center">
						<Text className="text-[15px]" style={{ fontFamily: "Poppins_400Regular" }}>
							Kankhal, Haridwar
						</Text>
						<TouchableOpacity className=" bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 flex-row items-center  gap-2">>
							<Text className="text-[15px]" style={{ fontFamily: "Poppins_400Regular" }}>Change</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View className="flex flex-row items-center px-4 gap-3 mt-2 ">
							<Text>
								<FontAwesome6 name="truck-fast" size={17} color="#4b5563" />
							</Text>
							<Text className="text-[16px]" style={{ fontFamily: "Poppins_700Bold" }}>
								Express
							</Text>

							<Text className="text-[15px] text-gray-600" style={{ fontFamily: "Poppins_400Regular" }}>
								Delivery in 2 days, sat
							</Text>
						</View>
				<View className="flex flex-row items-center px-4 gap-2 mt-1 ">
							<Text>
							<MaterialCommunityIcons name="arrow-u-left-top" size={24} color="#4b5563" />
							</Text>
							<Text className="text-[16px] text-gray-600" style={{ fontFamily: "Poppins_400Regular" }}>
								10 days return Policy
							</Text>

						</View>
				<View className="flex flex-row items-center px-4 gap-2 mt-1 pb-6 ">
							<Text>
						<MaterialCommunityIcons name="cash-100" size={24} color="#4b5563" />
							</Text>
							<Text className="text-[16px] text-gray-600" style={{ fontFamily: "Poppins_400Regular" }}>
								Cash on Delivery Available
							</Text>

						</View>
				</ScrollView>

                <View className="flex flex-row items-center px-4 justify-between gap-3">
	<TouchableOpacity
		activeOpacity={0.8}
		className="flex-1 border bg-white border-[#0BBCB5] py-3 rounded-lg flex flex-row items-center justify-center gap-2"
		style={{
			shadowColor: "#000",
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.15,
			shadowRadius: 3,
			elevation: 4,
		}}>
		<FontAwesome name="shopping-cart" size={20} color="#0a9396" />
		<Text
			className="text-[#0a9396] text-[16px]"
			style={{ fontFamily: "Poppins_700Bold" }}>
			Add To Cart
		</Text>
	</TouchableOpacity>

	<TouchableOpacity
		activeOpacity={0.8}
		className="flex-1 bg-[#0a9396] py-3 rounded-lg flex flex-row items-center justify-center shadow-md"
		style={{
			shadowColor: "#000",
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.2,
			shadowRadius: 3,
			elevation: 5,
		}}>
		<Text
			className="text-white text-[16px]"
			style={{ fontFamily: "Poppins_700Bold" }}>
			Buy Now
		</Text>
	</TouchableOpacity>
</View>

			
		</SafeAreaView>
	);
}
