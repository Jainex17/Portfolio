import React from "react";

function Mobilenav() {
  // function navbarclose() {
  //   document.body.classList.remove("res-nav-active");
  // }

  return (
    <div className="res-nav">
      <div className="res-nav-links">
        <ul>
          <li>
            <a href="#profile">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Mobilenav;
