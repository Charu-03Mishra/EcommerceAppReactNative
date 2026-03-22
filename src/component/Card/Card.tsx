import {
	Montserrat_600SemiBold,
	useFonts,
} from "@expo-google-fonts/montserrat";
import { FontAwesome } from "@expo/vector-icons";
import { Video, ResizeMode } from "expo-av";
import { router } from "expo-router";
import React, { useRef } from "react";
import { Image, Pressable, Text, View } from "react-native";

export default function Card({
	item,
	title,
	description,
	image = "",
	video = "",
	price,
	oldPrice,
	discount,
	rating,
	reviews,
	onPress,
}: {
	item: any;
	onPress: () => void;
	title: string;
	description: string;
	image: any;
	video: any;
	price: string;
	oldPrice: string;
	discount: number;
	rating: number;
	reviews: string;
}) {
	const videoRef = useRef(null);
	console.log("imagesjhgjhgj", image);

	return (
		<View className="  rounded-xl gap-3   ">
			<Pressable className="" onPress={onPress}>
				{/* <View
					className="overflow-hidden relative  mb-2"
					style={{
						height: 220,
						borderTopLeftRadius: 10,
						borderTopRightRadius: 10,
						overflow: "hidden",
					}}>
					<Image className="w-full h-full " source={image} />
				</View> */}

				{image && (
					<View
						className="overflow-hidden  mb-2"
						style={{
							height: 220,
							borderTopLeftRadius: 10,
							borderTopRightRadius: 10,
							overflow: "hidden",
						}}>
						<Image
							className="w-full h-full"
							source={typeof image === "string" ? { uri: image } : image}
						/>
					</View>
				)}
				{/* {video && (
					<View
						className="overflow-hidden  mb-2"
						style={{
							height: 220,
							borderTopLeftRadius: 10,
							borderTopRightRadius: 10,
							overflow: "hidden",
						}}>
						<Video
							source={video}
							ref={videoRef}
							style={{ width: "100%", height: 220 }}
							shouldPlay
							isLooping
							isMuted
							resizeMode={ResizeMode.COVER}
						/>
					</View>
				)} */}

				{/* {video && (
					<View
						className="overflow-hidden  mb-2"
						style={{
							height: 220,
							borderTopLeftRadius: 10,
							borderTopRightRadius: 10,
							overflow: "hidden",
						}}>
						<Video
							source={video}
							ref={videoRef}
							style={{ width: "100%", height: 250 }}
							shouldPlay
							isLooping
							isMuted
							resizeMode={ResizeMode.COVER}
						/>
					</View>
				)} */}

				<View className="px-2 ">
					<Text
						style={{ fontFamily: "Poppins_700Bold" }}
						className="font-semibold1 text-md px-1 text-black"
						numberOfLines={1}>
						{title}
					</Text>
					<Text
						className=" px-1 text-gray-500 whitespace-nowrap "
						numberOfLines={1}
						ellipsizeMode="clip"
						style={{
							fontFamily: "Poppins_400Regular",
							fontSize: 13,
						}}>
						{description}
					</Text>
					<View
						className="flex-row items-center justify-between "
						style={{ marginTop: 5 }}>
						{discount > 0 && (
							<Text
								className="text-base px-1  text-gray-500 mr-2 "
								style={{
									fontFamily: "Poppins_400Regular",
								}}>
								{oldPrice}
							</Text>
						)}

						<Text
							className="text-base px-1 text-black mr-2"
							style={{
								fontFamily: "Poppins_400Regular",
								textDecorationLine: discount > 0 ? "line-through" : "none",
								color: discount > 0 ? "#9CA3AF" : "#000000", // gray out when discounted
							}}>
							₹{price}
						</Text>
					</View>
					<View className="flex-row items-center mt-1">
						{discount > 0 && (
							<Text
								className="text-base px-1 "
								style={{
									color: "#f87171",
									paddingTop: 5,
									fontFamily: "Poppins_700Bold",
								}}>
								{discount}%
							</Text>
						)}
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
								fontFamily: "Poppins_400Regular",
							}}>
							{reviews} reviews
						</Text>
					</View>
				</View>
			</Pressable>
		</View>
	);
}
