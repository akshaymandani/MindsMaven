import React from 'react'
import "./careers.css"
import CareerHeader from './careerHeader/careerHeader';
import NavbarSection from '../Home/navbarSection/navbarSection';
import Footer from '../footer/footer';

const Careers = () => {
  return (
    <div>
      <header>
        <NavbarSection />
      </header>
      <main>
        <CareerHeader />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Careers;
