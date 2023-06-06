import Navbar from "../Componets/navbar/Navbar";
import Mobilenav from "../Componets/navbar/Mobilenav";
import Footer from "../Componets/footer/Footer";
import MyProfile from "../Componets/myprofile/MyProfile";
import Projects from "../Componets/projects/Projects";
import ContactMe from "../Componets/contactMe/ContactMe";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Mobilenav />
      <MyProfile />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default Homepage;
