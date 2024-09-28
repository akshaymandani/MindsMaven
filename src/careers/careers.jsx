import React from 'react'
import "./careers.css"
import CareerHeader from './careerHeader/careerHeader';
import NavbarSection from '../Home/navbarSection/navbarSection';
import Footer from '../footer/footer';
import ContactUs from '../contact us/contactUs';
import NewsLetter from '../newsLetter/newsLetter';

const Careers = () => {
  return (
    <div>
      <header>
        <NavbarSection />
      </header>
      <main>
        <CareerHeader />
        <ContactUs />
        <NewsLetter />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Careers;
