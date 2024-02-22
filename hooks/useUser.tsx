/* eslint-disable no-console */
import { GetProfileDetails } from "@/api/functions/user.api";
import { useMutation, useQuery } from "react-query";
import { parseCookies } from "nookies";
import { logout, setLoginData } from "@/reduxtoolkit/slices/userSlice";
import { useAppSelector } from "./useAppSelector";
import { useAppDispatch } from "./useAppDispatch";
import { Cookies } from "react-cookie";

const useUser = () => {
  const cookie = new Cookies();
  const token = cookie.get("career_token");
  const dispatch = useAppDispatch();
  const { userData } = useAppSelector((s) => s.userSlice);

  const profileDetails = useQuery("userdetails", GetProfileDetails, {
    enabled: !!token && userData === null,
    onSuccess(data) {
      if (data?.data?.status === 401) {
        dispatch(logout());
      } else {
        dispatch(setLoginData(data?.data?.data));
      }
    },
    onError() {
      dispatch(logout());
    },
  });


  return { ...profileDetails };
};

export default useUser;
