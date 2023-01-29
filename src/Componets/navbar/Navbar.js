import React from "react";
// import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  window.addEventListener("scroll", () => {
    document.body.classList.toggle("scroll", window.scrollY > 130);
  });

  function nightlightmode() {
    const body = document.querySelector("body");

    // tonggle moon svg to sun
    const sun = document.querySelector("#sun");
    const moon = document.querySelector("#moon");
    moon.classList.toggle("block");
    sun.classList.toggle("none");

    sun.addEventListener("click", () => {
      localStorage.setItem("theme", "light");
    });
    moon.addEventListener("click", () => {
      localStorage.setItem("theme", "dark");
    });

    // const theme = localStorage.getItem("theme");
    // if(theme === "light"){
    //   console.log(theme);
    //   body.classList.add("light");
    // }

    // apply theme
    body.classList.toggle("light");
  }

  function navbarclick() {
    document.body.classList.add("res-nav-active");
  }

  return (
    <nav className="navbar nav">
      <a href="#profile">
        <h1> Jainex Patel </h1>
      </a>
      <ul>
        <li>
          <a href="#profile">Home</a>
        </li>
        {/* <li> */}
        {/* <NavLink to="/about">About</NavLink> */}
        {/* </li> */}
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <button id="nightlightmode" onClick={nightlightmode}>
            <svg
              id="moon"
              className="none"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>

            <svg
              id="sun"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          </button>
        </li>
      </ul>
      <div className="navbar-btn">
        <button onClick={navbarclick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="butt"
            strokeLinejoin="bevel"
          >
            <line x1="12" y1="40" x2="12" y2="10"></line>
            <line x1="18" y1="40" x2="18" y2="4"></line>
            <line x1="6" y1="40" x2="6" y2="16"></line>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
