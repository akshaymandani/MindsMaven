import React from "react";
import "./footer.css";
import { MdMail } from "react-icons/md";
import { FaPhone, FaLaptop, FaMobile, FaReact, FaAngular, FaPython, FaQuestionCircle, FaLightbulb } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";

const Footer = () => {
  return (
    <div className="ft-body">
      <div className="ft-main">
        <div className="ft-left">
          <div className="ftl-top">
            <h1>HR Inquiry</h1>
            <p className="fi">
              <MdMail /> contact@mindsmaven.in
            </p>
            <p className="fi">
              <FaPhone /> +91 8849492570
            </p>
          </div>
          <div className="ftl-bottom">
            <h1>Sales Inquiry</h1>
            <p className="fi">
              <MdMail /> contact@mindsmaven.in
            </p>
            <p className="fi">
              <FaPhone /> +91 8849492570
            </p>
          </div>
        </div>
        <div className="ft-leftCenter">
          <h1>Help & Advice</h1>
          <p className="fi">
            <FaPhone /> Contact Us
          </p>
          <p className="fi">
            <FaQuestionCircle /> FAQ's
          </p>
          <p className="fi">
            <FaLightbulb /> Q&A
          </p>
        </div>
        <div className="ft-rightCenter">
          <h1>Services</h1>
          <p className="fi">
            <FaLaptop /> Web Development
          </p>
          <p className="fi">
            <FaMobile /> Mobile Development
          </p>
          <p className="fi">
            <MdDesignServices /> Web Design
          </p>
        </div>
        <div className="ft-right">
          <h1>Hire Developer</h1>
          <p className="fi">
            <FaReact /> Hire ReactJs Developer
          </p>
          <p className="fi">
            <FaAngular /> Hire AngularJs Developer
          </p>
          <p className="fi">
            <FaMobile /> Hire Flutter Developer
          </p>
          <p className="fi">
            <FaReact /> Hire React Native Developer
          </p>
          <p className="fi">
            <FaPython /> Hire Python Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
