import React from 'react'
import "./headerSection.css"
// import MMLogo from "../../images/MindsMaven Logo.png"
import NavbarSection from '../navbarSection/navbarSection'

const HeaderSection = () => {
  return (
    <div className='hs-body'>
      <div className='hs-main'>
        {/* <nav className="navbar">
          <div className="logo">
            <img src={MMLogo} alt="" href="/" style={{ width: '200px' }} />
          </div>
          <ul className="nav-links">
            <li><a href="#case-study">Case Study</a></li>
            <li className="dropdown">
              <a href="#about-us">About us</a>
              <div className="dropdown-content">
                <a href="#about">About Us</a>
                <a href="#careers">Careers</a>
                <a href="#life">Life@Tagline Infotech</a>
              </div>
            </li>
            <li><a href="#hire-developers">Hire Developers</a></li>
            <li><a href="#technology">Technology</a></li>
            <li><a href="#industry">Industry</a></li>
            <li><a href="#blogs">Blogs</a></li>
          </ul>
          <div className="quote-button">
            <button>GET QUOTE</button>
          </div>
        </nav> */}
        <NavbarSection />
        <div className='hs-content'>
          {/* <h1>Software Development Company & IT Consultancy<br />Serving <span>Start-UPs To Fortune 500</span></h1> */}
          <h1>Software Development Company & IT Consultancy Serving <span>Start-UP</span></h1>
          <p>With the help of Innovation and Technology, We give you the power to change the world with your ideas.</p>
          <a href="#">Schedule a meeting</a>
        </div>
      </div>
    </div>
  )
}

export default HeaderSection;
