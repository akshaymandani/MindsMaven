import React, { useState } from "react";
import "./subContactPage.css";
import ReCAPTCHA from "react-google-recaptcha";
import { FaMobile } from "react-icons/fa";

const SubContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    console.log("reCAPTCHA value:", recaptchaValue);
  };

  return (
    <div className="scp-body">
      <div className="scp-main">
        <div className="scp-form">
          <h1>Say Hello! Don’t be shy.</h1>
          <div className="scpf-container">
            <form onSubmit={handleSubmit}>
              <div className="scpf-group">
                <label htmlFor="fullName">Full Name:</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="scpf-group">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="scpf-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="scpf-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="scpf-group">
                <ReCAPTCHA
                  sitekey="YOUR_RECAPTCHA_SITE_KEY"
                  onChange={handleRecaptchaChange}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div>
          <div>
            <section class="mapbox" data-mapbox>
              <figure>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2414701369016!2d72.78844997503471!3d21.142786580535283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa10bffdb76d1dced%3A0xa50f4b6984dcc7ba!2sDigital%20Munkies!5e0!3m2!1sen!2sin!4v1708323602340!5m2!1sen!2sin"
                  //  style={{width="600", height="450"}} style={{border:0;}}
                  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                {/* <iframe
                  src=""
                  width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              </figure>
            </section>
          </div>
          <div>
            {/* <h2>The Hire Hub</h2> */}
            <h2>MindsMaven IT Solutions</h2>
            <div>
              <h2>INDIA</h2>
              <address>412 , Avadh Arena, Vip Road, opp, Marvella Corriodor, Surat, Gujarat 395007</address>
              <p><icon><FaMobile /></icon>+91 8780608728</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubContactPage;
