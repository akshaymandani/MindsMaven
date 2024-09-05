import React from 'react'
import "./mainHomePage.css"
//import HeaderSection from '../headerSection/headerSection';
import MainServicePage from '../servicePage/mainServicePage';
import Technology from '../../Technology/technology';
import ContactUs from '../../contact us/contactUs';
import Footer from '../../footer/footer';

const MainHomePage = () => {
  return (
    <div className='mhp-body'>
      <div className='mhp-main'>
        {/* <header>
          <HeaderSection />
        </header> */}
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
  )
}

export default MainHomePage;
