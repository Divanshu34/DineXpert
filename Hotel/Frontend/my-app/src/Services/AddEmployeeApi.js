import axios from "axios";
import { createUrl } from "../utils/utils";

export async function AddEmployeeApi(firstName,lastName,address,mobileNumber,salary,role,joiningDate)
{

    const url=createUrl('/employee/add-employee/'+role);
    const body={firstName,lastName,address,mobileNumber,salary,joiningDate};
    try{
        const response= await axios.post(url,body);
        return 'success';
    }
    catch(ex)
    {
        return 'error';
    }
}

export async function ShowEmployeesApi()
{
    const url=createUrl('/employee/show-employees');
    try{
        const response=await axios.get(url);
        return response.data;
    }
    catch(ex)
    {
        return null;
    }
}

export async function DeleteEmployeeApi(empid)
{
    const url=createUrl('/employee/delete-employee/'+empid);
    try{
        const response=await axios.delete(url);
        console.log(response.data);
        return "success";
    }
    catch(ex){
        return "error";
    }
}

export async function fetchDataApi(empId)
{
    const url=createUrl("/employee/getEmployee/"+empId);
    try{
        const response=await axios.get(url);
        return response.data;
    }
    catch(ex)
    {
        return null;    
    }
}

export async function updateEmployeeApi(firstName,lastName,mobileNumber,address,salary,department,joiningDate,empId)
{
  
    const url=createUrl('/employee/update-employee/'+empId);
    const body={firstName,lastName,mobileNumber,address,salary,department,joiningDate};
    try{
        const response =await axios.put(url,body); 
        return response.data;
    }
    catch(ex)
    {
        return "error";
    }
}