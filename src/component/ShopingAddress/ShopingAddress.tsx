import { FontAwesome6 } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, ScrollView, TouchableOpacity, View } from "react-native";
import { RadioButton, Text } from "react-native-paper";

const SortData = [
	"Relevence",
	"Popularity",
	"Price -- Low to High",
	"Price -- High to Low",
	"Newest First",
];
export default function ShopingAddress({ activeModal }) {
	const [expanded, setExpanded] = useState(false);
	const [value, setValue] = useState("first");
	const [selected, setSelected] = useState("option1");
	return (
		<>
			{activeModal === "address" ? (
				<View className="bg-white rounded-t-3xl shadow-xl ">
					{/* Header */}
					<View className="flex-row items-center justify-between mb-4">
						<Text
							className="text-lg text-gray-800"
							style={{ fontFamily: "Montserrat_700Bold" }}>
							Select Address
						</Text>
					</View>

					<ScrollView showsVerticalScrollIndicator={false}>
						{/* Current Location */}
						<View className="flex-row items-center gap-3 mb-5">
							<FontAwesome6
								name="location-crosshairs"
								size={20}
								color="#FF1E1E"
							/>
							<Text
								className=" text-[12px]"
								style={{
									fontFamily: "Montserrat_600SemiBold",
									color: "#FF1E1E",
								}}>
								Current Location
							</Text>
						</View>

						{/* Saved Address Label */}
						<Text
							className="text-gray-500 mb-3 mt-4 text-sm"
							style={{ fontFamily: "Montserrat_600SemiBold" }}>
							SAVED ADDRESS
						</Text>

						{/* Address Card */}
						<View className="flex-row justify-between items-center bg-white  rounded-xl shadow-sm">
							{/* Left Section */}
							<View className="flex-shrink ">
								<Text
									className="text-gray-900 text-base"
									style={{ fontFamily: "Montserrat_600Bold" }}>
									Aryan
								</Text>

								<Text
									numberOfLines={3}
									ellipsizeMode="tail"
									className="text-gray-600 mt-1 text-sm leading-5"
									style={{
										fontFamily: "Montserrat_600Medium",
										textAlign: "justify",
										maxWidth: 220,
									}}>
									Lorem ipsum dolor sit Lorem, ipsum dolor.Lorem ipsum dolor sit
									Lorem, ipsum dolor.Lorem ipsum dolor sit Lorem, ipsum
									dolor.Lorem ipsum dolor sit Lorem, ipsum dolor.
								</Text>
							</View>

							{/* Right Section */}
							<Pressable
								className="bg-[#0a9396]/10 border border-[#0a9396] px-5 py-2 rounded-xl self-start"
								android_ripple={{ color: "#0a9396", borderless: true }}>
								<Text
									className="text-[#0a9396] text-sm"
									style={{ fontFamily: "Montserrat_700SemiBold" }}>
									Change
								</Text>
							</Pressable>
						</View>
					</ScrollView>
				</View>
			) : (
				<View className="bg-white rounded-t-3xl shadow-xl ">
					<View className="flex-row items-center border-b py-2 border-gray-400 justify-between mb-4">
						<Text
							className="text-lg px-4 text-gray-800"
							style={{ fontFamily: "Montserrat_700Bold" }}>
							SORT BY
						</Text>
					</View>

					<View>
						{SortData.map((item, index) => (
							<View className="px-4 flex-row bg-red-700 justify-between">
								<TouchableOpacity
									key={index}
									onPress={() => setSelected(item)}
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
										paddingVertical: 8,
										width: "100%",
									}}
									activeOpacity={0.7}>
									{/* Label */}
									<Text
										style={{
											fontSize: 16,
											color: selected === item ? "#444" : "#777",
											fontWeight: selected === item ? "600" : "400",
										}}>
										{item}
									</Text>

									{/* Custom Radio Circle */}
									<View
										style={{
											height: 20,
											width: 20,
											borderRadius: 12,
											borderWidth: 2,
											borderColor: "#444",
											alignItems: "center",
											justifyContent: "center",
										}}>
										{selected === item && (
											<View
												style={{
													height: 10,
													width: 10,
													borderRadius: 6,
													backgroundColor: "#444",
												}}
											/>
										)}
									</View>
								</TouchableOpacity>
							</View>
						))}
					</View>
				</View>
			)}
		</>
	);
}
