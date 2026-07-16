import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { categoriesData } from "@/constants/Category";
import { useRouter } from "expo-router";
import { useProducts } from "@/src/hooks/product.hooks";
import { Skeleton } from "moti/skeleton";

interface subcategoryData {
	subcategory: string;
}
export default function CategoryCard() {
	const router = useRouter();
	const [earrings, setEarrings] = useState<any[]>([]);
	const [necklaces, setNecklaces] = useState<any[]>([]);
	const [cocktailDresses, setCocktailDresses] = useState<any[]>([]);
	const [lehenga, setLehenga] = useState<any[]>([]);

	// Use two separate mutation hooks since we want to fire both concurrently
	const EarringsMutation = useProducts();
	const NecklacesMutation = useProducts();
	const CocktailDressesMutation = useProducts();
	const LehengaMutation = useProducts();

	useEffect(() => {
		EarringsMutation.mutate(
			{ subCategory: "Earrings" },
			{
				onSuccess: (res: any) => {
					setEarrings(res?.data?.data || []);
				},
			},
		);
	}, []);

	useEffect(() => {
		NecklacesMutation.mutate(
			{ subCategory: "Necklaces" },
			{
				onSuccess: (res: any) => {
					// Extract the array correctly and fallback to empty array if no data exists
					setNecklaces(res?.data?.data || []);
				},
			},
		);
	}, []);
	useEffect(() => {
		CocktailDressesMutation.mutate(
			{ subCategory: "Cocktail Dresses" },
			{
				onSuccess: (res: any) => {
					// Extract the array correctly and fallback to empty array if no data exists
					setCocktailDresses(res?.data?.data || []);
				},
			},
		);
	}, []);
	useEffect(() => {
		LehengaMutation.mutate(
			{ subCategory: "Lehenga" },
			{
				onSuccess: (res: any) => {
					setLehenga(res?.data?.data || []);
				},
			},
		);
	}, []);

	console.log("earringsyguhi", earrings);

	return (
		<View className="px-3 mt-2">
			<View className="flex-row justify-between items-center">
				<Text
					className="text-[18px] font-bold text-[#202020]"
					style={{ fontFamily: "Poppins_700Bold", letterSpacing: 1 }}>
					Categories
				</Text>
				<View className="flex-row items-center gap-4">
					<Text
						className="text-[18px] font-bold text-[#202020]"
						style={{ fontFamily: "Poppins_700Bold" }}>
						See All
					</Text>
					<TouchableOpacity
						activeOpacity={0.5}
						onPress={() => {
							router.push({
								pathname: "/(main)/(tab)/Category",
							});
						}}
						className=" px-2 py-2 rounded-xl "
						style={{ backgroundColor: "#0a9396", borderRadius: 50 }}>
						<AntDesign name="arrow-right" size={15} color="#fff" />
					</TouchableOpacity>
				</View>
			</View>

			<View className="flex-row flex-wrap gap-3 mt-5 mb-3">
				{/* Earrings Card */}
				<View className="w-[48%] bg-white border border-gray-200 p-2 rounded-lg shadow-md ">
					<View className="flex-row flex-wrap">
						{earrings?.slice(0, 4)?.map((item: any, index: number) => (
							<TouchableOpacity
								key={index.toString()}
								onPress={() => {
									router.push({
										pathname: "/(main)/Products/Products",
										params: {
											subCategory: item?.subCategory,
										},
									});
								}}
								className=" py-1 px-1 rounded-lg"
								style={{ width: "50%" }}>
								<View className="w-full h-24 rounded-lg">
									<Image
										source={{ uri: item?.images[0].path || "" }}
										className="w-full h-full rounded-lg object-scale-down"
									/>
								</View>
							</TouchableOpacity>
						))}
					</View>
					<View className="flex-row items-center justify-between px-2 py-2">
						<Text
							className="text-sm font-bold text-[#202020]"
							style={{ fontFamily: "Poppins_700Bold" }}>
							Earrings
						</Text>
						<Text
							className="text-sm font-bold text-[#202020]"
							style={{ fontFamily: "Poppins_700Bold" }}>
							{earrings?.length || 0}
						</Text>
					</View>
				</View>

				{/* Necklaces Card */}
				<View className="w-[48%] bg-white border border-gray-200 p-2 rounded-lg shadow-md ">
					<View className="flex-row flex-wrap">
						{necklaces?.slice(0, 4).map((item: any, index: number) => (
							<TouchableOpacity
								key={index.toString()}
								onPress={() => {
									router.push({
										pathname: "/(main)/Products/Products",
										params: {
											subCategory: item?.subCategory,
										},
									});
								}}
								className=" py-1 px-1 rounded-lg"
								style={{ width: "50%" }}>
								<View className="w-full h-24 rounded-lg">
									<Image
										source={{ uri: item?.images[0].path || "" }}
										className="w-full h-full rounded-lg object-cover"
									/>
								</View>
							</TouchableOpacity>
						))}
					</View>
					<View className="flex-row items-center justify-between px-2 py-2">
						<Text
							className="text-sm font-bold text-[#202020]"
							style={{ fontFamily: "Poppins_700Bold" }}>
							Necklaces
						</Text>
						<Text
							className="text-sm font-bold text-[#202020]"
							style={{ fontFamily: "Poppins_700Bold" }}>
							{necklaces?.length || 0}
						</Text>
					</View>
				</View>
				<View className="w-[48%] bg-white border border-gray-200 p-2  rounded-lg shadow-md ">
					<View className="flex-row gap-1 flex-wrap">
						{cocktailDresses?.slice(0, 4).map((item: any, index: number) => (
							<TouchableOpacity
								key={index.toString()}
								onPress={() => {
									router.push({
										pathname: "/(main)/Products/Products",
										params: {
											subCategory: item?.subCategory,
										},
									});
								}}
								className=" py-1 px-1 rounded-lg"
								style={{ width: "50%" }}>
								<View className="w-full h-24 rounded-lg">
									<Image
										source={{ uri: item?.images[0].path || "" }}
										className="w-full h-full rounded-lg "
									/>
								</View>
							</TouchableOpacity>
						))}
					</View>
					<View className="flex-row items-center justify-between px-2 py-2">
						<Text
							className="text-sm font-bold text-[#202020]"
							style={{ fontFamily: "Poppins_700Bold" }}>
							Cocktail Dresses
						</Text>
						<Text
							className="text-sm font-bold text-[#202020]"
							style={{ fontFamily: "Poppins_700Bold" }}>
							{cocktailDresses?.length || 0}
						</Text>
					</View>
				</View>
				<View className="w-[48%] bg-white border border-gray-200 p-2 rounded-lg shadow-md ">
					<View className="flex-row flex-wrap">
						{lehenga?.slice(0, 4).map((item: any, index: number) => (
							<TouchableOpacity
								key={index.toString()}
								onPress={() => {
									router.push({
										pathname: "/(main)/Products/Products",
										params: {
											subCategory: item?.subCategory,
										},
									});
								}}
								className=" py-1 px-1 rounded-lg"
								style={{ width: "50%" }}>
								<View className="w-full h-24 rounded-lg">
									<Image
										source={{ uri: item?.images[0].path || "" }}
										className="w-full h-full rounded-lg object-cover"
									/>
								</View>
							</TouchableOpacity>
						))}
					</View>
					<View className="flex-row items-center justify-between px-2 py-2">
						<Text
							className="text-sm font-bold text-[#202020]"
							style={{ fontFamily: "Poppins_700Bold" }}>
							Lehenga
						</Text>
						<Text
							className="text-sm font-bold text-[#202020]"
							style={{ fontFamily: "Poppins_700Bold" }}>
							{lehenga?.length || 0}
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
}
