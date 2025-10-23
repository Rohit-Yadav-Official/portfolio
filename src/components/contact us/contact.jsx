
import { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      // Netlify Forms submission
      const formElement = e.target;
      const formDataToSend = new FormData(formElement);

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataToSend).toString()
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="contact-container">
        {/* GIF */}
        <div className="gif-container">
          <img
            src="https://imgur.com/939ZFHs.gif"
            alt="Contact Rohit Yadav - Backend Developer"
            title="Get in touch with Rohit Yadav"
          />
        </div>

        {/* Form */}
        <div className="form-container">
          <h2 className="contact-title">Contact Me</h2>
          <form 
            className="contact-form" 
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            {/* Hidden fields for Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            
            <label htmlFor="name">Name *</label>
            <input 
              type="text" 
              id="name"
              name="name"
              placeholder="Enter your name" 
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
            
            <label htmlFor="email">Email *</label>
            <input 
              type="email" 
              id="email"
              name="email"
              placeholder="Enter your email" 
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
            
            <label htmlFor="message">Message *</label>
            <textarea 
              id="message"
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            ></textarea>
            
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Submit"}
            </button>

            {/* Status messages */}
            {status === "success" && (
              <div className="form-message success">
                ✓ Thank you! Your message has been sent successfully.
              </div>
            )}
            {status === "error" && (
              <div className="form-message error">
                ✗ Oops! Please fill in all fields and try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
