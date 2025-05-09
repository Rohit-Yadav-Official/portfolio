import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        {/* GIF */}
        <div className="gif-container">
          <img
            src="https://imgur.com/939ZFHs.gif"
            alt="Animated GIF"
          />
        </div>

        {/* Form */}
        <div className="form-container">
          <h2 className="contact-title">Contact Me</h2>
          <form className="contact-form">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
            
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
            
            <label>Message</label>
            <textarea placeholder="Your message"></textarea>
            
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;