import axios from "axios";
import { createUrl } from "../utils/utils";

export async function addInventoryApi(ingredientName,ingredientCapacity,supplierName,dateOfIngredientAdded)
{
    
    const url=createUrl(`/ingredients/add-ingredients/${supplierName}`);
    const body={ingredientName,ingredientCapacity,dateOfIngredientAdded};
   
    try{
        debugger;
        const response=await axios.post(url,body);
        return "success";
    }
    catch(ex)
    {
        return "error";
    }
   

}

export async function showInventoryApi(){
    const url = createUrl('/ingredients/all-ingredients');
    try{
        const response = await axios.get(url)
        return response.data;
    }catch(ex){
        return null;
    }
}

export async function deleteInventoryApi(ingredientId)
{
    const url=createUrl('/ingredients/delete-ingredients/'+ingredientId);
    try{
        const response=await axios.delete(url);
        return "success";
    }
    catch(ex){
        return "error";
    }
}

export async function fetchInventoryDataApi(ingredientId)
{
    const url=createUrl('/ingredients/edit-ingredient/'+ingredientId);
    try{
        
        const response=await axios.get(url);
        
        return response.data;
    }
    catch(ex)
    {
        return "error";    
    }
}



export async function updateInventoryApi(ingredientName,ingredientCapacity,supplierName,dateOfIngredientAdded,ingredientId)
{
  
    const url=createUrl('/ingredients/update-ingredients/'+supplierName+'/'+ingredientId);
    const body={ingredientName,ingredientCapacity,dateOfIngredientAdded};
    try{
        const response =await axios.put(url,body); 
        return response.data;
    }
    catch(ex)
    {
        return "error";
    }
}
