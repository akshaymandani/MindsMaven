import React, { useState } from "react";
import "./newsLetter.css";
// import { MdMail } from "react-icons/md";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted with email:", email);
  };

  return (
    <div className="nl-body">
      <div className="nl-left">
        <h1>Get latest from Thehirehub infotech</h1>
        <p>
          Share your email so we can send you <span>guides</span> and{" "}
          <span>industry news</span>.
        </p>
      </div>
      <div className="nl-right">
        <div className="nlr-form">
          <form onSubmit={handleSubmit}>
            <div className="nlf-input">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
              />
              <i className="fas fa-envelope"></i>
              {/* Email icon */}
            </div>
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
        <div className="nlr-content">
          <p>You can unsubscribe at any time. Read our privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
