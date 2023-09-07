import axios from "axios";
import { createUrl } from "../utils/utils";

export async function fetchCustomersApi()
{
    const url=createUrl("/users/all-customers");

    try{
        const response=await axios.get(url);
        return response.data;
    }   
    catch(ex)
    {
        return null;
    }
    

}