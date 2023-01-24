import React from "react";
import Footer from "../Componets/footer/Footer";
import Navbar from "../Componets/navbar/Navbar";
import MyProfile from "../Componets/myprofile/MyProfile";

function Homepage() {
  return (
    <div>
      <Navbar />
      <MyProfile />
      <Footer />
    </div>
  );
}

export default Homepage;
