import React, { useState } from "react";
import "./technology.css";
import WebsiteTechnology from "./web/website";
import MobileTechnology from "./mobile/mobile";
import DesktopTechnology from "./desktop/desktop";
import DatabaseTechnology from "./database/database";
import CloudTechnology from "./cloud/cloud";

const Web = () => <div><WebsiteTechnology /></div>;
const Mobile = () => <div><MobileTechnology /></div>;
const Desktop = () => <div><DesktopTechnology /></div>;
const Database = () => <div><DatabaseTechnology /></div>;
const Cloud = () => <div><CloudTechnology /></div>;

const Technology = () => {
  const [selectedButton, setSelectedButton] = useState("button1");

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const contentPage = () => {
    switch (selectedButton) {
      case "button1":
        return <Web />;
      case "button2":
        return <Mobile />;
      case "button3":
        return <Desktop />;
      case "button4":
        return <Database />;
      case "button5":
        return <Cloud />;
      default:
        return null;
    }
  };

  return (
    <div className="tech-body">
      <div className="tech-main">
        <div className="tech-mainText">
          <h1>Our Technologies</h1>
          <span className="tech-span"></span>
        </div>
        <div className="tech-submain">
          <div className="button-container">
            <button onClick={() => handleButtonClick("button1")}>Web</button>
            <button onClick={() => handleButtonClick("button2")}>Mobile</button>
            <button onClick={() => handleButtonClick("button3")}>Desktop</button>
            <button onClick={() => handleButtonClick("button4")}>Database</button>
            <button onClick={() => handleButtonClick("button5")}>Cloud</button>
          </div>
          <div className="content-container">{contentPage()}</div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
