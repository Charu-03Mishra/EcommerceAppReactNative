import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { categoriesData } from "@/constants/Category";
import { useRouter } from "expo-router";

export default function CategoryCard({ Productsdta }: any) {
	const router = useRouter();
	const category = Productsdta?.data?.data?.filter(
		(item: any) => item.subcategory === "Necklaces",
	);
	const categoryRing = Productsdta?.data?.data?.filter(
		(item: any) => item.subcategory === "Earrings",
	);
	console.log("categoryvhjhgjhNecklaces", Productsdta?.data?.data?.length);
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
				<View className="w-[48%] bg-white border border-gray-200 pt-2 rounded-lg shadow-md ">
					<View className="flex-row flex-wrap">
						{category?.map((item: any) => (
							<>
								<TouchableOpacity
									onPress={() => router.push("/(main)/Products/Products")}
									className=" py-1 px-1 rounded-lg"
									style={{ width: "50%" }}>
									<View className="w-full h-24 rounded-lg">
										<Image
											source={{ uri: item.images }}
											className="w-full h-full rounded-lg object-cover"
										/>
									</View>
								</TouchableOpacity>
							</>
						))}
					</View>
					<View className="flex-row items-center justify-between px-2 py-2">
						<Text
							className="text-sm font-bold text-[#202020]"
							style={{ fontFamily: "Poppins_700Bold" }}>
							Necklaces
						</Text>
						<Text
							className="text-sm font-bold text-[#202020]"
							style={{ fontFamily: "Poppins_700Bold" }}>
							1234
						</Text>
					</View>
				</View>
				<View className="w-[48%] bg-white border border-gray-200 pt-2 rounded-lg shadow-md ">
					<View className="flex-row flex-wrap">
						{categoryRing?.map((item: any) => (
							<>
								<TouchableOpacity
									onPress={() => router.push("/(main)/Products/Products")}
									className=" py-1 px-1 rounded-lg"
									style={{ width: "50%" }}>
									<View className="w-full h-24 rounded-lg">
										<Image
											source={{ uri: item.images }}
											className="w-full h-full rounded-lg object-cover"
										/>
									</View>
								</TouchableOpacity>
							</>
						))}
					</View>
					<View className="flex-row items-center justify-between px-2 py-2">
						<Text
							className="text-sm font-bold text-[#202020]"
							style={{ fontFamily: "Poppins_700Bold" }}>
							Necklaces
						</Text>
						<Text
							className="text-sm font-bold text-[#202020]"
							style={{ fontFamily: "Poppins_700Bold" }}>
							1234
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
}
