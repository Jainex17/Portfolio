import Cursor from "./componets/Cursor.js";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage.js";
import About from "./Pages/About.js";
import Project from "./Pages/Project.js";
import Contact from "./Pages/Contact.js";
// const resume = require('./img/jainex_Resume.pdf')
function App() {
  

  return (
    <div>
      <Cursor/>
       <BrowserRouter>
        <Routes>
          const router = createBrowserRouter(
          createRoutesFromElements(
            <Route element={<Homepage />} path="/"/>
            <Route element={<About />} path="/about"/>
            <Route element={<Project />} path="/project"/>
            <Route element={<Contact />} path="/contact"/>
            {/* <Route element={<Resume />} path="/resume"/> */}
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
