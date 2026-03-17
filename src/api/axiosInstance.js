import axios from "axios";
import { getData } from "../utills/LocalStorage";

// ✅ Centralized Axios instance
const axiosInstance = axios.create({
	baseURL: process.env.EXPO_PUBLIC_API_URL, // example: http://localhost:5000
	headers: {
		"Content-Type": "application/json",
	},
});

axiosInstance.interceptors.request.use(
	async (config) => {
		// Add auth token to every request
		const token = await getData("token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		console.log("Request:", config.method.toUpperCase(), config.url);
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);
export default axiosInstance;
