import api from "@/src/api/axiosInstance";
import { createSlice } from "@reduxjs/toolkit";
import { getData, removeData, saveData } from "@/src/utills/LocalStorage";

const user = getData("user");
const token = getData("token");
const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: user || {},
		token: token || null,
	},
	reducers: {
		register: (state, action) => {
			state.user = action.payload.user;
			state.token = action.payload.token;
			saveData("token", action.payload.token);
			saveData("user", JSON.stringify(action.payload.user));
		},
		login: (state, action) => {
			state.user = action.payload.user;
			state.token = action.payload.token;
			saveData("token", action.payload.token);
			saveData("user", JSON.stringify(action.payload.user));
		},
		logout: (state) => {
			state.user = null;
			state.token = null;
			removeData("token");
			removeData("user");
		},
	},
});

export const { register, login, logout } = authSlice.actions;

export default authSlice.reducer;

