import { useLogout } from "@/src/hooks/auth.hooks";
import {
	Montserrat_600SemiBold,
	useFonts,
} from "@expo-google-fonts/montserrat";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
export default function CustomDrawer(props: any) {
	const home = () => {
		router.push("/(main)/(tab)/Category");
	};
	const navigation = useNavigation();
	const [fontsLoaded] = useFonts({
		Montserrat_600SemiBold,
	});
	const logout = useLogout();

	if (!fontsLoaded) {
		return null; // or a loader component
	}
	const removeToken = () => {
		logout.mutate();
		router.replace("/(auth)/Login/Login");
	};

	return (
		<View style={{ flex: 1 }}>
			{/* Profile Section */}
			<ImageBackground
				source={{
					uri: "https://i.pinimg.com/736x/21/28/71/212871b3e0c37a36aec8c60efdd578ff.jpg",
				}}
				style={{
					padding: 20,
					paddingTop: 250,
				}}
				imageStyle={{
					opacity: 0.9, // optional, makes text more visible
				}}>
				{/* <View>
					<Text
						className=""
						style={{
							fontSize: 28,
							color: "#000",
							fontWeight: "bold",
							fontFamily: "Montserrat_600SemiBold",
						}}>
						Sandra Adams
					</Text>
					<Text
						style={{
							color: "#000",
							fontSize: 14,
							fontFamily: "Montserrat_600SemiBold",
						}}>
						sandra_a88@gmail.com
					</Text>
				</View> */}
			</ImageBackground>

			{/* Drawer Items */}
			<DrawerContentScrollView
				className=""
				{...props}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingTop: 18, paddingBottom: 0 }}>
				<TouchableOpacity
					onPress={() => router.push("/(main)/(tab)")}
					style={{ flexDirection: "row", alignItems: "center", padding: 15 }}>
					<FontAwesome name="home" size={24} color="black" />
					<Text
						style={{
							marginLeft: 10,
							fontFamily: "Montserrat_600SemiBold",
							fontSize: 12,
						}}>
						Home
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => router.push("/(main)/(tab)/Category")}
					style={{ flexDirection: "row", alignItems: "center", padding: 15 }}>
					<MaterialCommunityIcons
						name="view-grid-outline"
						size={24}
						color="black"
					/>
					<Text
						style={{
							marginLeft: 10,
							fontFamily: "Montserrat_600SemiBold",
							fontSize: 12,
						}}>
						Category
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => router.push("/(main)/(tab)/Account")}
					style={{ flexDirection: "row", alignItems: "center", padding: 15 }}>
					<MaterialIcons name="account-box" size={24} color="black" />
					<Text
						style={{
							marginLeft: 10,
							fontFamily: "Montserrat_600SemiBold",
							fontSize: 12,
						}}>
						My Account
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => router.push("/(main)/Order/Order")}
					style={{ flexDirection: "row", alignItems: "center", padding: 15 }}>
					<FontAwesome5 name="first-order" size={24} color="black" />
					<Text
						style={{
							marginLeft: 10,
							fontFamily: "Montserrat_600SemiBold",
							fontSize: 12,
						}}>
						My Order
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => router.push("/(main)/(tab)/AddToCart")}
					style={{ flexDirection: "row", alignItems: "center", padding: 15 }}>
					<FontAwesome name="shopping-cart" size={24} color="black" />
					<Text
						style={{
							marginLeft: 10,
							fontFamily: "Montserrat_600SemiBold",
							fontSize: 12,
						}}>
						Shopping Cart
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => router.push("/(main)/WishList/WishList")}
					style={{ flexDirection: "row", alignItems: "center", padding: 15 }}>
					<FontAwesome name="heart" size={24} color="black" />
					<Text
						style={{
							marginLeft: 10,
							fontFamily: "Montserrat_600SemiBold",
							fontSize: 12,
						}}>
						My WishList
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => alert("Backups Clicked")}
					style={{ flexDirection: "row", alignItems: "center", padding: 15 }}>
					<Entypo name="share" size={24} color="black" />
					<Text
						style={{
							marginLeft: 10,
							fontFamily: "Montserrat_600SemiBold",
							fontSize: 12,
						}}>
						Share App
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => alert("Backups Clicked")}
					style={{ flexDirection: "row", alignItems: "center", padding: 15 }}>
					<AntDesign name="star" size={24} color="black" />
					<Text
						style={{
							marginLeft: 10,
							fontFamily: "Montserrat_600SemiBold",
							fontSize: 12,
						}}>
						Rate App
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={removeToken}
					style={{ flexDirection: "row", alignItems: "center", padding: 15 }}>
					<AntDesign name="logout" size={24} color="black" />
					<Text
						style={{
							marginLeft: 10,
							fontFamily: "Montserrat_600SemiBold",
							fontSize: 12,
						}}>
						LogOut
					</Text>
				</TouchableOpacity>
			</DrawerContentScrollView>

			{/* Footer */}
			<View
				style={{
					borderTopWidth: 1,
					borderTopColor: "#ccc",
					padding: 15,
				}}>
				<TouchableOpacity
					onPress={() => router.push("/(main)/Setting/Setting")}
					style={{ flexDirection: "row", alignItems: "center" }}>
					<Ionicons name="settings" size={24} color="black" />
					<Text
						style={{
							marginLeft: 10,
							fontFamily: "Montserrat_600SemiBold",
							fontSize: 12,
						}}>
						Settings & account
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
