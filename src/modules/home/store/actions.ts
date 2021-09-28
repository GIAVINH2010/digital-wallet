import wallets from "__data__/wallets.json";

import store from "store/store";
import { fetchWalletsSuccess } from "./index";

const getWallet = async (accountId: number) => {
  const foundWallet = wallets.find((wallet) => wallet.accountId === accountId);

  if (foundWallet) {
    store.dispatch(fetchWalletsSuccess(foundWallet));
  }
};

export { getWallet };
