import React from "react";

function Mobilenav() {
  function navbarclose() {
    document.body.classList.remove("res-nav-active");
  }

  return (
    <div className="res-nav">
      <button onClick={navbarclose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="33"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="butt"
          stroke-linejoin="bevel"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
}

export default Mobilenav;
