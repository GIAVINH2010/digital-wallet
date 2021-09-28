import { createSlice } from "@reduxjs/toolkit";
import { HomeState } from "./types";
import reducers from "./reducers";

const initialState: HomeState = {
  wallet: {},
};

export const authSlice = createSlice({
  name: "home",
  initialState,
  reducers,
});

export const { fetchWalletsSuccess } = authSlice.actions;

export default authSlice.reducer;
