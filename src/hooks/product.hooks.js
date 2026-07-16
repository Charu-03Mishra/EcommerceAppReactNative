import { useMutation, useQuery } from "@tanstack/react-query";
import { products } from "../service/Products/products";
import { mongoQueryBuilder } from "../utills/SetQuery";

export const useProducts = () => {
	return useMutation({
		mutationKey: ["products"],
		mutationFn: (payload) => products.GetProducts(payload),
	});
};

export const useProduct = (id) => {
	return useQuery({
		queryKey: ["product",id],
		queryFn: () => products.GetProductById(id),
	});
};
