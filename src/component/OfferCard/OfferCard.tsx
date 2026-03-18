import {
	Montserrat_600SemiBold,
	useFonts,
} from "@expo-google-fonts/montserrat";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";

export default function OfferCard({ item }) {
	
	return (
		<View className="  rounded-xl gap-3    ">
			<View className="">
				<View
					className="overflow-hidden "
					style={{
						height: 220,
						borderTopLeftRadius: 10,
						borderTopRightRadius: 10,
						overflow: "hidden",
					}}>
					<Image className="w-full h-full " source={item.images} />
				</View>

				
				
				<View className="flex-row bg-[#0a9396] items-center">
					<Text
						className="text-[16px] px-3 text-center w-full  "
						style={{
							color: "#fff",
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
