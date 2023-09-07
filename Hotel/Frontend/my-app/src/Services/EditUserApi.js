import axios from "axios";
import { createUrl } from "../utils/utils";

export async function loadUserDataApi(userId)
{
    const url=createUrl('/users/'+userId);
    try{
        const response= await axios(url);
        return response.data;
    }
    catch(ex)
    {
        return "error";
    }
}

export async function updateProfileApi(firstName,lastName,userEmail,mobileNumber,password,userId)
{
    const url=createUrl('/users/update-user/'+userId);
    const body={firstName,lastName,userEmail,mobileNumber,password};

    try{
        const response=await axios.put(url,body);
        return "success";
    }
    catch(ex)
    {
        return "error";
    }
}

export async function getUserByIDApi(userId)
{
    const url=createUrl('/users/'+userId);

    try{
        const response=await axios.get(url);
        return response.data;
    }
    catch(ex)
    {
        return "error";
    }
}