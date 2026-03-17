import {
	Montserrat_600SemiBold,
	useFonts,
} from "@expo-google-fonts/montserrat";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface RenderItemProps {
	rounded?: boolean;
}

export const renderItem =
	({ rounded = false }: RenderItemProps) =>
	({
		item,
		index,
	}: {
		item: { src: any; id: number; text?: string; buttonText: string };
		index: number;
	}) => {
		const [fontsLoaded] = useFonts({
			Montserrat_600SemiBold,
		});

		if (!fontsLoaded) {
			return null; // or a loader component
		}

		return (
			<View style={styles.container}>
				<Image
					source={item.src}
					style={[styles.image, { borderRadius: rounded ? 16 : 0 }]}
					resizeMode="cover"
				/>
				<View style={styles.imagesAbsolute}>
					{item.text && <Text style={styles.text}>{item.text}</Text>}
					{item.buttonText && (
						<TouchableOpacity style={styles.Shopbutton}>
							<Text style={styles.butttext}>{item.buttonText}</Text>
							<AntDesign name="arrowright" size={30} color="white" />
						</TouchableOpacity>
					)}
				</View>
			</View>
		);
	};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop:4,
		marginLeft:10,
		marginRight:10,

	},
	image: {
		width: "100%",
		height: 250,
	},
	imagesAbsolute: {
		position: "absolute",
		top: 65,
		left: 20,
		borderRadius: 8,
	},
	text: {
		fontSize: 28,
		color: "white",
		paddingBottom: 10,
		fontWeight: "bold",
		fontFamily: "Montserrat_600SemiBold", // ✅ use loaded font
	},
	Shopbutton: {
		paddingHorizontal: 10,
		paddingVertical: 10,
		marginTop: 5,
		borderColor: "white",
		borderWidth: 2,
		borderRadius: 12,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	butttext: {
		fontSize: 16,
		color: "white",
		fontFamily: "Montserrat_600SemiBold", // ✅ apply font here too
	},
});
