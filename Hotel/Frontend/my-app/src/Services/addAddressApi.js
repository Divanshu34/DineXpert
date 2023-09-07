import axios from 'axios';
import { createUrl } from '../utils/utils';

export async function addAddressApi(addressLine,landmark,city,pincode)
{
     const id= sessionStorage.getItem("userId")
    const url =createUrl(`/address/${id}`);
    const body={addressLine,landmark,city,pincode};
 
    try{
        const response=axios.post(url,body);
        return "success";

    }
    catch(ex)
    {
        return "error";
    }

}

export async function getAddressApi(userId)
{
    const id= sessionStorage.getItem("userId");
    const url=createUrl(`/address/get-address/${id}`)

    try{
        const response=await axios.get(url);
        return response.data;
    }
    catch(ex)
    {
        return null;
    }
}


