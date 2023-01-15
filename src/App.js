import Navbar from "./componets/Navbar";
import Cursor from "./componets/Cursor.js";
import MyProfile from "./componets/MyProfile.js";
import Footer from "./componets/Footer";

function App() {
  

  return (
    <div className="App">
      <Cursor/>
      <Navbar/>      
      <MyProfile/>
      <Footer/>
    </div>
  );
}

export default App;
