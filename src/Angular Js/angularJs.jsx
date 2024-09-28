import React from 'react'
import "./angularJs.css"
import AngularJsFirst from './AngularJsPage1/angularJsFirst';
import AngularJsSecond from './AngularJsPage2/angularJsSecond';
import AngularJsThird from './AngularJsPage3/angularJsThird';
import AngularJsFourth from './AngularJsPage4/angularJsFourth';
import AngularJsFifth from './AngularJsPage5/angularJsFifth';
import AngularJsSixth from './AngularJsPage6/angularJsSixth';
import AngularJsSeventh from './AngularJsPage7/angularJsSeventh';
import AngularJsEighth from './AngularJsPage8/angularJsEighth';
import AngularJsNinth from './AngularJsPage9/angularJsNinth';
import AngularJsTenth from './AngularJsPage10/angularJsTenth';
import AngularJsEleventhData from './AngularJsPage11/angularJsEleventhData';
import AngularJsEleventh from './AngularJsPage11/angularJsEleventh';
import ContactUs from '../contact us/contactUs';
import Footer from '../footer/footer';
import NewsLetter from '../newsLetter/newsLetter';
import NavbarSection from '../Home/navbarSection/navbarSection';

const AngularJsMainPage = () => {
  return (
    <div className='AngularJsMain'>
      <header>
        <NavbarSection />
      </header>
      <main>
        <AngularJsFirst />
        <AngularJsSecond />
        <AngularJsThird />
        <AngularJsFourth />
        {/* <AngularJsFifth /> */}
        <AngularJsSixth />
        <AngularJsSeventh />
        <AngularJsEighth />
        <AngularJsNinth />
        <AngularJsTenth />
        <AngularJsEleventh />
        <ContactUs />
        <NewsLetter />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default AngularJsMainPage;
