import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ContactUs from './contact us/contactUs';
import Developer from './developer/developer';
import MainHomePage from './Home/mainHomePage/mainHomePage';
import ContactPage from "./mainContactPage/contactPage";
import ReactJsMainPage from './React Js/reactJs';
import Technology from './Technology/technology';

function App() {
  return (
   <>
    <BrowserRouter> 
     <Routes> 
      <Route path="/" element={ <MainHomePage />} /> 
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/react" element={<ReactJsMainPage />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/developer" element={<Developer />} />
      <Route path="/contactUs" element={<ContactUs />} />

     </Routes>
    </BrowserRouter>
    <div className="App"> 
      {/* <MainHomePage /> */}
      {/* <StepsToHire /> */}
      {/* <WorkFlow /> */}
      {/* <ReactJsMainPage /> */}
      {/* <ContactPage /> */}
      {/* <NewsLetter /> */}
      {/* <Developer /> */}
      {/* <Technology /> */}
      {/* <ContactUs /> */}
      {/* <Footer /> */}
    </div>
   </>
  );
}

export default App;
