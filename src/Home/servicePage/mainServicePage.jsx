import React from 'react'
import "./mainServicePage.css"
import MainServicePageData from './mainServicePageData';
import MainServicePageCard from './mainServicePageCard';
import ServiceBgImage from "../../images/ellipse-mega.webp";
// import ServiceBgImage from "../../images/ellipse-mega.svg";
import { Link } from "react-router-dom"

const MainServicePage = () => {
  return (
    <div className='msp-body'>
      <div className='msp-main'>
        <div className='msp-title'>
          <h1>Our Services</h1>
          <span className="tech-span"></span>
        </div>
        <div className='msp-content'>
          <div className='msp-div msp-div1'>
            <p>Find the <br /><span>right <span>offers</span></span> <br />for you.</p>
          </div>
          {MainServicePageData.map((mainServicepageData, index) => (
            <MainServicePageCard key={index} title={mainServicepageData.title} imageUrl={mainServicepageData.imageUrl} pageUrl={mainServicepageData.pageUrl} description={mainServicepageData.description} />
          ))}
          <div className='msp-div msp-div3'>
            <h6>Don't know what to choose? <span>Drop us a line.</span></h6>
            <img src={ServiceBgImage} alt="" />
            {/* <a href="#">Contact Us</a> */}
            <Link to="/aboutus" className='mspd-link'><button className='mspdl-btn'>Contact Us</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainServicePage;
