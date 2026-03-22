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
		<SafeAreaView className="bg-gray-100  flex-1">
			<StatusBar />
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ paddingBottom: 10 }} // gives space for Save button
				className="px-4 py-6">
				{/* Profile Header */}
				<View className="bg-white rounded-2xl mt-4 shadow-md p-6 items-center">
					<Image
						source={{
							uri: "https://cdni.iconscout.com/illustration/premium/thumb/female-user-image-illustration-svg-png-download-6515859.png",
						}}
						className="w-24 h-24 rounded-full mb-3"
					/>
					<Text className="text-xl font-bold text-gray-800">Emma Phillips</Text>
					<Text className="text-gray-500 text-sm mt-1">
						View and update your profile details
					</Text>
				</View>

				{/* Profile Form */}
				<View className="bg-white rounded-2xl shadow-md mt-6 p-5 space-y-5">
					{/* Mobile Number */}
					<View>
						<Text className="text-gray-600 text-sm font-medium mb-1">
							Mobile Number
						</Text>
						<TextInput
							value={mobile}
							onChangeText={setMobile}
							className="border border-gray-300 rounded-xl px-4 py-3 text-base bg-gray-50"
							placeholder="Enter mobile number"
							placeholderTextColor="#9CA3AF"
							keyboardType="phone-pad"
						/>
					</View>

					{/* Full Name */}
					<View>
						<Text className="text-gray-600 text-sm font-medium mb-1">
							Full Name
						</Text>
						<TextInput
							value={name}
							onChangeText={setName}
							className="border border-gray-300 rounded-xl px-4 py-3 text-base bg-gray-50"
							placeholder="Enter full name"
							placeholderTextColor="#9CA3AF"
						/>
					</View>

					{/* Email */}
					<View>
						<Text className="text-gray-600 text-sm font-medium mb-1">
							E-Mail
						</Text>
						<TextInput
							value={email}
							onChangeText={setEmail}
							className="border border-gray-300 rounded-xl px-4 py-3 text-base bg-gray-50"
							placeholder="Enter email address"
							placeholderTextColor="#9CA3AF"
							keyboardType="email-address"
						/>
					</View>
				</View>

				{/* Alternate Mobile Section */}
				<View className="bg-white rounded-2xl shadow-md mt-6 p-5 space-y-4">
					<Text className="text-base font-semibold text-gray-800">
						Alternate Mobile Number
					</Text>

					<View>
						<Text className="text-gray-600 text-sm font-medium mb-1">
							Phone Number
						</Text>
						<TextInput
							value={altMobile}
							onChangeText={setAltMobile}
							className="border border-gray-300 rounded-xl px-4 py-3 text-base bg-gray-50"
							placeholder="Enter alternate number"
							placeholderTextColor="#9CA3AF"
							keyboardType="phone-pad"
						/>
						<Text className="text-gray-400 text-xs mt-1">
							This will help recover your account if needed
						</Text>
					</View>
				</View>
				<View className="px-4  mt-6">
					<TouchableOpacity
						onPress={() => setActiveModal(null)}
						activeOpacity={0.8}
						className="bg-white border border-[#0BBCB5] px-6 py-3 rounded-lg flex flex-row items-center justify-center shadow-md"
						style={{
							shadowColor: "#000",
							shadowOffset: { width: 0, height: 2 },
							shadowOpacity: 0.15,
							shadowRadius: 3,
							elevation: 4,
						}}>
						<Text
							className="text-[#0BBCB5] text-[16px]"
							style={{ fontFamily: "Montserrat_700Bold" }}>
							Save
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>

			{/* Sticky Save Button */}
		</SafeAreaView>
	);
}
