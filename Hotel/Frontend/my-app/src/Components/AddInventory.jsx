import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow } from "mdb-react-ui-kit";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addInventoryApi } from "../Services/addInventoryApi";




function AddInventory() {

const [itemName,setItemName]=useState('');
const[itemQuantity,setItemQuantity]=useState('');
const[supplierName,setSupplierName]=useState('');
const[date,setDate]=useState('');
const navigate=useNavigate();

const addingInventory=async()=>
{
    if(itemName === '')
    {
      toast.error("Please Enter Item Name");
    }
    else if(itemQuantity === '')
    {
      toast.error("Please Enter Item Quantity");
    }
    else if(supplierName === '')
    {
      toast.error("Please Enter Supplier Name");
    }
    else if(date === '')
    {
      toast.error("Please Enter Supplier Name");
    }
    else{
        const response =await addInventoryApi(itemName,itemQuantity,supplierName,date);
        if(response ==='success')
        {
            toast.loading("Inventory added successfully");
            setTimeout(()=>navigate('/inventory'),3000);
        }
    }
}





    return (<>
      
        <MDBContainer fluid style={{ backgroundColor: '#FFBD33' }}>

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>

                    <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                        <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                            <h2 className="fw-bold mb-2 text-center">Add Inventory Item</h2>
                            <MDBInput wrapperClass='mb-4' label='Item Name' id='form1' type='text' onChange={(e)=>{setItemName(e.target.value)}} />
                            <MDBInput wrapperClass='mb-4' label='Item Quantity' id='form1' type='number' onChange={(e)=>{setItemQuantity(e.target.value)}} />
                            <MDBInput wrapperClass='mb-4' label='Supplier Name' id='form1' type='text' onChange={(e)=>{setSupplierName(e.target.value)}} />
                            <MDBInput wrapperClass='mb-4' label='Date' id='form1' type='date' onChange={(e)=>{setDate(e.target.value)}} />
                          
                            <MDBBtn size='md'  onClick={addingInventory}>Add Record</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        <ToastContainer position="top-center"/>
      
    </>);
}

export default AddInventory;