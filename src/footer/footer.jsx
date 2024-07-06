import React from "react";
import { FaAngular, FaLaptop, FaMobile, FaPython, FaQuestionCircle, FaReact } from "react-icons/fa";
import { FaLightbulb, FaPhone } from "react-icons/fa6";
import { MdDesignServices, MdMail } from "react-icons/md";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="ft-body">
      <div className="ft-main">
        <div className="ft-left">
          <div className="ftl-top">
            <h1>HR Inquiry</h1>
            <p className="fi">
              <icon>
                <MdMail />
              </icon>{" "}
              mindsmaven296@gmail.com
            </p>
            <p className="fi">
              <icon>
                <FaPhone />
              </icon>{" "}
              +91 8849492570
            </p>
            {/* <p><MdMail /> hr@mindsmaven.com</p>
                <p><FaPhone /> +91 0123456789</p> */}
          </div>
          <div className="ftl-bottom">
            <h1>Sales Inquiry</h1>
            <p className="fi">
              <icon>
                <MdMail />
              </icon>{" "}
              mindsmaven296@gmail.com
            </p>
            <p className="fi">
              <icon>
                <FaPhone />
              </icon>{" "}
              +91 8849492570
            </p>
            {/* <p><MdMail /> solutions@minds.com</p>
                <p><FaPhone /> +91 0123456789</p> */}
          </div>
        </div>
        <div className="ft-leftCenter">
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
        <div className="ft-rightCenter">
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
        <div className="ft-right">
          <h1>Hire Developer</h1>
          <Link to="react">
          <p className="fi">
            <icon>
              <FaReact />
            </icon>{" "}
            Hire ReactJs Developer
            
          </p>
          </Link>
          <p className="fi">
            <icon>
              <FaAngular />
            </icon>{" "}
            Hire AngularJs Developer
          </p>
          <p className="fi">
            <icon>
              <FaMobile />
            </icon>{" "}
            Hire Flutter Developer
          </p>
          <p className="fi">
            <icon>
              <FaReact />
            </icon>{" "}
            Hire React Native Developer
          </p>
          <p className="fi">
            <icon>
              <FaPython />
            </icon>{" "}
            Hire Python Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
