import React from 'react'
import "./mainHomePage.css"
import HeaderSection from '../headerSection/headerSection';
import MainServicePage from '../servicePage/mainServicePage';
import Technology from '../../Technology/technology';
import ContactUs from '../../contact us/contactUs';
import Footer from '../../footer/footer';

const MainHomePage = () => {
  return (
    <>
    <nav className="navbar">
      <div className="logo">
        <h1>TAGLINE INFOTECH LLP</h1>
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
    </nav>
      <div className='mhp-body'>
      <div className='mhp-main'>
        <header>
          <HeaderSection />
        </header>
        <main>
          <MainServicePage />
          <Technology />
          <ContactUs />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
    </>
  )
}

export default MainHomePage;
