import React from "react";
import { FaAngular, FaLaptop, FaMobile, FaPython, FaQuestionCircle, FaReact } from "react-icons/fa";
import { FaLightbulb, FaPhone } from "react-icons/fa6";
import { MdDesignServices, MdMail } from "react-icons/md";
import { Link } from "react-router-dom";
import "./footer.css";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  const today = new Date();
  // const month = today.getMonth() + 1;
  const year = today.getFullYear();
  // const date = today.getDate();
  return (
    <div className="ft-body">
      <div className="ft-main">
        <div className="ft-left ft-container">
          <div className="ftl-top">
            <h1>HR Inquiry</h1>
            <p className="fi">
              {/* <icon>
                <MdMail />
              </icon>{" "}
              mindsmaven296@gmail.com */}
              {/* <a href="mailto:mindsmaven296@gmail.com">
                <icon>
                  <MdMail />
                </icon>&nbsp;
                mindsmaven296@gmail.com
              </a> */}
              <a href="mailto:contact@mindsmaven.in">
                <icon>
                  <MdMail />
                </icon>&nbsp;
                contact@mindsmaven.in
              </a>
            </p>
            <p className="fi">
              {/* <icon>
                <FaPhone />
              </icon>{" "}
              +91 8849492570 */}
              <a href="tel:+918849492570">
                <icon>
                  <FaPhone />
                </icon>&nbsp;
                +91 8849492570
              </a>
            </p>
            {/* <p><MdMail /> hr@mindsmaven.com</p>
                <p><FaPhone /> +91 0123456789</p> */}
          </div>
          <div className="ftl-bottom">
            <h1>Sales Inquiry</h1>
            <p className="fi">
              {/* <icon>
                <MdMail />
              </icon>{" "}
              mindsmaven296@gmail.com */}
              {/* <a href="mailto:mindsmaven296@gmail.com">
                <icon>
                  <MdMail />
                </icon>&nbsp;
                mindsmaven296@gmail.com
              </a> */}
              <a href="mailto:contact@mindsmaven.in">
                <icon>
                  <MdMail />
                </icon>&nbsp;
                contact@mindsmaven.in
              </a>
            </p>
            <p className="fi">
              {/* <icon>
                <FaPhone />
              </icon>{" "}
              +91 8849492570 */}
              <a href="tel:+918849492570">
                <icon>
                  <FaPhone />
                </icon>&nbsp;
                +91 8849492570
              </a>
            </p>
          </div>
        </div>
        <div className="ft-leftCenter ft-container">
          <h1>Help & Advice</h1>
          <p className="fi">
            <icon>
              <FaPhone />
            </icon>{" "}
            Contact Us
          </p>
          <p className="fi">
            <icon>
              <FaQuestionCircle />
            </icon>{" "}
            FAQ's
          </p>
          <p className="fi">
            <icon>
              <FaLightbulb />
            </icon>{" "}
            Q&A
          </p>
        </div>
        <div className="ft-rightCenter ft-container">
          <h1>Services</h1>
          <p className="fi">
            <icon>
              <FaLaptop />
            </icon>{" "}
            Web Development
          </p>
          <p className="fi">
            <icon>
              <FaMobile />
            </icon>{" "}
            Mobile Development
          </p>
          <p className="fi">
            <icon>
              <MdDesignServices />
            </icon>{" "}
            Web Design
          </p>
          {/* <p><FaLaptop /> Web Development</p>
            <p><FaMobile /> Mobile Development</p>
            <p><MdDesignServices /> Web Design</p> */}
          <p></p>
        </div>
        <div className="ft-right ft-container">
          <h1>Hire Developer</h1>
          <p className="fi">
            <Link to="/react">
              <icon>
                <FaReact />
              </icon>{" "}
              Hire ReactJs Developer

            </Link>
          </p>
          <p className="fi">
            <Link to="/angular">
              <icon>
                <FaAngular />
              </icon>{" "}
              Hire AngularJs Developer
            </Link>
          </p>
          <p className="fi">
            <Link to="/flutter">
              <icon>
                <FaMobile />
              </icon>{" "}
              Hire Flutter Developer
            </Link>
          </p>
          <p className="fi">
            <Link to="/reactnative">
              <icon>
                <FaReact />
              </icon>{" "}
              Hire React Native Developer
            </Link>
          </p>
          <p className="fi">
            <Link to="/python">
              <icon>
                <FaPython />
              </icon>{" "}
              Hire Python Developer
            </Link>
          </p>
        </div>
      </div>
      <div className="ft-main-bottom">
        <p>
          {/* <icon><FaRegCopyright /></icon> <span>2024</span> All rights reserved by <span>MindsMaven IT Solutions</span> */}
          <icon><FaRegCopyright /></icon> <span>{year}</span> All rights reserved by <span>MindsMaven IT Solutions</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
