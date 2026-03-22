import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Redux/AuthSlice/AuthSlice";
import userReducer from "../Redux/UserSlice/user";
import productsReducer from "../Redux/ProductsSlice/products";

const store = configureStore({
	reducer: {
		auth: authReducer,
		user: userReducer,
		products: productsReducer,
	},
});

export default store;
