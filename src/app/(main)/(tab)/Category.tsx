import Images from "@/constants/Images";
import { useProducts } from "@/src/hooks/product.hooks";
import {
	Montserrat_600SemiBold,
	useFonts,
} from "@expo-google-fonts/montserrat";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
	FlatList,
	Image,
	ScrollView,
	StatusBar,
	Text,
	TouchableOpacity,
	View,
	ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Category() {
	const [selected, setSelected] = useState("Necklaces");
	const [productData, setProductData] = useState<any[]>([]);
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const flatListRef = useRef<FlatList>(null);

	const ProductList = useProducts();
	const [isLoadingMore, setIsLoadingMore] = useState(false);

	const isselected = useMemo(
		() => productData?.filter((cat) => cat?.subCategory === selected),
		[productData, selected],
	);

	const uniqueCategories = useMemo(() => {
		return (
			productData?.reduce((acc: any[], current: any) => {
				const x = acc.find((item) => item.subCategory === current.subCategory);
				if (!x) {
					return acc.concat([current]);
				} else {
					return acc;
				}
			}, []) || []
		);
	}, [productData]);

	const backToHome = () => {
		router.back();
	};

	const fetchProducts = async (isInitial = false) => {
		if (ProductList.isPending || isLoadingMore || (!isInitial && !hasMore))
			return;

		const targetPage = isInitial ? 1 : page;
		if (!isInitial) setIsLoadingMore(true);

		try {
			await ProductList.mutateAsync(
				{ page: targetPage, limit: 12 },
				{
					onSuccess: (res) => {
						const newData = res?.data?.data || [];
						if (newData.length < 12) setHasMore(false);
						else setHasMore(true);

						if (isInitial) {
							setProductData(newData);
							setPage(2);
							// Optionally auto-select the first category if current selection is not found
							if (
								newData.length > 0 &&
								!newData.some((p: any) => p.subCategory === selected)
							) {
								setSelected(newData[0].subCategory);
							}
						} else {
							setProductData((prev) => [...prev, ...newData]);
							setPage((prev) => prev + 1);
						}
					},
					onError: (err) => {
						console.error("Fetch error", err);
					},
				},
			);
		} finally {
			setIsLoadingMore(false);
		}
	};

	useEffect(() => {
		fetchProducts(true);
	}, []);

	useEffect(() => {
		flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
	}, [selected]);

	const isCloseToBottom = ({
		layoutMeasurement,
		contentOffset,
		contentSize,
	}: any) => {
		return (
			layoutMeasurement.height + contentOffset.y >= contentSize.height - 20
		);
	};

	const handleScroll = (nativeEvent: any) => {
		if (isCloseToBottom(nativeEvent)) {
			fetchProducts(false);
		}
	};

	console.log("uniqueCategoriesLength", uniqueCategories?.length);

	return (
		<SafeAreaView className="  bg-gray-200 flex-1">
			{/* Top Header */}
			<StatusBar barStyle="dark-content" backgroundColor="white" />
			<View
				className="flex flex-row items-center px-3 justify-between bg-white  py-3"
				style={{
					shadowColor: "#000",
					shadowOffset: { width: 0, height: 2 },
					shadowOpacity: 0.1,
					shadowRadius: 3,
					elevation: 4,
				}}>
				<View className="flex flex-row  items-center gap-3">
					<AntDesign
						name="arrow-left"
						size={22}
						color="black"
						onPress={backToHome}
					/>
					<Text
						style={{ fontFamily: "Poppins_400Regular" }}
						className="text-[14px]">
						All CATEGORIES
					</Text>
				</View>
				<Ionicons
					name="cart-outline"
					size={30}
					color="black"
					onPress={() => router.push("/(main)/(tab)/AddToCart")}
				/>
			</View>

			<View className="flex flex-row flex-1 mt-2">
				{/* Left Sidebar */}
				<View className="flex-[.3] flex-row">
					<ScrollView
						onScroll={({ nativeEvent }) => handleScroll(nativeEvent)}
						showsVerticalScrollIndicator={false}
						className="bg-gray-50 px-2 pt-3 rounded-tr-lg">
						{/* {productData?.map((item, i): any => (
							<TouchableOpacity
								onPress={() => setSelected(item?.subCategory)}
								key={i}
								className="mb-4">
								
								<View
									className={`w-[55px] h-[55px] rounded-full overflow-hidden border-2 ${
										item?.subCategory === selected
											? "border-[#f43f5e] shadow-md"
											: "border-gray-200"
									}`}>
									<Image
										source={item?.images[0]?.url}
										className="w-full h-full rounded-full"
									/>
								</View>
							</TouchableOpacity>
						))} */}
						{uniqueCategories?.map((item: any, index: number) => {
							const isActive = item?.subCategory === selected;
							return (
								<TouchableOpacity
									key={item?._id || index}
									activeOpacity={0.8}
									className="mb-5 items-center relative"
									onPress={() => setSelected(item?.subCategory)}>
									{/* Active Background/Indicator */}
									{isActive && (
										<View className="absolute -left-2 top-0 bottom-0 w-1 bg-red-500 rounded-r-full" />
									)}

									<View
										className={`w-[62px] h-[62px] rounded-full items-center justify-center border-2 ${
											isActive
												? "border-red-500 bg-red-50"
												: "border-transparent"
										}`}>
										<View className="w-[54px] h-[54px] rounded-full overflow-hidden bg-white shadow-sm">
											<Image
												source={{ uri: item?.images[0]?.path }}
												className="w-full h-full"
												resizeMode="cover"
											/>
										</View>
									</View>

									<Text
										numberOfLines={2}
										className={`text-[10px] mt-1.5 text-center px-1  ${
											isActive ? "text-red-600 " : "text-gray-600"
										}`}
										style={{
											fontFamily: isActive
												? "Poppins_700Bold"
												: "Poppins_400Regular",
											width: 75,
										}}>
										{item?.title?.shortTitle}
									</Text>
								</TouchableOpacity>
							);
						})}
					</ScrollView>
				</View>

				{/* Right Grid */}
				<FlatList
					ref={flatListRef}
					data={isselected || []}
					numColumns={2}
					showsVerticalScrollIndicator={false}
					keyExtractor={(item, index) => item._id || index.toString()}
					columnWrapperStyle={{ justifyContent: "flex-start", gap: 12 }}
					contentContainerStyle={{ padding: 2, gap: 12, paddingBottom: 20 }}
					className="flex-1 ml-2"
					onEndReached={() => fetchProducts(false)}
					onEndReachedThreshold={0.5}
					ListFooterComponent={() =>
						isLoadingMore ? (
							<View className="py-4 items-center">
								<ActivityIndicator size="small" color="#f43f5e" />
							</View>
						) : null
					}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={() => {
								router.push({
									pathname: "/(main)/Product/Product",
									params: {
										id: item?.id,
									},
								});
							}}
							activeOpacity={0.85}
							className="flex-1 mb-2 max-w-[48%]">
							<View className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
								<View className="w-full h-[140px]">
									<Image
										className="w-full h-full"
										source={{ uri: item.images[0].path }}
										resizeMode="cover"
									/>
								</View>
								<View className="p-2">
									<Text
										numberOfLines={1}
										className="text-[12px] font-medium text-gray-800"
										style={{ fontFamily: "Poppins_700Bold" }}>
										{item.title?.shortTitle || "Product"}
									</Text>
									<Text className="text-[13px] font-bold text-red-500 mt-0.5">
										₹{item.price.mrp || "499"}
									</Text>
								</View>
							</View>
						</TouchableOpacity>
					)}
					ListHeaderComponent={
						<View className="flex-row items-center justify-between bg-white py-3 px-4 rounded-lg shadow mb-3">
							<Text
								style={{ fontFamily: "Poppins_700Bold" }}
								className="text-base font-semibold text-gray-800">
								{selected || "Category"}
							</Text>
							<Ionicons
								name="chevron-forward"
								size={18}
								color="#666"
								onPress={() => {
									router.push({
										pathname: "/(main)/Products/Products",
										params: {
											subCategory: selected,
										},
									});
								}}
							/>
						</View>
					}
				/>
			</View>
		</SafeAreaView>
	);
}
