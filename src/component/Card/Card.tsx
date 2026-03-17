import {
	Montserrat_600SemiBold,
	useFonts,
} from "@expo-google-fonts/montserrat";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

export default function Card({ item }) {
	const [fontsLoaded] = useFonts({
		Montserrat_600SemiBold,
	});

	if (!fontsLoaded) {
		return null; // or a loader component
	}
	return (
		<View className="  rounded-xl gap-3   ">
			<Pressable
				className=""
				onPress={() => router.push("/(main)/Product/Product")}>
				<View
					className="overflow-hidden relative  mb-2"
					style={{
						height: 220,
						borderTopLeftRadius: 10,
						borderTopRightRadius: 10,
						overflow: "hidden",
					}}>
					<Image className="w-full h-full " source={item.images} />
				</View>

				<Text
					style={{ fontFamily: "Montserrat_600SemiBold" }}
					className="font-semibold1 text-md px-1 text-black"
					numberOfLines={1}>
					{item.title}
				</Text>
				<Text
					className=" px-1 text-gray-500 whitespace-nowrap "
					numberOfLines={1}
					ellipsizeMode="clip"
					style={{
						fontFamily: "Montserrat_700SemiBold",
						fontSize: 13,
					}}>
					{item.description}
				</Text>
				<View
					className="flex-row items-center justify-between "
					style={{ marginTop: 5 }}>
					<Text
						className="text-base px-1  text-black mr-2"
						style={{ fontFamily: "Montserrat_700SemiBold" }}>
						{item.price}
					</Text>
					<Text
						className="text-base px-1  text-gray-500 mr-2"
						style={{
							textDecorationLine: "line-through",

							fontFamily: "Montserrat_700SemiBold",
						}}>
						{item.oldPrice}
					</Text>
				</View>
				<View className="flex-row items-center mt-1">
					<Text
						className="text-base px-1 "
						style={{
							color: "#f87171",
							paddingTop: 5,
							fontFamily: "Montserrat_700SemiBold",
						}}>
						{item.discount}
					</Text>
				</View>
				<View className="flex-col  gap-2 pt-2 px-1">
					{/* ⭐ Rating Stars */}
					<View className="flex-row items-center gap-3">
						{Array.from({ length: 5 }).map((_, index) => {
							if (index + 1 <= Math.floor(item.rating)) {
								return (
									<FontAwesome
										key={index}
										name="star"
										size={18}
										color="#FFD700" // gold
									/>
								);
							} else if (index < item.rating) {
								return (
									<FontAwesome
										key={index}
										name="star-half-empty"
										size={18}
										color="#FFD700"
									/>
								);
							} else {
								return (
									<FontAwesome
										key={index}
										name="star-o"
										size={18}
										color="#d1d5db" // light gray for empty stars
									/>
								);
							}
						})}
					</View>

					{/* 📝 Reviews Count */}
					<Text
						className=""
						style={{
							color: "#6b7280", // Tailwind gray-500
							fontSize: 14,
							paddingBottom: 7,
							fontFamily: "Montserrat_700SemiBold",
						}}>
						{item.reviews} reviews
					</Text>
				</View>
			</Pressable>
		</View>
	);
}
