import axios from "axios";
import { createUrl } from "../utils/utils";

export async function bookTableApi(startTime, endTime, tableType, reservationDate, userId){
    const url = createUrl(`/reservation/add-reservation/${userId}/${tableType}`);
    const body = {
        startTime,
        endTime,
        reservationDate
    }
    try {
        const response = await axios.post(url, body);
        return response.data;
    } catch (error) {
        return null;
    }
}


export async function sendMailApi(userEmail,reservationDate,startTime,tableType,endTime)
{
    const url="http://127.0.0.1:5000/send-mail";
    const details={
       email:userEmail,
       reservationDate:reservationDate,
       startTime:startTime,
       tableType:tableType,
       endTime:endTime
    }

    try{
        const response=await axios.post(url,details);
        return "success"
    }
    catch(ex)
    {
        return "fail"
    }
}

export async function FetchBookingDetailsApi(userId)
{
    const url=createUrl("/reservation/"+userId);
    try{
        const response=await axios.get(url);
        return response.data;
    }
    catch(ex)
    {
        return null;
    }
}

export async function CancelBookingApi(userId,tableNo,reservationDate,startTime,endTime,tableType)
{
    const url=createUrl("/reservation/cancel-reservation");
    const body={userId,tableNo,reservationDate,startTime,endTime,tableType};
    try{

        const response=await axios.post(url,body);
        return response.data;
    }
    catch(ex)
    {
        return null;
    }
    
}