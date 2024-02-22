import axios from "axios";
import ApiRequest from "../axiosInstance/request";
import { endpoints } from "../endpoints";
import axiosInstance from "../axiosInstance";
import { CMSRoot } from "@/interface/interface.cms";
import { CMSDetailRoot } from "@/interface/cms.single";

// export const fetchAboutUs = async () => {
//   try {
//     const res = await ApiRequest.get(endpoints.cms.about);
//     return res;
//   } catch (error) {
//     return error;
//   }
// };

// Faq
// export const faqQuery =  () => {
//   try {
//   const res =  ApiRequest.get(endpoints.cms.faq);

//   return res;
// } catch (error) {
//   return error;
// }
// };


export const fetchCmsList = async()=>{
  try {
    const resp= await axiosInstance.get<CMSRoot>(endpoints.cms.list)
    console.log('list',resp?.data?.data);
    return resp?.data?.data;
  } catch (error) {
    return error;
  }
}

export const fetchSingleDetail= async(id: string)=>{
  try {
    const resp= await axiosInstance.get<CMSDetailRoot>(
      endpoints.cms.detail(id)
    )
    console.log('details', resp)
    return resp;
  } catch (error) {
    
  }
}