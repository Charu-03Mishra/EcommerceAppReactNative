import {
	Montserrat_600SemiBold,
	useFonts,
} from "@expo-google-fonts/montserrat";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";

export default function OfferCard({ item }) {
	const [fontsLoaded] = useFonts({
		Montserrat_600SemiBold,
	});

	if (!fontsLoaded) {
		return null; // or a loader component
	}
	return (
		<View className="  rounded-xl gap-3    ">
			<View className="">
				<View
					className="overflow-hidden  mb-2"
					style={{
						height: 220,
						borderTopLeftRadius: 10,
						borderTopRightRadius: 10,
						overflow: "hidden",
					}}>
					<Image className="w-full h-full " source={item.images} />
				</View>

				
				
				<View className="flex-row items-center mt-1">
					<Text
						className="text-[16px] px-3  "
						style={{
							color: "#0a9396",
							paddingTop: 5,
                            paddingBottom:5,
							fontFamily: "Montserrat_600SemiBold",
						}}>
						{item.discount}
					</Text>
				</View>
				
			</View>
		</View>
	);
}
