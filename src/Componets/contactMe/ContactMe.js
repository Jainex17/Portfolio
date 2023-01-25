import React from "react";
import "../contactMe/ContactMe.css";

function ContactMe() {
  return (
    <section className="contactme">
      <div className="contactme-title">
        <h2>Get In Touch</h2>
      </div>
      <div className="contactme-desc">
        <p>
          I have a strong passion for IT and technology, and I enjoy learning
          new things in these fields. Recently, I have developed various
          projects, which you can see in my profile.
        </p>
      </div>
      <a href="mailto:jainexp017@gmail.com">
        <button>Say Hello</button>
      </a>
    </section>
  );
}

export default ContactMe;
