import { useEffect, useState } from "react";
import Cursor from "./Componets/cursor/Cursor.tsx";
import Homepage from "./Pages/Homepage.tsx";
import Pageload from "./Componets/pageload/Pageload.tsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Cursor />
      {loading ? <Pageload /> : <Homepage />}
    </div>
  );
}

export default App;
