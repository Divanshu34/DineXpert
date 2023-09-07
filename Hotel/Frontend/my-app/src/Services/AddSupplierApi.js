import axios from "axios";
import { createUrl } from "../utils/utils";

export async function addSupplierApi(supplierName,supplierContact,supplierAddress,shopType)
{
    const url =createUrl('/supplier/addsupplier');
    const body={supplierName,supplierContact,supplierAddress,shopType};
    try{
        const response = axios.post(url,body);
        return "success";

    }
    catch(ex)
    {
        return "error";
    }

}

export async function showSupplierApi(){
    const url = createUrl('/supplier/allsuppliers');
    try{
        const response = await axios.get(url)
        return response.data;
    }catch(ex){
        return null;
    }
}

export async function deleteSupplierApi(supplierId)
{
    const url=createUrl('/supplier/deletesupplier/'+supplierId);
    try{
        const response=await axios.delete(url);
        return "success";
    }
    catch(ex){
        return "error";
    }
}


export async function fetchSupplierDataApi(supplierId)
{
    const url=createUrl('/supplier/edit/'+supplierId);
    try{
        
        const response=await axios.get(url);
        
        return response.data;
    }
    catch(ex)
    {
        return null;    
    }
}




export async function updateSupplierApi(supplierName,supplierContact,supplierAddress,shopType,supplierId)
{
  
    const url=createUrl('/supplier/update/'+supplierId);
    const body={supplierName,supplierContact,supplierAddress,shopType};
    try{
        const response =await axios.put(url,body); 
        return response.data;
    }
    catch(ex)
    {
        return "error";
    }
}
