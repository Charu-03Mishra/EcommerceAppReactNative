
 import axiosInstance from "../../api/axiosInstance"

 class UserService {
	constructor() {
		this.axiosInstance = axiosInstance;
	}
	async getUser() {
		const response = await this.axiosInstance.get(`/user/me`);
		return response.data;
	}
}

export const userServices = new UserService();
