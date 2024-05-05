import React from "react";
import "../contactMe/ContactMe.css";

function ContactMe() {
  return (
    <section className="contactme" id="contact">
      <div className="contactme-title">
        <h2>Get In Touch</h2>
      </div>
      <div className="contactme-desc">
        <p>
          Although my focus lies on personal growth and ongoing projects, I
          believe in the power of collaboration and the value of connections.
          So, whether you have a question feel free to say hello, don't hesitate to reach out.
          I'll make every effort to respond and foster meaningful connections
          within the creative and technological communities.
        </p>
      </div>
      <a href="mailto:jainexp017@gmail.com">
        <button>Say Hello</button>
      </a>
    </section>
  );
}

export default ContactMe;
