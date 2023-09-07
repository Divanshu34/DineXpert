import { MDBBtn, MDBCollapse, MDBContainer, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler } from "mdb-react-ui-kit";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminHeader() {
    var isLoggedin=false;

  const loginStatus=sessionStorage.getItem("qwert");
  if(loginStatus !=null && loginStatus==='9876543210')
  {
    console.log("inside header")
    isLoggedin=true;
  }
  const userName=sessionStorage.getItem("firstName")+" "+sessionStorage.getItem("lastName")
    const navigate = useNavigate();
    const [showBasic, setShowBasic] = useState(false);

    const gotoHome = () => {
        navigate(`/`)
    }

    const gotoMenu = () => {
        navigate(`/menu`)
    }

    const gotoTable = () => {
        navigate(`/table_manager`)
    }

    const gotoInventory = () => {
        navigate(`/inventory`)
    }

    const gotoBill = () => {
        navigate(`/bill`)
    }

    const gotoSupplier = () => {
        navigate(`/supplier`)
    }

    const gotoCustomer = () => {
        navigate(`/customer`)
    }

    const gotoEmployee = () => {
        navigate(`/employee`)
    }

    const gotoLogout=()=>
    {
        sessionStorage['Reload']=true;
        navigate(`/login`)
        sessionStorage.removeItem("trewq");
        sessionStorage.removeItem("qwert");
        // window.location.reload();
    }
    const gotoLogin = ()=>{
    
        navigate(`/login`)
      }
    
      const gotoSignup = ()=>{
        navigate(`/signup`)
      }
    return (<>
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand onClick={gotoHome}>
                    <img
                        src='./img/logo.png'
                        height='50'
                        alt=''
                        loading='lazy'
                    />
                </MDBNavbarBrand>
                <MDBNavbarBrand onClick={gotoHome}>FOOD-E-STHAAN</MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' onClick={gotoHome}>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink onClick={gotoMenu}>Menu</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink onClick={gotoTable}>Table</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink onClick={gotoInventory}>Inventory</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink onClick={gotoBill}>Bills</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink onClick={gotoSupplier}>Suppliers</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink onClick={gotoCustomer}>Customers</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink onClick={gotoEmployee}>Employees</MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                    {isLoggedin?(<><h5>Welcome {userName}</h5>
          <MDBBtn className='mx-2' color='danger' onClick={gotoLogout}>Logout</MDBBtn></>):(<>
          <MDBBtn className='mx-2' color='warning' onClick={gotoLogin}>LogIn</MDBBtn>
          <MDBBtn className='mx-2' color='warning' onClick={gotoSignup}>SignUp</MDBBtn></>)}
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    </>);
}

export default AdminHeader;