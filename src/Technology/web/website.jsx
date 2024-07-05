import React from 'react';
import "./website.css";
import reactJsLogo from "../../images/React.png";
import angularJsLogo from "../../images/angular.png";
import vueJsLogo from "../../images/Vue.png";
import javaScriptLogo from "../../images/JavaScript.png";
import htmlLogo from "../../images/HTML5.png";
import cssLogo from "../../images/CSS3.png";
import rorLogo from "../../images/ROR.png";
import nodeLogo from "../../images/Node.png";
import pythonLogo from "../../images/Python.png";

const WebsiteTechnology = () => {
  return (
    <div className='ws-body'>
      <div className='ws-main'>
        <div className='ws-mainText'>
            <h1>Web</h1>
        </div>
        <div className='ws-submain'>
            <div>
                <h2>Front End</h2>
                <div className='wss-leftmain'>
                    <div>
                        <img src={reactJsLogo} alt="React Js" /><br />
                        <p>React Js</p>
                    </div>
                    <div>
                        <img src={angularJsLogo} alt="Angular Js" /><br />
                        <p>Angular Js</p>
                    </div>
                    <div>
                        <img src={vueJsLogo} alt="Vue Js" /><br />
                        <p>Vue Js</p>
                    </div>
                    <div>
                        <img src={javaScriptLogo} alt="JavaScript" /><br />
                        <p>JavaScript</p>
                    </div>
                    <div>
                        <img src={htmlLogo} alt="HTML 5" /><br />
                        <p>HTML 5</p>
                    </div>
                    <div>
                        <img src={cssLogo} alt="CSS 3" /><br />
                        <p>CSS 3</p>
                    </div>
                </div>
            </div>
            <div>
                <h2>Back End</h2>
                <div className='wss-rightmain'>
                    <div>
                        <img src={rorLogo} alt="Ruby On Rails" /><br />
                        <p>Ruby On Rails</p>
                    </div>
                    <div>
                        <img src={nodeLogo} alt="Node Js" /><br />
                        <p>Node Js</p>
                    </div>
                    <div>
                        <img src={pythonLogo} alt="Python" /><br />
                        <p>Python</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WebsiteTechnology;
