import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Pressable, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Setting() {
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
						style={{
							fontFamily: "Montserrat_600SemiBold",
							textDecorationLine: "line-through",
						}}
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
