import React, { useRef, useState } from "react";
import {
	SafeAreaView,
	StatusBar,
	View,
	Text,
	TouchableOpacity,
} from "react-native";
import { Video, ResizeMode } from "expo-av";
import ReactNativeModal from "react-native-modal";
import ShopingAddress from "@/src/component/ShopingAddress/ShopingAddress";
import { TextInput } from "react-native-paper";
import SignIn from "@/src/component/SignIn/SignIn";

export default function App() {
	const videoRef = useRef(null);
	const [activeModal, setActiveModal] = useState("");
	const [text, setText] = useState("");

	return (
		<SafeAreaView className="flex-1">
			<StatusBar
				barStyle="dark-content"
				backgroundColor="white"
				translucent={true}
			/>

			<View
				className="flex-1 overflow-hidden"
				style={{
					elevation: 5,
					shadowColor: "#000",
					shadowOffset: { width: 0 },
					shadowOpacity: 0.2,
					shadowRadius: 3,
				}}>
				{/* Background Video */}
				<Video
					ref={videoRef}
					source={require("@/assets/FolderOfVideo/FromKlickPin.mp4")}
					style={{ width: "100%", height: "100%" }}
					shouldPlay
					isLooping
					isMuted
					resizeMode={ResizeMode.COVER}
				/>

				{/* Button container on top of Video */}
				<View className="absolute bottom-[25%] w-full left-0 right-0  justify-center items-center">
					<Text
						className="text-white text-[38px] font-semibold"
						style={{ fontFamily: "Montserrat_600SemiBold" }}>
						Welcome Back !
					</Text>
					<Text
						className="text-white text-[20px] font-semibold"
						style={{ fontFamily: "Montserrat_600SemiBold" }}>
						Enter Your personal Details
					</Text>
				</View>

				<View className="absolute bottom-6 w-full left-0 right-0 flex-row gap-4 justify-center px-4">
					{/* Sign In Button */}
					<TouchableOpacity
						onPress={() => setActiveModal("login")}
						activeOpacity={0.8}
						className="flex-1 bg-black py-4 rounded-2xl shadow-lg items-center">
						<Text
							className="text-white text-lg font-semibold"
							style={{ fontFamily: "Montserrat_600SemiBold" }}>
							Sign In
						</Text>
					</TouchableOpacity>

					{/* Register Button */}
					<TouchableOpacity
						onPress={() => setActiveModal("sign")}
						activeOpacity={0.8}
						className="flex-1 bg-white py-4 rounded-2xl shadow-lg items-center border border-gray-300">
						<Text
							className="text-black text-lg font-semibold"
							style={{ fontFamily: "Montserrat_600SemiBold" }}>
							Register
						</Text>
					</TouchableOpacity>
				</View>
			</View>

			{/* Modal */}
			{activeModal === "sign" && (
				<ReactNativeModal
					isVisible={true}
					onBackdropPress={() => setActiveModal("")}
					onBackButtonPress={() => setActiveModal("")}
					backdropOpacity={0.5}
					animationIn="slideInUp"
					animationOut="slideOutDown"
					style={{ justifyContent: "flex-end", margin: 0 }}
					useNativeDriver>
					{/* Half screen popup */}
					<View className=" bg-white rounded-t-[40px] px-4 py-2">
						<SignIn activeModal={activeModal} setActiveModal={setActiveModal} />
					</View>
				</ReactNativeModal>
			)}
			{activeModal === "login" && (
				<ReactNativeModal
					isVisible={true}
					onBackdropPress={() => setActiveModal("")}
					onBackButtonPress={() => setActiveModal("")}
					backdropOpacity={0.5}
					animationIn="slideInUp"
					animationOut="slideOutDown"
					style={{ justifyContent: "flex-end", margin: 0 }}
					useNativeDriver>
					{/* Half screen popup */}
					<View className=" bg-white rounded-t-[60px] p-4">
						<SignIn activeModal={activeModal} setActiveModal={setActiveModal} />
					</View>
				</ReactNativeModal>
			)}
		</SafeAreaView>
	);
}
