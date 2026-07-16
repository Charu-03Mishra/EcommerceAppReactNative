import React, { useState } from "react";
import {
	Image,
	ScrollView,
	StatusBar,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditProfile({
	setActiveModal,
}: {
	setActiveModal: (modal: string | null) => void;
}) {
	const [mobile, setMobile] = useState("+91 1234567890");
	const [name, setName] = useState("Aryan");
	const [email, setEmail] = useState("aryan56786@gmail.com");
	const [altMobile, setAltMobile] = useState("+91 75486412358");

	return (
		<SafeAreaView className="flex-1 bg-gray-100">
			<StatusBar barStyle="dark-content" />

			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 120 }}
				className="px-4 pt-6">
				{/* Profile Header */}
				<View className="py-8 items-center mb-6">
					<Image
						source={{
							uri: "https://cdni.iconscout.com/illustration/premium/thumb/female-user-image-illustration-svg-png-download-6515859.png",
						}}
						className="w-28 h-28 rounded-full border-4 border-[#0BBCB5]/20"
					/>
					<Text className="text-xl font-semibold text-gray-800 mt-4">
						Emma Phillips
					</Text>
					<Text className="text-gray-400 text-sm mt-1">
						Manage your personal details
					</Text>
				</View>

				{/* Main Form Card */}
				<View className=" p-5 mb-6">
					{/* Mobile */}
					<View className="mb-4">
						<Text className="text-gray-500 text-xs mb-1">Mobile Number</Text>
						<TextInput
							value={mobile}
							onChangeText={setMobile}
							className="bg-gray-white border border-gray-200 rounded-xl px-4 py-3 text-base"
							placeholder="Enter mobile number"
							placeholderTextColor="#9CA3AF"
							keyboardType="phone-pad"
						/>
					</View>

					{/* Name */}
					<View className="mb-4">
						<Text className="text-gray-500 text-xs mb-1">Full Name</Text>
						<TextInput
							value={name}
							onChangeText={setName}
							className="bg-gray-white border border-gray-200 rounded-xl px-4 py-3 text-base"
							placeholder="Enter full name"
							placeholderTextColor="#9CA3AF"
						/>
					</View>

					{/* Email */}
					<View>
						<Text className="text-gray-500 text-xs mb-1">E-mail</Text>
						<TextInput
							value={email}
							onChangeText={setEmail}
							className="bg-gray-white border border-gray-200 rounded-xl px-4 py-3 text-base"
							placeholder="Enter email"
							placeholderTextColor="#9CA3AF"
							keyboardType="email-address"
						/>
					</View>
				</View>

				{/* Alternate Number Card */}
				<View className=" p-5 mb-6">
					<Text className="text-gray-800 font-semibold mb-3">
						Alternate Mobile Number
					</Text>

					<TextInput
						value={altMobile}
						onChangeText={setAltMobile}
						className="bg-gray-white border border-gray-200 rounded-xl px-4 py-3 text-base"
						placeholder="Enter alternate number"
						placeholderTextColor="#9CA3AF"
						keyboardType="phone-pad"
					/>

					<Text className="text-gray-400 text-xs mt-2">
						Helps recover your account if needed
					</Text>
				</View>
			</ScrollView>

			{/* Sticky Save Button */}
			<View className="absolute bottom-0 left-0 right-0 bg-white px-4 py-4 border-t border-gray-200">
				<TouchableOpacity
					activeOpacity={0.85}
					onPress={() => setActiveModal(null)}
					className="bg-[#0BBCB5] py-4 rounded-2xl items-center shadow-md">
					<Text
						className="text-white text-base"
						style={{ fontFamily: "Montserrat_700Bold" }}>
						Save Changes
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
