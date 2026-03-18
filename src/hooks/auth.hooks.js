import { useMutation } from "@tanstack/react-query";
import { authServices } from "../service/Auth/auth.service";
import { saveData } from "../utills/LocalStorage";

export const useRegister = () => {
	return useMutation({
		mutationFn: (data) => authServices.register(data),
	});
};

export const useLogin = () => {
	return useMutation({
		mutationFn: (data) => authServices.login(data),
		onSuccess: (data) => {
			console.log("Login success:", data.data.token);
			if (data?.data?.token) {
				saveData("token", data.data.token);
			}
			if (data) {
				saveData("user", JSON.stringify(data));
			}
		},
		onError: (error) => {
			console.log("Login error:", error);
		},
	});
};

export const useLogout = () => {
	return useMutation({
		mutationFn: () => authServices.logout(),
		onSuccess: () => {
			removeData("token");
		},
		onError: (error) => {
			console.log("Logout error:", error);
		},
	});
};
