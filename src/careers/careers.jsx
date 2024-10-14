import React from 'react'
import "./careers.css"
import CareerHeader from './careerHeader/careerHeader';
import NavbarSection from '../Home/navbarSection/navbarSection';
import Footer from '../footer/footer';
import ContactUs from '../contact us/contactUs';
import NewsLetter from '../newsLetter/newsLetter';
import CareerFresher from './careerFresher/careerFresher';
import CareerApplyPage from './careerApplyPage/careerApplyPage';
import CareerCurrentOpening from './careerCurrentOpening/careerCurrentOpening';
import CareerCV from './careerCV/careerCV';

const Careers = () => {
  return (
    <div>
      <header>
        <NavbarSection />
      </header>
      <main>
        <CareerHeader />
        <CareerCV />
        <CareerCurrentOpening />
        <CareerFresher />
        {/* <CareerCurrentOpening /> */}
        <CareerApplyPage />
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
