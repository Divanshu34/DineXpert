import axios from 'axios';
import { createUrl } from '../utils/utils';

export async function AddMenuApi(itemName,price,mealchoice,category)
{
    const url=createUrl("/menu/additem/"+category)
    const body ={itemName,price,mealchoice};

    try{

        const response=await axios.post(url,body);
        
        return response.data;
    }
    catch(ex)
    {
        return 0;
    }
}

export async function uploadImageApi(itemId,Image)
{
    const url=createUrl(`/menu/${itemId}/image`);
    let formData=new FormData();
    formData.append('imageFile',Image)
    try{
        const response =await axios.post(url,formData);
        return response.data;
    }   
    catch(ex)
    {
        return null;
    }
}