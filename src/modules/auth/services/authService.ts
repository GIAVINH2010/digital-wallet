import { RegisterParams, LoginParams } from "modules/auth/store/types";
import { axiosExec } from "core/utils/axios";

const register = (params: RegisterParams) => {
  const configs = {
    method: "post",
    url: "/auth/register",
    data: params,
  };

  return axiosExec(configs);
};

const login = (params: LoginParams) => {
  const configs = {
    method: "post",
    url: "/auth/login",
    data: params,
  };

  return axiosExec(configs);
};
const authService = { register, login };

export default authService;
