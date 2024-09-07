import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"; // Import menu icons
import { FaAngular, FaNodeJs, FaReact } from "react-icons/fa";
import { RiFlutterLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { TiArrowSortedDown } from "react-icons/ti";

import MMLogo from "../../images/MindsMaven Logo.png";
import "./navbarSection1.css";

const NavbarSection = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        // Close dropdown if menu is closed
        if (!menuOpen) {
            setDropdownOpen(false);
        }
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className='ns-body'>
            <nav className="navbar">
                <div className="logo">
                    <img src={MMLogo} alt="MindsMaven Logo" />
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </div>
                <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <li className={`dropdown ${dropdownOpen ? "open" : ""}`} onClick={toggleDropdown}>
                        <a href="#about-us">About us <TiArrowSortedDown className="sideIcon" /></a>
                        <div className="dropdown-content">
                            <div className="dropdown-column">
                                <a href="#about">About Us</a>
                                <a href="#careers">Careers</a>
                                <a href="#life">Life@MindsMaven IT Solutions</a>
                            </div>
                        </div>
                    </li>
                    <li className="dropdown">
                        <a href="#hire-developers">Hire Developers</a>
                        <div className="dropdown-content">
                            <div className="dropdown-flex">
                                <div className="dropdown-column">
                                    <h1>Web Developer</h1>
                                    <div>
                                        <a href="#React"><FaReact className="icon" /> Hire ReactJS Developer</a>
                                        <a href="#Angular"><FaAngular className="icon" /> Hire AngularJS Developer</a>
                                        <a href="#NextJS"><TbBrandNextjs className="icon" />Hire NextJS Developer</a>
                                        <a href="#NodeJS"><FaNodeJs className="icon" />Hire NodeJS Developer</a>
                                    </div>
                                </div>
                                <div className="dropdown-column">
                                    <h1>Mobile App Developer</h1>
                                    <div>
                                        <a href="#Flutter"><RiFlutterLine className="icon" />Hire Flutter Developer</a>
                                        <a href="#ReactNative"><FaReact className="icon" /> Hire React Native Developer</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><a href="#technology">Technology</a></li>
                    <li><a href="#industry">Industry</a></li>
                </ul>
                <div className="quote-button">
                    <button className='nav-btn'>GET QUOTE</button>
                </div>
            </nav>
        </div>
    );
};

export default NavbarSection;
