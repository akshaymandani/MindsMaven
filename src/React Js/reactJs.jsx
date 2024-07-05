import React from 'react'
import "./reactJs.css"
import ReactJsFirst from './ReactJsPage1/reactJsFirst';
import ReactJsSecond from './ReactJsPage2/reactJsSecond';
import ReactJsThird from './ReactJsPage3/reactJsThird';
import ReactJsFourth from './ReactJsPage4/reactJsFourth';
import ReactJsFifth from './ReactJsPage5/reactJsFifth';
import ReactJsSixth from './ReactJsPage6/reactJsSixth';
import ReactJsSeventh from './ReactJsPage7/reactJsSeventh';
import ReactJsEighth from './ReactJsPage8/reactJsEighth';
import ReactJsNinth from './ReactJsPage9/reactJsNinth';
import ReactJsTenth from './ReactJsPage10/reactJsTenth';
import ReactJsEleventhData from './ReactJsPage11/reactJsEleventhData';
import ReactJsEleventh from './ReactJsPage11/reactJsEleventh';
import ContactUs from '../contact us/contactUs';
import Footer from '../footer/footer';
import NewsLetter from '../newsLetter/newsLetter';

const ReactJsMainPage = () => {
  return (
    <div>
      <header></header>
      <main>
        <ReactJsFirst />
        <ReactJsSecond />
        <ReactJsThird />
        <ReactJsFourth />
        <ReactJsFifth />
        <ReactJsSixth />
        <ReactJsSeventh />
        <ReactJsEighth />
        <ReactJsNinth />
        <ReactJsTenth />
        <ReactJsEleventh />
        <ContactUs />
        <NewsLetter />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default ReactJsMainPage;
