import OTPInput from "@codsod/react-native-otp-input";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Verify_otp() {
	const [otp, setOTP] = useState("");
	const BackToLogin = () => {
		router.push("/(auth)/Login/Login");
	};
	const VerifyButton = () => {
		router.push("/(auth)/GetStarted/GetStarted");
	};
	return (
		<SafeAreaView className="flex-1 justify-between  ">
			<View className="flex flex-row items-center  pt-5 px-5 w-full gap-3">
				<Text onPress={BackToLogin}>
					<AntDesign name="arrowleft" size={20} color="black" />
				</Text>
				<Text className="text-[20px] font-semibold text-black">
					Verify your OTP
				</Text>
			</View>
			<View className="w-full">
				<Text className="text-[14px] text-center font-medium text-black">
					Code has been send to + 91 11******91
				</Text>
				<View className="mt-10 px-5">
					<OTPInput
						length={4}
						onOtpComplete={(txt: string) => setOTP(txt)}
						inputStyle={{ borderColor: "black", borderRadius: 10 }}
					/>
				</View>
				<Text className="text-[14px] text-center font-medium text-black mt-10">
					Resend Code in <Text className="text-[#002AC0]">56s</Text>
				</Text>
			</View>
			<View className="">
				<TouchableOpacity
					onPress={VerifyButton}
					activeOpacity={0.7}
					className="bg-[#0BBCB5]  flex items-center
							 justify-center px-5 py-4 ">
					<Text className="text-[20px]">Verify</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
