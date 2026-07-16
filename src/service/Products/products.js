import axios from "axios";
import axiosInstance from "../../api/axiosInstance";
import { mongoQueryBuilder } from "@/src/utills/SetQuery";

class Products {
	async GetProducts(payload) {
		// console.log("payloadnbjbkj", payload);
		const queryData = mongoQueryBuilder(payload);
		console.log("queryNecklaces", queryData);

		const response = await axiosInstance.post(`/product/list`, queryData);
		console.log("response", response.data);

		return response.data;
	}

	async GetProductById(id) {
		const response = await axiosInstance.get(`/product/get/${id}`);
		console.log("response productId", response.data);

		return response.data;
	}
}

export const products = new Products();
