import Images from "@/constants/Images";
import * as React from "react";
import { View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { window } from "../../../constants/Size";
import { renderItem } from "../../utills/render-item";
import AntDesign from "@expo/vector-icons/AntDesign";
const defaultDataWithImages = [
	{ id: 1, src: Images.Carousel1, text: "50-40% OFF", buttonText: "Shop Now" },
	{ id: 2, src: Images.Carousel2 },
	{ id: 3, src: Images.Carousel3 },
	{ id: 5, src: Images.Carousel5 },
];

function ProductHearder() {
	const progress = useSharedValue<number>(0);

	return (
		<View
			className=""
			id="carousel-component"
			dataSet={{ kind: "basic-layouts", name: "parallax" }}>
			<Carousel
				data={defaultDataWithImages}
				autoPlay={true} // 🔥 this enables auto scroll
				autoPlayInterval={2000}
				loop={true}
				pagingEnabled={true}
				snapEnabled={true}
				height={258}
				width={window.width * 1.1}
				style={{ alignSelf: "center" }}
				mode="parallax"
				modeConfig={{
					parallaxScrollingScale: 0.9,
					parallaxScrollingOffset: 40,
				}}
				onProgressChange={progress}
				renderItem={renderItem({ rounded: true })}
			/>
		</View>
	);
}

export default ProductHearder;
