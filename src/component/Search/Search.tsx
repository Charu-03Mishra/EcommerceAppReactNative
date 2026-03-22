import { Feather } from "@expo/vector-icons";
import { Text, TextInput, View } from "react-native";

export default function Search({ placeholder }: { placeholder: string }) {
	return (
		<View className="flex-row ">
			{/* Back Button */}

			{/* Search Box */}
			<View className="flex-1">
				<View className="flex-row items-center  border border-gray-400 bg-white rounded-lg px-3 py-1 shadow-sm">
					<Feather name="search" size={20} color="#4B5563" />
					<TextInput
						className="px-2 py-2 text-base "
						placeholder={placeholder}
						placeholderTextColor="#9CA3AF"
					/>
				</View>
			</View>
		</View>
	);
}
