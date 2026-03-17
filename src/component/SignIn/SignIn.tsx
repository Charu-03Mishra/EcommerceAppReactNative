import { useLogin, useRegister } from "@/src/hooks/auth.hooks";
import { SigninSchema, SignupSchema } from "@/src/Validation/AuthValidation";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import * as React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

interface SignInProps {
	activeModal: string;
	setActiveModal: (modal: string) => void;
}

export default function SignIn({ activeModal, setActiveModal }: SignInProps) {
	const [showPassword, setShowPassword] = React.useState(false);
	const [signupChecked, setSignupChecked] = React.useState(false);
	const [rememberMe, setRememberMe] = React.useState(false);
	const registerMutation = useRegister();
	const loginMutation = useLogin();
	const router = useRouter();

	// Store resetForm in a ref to avoid stale closure
	const resetFormRef = React.useRef<(() => void) | null>(null);

	const handleRegister = (values: any, { resetForm }: any) => {
		resetFormRef.current = resetForm; // Store latest resetForm

		const payload = {
			...values,
			phone: Number(values.phone),
		};
		console.log("payload", payload);

		registerMutation.mutate(payload, {
			onError: (error) => {
				console.log("error", error?.message);
			},
			onSuccess: () => {
				resetFormRef.current?.(); // Safe reset via ref
				setActiveModal("login");
			},
		});
	};

	const handleLogin = (values: any) => {
		const payload = {
			...values,
			phone: Number(values.phone),
		};
		console.log("payload", payload);

		loginMutation.mutate(payload, {
			onError: (error) => {
				console.log("error", error?.message);
			},
			onSuccess: (res) => {
				console.log("res login", res.data.token);
				resetFormRef.current?.(); // Safe reset via ref
				router.replace("/(main)/(tab)");
			},
		});
	};

	return (
		<>
			{activeModal === "sign" ? (
				<View className="rounded-t-3xl bg-white overflow-hidden px-2 py-8">
					{/* Title */}
					<View className="items-center mb-4">
						<Text
							style={{
								fontFamily: "Montserrat_700Bold",
								fontSize: 16,
								color: "#2B7FFF",
								marginBottom: 4,
							}}>
							Get Started
						</Text>
						<View
							style={{
								width: 50,
								height: 3,
								backgroundColor: "#2B7FFF",
								borderRadius: 2,
							}}
						/>
					</View>

					{/* Signup Form */}
					<Formik
						initialValues={{
							name: "",
							email: "",
							phone: "",
							password: "",
							userType: 1,
						}}
						validationSchema={SignupSchema}
						onSubmit={handleRegister}>
						{({
							handleChange,
							handleBlur,
							handleSubmit,
							values,
							errors,
							touched,
						}) => (
							<ScrollView>
								{/* Full Name */}
								<TextInput
									label="Full Name"
									value={values.name}
									onChangeText={handleChange("name")}
									onBlur={handleBlur("name")}
									mode="outlined"
									left={<TextInput.Icon icon="account" size={20} />}
									style={{ marginBottom: 5, backgroundColor: "#F9FAFB" }}
								/>
								{errors.name && touched.name && (
									<Text style={{ color: "red", fontSize: 12 }}>
										{errors.name}
									</Text>
								)}

								{/* Email */}
								<TextInput
									label="Email"
									value={values.email}
									onChangeText={handleChange("email")}
									onBlur={handleBlur("email")}
									mode="outlined"
									left={<TextInput.Icon icon="email" size={20} />}
									style={{ marginBottom: 5, backgroundColor: "#F9FAFB" }}
								/>
								{errors.email && touched.email && (
									<Text style={{ color: "red", fontSize: 12 }}>
										{errors.email}
									</Text>
								)}

								{/* Phone */}
								<TextInput
									label="Phone Number"
									value={values.phone}
									onChangeText={handleChange("phone")}
									onBlur={handleBlur("phone")}
									mode="outlined"
									left={<TextInput.Icon icon="phone" size={20} />}
									style={{ marginBottom: 5, backgroundColor: "#F9FAFB" }}
								/>
								{errors.phone && touched.phone && (
									<Text style={{ color: "red", fontSize: 12 }}>
										{errors.phone}
									</Text>
								)}

								{/* Password */}
								<TextInput
									label="Password"
									value={values.password}
									onChangeText={handleChange("password")}
									onBlur={handleBlur("password")}
									mode="outlined"
									secureTextEntry={!showPassword}
									left={<TextInput.Icon icon="lock" size={20} />}
									right={
										<TextInput.Icon
											size={20}
											icon={showPassword ? "eye-off" : "eye"}
											onPress={() => setShowPassword(!showPassword)}
										/>
									}
									style={{ marginBottom: 5, backgroundColor: "#F9FAFB" }}
								/>
								{errors.password && touched.password && (
									<Text style={{ color: "red", fontSize: 12 }}>
										{errors.password}
									</Text>
								)}

								{/* Terms Checkbox */}
								<View
									style={{
										marginTop: 4,
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Checkbox
										value={signupChecked}
										onValueChange={setSignupChecked}
										color={signupChecked ? "#2B7FFF" : undefined}
										style={{ marginRight: 8, height: 15, width: 15 }}
									/>
									<Text
										style={{ fontSize: 12, fontFamily: "Montserrat_700Bold" }}>
										{signupChecked
											? "I agree to Terms & Conditions"
											: "Accept Terms & Conditions"}
									</Text>
								</View>

								{/* Social Icons */}
								<View className="flex-row items-center justify-center gap-6 mt-4">
									<FontAwesome5 name="facebook" size={20} color="#2B7FFF" />
									<FontAwesome5 name="twitter" size={20} color="#21BCFF" />
									<AntDesign name="google" size={20} color="#E7180B" />
									<AntDesign name="apple" size={20} color="black" />
								</View>

								{/* Switch to Login */}
								<View className="flex-row items-center justify-center mt-3">
									<Text
										style={{ fontSize: 12, fontFamily: "Montserrat_700Bold" }}>
										Already have an Account?{" "}
									</Text>
									<TouchableOpacity onPress={() => setActiveModal("login")}>
										<Text
											style={{
												fontSize: 12,
												fontFamily: "Montserrat_700Bold",
												color: "#2B7FFF",
											}}>
											Login
										</Text>
									</TouchableOpacity>
								</View>

								{/* Signup Button */}
								<Button
									mode="contained"
									onPress={() => handleSubmit()}
									loading={registerMutation.isPending} // Shows loading spinner
									disabled={registerMutation.isPending} // Prevents double submit
									style={{
										borderRadius: 15,
										paddingVertical: 8,
										marginTop: 15,
									}}
									buttonColor="#2B7FFF">
									<Text
										style={{
											fontFamily: "Montserrat_600SemiBold",
											fontSize: 10,
										}}>
										Continue
									</Text>
								</Button>
							</ScrollView>
						)}
					</Formik>
				</View>
			) : (
				<View>
					{/* Login Heading */}
					<View className="items-center mb-4">
						<Text
							style={{
								fontFamily: "Montserrat_700Bold",
								fontSize: 16,
								color: "#2B7FFF",
								marginBottom: 4,
							}}>
							Welcome Back
						</Text>
						<View
							style={{
								width: 50,
								height: 3,
								backgroundColor: "#2B7FFF",
								borderRadius: 2,
							}}
						/>
					</View>

					{/* Login Form */}
					<Formik
						initialValues={{ username: "", password: "" }}
						validationSchema={SigninSchema}
						onSubmit={handleLogin}>
						{({
							handleChange,
							handleBlur,
							handleSubmit,
							values,
							errors,
							touched,
						}) => (
							<View style={{ padding: 16 }}>
								{/* Phone */}
								<TextInput
									label="Phone Number"
									mode="outlined"
									value={values.username}
									onChangeText={handleChange("username")}
									onBlur={handleBlur("username")}
									left={<TextInput.Icon icon="phone" size={20} />}
									style={{
										marginBottom: 4,
										backgroundColor: "#F9FAFB",
										borderRadius: 12,
										height: 50,
										fontSize: 12,
									}}
									outlineColor="#E5E7EB"
									activeOutlineColor="#2B7FFF"
									theme={{
										roundness: 10,
										colors: {
											placeholder: "#9CA3AF",
											text: "#111827",
											primary: "#2B7FFF",
										},
									}}
								/>
								{touched.username && errors.username && (
									<Text style={{ color: "red", fontSize: 12 }}>
										{errors.username}
									</Text>
								)}

								{/* Password */}
								<TextInput
									label="Password"
									mode="outlined"
									value={values.password}
									onChangeText={handleChange("password")}
									onBlur={handleBlur("password")}
									secureTextEntry={!showPassword}
									left={<TextInput.Icon icon="lock" size={20} />}
									right={
										<TextInput.Icon
											size={20}
											icon={showPassword ? "eye-off" : "eye"}
											onPress={() => setShowPassword(!showPassword)}
										/>
									}
									style={{
										marginBottom: 4,
										backgroundColor: "#F9FAFB",
										borderRadius: 12,
										height: 50,
										fontSize: 12,
									}}
									outlineColor="#E5E7EB"
									activeOutlineColor="#2B7FFF"
									theme={{
										roundness: 10,
										colors: {
											placeholder: "#9CA3AF",
											text: "#111827",
											primary: "#2B7FFF",
										},
									}}
								/>
								{touched.password && errors.password && (
									<Text style={{ color: "red", fontSize: 12 }}>
										{errors.password}
									</Text>
								)}

								{/* Remember Me & Forget Password */}
								<View
									style={{
										marginTop: 4,
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
									}}>
									<View style={{ flexDirection: "row", alignItems: "center" }}>
										<Checkbox
											value={rememberMe}
											onValueChange={setRememberMe}
											color={rememberMe ? "#2B7FFF" : undefined}
											style={{ marginRight: 8, height: 15, width: 15 }}
										/>
										<Text
											style={{
												fontSize: 12,
												fontFamily: "Montserrat_700Bold",
											}}>
											Remember Me
										</Text>
									</View>
									<Text
										style={{
											color: "#2B7FFF",
											fontFamily: "Montserrat_600SemiBold",
											fontSize: 10,
										}}>
										Forget Password?
									</Text>
								</View>

								{/* Login Button */}
								<Button
									mode="contained"
									onPress={() => handleSubmit()}
									loading={loginMutation.isPending} // Shows loading spinner
									disabled={loginMutation.isPending} // Prevents double submit
									style={{
										borderRadius: 15,
										paddingVertical: 8,
										marginTop: 15,
									}}
									buttonColor="#2B7FFF">
									Log In
								</Button>
							</View>
						)}
					</Formik>

					{/* Footer - Switch to Signup */}
					<View className="items-center justify-center mt-3 flex-row">
						<Text
							style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 10 }}>
							Don't have an Account?{" "}
						</Text>
						<TouchableOpacity onPress={() => setActiveModal("sign")}>
							<Text
								style={{
									color: "#2B7FFF",
									fontFamily: "Montserrat_600SemiBold",
									fontSize: 10,
								}}>
								Sign Up
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			)}
		</>
	);
}
