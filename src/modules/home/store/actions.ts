// import wallets from "__data__/wallets.json";

import store from "store/store";
import walletService from "../services/walletService";
import { FundParams } from "./types";

import { fetchWalletsSuccess } from "./index";
import toastify from "core/components/Toast";

const getWallet = async () => {
  const result = await walletService.getWallet();

  const { data, errors } = result;

  if (errors) {
    const { message } = errors;
    toastify(message, "error");
  }

  if (data) {
    const { wallet } = data;
    store.dispatch(fetchWalletsSuccess(wallet));
    return true;
  }

  return false;
};

const sendWalletFund = async (params: FundParams) => {
  const result = await walletService.sendWalletfunc(params);

  const { data, errors } = result;

  if (errors) {
    const { message } = errors;
    toastify(message, "error");
  }

  if (data) {
    // const { message } = data;

    return true;
  }

  return false;
};

export { getWallet, sendWalletFund };
