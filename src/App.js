import Cursor from "./componets/Cursor.js";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage.js";
import About from "./Pages/About.js";
function App() {
  

  return (
    <div>
      <Cursor/>
       <BrowserRouter>
        <Routes>
          const router = createBrowserRouter(
          createRoutesFromElements(
            <Route element={<About />} path="/about"/>
            <Route element={<Homepage />} path="/"/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
