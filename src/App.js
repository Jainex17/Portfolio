import Cursor from "./Componets/cursor/Cursor.js";
import Homepage from "./Pages/Homepage.js";
// import Pageload from "./Componets/pageload/Pageload.js";
// const resume = require('./img/jainex_Resume.pdf')
function App() {
  // window.onload = function () {
  //   setTimeout(() => {}, 3000);
  // };

  return (
    <div>
      {/* <Pageload /> */}
      <Cursor />
      <Homepage />
    </div>
  );
}

export default App;
