import { ResizeMode, Video } from "expo-av";
import { router } from "expo-router";
import { useRef } from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
export default function App() {
	const videoRef = useRef(null);
	const OnNext = () => {
		router.push("/(main)");
	};
	return (
		<View className="flex-1 ">
			{/* Status bar setup */}
			<StatusBar
				barStyle="dark-content"
				backgroundColor="transparent"
				translucent={true}
			/>

			{/* Background Image */}
			<View
				className="flex-1  rounded-lg overflow-hidden"
				style={{
					elevation: 5,
					shadowColor: "#000",
					shadowOffset: { width: 0 },
					shadowOpacity: 0.2,
					shadowRadius: 3,
				}}>
				<Video
					ref={videoRef}
					source={require("@/assets/FolderOfVideo/VideoClotes.mp4")}
					style={{ width: "100%", height: "100%" }}
					shouldPlay
					isLooping
					isMuted
					resizeMode={ResizeMode.COVER}
				/>
			</View>
			<View className="absolute bottom-10 px-14">
				<Text
					className="text-[32px] mb-4 text-center text-white"
					style={{
						textShadowColor: "rgba(0,0,0,0.8)",
						textShadowOffset: { width: 1, height: 1 },
						textShadowRadius: 4,
					}}>
					You want Authentic, here you go!
				</Text>

				<Text
					className="text-[14px] mb-10 text-center text-white"
					style={{
						textShadowColor: "rgba(0,0,0,0.8)",
						textShadowOffset: { width: 1, height: 1 },
						textShadowRadius: 3,
					}}>
					Find it here, buy it now!
				</Text>

				<TouchableOpacity
					activeOpacity={0.6}
					className="bg-[#F83758] py-5 rounded-lg"
					onPress={OnNext}>
					<Text className="text-center text-[19px] text-white">
						Get Started
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
