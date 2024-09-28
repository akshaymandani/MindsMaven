import React from 'react'
import "./aboutUs.css"
import NavbarSection from '../Home/navbarSection/navbarSection';
import Footer from '../footer/footer';
import ContactUs from '../contact us/contactUs';
import NewsLetter from '../newsLetter/newsLetter';
import MainTeam from './mainTeam/mainTeam';
import CompanyDetails from './companyDetails/companyDetails';
import TotalWork from './totalWork/totalWork';
import HeaderAboutUs from './headerAboutUs/headerAboutUs';

const AboutUs = () => {
    return (
        <div className='aboutUs'>
            <header>
                <NavbarSection />
            </header>
            <main>
                {/* AboutUs */}
                {/* <MainTeam /> */}
                {/* <CompanyDetails /> */}
                {/* <TotalWork /> */}
                {/* <ContactUs /> */}
                {/* <NewsLetter /> */}
                <HeaderAboutUs />
                <CompanyDetails />
                <TotalWork />
                <MainTeam />
                <ContactUs />
                <NewsLetter />
            </main>
            <footer>
                {/* <Footer /> */}
                <Footer />
            </footer>
        </div>
    )
}

export default AboutUs;
