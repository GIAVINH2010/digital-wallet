import { axiosExec } from "core/utils/axios";
import { FundParams } from "../store/types";

const getWallet = () => {
  const configs = {
    method: "get",
    url: "/wallet",
  };

  return axiosExec(configs);
};

const sendWalletfunc = (params: FundParams) => {
  const configs = {
    method: "post",
    url: "/wallet/sendFund",
    data: params,
  };

  return axiosExec(configs);
};

const walletService = { getWallet, sendWalletfunc };

export default walletService;
