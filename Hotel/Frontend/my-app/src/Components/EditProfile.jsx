import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBInput, MDBRow } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { getUserByIDApi, loadUserDataApi, updateProfileApi } from "../Services/EditUserApi";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const navigate=useNavigate();
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [mobile,setMobile]=useState('');
  const [password,setPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');

  useEffect(() => {
    const userID = sessionStorage.getItem('userId');
    loadUserData(userID);
}, []);


  const loadUserData= async(userID)=>{
  
    const response=await loadUserDataApi(userID);
    if(response !== '')
    {
      setFirstName(response.firstName);
      setLastName(response.lastName);
      setEmail(response.userEmail);
      setPassword(response.password);
      setMobile(response.mobileNumber);
    }
  }

  const userIdupdate=sessionStorage.getItem('userId');
  const updateProfile=async()=>
  {
    if(firstName === '')
      {
        toast.error("Please Enter First Name");
      }
      else if(lastName === '')
      {
        toast.error("Please Enter Last Name");
      }
      else if(email === '')
      {
        toast.error("Please Enter Email");
      }
      else if(mobile === '')
      {
        toast.error("Please Enter Mobile");
      }
      else if(password === '')
      {
        toast.error("Please Enter Password");
      }
      else if(confirmPassword === '')
      {
        toast.error("Please Enter Confirm Password");
      }
      else if(password !== confirmPassword)
      {

        toast.error("Password Not Matching");
      }
      else
      {
         const response=await updateProfileApi(firstName,lastName,email,mobile,password,userIdupdate);
        
         if(response=='success')
         {
           const UserId=sessionStorage.getItem("userId")
           const responseData = await getUserByIDApi(UserId)
           console.log(responseData);
           
           
            if(responseData!== ''){
             sessionStorage['firstName']=responseData.firstName;
             sessionStorage['lastName']=responseData.lastName;}
             
             toast.success("Profile Updated Successfully");
          setTimeout(()=>{navigate('/')},5000);
         }
      }
  }


  return (<>
    <MDBContainer fluid style={{ backgroundColor: '#FFBD33' }}>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Edit Profile</h2>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' value={firstName}  onChange={(e) => {setFirstName(e.target.value)}}/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text' value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
              <MDBInput wrapperClass='mb-4' label='Phone no.' id='form1' type='number' value={mobile} onChange={(e) => {setMobile(e.target.value)}}/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
              <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form1' type='password' value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}}/>

              <MDBBtn size='md' onClick={updateProfile}>
                Save Changes
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    <ToastContainer position='top-center'/>
  </>);
}

export default EditProfile;