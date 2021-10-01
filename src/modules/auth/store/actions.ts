import { RegisterParams, LoginParams } from "./types";
import { setAxiosToken, removeAxiosToken } from "core/utils/axios";
import authService from "../services/authService";
import toastify from "core/components/Toast";

const signup = async (params: RegisterParams) => {
  const result = await authService.register(params);

  const { data, errors } = result;
  console.log("🚀 ~ file: actions.ts ~ line 10 ~ signup ~ errors", errors);

  if (errors) {
    const { message } = errors;
    toastify(message, "error");
  }

  if (data) {
    const { message } = data;

    if (message === "REGISTER_SUCCESSFULLY") {
      return true;
    }
  }
  return false;
};

const login = async (params: LoginParams) => {
  const result = await authService.login(params);

  const { data, errors } = result;

  if (errors) {
    const { message } = errors;
    toastify(message, "error");
  }

  if (data) {
    const { message, token } = data;

    if (message === "LOGIN_SUCCESSFULLY") {
      setAxiosToken(token);
      return true;
    }
  }
  return false;
};

const logout = () => {
  removeAxiosToken();

  window.location.reload();
};

export { signup, login, logout };
