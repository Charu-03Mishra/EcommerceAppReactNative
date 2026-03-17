import { Ionicons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import { Tabs } from "expo-router";
import React from "react";
export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: "#4682B4",
			}}>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="home" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="Category"
				options={{
					title: "Category",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="grid-outline" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="AddToCart"
				options={{
					title: "Cart",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="cart-outline" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="Account"
				options={{
					title: "Account",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="person-outline" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="Search"
				options={{
					title: "Search",
					tabBarIcon: ({ color, size }) => (
						<Feather name="search" size={size} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
