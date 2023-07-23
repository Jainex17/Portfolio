import "./Projects.css";

const pimg1 = require("../../img/pimg1.png");
const pimg2 = require("../../img/pimg2.png");
const pimg3 = require("../../img/pimg3.png");
const pimg4 = require("../../img/pimg4.png");

function Projects() {
  return (
    <section className="projects" id="projects">
      {/* <h1>Projects</h1> */}
      <h2>Some Things I’ve Built</h2>

      <div className="project-container right-container">
        <div className="container-img">
          <div className="project-img">
            <div className="img-layer"></div>
            <img src={pimg4} alt="project img" />
          </div>
        </div>
        <div className="container-content right-content">
          <div className="project-overline">Featured Project</div>
          <h3 className="project-title">ETHCinemaNation</h3>
          <div className="Project-desc">
            <p>
              ETHCinemaNation: A decentralized voting platform for movies and TV series built using Ethereum blockchain and Next.js framework.
            </p>
          </div>
          <ul className="project-tech">
            <li>Next.Js</li>
            <li>solidity</li>
            <li>Tailwind</li>
          </ul>
          <div className="project-link">
            <a
              href="https://github.com/Jainex17/ETHCinemaNation"
              aria-label="GitHub Link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://ethcinemanation.vercel.app/"
              aria-label="External Link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link"
              >
                <title>External Link</title>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="project-container left-container">
        <div className="container-content">
          <div className="project-overline">Featured Project</div>
          <h3 className="project-title">Busilearn</h3>
          <div className="Project-desc">
            <p>
              It is a E-Learning website which provides functionality of
              registering in any course and watch its courses videos and many
              other features such as Admin Panel, Instructors related functions
              etc.
            </p>
          </div>
          <ul className="project-tech">
            <li>MONGODB</li>
            <li>EXPRESS</li>
            <li>REACT</li>
            <li>NODE</li>
            <li>SCSS</li>
          </ul>
          <div className="project-link">
            <a
              href="https://github.com/Jainex17/Busilearn"
              aria-label="GitHub Link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://busilearn.vercel.app/"
              aria-label="External Link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link"
              >
                <title>External Link</title>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
        <div className="container-img">
          <div className="project-img">
            <div className="img-layer"></div>
            <img src={pimg3} alt="project img" />
          </div>
        </div>
      </div>

      <div className="project-container right-container">
        <div className="container-img">
          <div className="project-img">
            <div className="img-layer"></div>
            <img src={pimg1} alt="project img" />
          </div>
        </div>
        <div className="container-content right-content">
          <div className="project-overline">Featured Project</div>
          <h3 className="project-title">EZSOP (E-commerce Web App)</h3>
          <div className="Project-desc">
            <p>
              An e-commerce project in which the admin may manage products and
              consumers can login/register and buy products. - MySQL, PHP,
              Javascript, HTML, CSS, and Bootstrap.
            </p>
          </div>
          <ul className="project-tech">
            <li>PHP</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JAVASCRIPT</li>
          </ul>
          <div className="project-link">
            <a
              href="https://github.com/Jainex17/E-commerce"
              aria-label="GitHub Link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://ezsop99.000webhostapp.com/"
              aria-label="External Link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link"
              >
                <title>External Link</title>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="project-container left-container">
        <div className="container-content">
          <div className="project-overline">Featured Project</div>
          <h3 className="project-title">Website replica (Apple Home page)</h3>
          <div className="Project-desc">
            <p>
              It is a clone of Apple's home page. It's an old project of mine.
              There, I learned front-end development as well as a little
              Javascript - Javascript, HTML, and CSS.
            </p>
          </div>
          <ul className="project-tech">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JAVASCRIPT</li>
            {/* <li></li> */}
          </ul>
          <div className="project-link">
            <a
              href="https://github.com/Jainex17/Apple_Home_Page"
              aria-label="GitHub Link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://jainex17.github.io/Apple_Home_Page/"
              aria-label="External Link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-external-link"
              >
                <title>External Link</title>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>
        <div className="container-img">
          <div className="project-img">
            <div className="img-layer"></div>
            <span>
              <img src={pimg2} alt="project img" />
            </span>
          </div>
        </div>
      </div>

      <div className="showmore">
        <a
          href="https://github.com/Jainex17?tab=repositories"
          target={"_blank"}
          rel="noreferrer"
        >
          <button>Show More</button>
        </a>
      </div>
    </section>
  );
}

export default Projects;
