import React from 'react';
import CuBgImage from "../images/Contact Us Background Image.png";
import "./contactUs.css";

const ContactUs = () => {
  function Submit(e) {
    e.preventDefault(); 
    const formData = new FormData(e.target); 

    fetch(
      "https://script.google.com/macros/s/AKfycbxeV_zx_m6KcOYJZ329yt2UMOPd09tD4swXWzh1gHiCOQ-p-poWjwbdmmlKCSJs68IU/exec",
      {
        method: "POST",
        body: formData
      }
    )
      .then(async (res) => {
        const contentType = res.headers.get("content-type");
        
        if (contentType && contentType.includes("application/json")) {
          return res.json(); // If the response is JSON, parse it as JSON.
        } else {
          return res.text(); // Otherwise, parse it as plain text.
        }
      })
      .then((data) => {
        console.log(data);
        
        if (typeof data === "string") {
          alert(data); // If it's plain text, just alert it.
        } else {
          alert("Your message has been sent successfully!");
        }

        e.target.reset(); // Reset the form fields
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }

  return (
    <div className='cu-body'>
      <div className='cu-left'>
        <div className='cu-left-main'>
          <img id="main-image" src={CuBgImage} alt="Main Image" />
          <div id="overlay" className="overlay">
            <div className="content">
              <h1>Our Presence</h1>
              <div className='content1'>
                <h2>India (HQ)</h2>
                <p>Bangalore, Karnataka, India, 560008</p>
                <p>+91 8849492570</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='cu-right'>
        <div className='cu-right-top'>
          <h1>Get Your Free Quote Today</h1>
        </div>
        <div className='cu-right-content'>
          <form className="form" onSubmit={Submit}>
            <label htmlFor="name">Full Name</label><br />
            <input type="text" name="Name" id="name" placeholder='John Doe' required /><br />
            <label htmlFor="phone">Phone Number</label><br />
            <input type="number" name="phone" id="phone" placeholder='+91 123 456 789' required /><br />
            <label htmlFor="email">Email</label><br />
            <input type="email" name="Email" id="email" placeholder='johndoe@gmail.com' required /><br />
            <label htmlFor="message">Message</label><br />
            <textarea name="Message" id="message" placeholder='Write your message here' required /><br />
            <button type="submit" name="Name">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
