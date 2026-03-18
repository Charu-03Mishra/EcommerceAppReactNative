import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { categoriesData } from "@/constants/Category";
import { useRouter } from "expo-router";

export default function CategoryCard() {
	const router = useRouter();
	return (
		<View className="px-3 mt-2">
			<View className="flex-row justify-between items-center">
				<Text
					className="text-[18px] font-bold text-[#202020]"
					style={{ fontFamily: "Poppins_700Bold", letterSpacing: 1 }}>
					Categories
				</Text>
				<View className="flex-row items-center gap-4">
					<Text
						className="text-[18px] font-bold text-[#202020]"
						style={{ fontFamily: "Poppins_700Bold" }}>
						See All
					</Text>
					<TouchableOpacity
						activeOpacity={0.5}
						onPress={() => router.push("/(main)/(tab)/Category")}
						className=" px-2 py-2 rounded-xl "
						style={{ backgroundColor: "#0a9396", borderRadius: 50 }}>
						<AntDesign name="arrow-right" size={15} color="#fff" />
					</TouchableOpacity>
				</View>
			</View>

			<View className="flex-row flex-wrap gap-3 mt-5 mb-3">
				{categoriesData.map((category) => (
					<View
						key={category.id}
						className="w-[48%] bg-white border border-gray-200 pt-2 rounded-lg shadow-md ">
						<View className="flex-row flex-wrap px-1">
							{category.images.map((image) => (
								<View
									className=" py-1 px-1 rounded-lg"
									style={{ width: "50%" }}>
									<View className="w-full h-24 rounded-lg">
										<Image
											source={image.url}
											className="w-full h-full rounded-lg object-cover"
										/>
									</View>
								</View>
							))}
						</View>
						<View className="flex-row items-center justify-between px-2 py-2">
							<Text
								className="text-sm font-bold text-[#202020]"
								style={{ fontFamily: "Poppins_700Bold" }}>
								{category.name}
							</Text>
							<Text
								className="text-sm font-bold text-[#202020]"
								style={{ fontFamily: "Poppins_700Bold" }}>
								{category.count}
							</Text>
						</View>
					</View>
				))}
			</View>
		</View>
	);
}
