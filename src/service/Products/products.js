import axios from "axios";
import axiosInstance from "../../api/axiosInstance";

class Products {
	async GetProducts() {
		const response = await axiosInstance.post(`/product/list`, {
			page: 1,
			limit: 10,
		});
		return response.data;
	}
}

export const products = new Products();
