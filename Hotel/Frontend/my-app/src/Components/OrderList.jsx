import { MDBBtn } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";

function OrderList() {
  const [itemdetails, setItemdetails] = useState([]);
  const [addressdetails, setAddressDetails] = useState({});
  
  useEffect(() => {
    fetchAllorderDetails();
  }, []);

  const fetchAllorderDetails = () => {
    if(addressdetails==null)
    return;
    const address = JSON.parse(sessionStorage.getItem('selectedAddress'));
    const items = JSON.parse(localStorage.getItem('cart'));
    setAddressDetails(address);
    setItemdetails(items);
  };

  const calculateTotalAmount = () => {
    return itemdetails.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotalQuantity = () => {
    return itemdetails.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <center>
      <div className="container">
        <br />
        <h2>Confirm Order Details</h2>
        <br />
        
        {/* Display user profile */}
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th colSpan="2">User Details</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Full Name</td>
                <td>{sessionStorage.getItem('firstName')} {sessionStorage.getItem('lastName')}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{sessionStorage.getItem('userEmail')}</td>
              </tr>
              <tr>
                <td>Mobile Number</td>
                <td>{sessionStorage.getItem('mobileNumber')}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Display selected address here */}
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{addressdetails.addressLine}, {addressdetails.landmark}, {addressdetails.city}, {addressdetails.pincode}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Display cart items here */}
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Items</th>
                <th>Quantity</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {itemdetails.map((item, index) => (
                <tr key={index}>
                  <td>{item.itemName}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Display total quantity and total amount */}
        <div className="table-responsive">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td className="align-middle"><strong>Total Quantity:</strong></td>
                <td className="align-middle">{calculateTotalQuantity()}</td>
                <td className="align-middle"><strong>Total Amount:</strong></td>
                <td className="align-middle">{calculateTotalAmount()}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Place order button */}
        <MDBBtn link='primary' style={{ margin: '10px' }}>
          Place order
        </MDBBtn>
      </div>
    </center>
  );
}

export default OrderList;
