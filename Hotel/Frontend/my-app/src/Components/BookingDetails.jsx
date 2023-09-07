import { MDBBtn } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FetchBookingDetailsApi, CancelBookingApi } from "../Services/BookTableApi";

function BookingDetails() {
    const [startTime, setStartTime] = useState({
        "hour": 0,
        "minute": 0,
        "second": 0,
        "nano": 0
      });
      const [endTime, setEndTime] = useState({
        "hour": 0,
        "minute": 0,
        "second": 0,
        "nano": 0
      });

    const navigate=useNavigate();
  const [bookingdetails, setBookingDetails] = useState([]);
  useEffect(() => {
    FetchBookingDetails();
  }, []);

  const FetchBookingDetails = async () => {
    const userId = sessionStorage.getItem("userId");
    const responseData = await FetchBookingDetailsApi(userId);
    console.log(responseData);
    if (responseData != null) setBookingDetails(responseData);
    else console.log("failed to fetch");
  };

  const cancelBooking = async (tableNo, reservationDate, startTime, endTime, tableType) => {
    const userId = sessionStorage.getItem('userId');

    // Assuming startTime and endTime are in "HH:mm:ss" format
    console.log(startTime);
    console.log(endTime);
    const formattedStartTime = startTime || "00:00:00";
    const formattedEndTime = endTime || "00:00:00";

    const response = await CancelBookingApi(userId, tableNo, reservationDate, formattedStartTime, formattedEndTime, tableType);
    if (response!=null) {

      FetchBookingDetails();
    }
  };

  const redirectToBooktable=()=>
  {
    navigate('/booking')
  }


  return (
    <center>
      <div className="container">
        <h2>Table Booking Details</h2>
        <div className="table-responsive">
          <MDBBtn link="primary" size="sm" onClick={redirectToBooktable} style={{ float: "right" }}>
            Book Table
          </MDBBtn>
          <br />
          <br />
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Table no.</th>
                <th>Table Type</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Date</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookingdetails.map((book) => (
                <tr key={book.bookingId}>
                  <td>{book.tableNo}</td>
                  <td>{book.tableType}</td>
                  <td>{book.startTime}</td>
                  <td>{book.endTime}</td>
                  <td>{book.reservationDate}</td>
                  <td>{book.price}</td>
                  <td>
  {new Date(book.reservationDate + ' ' + book.startTime) < new Date()
    ? 'Completed'
    : book.status}
</td>

                  <td>
                  <MDBBtn
                      link="danger"
                      size="sm"
                      onClick={() => cancelBooking(book.tableNo,book.reservationDate,book.startTime,book.endTime,book.tableType)}
                      disabled={new Date(book.reservationDate + ' ' + book.startTime) < new Date()}
                    >
                      Cancel Booking
                    </MDBBtn>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </center>
  );
}

export default BookingDetails;
