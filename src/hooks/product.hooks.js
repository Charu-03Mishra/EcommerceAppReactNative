import { useQuery } from "@tanstack/react-query";
import { products } from "../service/Products/products";

export const useProducts = () => {
	return useQuery({
		queryKey: ["products"],
		queryFn: () => products.GetProducts(),
	});
};
	