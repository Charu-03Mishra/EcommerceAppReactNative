import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Redux/AuthSlice/AuthSlice";
import userReducer from "../Redux/UserSlice/user";

const store = configureStore({
	reducer: {
		auth: authReducer,
		user: userReducer,
	},
});

export default store;
