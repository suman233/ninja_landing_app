import { IFormInput } from "@/interface/common.interface";
import { userData } from "@/types/common.type";
import ApiRequest from "../axiosInstance/request";
import { endpoints } from "../endpoints";
import axiosInstance from "../axiosInstance";
import { IgetSignUpQuery } from "@/interface/apiresp.interfaces";

export const signUpMutation = async (body: IFormInput) => {
  const res = await axiosInstance.post<IgetSignUpQuery>(
    endpoints.auth.signup,
    body
  );
  return res;
};
export const loginMutation = async (body: IFormInput) => {
  const res = await axiosInstance.post<IgetSignUpQuery>(
    endpoints.auth.login,
    body
  );
  return res;
};
export const GetProfileDetails = async () => {
  const res = await axiosInstance.get<IgetSignUpQuery>(
    endpoints.auth.profileDetails
  );
  return res;
};
export const signUpProfileMutation = async (body: IFormInput) => {
  const res = await axiosInstance.post<IgetSignUpQuery>(
    endpoints.auth.signUpProfile,
    body
  );
  return res;
};

export const ProfileUpdateMutation = async (body: IFormInput) => {
  try {
    const res = await ApiRequest.post<IgetSignUpQuery>(
      endpoints.auth.profileUpdate,
      body
    );

    return res;
  } catch (error) {
    return error;
  }
};
