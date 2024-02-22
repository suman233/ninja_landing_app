import { userData } from "@/types/common.type";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { destroyCookie } from "nookies";
import { userSliceData } from "../interfaces/interfaces";
import { Cookies } from "react-cookie";
const cookie = new Cookies();
const initialState: userSliceData = {
  isLoggedIn: false,
  userData: null,
};

export const loginUser = createAsyncThunk(
  "/loginUser",
  async (data, { rejectWithValue }) => {
    try {
      // const res = await axiosInstance.post(
      //   "appointment/terminal-appointments-list",
      //   data
      // );
      // return res.data;
    } catch (error) {
      return rejectWithValue([]);
    }
  }
);

export const userSlice = createSlice({
  name: "userSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLoginData: (state, { payload }: { payload: userData }) => {
      // state.email
      state.userData = payload;
      state.isLoggedIn = true;
    },
    checkLoggedInServer: (state, { payload }) => {
      state.isLoggedIn = payload?.hasToken;
      state.userData = payload?.user;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userData = null;
      // cookie.remove("privy_token");
      // cookie.remove("user");

      destroyCookie(null, "user", { path: "/" });
      destroyCookie(null, "career_token", { path: "/" });

      window.location.href = "/login";
    },
  },
  extraReducers: {},
});

export const { setLoginData, checkLoggedInServer, logout } = userSlice.actions;

export default userSlice.reducer;
