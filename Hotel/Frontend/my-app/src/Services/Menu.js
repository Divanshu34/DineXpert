import axios from "axios";
import { createUrl } from "../utils/utils";

export async function fetchCategoryApi()
{
    const url = createUrl('/category');

    try{
        const response=await axios.get(url);
        return response.data;
    }
    catch(ex)
    {
        return null;
    }
}

export async function fetchMenuApi(categoryName)
{
    const url =createUrl("/menu/"+categoryName);
    
    try{
        const response=await axios.get(url);
        return response.data;   
    }
    catch(ex)
    {
        return null;
    }
}

export async function fetchImage()
{

}

export async function sendCategoryNameApi(categoryName)
{
    const url=createUrl('/menu-item/'+categoryName);
    try{
        const response=await axios.get(url)
        return response.data;
    }
    catch(ex)
    {
        return null;
    }

}