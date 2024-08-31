import React from 'react'
import "./headerSection.css"
import NavbarSection from '../navbarSection/navbarSection';

const HeaderSection = () => {
  return (
    <div className='hs-body'>
      <div className='hs-main'>
        <div className='hs-nav'>
          <NavbarSection />
        </div>
        <div className='hs-content'>
          <h1>Software Development Company & IT Consultancy<br />Serving <span>Start-UPs To Fortune 500</span></h1>
          <p>With the help of Innovation and Technology, We give you the power to change the world with your ideas.</p>
          <a href="#">Schedule a meeting</a>
        </div>
      </div>
    </div>
  )
}

export default HeaderSection;
