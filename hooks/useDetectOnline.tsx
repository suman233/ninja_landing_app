import { checkWindow } from "@/lib/functions/_helpers.lib";
import { useEffect } from "react";
import useNotiStack from "./useNotistack";

function useOnlineStatus() {
  const _Window = checkWindow() ? window : null;

  const { toastSuccess, toastError } = useNotiStack();
  useEffect(() => {
    if (checkWindow()) {
      window.addEventListener("online", () => toastSuccess("You are online"));
      window.addEventListener("offline", () => toastError("You are offline"));
    }
  }, [_Window?.navigator?.onLine]);
}

export default useOnlineStatus;
