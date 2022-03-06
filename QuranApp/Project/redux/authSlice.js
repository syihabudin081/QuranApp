import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	token: "",
	userName: "",
	isSignIn: false,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action) => {
			state.token = action.payload.token;
			state.userName = action.payload.userName;
		},

		logOut: (state) => {
			state.token = "";
			state.userName = "";
		},
		setSignInStatus: (state,action) => {
			state.isSignIn = action.payload
		}
	},
});

export const { logOut, login, setSignInStatus } = authSlice.actions;

export default authSlice.reducer;