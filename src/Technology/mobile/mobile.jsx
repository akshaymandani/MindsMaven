import React from 'react'
import "./mobile.css"
import iosLogo from "../../images/ios.png"
import androidLogo from "../../images/Android.png"
import reactNativeLogo from "../../images/React.png"
import flutterLogo from "../../images/flutter.png"

const MobileTechnology = () => {
  return (
    <div className='mobile-body'>
      <div className='mobile-main'>
        <div className='mobile-mainText'>
            <h1>Mobile</h1>
        </div>
        <div className='mobile-submain'>
            <div>
                <img src={iosLogo} alt="iOS" /><br />
                <p>iOS</p>
            </div>
            <div>
                <img src={androidLogo} alt="Android" /><br />
                <p>Android</p>
            </div>
            <div>
                <img src={reactNativeLogo} alt="React Native" /><br />
                <p>React Native</p>
            </div>
            <div>
                <img src={flutterLogo} alt="Flutter" /><br />
                <p>Flutter</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MobileTechnology;
