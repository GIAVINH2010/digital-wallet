import { PayloadAction } from "@reduxjs/toolkit";
import { HomeState, Wallet } from "./types";

const reducers = {
  fetchWalletsSuccess: (state: HomeState, action: PayloadAction<Wallet>) => {
    state.wallet = action.payload;
  },
};

export default reducers;
