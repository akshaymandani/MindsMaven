import React from 'react'
import "./navbarSection.css"
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
// import { IoMdArrowDropdown } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import MMLogo from "../../images/MindsMaven Logo.png"

const NavbarSection = () => {
    return (
        <div className='ns-body'>
            <nav className="navbar">
                <div className="logo">
                    <img src={MMLogo} alt="" style={{ width: '200px' }} />
                </div>
                <ul className="nav-links">
                    {/* <li><a href="#case-study">Case Study</a></li> */}
                    <li className="dropdown">
                        {/* <a href="#about-us">About us <icon className="sideIcon"><IoMdArrowDropdown /></icon></a> */}
                        <a href="#about-us">About us <icon className="sideIcon" style={{ paddingtop: '20px' }}><TiArrowSortedDown /></icon></a>
                        <div className="dropdown-content">
                            <a href="#about">About Us</a>
                            <a href="#careers">Careers</a>
                            <a href="#life">Life@Tagline Infotech</a>
                        </div>
                    </li>
                    <li className="dropdown">
                        <a href="#hire-developers">Hire Developers</a> {/* Make perfect design of this like in the left side we have Web Developer and Right side we need Mobile App Developer and remember one thing we need to link pages */}
                        <div className="dropdown-content">
                            <div>
                                <h1>Web Developer</h1>
                                <hr />
                                <a href="#React">
                                    <icon>
                                        <FaReact />
                                    </icon>{" "}
                                    Hire ReactJS Developer
                                </a>
                                <a href="#Angular">
                                    <icon>
                                        <FaAngular />
                                    </icon>{" "}
                                    Hire AngularJS Developer
                                </a>
                                <a href="#life">Hire NextJS Developer</a>
                                <a href="#life">Hire NodeJS Developer</a>
                            </div>
                            <div>
                                <h1>Mobile App Developer</h1>
                                <hr />
                                <a href="#life">Hire Flutter Developer</a>
                                <a href="#life">
                                    <icon>
                                        <FaReact />
                                    </icon>{" "}
                                    Hire React Native Developer
                                </a>
                            </div>
                        </div>
                    </li>
                    <li><a href="#technology">Technology</a></li> {/* In this we need to add link to Technology section */}
                    <li><a href="#industry">Industry</a></li> {/* In this we need some industry name same as tagline and add some more according to you And here we do not need to link pages*/}
                    {/* <li><a href="#blogs">Blogs</a></li> */}
                </ul>
                <div className="quote-button">
                    <button className='nav-btn'>GET QUOTE</button>
                </div>
            </nav>
        </div>
    )
}

export default NavbarSection;
