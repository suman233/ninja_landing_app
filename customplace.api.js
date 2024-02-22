import { api_end_points } from "../api_end_points";
import axiosInstance from "../axiosInstance";
import { useMutation, useQueryClient } from "react-query";
import { useSnackbar } from "notistack";

export const addCustomActivityMutation = async (data) => {
  let _res = await axiosInstance
    .post(api_end_points.places.addCustomActivity, data)
    .then((response) => {
      return response?.data;
    })
    .catch((error) => {
      return error?.response?.data;
    });

  return _res;
};

export const addCustomLoggingMutation = async (data) => {
  const _res = await axiosInstance
    .post(api_end_points.places.addCustomlodging, data)
    .then((response) => {
      return response?.data;
    })
    .catch((error) => {
      return error?.response?.data;
    });

  return _res;
};

export const hotelListQuery = async (data) => {
  const _res = await axiosInstance
    .post(api_end_points.hotel.list, data)
    .then((response) => {
      return response?.data;
    })
    .catch((error) => {
      return error?.response?.data;
    });

  return _res;
};

export const hotelDeatilsQuery = async (data) => {
  const _res = await axiosInstance
    .post(api_end_points.hotel.details, data)
    .then((response) => {
      return response?.data;
    })
    .catch((error) => {
      return error?.response?.data;
    });

  return _res;
};

export const resturantSubCategoryQuery = async () => {
  const _res = await axiosInstance
    .get(api_end_points.resturant.list)
    .then((response) => {
      return response?.data;
    })
    .catch((error) => {
      return error?.response?.data;
    });

  return _res;
};
