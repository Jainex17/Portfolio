import Cursor from "./Componets/cursor/Cursor.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage.js";
import About from "./Pages/About.js";
import Project from "./Pages/Project.js";
import Contact from "./Pages/Contact.js";
import Pageload from "./Componets/pageload/Pageload.js";
// const resume = require('./img/jainex_Resume.pdf')
function App() {
  // const body = document.querySelector('body');

  window.onload = function () {
    setTimeout(() => {}, 3000);
  };

  return (
    <div>
      <Pageload />
      <Cursor />
      <BrowserRouter>
        <Routes>
          const router = createBrowserRouter( createRoutesFromElements(
          <Route element={<Homepage />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Project />} path="/project" />
          <Route element={<Contact />} path="/contact" />
          {/* <Route element={<Resume />} path="/resume"/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
