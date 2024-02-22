import { LandingRoot } from "@/interface/landing.interface"
import axiosInstance from "../axiosInstance"
import { endpoints } from "../endpoints"

export const fetchLandingPageDetails=async()=>{
    try {
    const resp= await axiosInstance.get<LandingRoot>(
        endpoints.landing
    )
    console.log('landing',resp.data.data);
    console.log('resp', resp?.data?.data.banner_text_1);
    return resp?.data?.data;
    }
    catch (error){
        console.log(error);
        
    }
}