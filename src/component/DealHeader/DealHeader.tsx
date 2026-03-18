import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function DealHeader({
	arrowup,
	title,
	subtitle,
	see,
	onPress,
	arrowright,
}: {
	arrowup: any;
	title: string;
	subtitle: string;
	see: string;
	onPress: () => void;
	arrowright: any;
}) {
	return (
		<View
			style={{
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				backgroundColor: "#fff",
				borderRadius: 20,
				paddingHorizontal: 20,
				paddingVertical: 18,
				borderWidth: 0.5,
				borderColor: "#e0e0e0",
				overflow: "hidden",
				shadowColor: "#000",
				shadowOpacity: 0.06,
				shadowOffset: { width: 0, height: 2 },
				shadowRadius: 8,
				elevation: 3,
			}}>
			{/* Left accent bar */}
			<View
				style={{
					position: "absolute",
					left: 0,
					top: 0,
					bottom: 0,
					width: 4,
					backgroundColor: "#0a9396",
				}}
			/>

			<View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
				<View
					style={{
						width: 38,
						height: 38,
						borderRadius: 12,
						backgroundColor: "rgba(10,147,150,0.1)",
						alignItems: "center",
						justifyContent: "center",
					}}>
					{/* <AntDesign name="arrow-up" size={18} color="#0a9396" /> */}
					{arrowup}
				</View>
				<View>
					<Text
						style={{
							fontSize: 11,
							color: "#888",
							letterSpacing: 1.2,
							fontFamily: "Poppins_400Regular",
						}}>
						{title}
					</Text>
					<Text
						style={{
							fontSize: 20,
							color: "#0a9396",
							fontFamily: "Poppins_700Bold",
							lineHeight: 24,
						}}>
						{subtitle}
					</Text>
				</View>
			</View>

			<TouchableOpacity
				onPress={onPress}
				style={{
					flexDirection: "row",
					alignItems: "center",
					gap: 6,
					backgroundColor: "#0a9396",
					paddingHorizontal: 16,
					paddingVertical: 9,
					borderRadius: 50,
				}}
				activeOpacity={0.75}>
				<Text
					style={{
						color: "#fff",
						fontSize: 13,
						fontFamily: "Poppins_600SemiBold",
					}}>
					{see}
				</Text>
				{arrowright}
			</TouchableOpacity>
		</View>
	);
}
