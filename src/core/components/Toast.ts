import { toast, ToastOptions } from "react-toastify";

const toastify = (content: string, type: string) => {
  const toastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
  };

  switch (type) {
    case "error":
      return toast.error(content, { ...toastOptions });
    case "warn":
      return toast.warn(content, { ...toastOptions });
    case "success":
      return toast.success(content, { ...toastOptions });
    case "info":
      return toast.info(content, { ...toastOptions });
    default:
      return toast(content, { ...toastOptions });
  }
};

export default toastify;
