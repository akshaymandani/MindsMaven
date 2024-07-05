import React from "react";
import "./developer.css";
import reactJsLogo from "../React.png";
import contactImage from "../images/Contact Us Background Image.png";

const Developer = () => {
  return (
    <div className="dev-body">
      <div className="dev-main">
        <div className="dev-top">
          <h1>Our Dedicated Developer</h1>
          <span className="dev-span"></span>
        </div>
        <div className="dev-bottom">
          <div className="devb-top">
            <div className="devbt-top">
              <div className="devbtt-div1">
                <h2>Hire Front-End Developer</h2>
                <div className="devbttd-main">
                  <div>
                    <img src={reactJsLogo} alt="" />
                    <br />
                    <a href="#">
                      Hire ReactJs
                      <br />
                      Developer
                    </a>
                  </div>
                  <div>
                    <img src={reactJsLogo} alt="" />
                    <br />
                    <a href="#">
                      Hire AngularJs
                      <br />
                      Developer
                    </a>
                  </div>
                </div>
              </div>
              <div className="devbtt-div2">
                <h2>Hire Mobile App Developer</h2>
                <div className="devbttd-main">
                  <div>
                    <img src={reactJsLogo} alt="" />
                    <br />
                    <a href="#">
                      Hire React Native
                      <br />
                      Developer
                    </a>
                  </div>
                  <div>
                    <img src={reactJsLogo} alt="" />
                    <br />
                    <a href="#">
                      Hire Flutter
                      <br />
                      Developer
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="devbt-bottom">
              <h2>Hire Back-End Developer</h2>
              <div className="devbtb-main">
                <div>
                  <img src={reactJsLogo} alt="" />
                  <br />
                  <a href="#">
                    Hire NodeJs
                    <br />
                    Developer
                  </a>
                </div>
                <div>
                  <img src={reactJsLogo} alt="" />
                  <br />
                  <a href="#">
                    Hire Python
                    <br />
                    Developer
                  </a>
                </div>
                <div>
                  <img src={reactJsLogo} alt="" />
                  <br />
                  <a href="#">
                    Hire ROR
                    <br />
                    Developer
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="devb-bottom">
            <img src={contactImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
