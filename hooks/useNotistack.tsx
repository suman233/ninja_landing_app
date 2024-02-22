import { useSnackbar } from "notistack";

const useNotiStack = () => {
  const { enqueueSnackbar } = useSnackbar();
  const autoHideDuration = 2000;

  const toastSuccess = (msg: string) => {
    enqueueSnackbar(msg, {
      variant: "success",
      autoHideDuration,
    });
  };

  const toastWarning = (msg: string) => {
    enqueueSnackbar(msg, {
      variant: "warning",
      autoHideDuration,
    });
  };

  const toastInfo = (msg: string) => {
    enqueueSnackbar(msg, {
      variant: "info",
      autoHideDuration,
    });
  };

  const toastError = (msg: string) => {
    enqueueSnackbar(msg, {
      variant: "error",
      autoHideDuration,
    });
  };

  return { toastSuccess, toastWarning, toastInfo, toastError };
};

export default useNotiStack;
