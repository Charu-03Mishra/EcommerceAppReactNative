import axiosInstance from "../../api/axiosInstance";

class AuthServices {
	constructor() {
		this.axiosInstance = axiosInstance;
	}
	async register(data) {
		const response = await this.axiosInstance.post(`/auth/register`, data);
		return response.data;
	}
	async login(data) {
		const response = await this.axiosInstance.post(`/auth/login`, data);
		return response.data;
	}
}

export const authServices = new AuthServices();
