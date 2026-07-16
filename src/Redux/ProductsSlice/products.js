import { createSlice } from "@reduxjs/toolkit";

const ProductsSlice = createSlice({
	name: "products",
	initialState: {
		products: [],
		product: {},
	},
	reducers: {
		setProducts: (state, action) => {
			state.products = action.payload;
		},
		setProduct: (state, action) => {
			state.product = action.payload;
		},
	},
});

export const { setProducts, setProduct } = ProductsSlice.actions;
export default ProductsSlice.reducer;
