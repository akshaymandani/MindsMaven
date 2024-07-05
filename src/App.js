import logo from './logo.svg';
import './App.css';
import ContactUs from './contact us/contactUs';
import Footer from './footer/footer';
import Technology from './Technology/technology';
import Developer from './developer/developer';
import NewsLetter from './newsLetter/newsLetter';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ContactPage from "./mainContactPage/contactPage";
import ReactJsMainPage from './React Js/reactJs';
import WorkFlow from './commonComponent/cc1/workFlow';
import StepsToHire from './commonComponent/cc2/stepsToHire';
import MainHomePage from './Home/mainHomePage/mainHomePage';

function App() {
  return (
    <div className="App">
      {/* <MainHomePage /> */}
      {/* <StepsToHire /> */}
      {/* <WorkFlow /> */}
      <ReactJsMainPage />
      {/* <ContactPage /> */}
      {/* <NewsLetter /> */}
      {/* <Developer /> */}
      {/* <Technology /> */}
      {/* <ContactUs /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
