import React from 'react';
import '../css/Projects.css';
const pimg1 = require("../img/pimg1.png")

function Projects() {
    return(
        <section className='projects'>
            {/* <h1>Projects</h1> */}
            <h2>Some Things I’ve Built</h2>

            <div className='project-container'>
                <div className='container-img'>
                    <img src={pimg1} alt="project img" />
                </div>
                <div className='container-text'></div>
            </div>
        </section>
    )
}

export default Projects