import React, { useState } from 'react'
import { Link } from "react-router-dom";
import MMLogo from "../../images/MindsMaven Logo.png";
import "./navbarSection.css"
import headerGroup from "../../images/header-group.svg"
import headerBrifcase from "../../images/header-brifcase.svg"
import headerSmile from "../../images/header-smile.svg"
import frotendIcon from "../../images/frotend-icon.svg"
import { FaAngular, FaNodeJs, FaReact, FaFileCode, FaIndustry } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { RiFlutterLine } from "react-icons/ri";
import closeIcon from "../../images/close-icon.png"
import { MdGroups, MdGroup } from "react-icons/md";
import { FaFaceSmile, FaBriefcase } from "react-icons/fa6";
// import { FaBriefcase } from "react-icons/fa6";
import { TiGroup } from "react-icons/ti";

const NavbarSection = () => {
    // const [isSsMainVisible, setIsSsMainVisible] = useState(true);
    const [isSsMainVisible, setIsSsMainVisible] = useState(false);
    const [isSslContentVisible, setIsSslContentVisible] = useState(false);
    const [isSslContentVisible1, setIsSslContentVisible1] = useState(false);

    const toggleSsMain = () => {
        setIsSsMainVisible(!isSsMainVisible);
    };

    const toggleSslContent = () => {
        setIsSslContentVisible(!isSslContentVisible);
    };

    const toggleSslContent1 = () => {
        setIsSslContentVisible1(!isSslContentVisible1);
    };
    return (
        <div className='ns-mainbody'>
            <div className='ns-body'>
                <nav className='nav'>
                    <div className='nav-logo'>
                        <Link to="/">
                            <img src={MMLogo} alt="MindsMaven Logo" className='nav-mainlogo' />
                        </Link>
                    </div>
                    <div className='nav-center'>
                        <ul className='nav-menu'>
                            <li className='nav-item dropdown'>
                                <div className='nav-link dropdown-toggle'>
                                    About us
                                </div>
                                <div className='dropdown-menu'>
                                    <div className='dropdown-container'>
                                        <div className='dc-main'>
                                            <div className='dc-submain'>
                                                <div className='dc-content'>
                                                    <div className='dc-left'>
                                                        <ul className='dcl-ul'>
                                                            <li className='dcl-li'>
                                                                <Link to="/aboutus" className='dcll-link'>
                                                                    <div className='dcll-main'>
                                                                        <div className='dcll-div'>
                                                                            <img src={headerGroup} alt="" className='dcll-img' />
                                                                        </div>
                                                                        <span className='dcll-span'>About Us</span>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                            <li className='dcl-li'>
                                                                <Link to="/career" className='dcll-link'>
                                                                    <div className='dcll-main'>
                                                                        <div className='dcll-div'>
                                                                            <img src={headerBrifcase} alt="" className='dcll-img' />
                                                                        </div>
                                                                        <span className='dcll-span'>Careers</span>
                                                                    </div>
                                                                </Link>
                                                            </li>
                                                            {/* <li className='dcl-li'>
                                                                <Link to="/" className='dcll-link'>
                                                                    <div className='dcll-main'>
                                                                        <div className='dcll-div'>
                                                                            <img src={headerSmile} alt="" className='dcll-img' />
                                                                        </div>
                                                                        <span className='dcll-span'>Life@MindsMaven IT Solutions</span>
                                                                    </div>
                                                                </Link>
                                                            </li> */}
                                                        </ul>
                                                    </div>
                                                    <div className='dc-right'>
                                                        <div className='dcr-main'>
                                                            <div className='dcr-left'>
                                                                <p className='dcrl-p'>Create disruptive business innovations through high-end creativity and world-class alliances.</p>
                                                                <div className='dcrl-main'>
                                                                    <div className='dcrl-left'>
                                                                        <div className='dcrll-main'>
                                                                            <ul className='dcrll-ul'>
                                                                                <li className='dcrll-li'>
                                                                                    <h6 className='dcrll-h6'>or mail us at</h6>
                                                                                </li>
                                                                                <li className='dcrll-li'>
                                                                                    <a href="mailto:contact@mindsmaven.in" className='dcrll-a'>
                                                                                        <p className='dcrll-p'>contact@mindsmaven.in</p>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div className='dcrl-right'>
                                                                        <div className='dcrlr-main'>
                                                                            <ul className='dcrlr-ul'>
                                                                                <li className='dcrlr-li'>
                                                                                    <h6 className='dcrlr-h6'>or call us at</h6>
                                                                                </li>
                                                                                <li className='dcrlr-li'>
                                                                                    <a href="tel:+91 8849492570" className='dcrlr-a'>
                                                                                        <p className='dcrlr-p'>+91 884 949 2570</p>
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* <div className='dcr-right'></div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className='nav-item dropdown'>
                                <div className='nav-link dropdown-toggle'>
                                    Hire Developers
                                </div>
                                <div className='dropdown-menu'>
                                    <div className='dropdown-container'>
                                        <div className='dc-top'>
                                            <div className='dct-main'>
                                                <div className='dct-submain'>
                                                    <div className='dct-left'>
                                                        <div className='dctl-main'>
                                                            <ul className='dctl-ul'>
                                                                <li className='dctl-li dctl-li2'>
                                                                    <div className='dctll-div'>
                                                                        <img src={frotendIcon} alt="" className='dctll-img' />
                                                                    </div>
                                                                    <span className='dctll-span'>Web Development</span>
                                                                </li>
                                                                <li className='dctl-li dctl-li1'>
                                                                    <Link to="/react" className='dctll-link'>
                                                                        <div className='dctll-main'>
                                                                            <div className='dctllm-div'>
                                                                                {/* <icon className="dctllm-icon"><FaReact className="icon" /></icon> */}
                                                                                <FaReact className="dctllm-icon" />
                                                                            </div>
                                                                            <span className='dctllm-span'>Hire ReactJS Developer</span>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li className='dctl-li dctl-li1'>
                                                                    <Link to="/angular" className='dctll-link'>
                                                                        <div className='dctll-main'>
                                                                            <div className='dctllm-div'>
                                                                                <FaAngular className="dctllm-icon" />
                                                                            </div>
                                                                            <span className='dctllm-span'>Hire AngularJS Developer</span>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li className='dctl-li dctl-li1'>
                                                                    <Link to="/next" className='dctll-link'>
                                                                        <div className='dctll-main'>
                                                                            <div className='dctllm-div'>
                                                                                <TbBrandNextjs className="dctllm-icon" />
                                                                            </div>
                                                                            <span className='dctllm-span'>Hire NextJS Developer</span>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li className='dctl-li dctl-li1'>
                                                                    <Link to="/node" className='dctll-link'>
                                                                        <div className='dctll-main'>
                                                                            <div className='dctllm-div'>
                                                                                <FaNodeJs className="dctllm-icon" />
                                                                            </div>
                                                                            <span className='dctllm-span'>Hire NodeJS Developer</span>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                {/* <li className='dctl-li'>
                                                                <Link to="/react" className='dctll-link'>
                                                                    <div className='dctll-main'>
                                                                        <div className='dctllm-div'>
                                                                            <FaReact className="dctllm-icon" />
                                                                        </div>
                                                                        <span className='dctllm-span'>Hire VueJS Developer</span>
                                                                    </div>
                                                                </Link>
                                                            </li> */}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className='dct-right'>
                                                        <div className='dctr-main'>
                                                            <ul className='dctr-ul'>
                                                                <li className='dctr-li dctr-li2'>
                                                                    <div className='dctrl-div'>
                                                                        <img src={frotendIcon} alt="" className='dctrl-img' />
                                                                    </div>
                                                                    <span className='dctrl-span'>Mobile Development</span>
                                                                </li>
                                                                <li className='dctr-li dctr-li1'>
                                                                    <Link to="/flutter" className='dctrl-link'>
                                                                        <div className='dctrl-main'>
                                                                            <div className='dctrlm-div'>
                                                                                <FaAngular className="dctrlm-icon" />
                                                                            </div>
                                                                            <span className='dctrlm-span'>Hire Flutter Developer</span>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li className='dctr-li dctr-li1'>
                                                                    <Link to="/reactnative" className='dctrl-link'>
                                                                        <div className='dctrl-main'>
                                                                            <div className='dctrlm-div'>
                                                                                <FaReact className="dctrlm-icon" />
                                                                            </div>
                                                                            <span className='dctrlm-span'>Hire React Native Developer</span>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/* <div></div> */}
                                                    {/* <div></div> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div></div>
                                    </div>
                                </div>
                            </li>
                            <li className='nav-item dropdown'>
                                <div className='nav-link dropdown-toggle'>
                                    Technology
                                </div>
                            </li>
                            <li className='nav-item dropdown'>
                                <div className='nav-link dropdown-toggle'>
                                    Industry
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='nav-right'>
                        <ul className='navr-ul'>
                            <li className='navr-li'>
                                <Link to="/" className='navrl-link'>
                                    <div className='navrl-btn'>
                                        GET QUOTE
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className='ss-body'>
                <div className='ss-top' onClick={toggleSsMain}>
                    <span>
                        {/* <img src={closeIcon} alt="" /> */}
                        {isSsMainVisible ? (
                            <img src={closeIcon} alt="Close Icon" />
                        ) : (
                            //   <img src={openIcon} alt="Open Icon" />
                            // <svg xmlns="http://www.w3.org/2000/svg" class="menu-icon" width="50" height="26" viewBox="0 0 50 26" fill="none"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H30V4H0V0ZM0 11H50V15H0V11ZM50 22H20V26H50V22Z" fill="currentcolor"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="svg-menu-icon" width="50" height="26" viewBox="0 0 50 26" fill="none"> <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H30V4H0V0ZM0 11H50V15H0V11ZM50 22H20V26H50V22Z" fill="#d96122"></path></svg>
                        )}
                    </span>
                </div>
                {isSsMainVisible && (
                    <div className='ss-main'>
                        <div className='ss-submain'>
                            <ul className='ss-ul'>
                                <li className='ss-li'>
                                    <div className='ssl-main' onClick={toggleSslContent}>
                                        <i></i>
                                        <TiGroup className='ssl-icon' /> About Us
                                        <i></i>
                                    </div>
                                    {isSslContentVisible && (
                                        <div className='ssl-content'>
                                            <ul className='sslc-ul'>
                                                <li className='sslc-li'>
                                                    <Link to="/aboutus" className='sslc-link'>
                                                        <div className="sslc-div">
                                                            <MdGroups className="sslc-icon" /> About Us
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className='sslc-li'>
                                                    <Link to="/career" className='sslc-link'>
                                                        <div className="sslc-div">
                                                            <FaBriefcase className="sslc-icon" />Careers
                                                        </div>
                                                    </Link>
                                                </li>
                                                {/* <li className='sslc-li'>
                                                    <Link to="/" className='sslc-link'>
                                                        <div className="sslc-div">
                                                            <FaFaceSmile className="sslc-icon" /> Life@MindsMaven IT Solutions
                                                        </div>
                                                    </Link>
                                                </li> */}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                                <li className='ss-li'>
                                    <div className='ssl-main' onClick={toggleSslContent1}>
                                        <i></i>
                                        <MdGroup className='ssl-icon' /> Hire Development
                                        <i></i>
                                    </div>
                                    {isSslContentVisible1 && (
                                        <div className='ssl-content'>
                                            <ul className='sslc-ul'>
                                                <li className='sslc-li'>
                                                    <Link to="/react" className='sslc-link'>
                                                        <div className="sslc-div">
                                                            {/* <FaReact className="icon" /> Hire ReactJs Developer */}
                                                            <icon><FaReact className="sslc-icon" /></icon> Hire ReactJs Developer
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className='sslc-li'>
                                                    <Link to="/angular" className='sslc-link'>
                                                        <div className="sslc-div">
                                                            <icon><FaAngular className="sslc-icon" /></icon> Hire AngularJs Developer
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className='sslc-li'>
                                                    <Link to="/next" className='sslc-link'>
                                                        <div className="sslc-div">
                                                            <TbBrandNextjs className="sslc-icon" /> Hire NextJs Developer
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className='sslc-li'>
                                                    <Link to="/node" className='sslc-link'>
                                                        <div className="sslc-div">
                                                            <FaNodeJs className="sslc-icon" /> Hire NodeJs Developer
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className='sslc-li'>
                                                    <Link to="/flutter" className='sslc-link'>
                                                        <div className="sslc-div">
                                                            <RiFlutterLine className="sslc-icon" /> Hire Flutter Developer
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className='sslc-li'>
                                                    <Link to="/reactnative" className='sslc-link'>
                                                        <div className="sslc-div">
                                                            <FaReact className="sslc-icon" /> Hire React Native Developer
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </li>
                                <li className='ss-li'>
                                    {/* <div className='ssl-main' onClick={toggleSslContent1}> */}
                                    <div className='ssl-main'>
                                        <i></i>
                                        <FaFileCode className='ssl-icon1' /> Technology
                                        <i></i>
                                    </div>
                                    {/* {isSslContentVisible1 && (
                                        <div className='ssl-content'>
                                            <ul className='sslc-ul'>
                                                <li className='sslc-li'>
                                                    <Link to="/aboutus" className='sslc-link'>
                                                        <div className="sslc-div">
                                                            Hire ReactJs Developer
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className='sslc-li'>
                                                    <Link to="/" className='sslc-link'>
                                                        <div className="sslc-div">
                                                            Hire AngularJs Developer
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className='sslc-li'>
                                                    <Link to="/" className='sslc-link'>
                                                        <div className="sslc-div">
                                                            Hire NextJs Developer
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className='sslc-li'>
                                                    <Link to="/" className='sslc-link'>
                                                        <div className="sslc-div">
                                                            Hire NodeJs Developer
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className='sslc-li'>
                                                    <Link to="/" className='sslc-link'>
                                                        <div className="sslc-div">
                                                            Hire Flutter Developer
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className='sslc-li'>
                                                    <Link to="/" className='sslc-link'>
                                                        <div className="sslc-div">
                                                            Hire React Native Developer
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    )} */}
                                </li>
                                <li className='ss-li'>
                                    {/* <div className='ssl-main' onClick={toggleSslContent1}> */}
                                    <div className='ssl-main'>
                                        <i></i>
                                        <FaIndustry className='ssl-icon1' /> Industry
                                        <i></i>
                                    </div>
                                    {/* {isSslContentVisible1 && (
                                        <div className='ssl-content'>
                                            <ul className='sslc-ul'>
                                                <li className='sslc-li'>
                                                    <Link to="/aboutus" className='sslc-link'>
                                                        <div className="sslc-div">
                                                            Hire ReactJs Developer
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className='sslc-li'>
                                                    <Link to="/" className='sslc-link'>
                                                        <div className="sslc-div">
                                                            Hire AngularJs Developer
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className='sslc-li'>
                                                    <Link to="/" className='sslc-link'>
                                                        <div className="sslc-div">
                                                            Hire NextJs Developer
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className='sslc-li'>
                                                    <Link to="/" className='sslc-link'>
                                                        <div className="sslc-div">
                                                            Hire NodeJs Developer
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className='sslc-li'>
                                                    <Link to="/" className='sslc-link'>
                                                        <div className="sslc-div">
                                                            Hire Flutter Developer
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li className='sslc-li'>
                                                    <Link to="/" className='sslc-link'>
                                                        <div className="sslc-div">
                                                            Hire React Native Developer
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    )} */}
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default NavbarSection;