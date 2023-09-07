function AdminController() {
    return (  <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/orders" element={<UserORecords />} />
          <Route path="/add_address" element={<AddAddress />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter> );
}

export default AdminController;