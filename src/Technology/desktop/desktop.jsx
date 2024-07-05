import React from 'react'
import "./desktop.css"
import cLogo from "../../images/C.png"
import cPlusLogo from "../../images/C++.png"
import cSharpLogo from "../../images/CSharp.png"
import pythonLogo from "../../images/Python.png"

const DesktopTechnology = () => {
  return (
    <div className='desktop-body'>
      <div className='desktop-main'>
        <div className='desktop-mainText'>
            <h1>Desktop</h1>
        </div>
        <div className='desktop-submain'>
            <div>
                <img src={cLogo} alt="C" /><br />
                <p>C</p>
            </div>
            <div>
                <img src={cPlusLogo} alt="C++" /><br />
                <p>C++</p>
            </div>
            <div>
                <img src={cSharpLogo} alt="C##" /><br />
                <p>C##</p>
            </div>
            <div>
                <img src={pythonLogo} alt="Python" /><br />
                <p>Python</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DesktopTechnology;
