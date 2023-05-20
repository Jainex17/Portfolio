import React, { useEffect, useState } from "react";
// import Cursor from "./Componets/cursor/Cursor.js";
import Homepage from "./Pages/Homepage.js";
import Pageload from "./Componets/pageload/Pageload.tsx";


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* <Cursor /> */}
      {loading ? 
      <Pageload />: 
      <Homepage />
    }
    </div>
  );
}

export default App;
