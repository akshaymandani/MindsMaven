import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import ContactUs from './contact us/contactUs';
import Developer from './developer/developer';
import MainHomePage from './Home/mainHomePage/mainHomePage';
import ContactPage from "./mainContactPage/contactPage";
import ReactJsMainPage from './React Js/reactJs';
import AngularJsMainPage from "./Angular Js/angularJs";
import Technology from './Technology/technology';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/react" element={<ReactJsMainPage />} />
          <Route path="/angular" element={<AngularJsMainPage />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/contactUs" element={<ContactUs />} />

        </Routes>
      </BrowserRouter>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarSection />}>
        <Route index element={<MainHomePage />} />
        <Route path="AngularJsMainPage" element={<AngularJsMainPage />} />
          <Route path="*" element={<MainHomePage/>} />
        </Route>
      </Routes>
    </BrowserRouter> */}
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
