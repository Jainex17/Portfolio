import React from "react";
import "./Profile.css";
const resume = require("../../Documents/jainex_Resume.pdf");
const { HeroImg } = require("./HeroImg");

function MyProfile() {
  return (
    <div className="profile" id="profile">
      <div className="profile-text">
        {/* <h1>Hi There, I'm Jainex Patel <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="30px" alt='wave'></img></h1> */}
        <p>Hi, my name is</p>

        <h1>Jainex Patel.</h1>
        <h1>I build things for the web.</h1>
        {/* <p>MERN stack developer</p> */}
        <p className="profile-text-about">
          I have a strong passion for IT and technology, and I enjoy learning
          new things in these fields. Recently, I have developed various
          projects, which you can see in my profile.
        </p>
        <div className="profile-social-links">
          <a
            href="https://github.com/jainex17"
            target="_blank"
            rel="noopener noreferrer me"
            title="Github"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/jainex-patel17/"
            target="_blank"
            rel="noopener noreferrer me"
            title="Linkedin"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
        {/* <a href={resume}><button>Resume</button></a> */}
        <a href={resume} target="_blank" rel="noreferrer">
          <button>Resume</button>
        </a>
      </div>
      {/* <div className="profile-img img-container">
        <img src={pfp} alt="pfp"></img>
        <div className="img-shade"></div>
      </div> */}

      <HeroImg />
    </div>
  );
}

export default MyProfile;
