import React from "react";
import { useState } from "react";
import Footer from "../Componets/footer/Footer";
import Navbar from "../Componets/navbar/Navbar";
import MyProfile from "../Componets/myprofile/MyProfile";
import Projects from "../Componets/projects/Projects";
import ContactMe from "../Componets/contactMe/ContactMe";
import Mobilenav from "../Componets/navbar/Mobilenav";

function Homepage() {
  const [Navactive, setNavactive] = useState(false);

  return (
    <div>
      {Navactive ? <Mobilenav setNavactive={setNavactive} /> : ""}

      <Navbar setNavactive={setNavactive} />
      <MyProfile />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default Homepage;
