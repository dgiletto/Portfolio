import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e6aee28c-44af-406a-936a-698b1ee69b3e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      {submitted ? (
        <p className="submitted-message">Form has been submitted!</p>
      ) : (
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
            />
          </div>
          <a type="submit" href="mailto:dgiletto10@gmail.com">
            <button className="submit-btn">
              {" "}
              Submit
              <FaCheck> </FaCheck>{" "}
            </button>
          </a>
        </form>
      )}
    </div>
  );
};

export default Contact;