import React from 'react'
import "./contactUs.css"
import CuBgImage from "../images/Contact Us Background Image.png"

const ContactUs = () => {
  return (
    <div className='cu-body'>
      <div className='cu-left'>
        <div className='cu-left-main'>
          <img id="main-image" src={CuBgImage} alt="Main Image" />
          <div id="overlay" class="overlay">
            <div class="content">
              <h1>Our Global Presence</h1>
              <div className='content1'>
                <h2>India (HQ)</h2>
                <p>Bangalore, Karnataka, India, 560008</p>
                {/* <p>Surat, Gujarat 395007</p> */}
                <img src="" alt="" />
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
          <form action="#" method="post">
            <label htmlFor="name">Full Name</label><br />
            <input type="text" name="name" id="name" placeholder='Akshay Mandani' required /><br />
            <label htmlFor="phone no">Phone Number</label><br />
            <input type="tel" name="phone no" id="phone_no" placeholder='+91 884 949 2570' required /><br />
            <label htmlFor="email">Email</label><br />
            <input type="email" name="email" id="email" placeholder='akshay@gmail.com' required /><br />
            <label htmlFor="message">Message</label><br />
            <textarea name="message" id="message" placeholder='Write your message here' /><br />
            {/* <input type="textarea" name="message" id="message"/><br /> */}
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;
