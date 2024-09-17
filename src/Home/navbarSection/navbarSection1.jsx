// import React from 'react'
// import "./navbarSection.css"
// import MMLogo from "../../images/MindsMaven Logo.png"

// const NavbarSection = () => {
//     return (
//         <div className='ns-body'>
//             <nav className="navbar">
//                 <div className="logo">
//                     {/* <h1>TAGLINE INFOTECH LLP</h1> */}
//                     <img src={MMLogo} alt="" href="/" style={{ width: '200px' }} />
//                 </div>
//                 <ul className="nav-links">
//                     <li><a href="#case-study">Case Study</a></li>
//                     <li className="dropdown">
//                         <a href="#about-us">About us</a>
//                         <div className="dropdown-content">
//                             <a href="#about">About Us</a>
//                             <a href="#careers">Careers</a>
//                             <a href="#life">Life@Tagline Infotech</a>
//                         </div>
//                     </li>
//                     <li className='dropdown'>
//                         <a href="#hire-developers">Hire Developers</a>
//                         <div>
//                             <div>
//                                 <h1>Web Developer</h1>
//                                 <a href="#React"><FaReact className="icon" /> Hire ReactJS Developer</a>
//                                         <a href="#Angular"><FaAngular className="icon" /> Hire AngularJS Developer</a>
//                                         <a href="#NextJS"><TbBrandNextjs className="icon" />Hire NextJS Developer</a>
//                                         <a href="#NodeJS"><FaNodeJs className="icon" />Hire NodeJS Developer</a>
//                             </div>
//                         </div>
//                     </li>
//                     <li><a href="#technology">Technology</a></li>
//                     <li><a href="#industry">Industry</a></li>
//                     <li><a href="#blogs">Blogs</a></li>
//                 </ul>
//                 <div className="quote-button">
//                     <button>GET QUOTE</button>
//                 </div>
//             </nav>
//         </div>
//     )
// }

// export default NavbarSection;


// import React, { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"; // Import menu icons
// import { FaAngular, FaNodeJs, FaReact } from "react-icons/fa";
// import { RiFlutterLine } from "react-icons/ri";
// import { TbBrandNextjs } from "react-icons/tb";
// import { TiArrowSortedDown } from "react-icons/ti";

// import MMLogo from "../../images/MindsMaven Logo.png";
// import "./navbarSection.css";

// const NavbarSection = () => {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [dropdownOpen, setDropdownOpen] = useState(false);

//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//         // Close dropdown if menu is closed
//         if (!menuOpen) {
//             setDropdownOpen(false);
//         }
//     };

//     const toggleDropdown = () => {
//         setDropdownOpen(!dropdownOpen);
//     };

//     const [sidebarOpen, setSidebarOpen] = useState(false);

//     const toggleSidebar = () => {
//         setSidebarOpen(!sidebarOpen);
//     };

//     return (
//         <div className='ns-body'>
//             <nav className="navbar">
//                 <div className="logo">
//                     <img src={MMLogo} alt="MindsMaven Logo" />
//                 </div>
//                 <div className="menu-icon" onClick={toggleMenu}>
//                     {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
//                 </div>
//                 <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
//                     <li className={`dropdown ${dropdownOpen ? "open" : ""}`} onClick={toggleDropdown}>
//                         <a href="#about-us">About us <TiArrowSortedDown className="sideIcon" /></a>
//                         <div className="dropdown-content">
//                             <div className="dropdown-column" id='dropdown-about'>
//                                 <a href="#about">About Us</a>
//                                 <a href="#careers">Careers</a>
//                                 <a href="#life">Life@MindsMaven IT Solutions</a>
//                             </div>
//                         </div>
//                     </li>
//                     <li className="dropdown">
//                         <a href="#hire-developers">Hire Developers</a>
//                         <div className="dropdown-content">
//                             <div className="dropdown-flex">
//                                 <div className="dropdown-column">
//                                     <h1>Web Developer</h1>
//                                     <div>
//                                         <a href="#React"><FaReact className="icon" /> Hire ReactJS Developer</a>
//                                         <a href="#Angular"><FaAngular className="icon" /> Hire AngularJS Developer</a>
//                                         <a href="#NextJS"><TbBrandNextjs className="icon" />Hire NextJS Developer</a>
//                                         <a href="#NodeJS"><FaNodeJs className="icon" />Hire NodeJS Developer</a>
//                                     </div>
//                                 </div>
//                                 <div className="dropdown-column">
//                                     <h1>Mobile App Developer</h1>
//                                     <div>
//                                         <a href="#Flutter"><RiFlutterLine className="icon" />Hire Flutter Developer</a>
//                                         <a href="#ReactNative"><FaReact className="icon" /> Hire React Native Developer</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </li>
//                     <li><a href="#technology">Technology</a></li>
//                     <li><a href="#industry">Industry</a></li>
//                 </ul>
//                 <div className="quote-button">
//                     <button className='nav-btn'>GET QUOTE</button>
//                 </div>
//             </nav>
//             <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
//                 <button className="sidebar-btn">Home</button>
//                 <button className="sidebar-btn">About</button>
//                 <button className="sidebar-btn">Services</button>
//                 <button className="sidebar-btn">Contact</button>
//             </div>

//             <div className={`overlay ${sidebarOpen ? 'show' : ''}`} onClick={toggleSidebar}></div>
//         </div>
//     );
// };

// export default NavbarSection;


// import React, { useState } from 'react';
// import './navbarSection.css';

// const NavbarSection = () => {
//     const [sidebarOpen, setSidebarOpen] = useState(false);
//     const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
//     const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

//     const toggleSidebar = () => {
//         setSidebarOpen(!sidebarOpen);
//     };

//     return (
//         <div className="ns-app">
//             <nav className="navbar">
//                 <div className="navbar-logo">Logo</div>
//                 <div className="navbar-center">
//                     <button className="nav-btn">Home</button>
//                     <div className="nav-btn dropdown" onMouseEnter={() => setAboutDropdownOpen(true)} onMouseLeave={() => setAboutDropdownOpen(false)}>
//                         About
//                         {aboutDropdownOpen && (
//                             <div className="dropdown-menu">
//                                 <button className="dropdown-item">Our Team</button>
//                                 <button className="dropdown-item">Our Story</button>
//                                 <button className="dropdown-item">Careers</button>
//                             </div>
//                         )}
//                     </div>
//                     <div className="nav-btn dropdown" onMouseEnter={() => setServicesDropdownOpen(true)} onMouseLeave={() => setServicesDropdownOpen(false)}>
//                         Services
//                         {servicesDropdownOpen && (
//                             <div className="dropdown-menu services-dropdown">
//                                 <div className="services-left">
//                                     <button className="dropdown-item">Web Design</button>
//                                     <button className="dropdown-item">SEO</button>
//                                     <button className="dropdown-item">Marketing</button>
//                                     <button className="dropdown-item">Consulting</button>
//                                 </div>
//                                 <div className="services-right">
//                                     <button className="dropdown-item">Development</button>
//                                     <button className="dropdown-item">Support</button>
//                                     <button className="dropdown-item">Maintenance</button>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                     <button className="nav-btn">Contact</button>
//                 </div>
//                 <div className="navbar-right">
//                     <button className="quote-btn">Get Quotes</button>
//                     <button className="toggle-btn" onClick={toggleSidebar}>
//                         ☰
//                     </button>
//                 </div>
//             </nav>

//             <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
//                 <button className="close-btn" onClick={toggleSidebar}>✕</button>
//                 <button className="sidebar-btn">Home</button>
//                 <div className="sidebar-btn">About</div>
//                 <div className="sidebar-btn">Services</div>
//                 <button className="sidebar-btn">Contact</button>
//                 <button className="quote-btn-sidebar">Get Quotes</button>
//             </div>

//             <div className={`overlay ${sidebarOpen ? 'show' : ''}`} onClick={toggleSidebar}></div>
//         </div>
//     );
// };

// export default NavbarSection;



import React, { useState } from 'react';
import './navbarSection.css';

const NavbarSection = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="ns-app">
            <nav className="navbar">
                <div className="navbar-logo">Logo</div>
                <div className={`navbar-center ${menuOpen ? 'open' : ''}`}>
                    <button className="nav-btn">Home</button>

                    {/* About Dropdown */}
                    <div className="nav-btn dropdown" onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}>
                        About
                        {aboutDropdownOpen && (
                            <div className="dropdown-menu">
                                <button className="dropdown-item">Our Team</button>
                                <button className="dropdown-item">Our Story</button>
                                <button className="dropdown-item">Careers</button>
                            </div>
                        )}
                    </div>

                    <div className="nav-btn dropdown" onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}>
                        Services
                        {servicesDropdownOpen && (
                            <div className="dropdown-menu services-dropdown">
                                <div className="services-left">
                                    <button className="dropdown-item">Web Design</button>
                                    <button className="dropdown-item">SEO</button>
                                    <button className="dropdown-item">Marketing</button>
                                    <button className="dropdown-item">Consulting</button>
                                </div>
                                <div className="services-right">
                                    <button className="dropdown-item">Development</button>
                                    <button className="dropdown-item">Support</button>
                                    <button className="dropdown-item">Maintenance</button>
                                </div>
                            </div>
                        )}
                    </div>
                    <button className="nav-btn">Contact</button>
                </div>
                <div className="navbar-right">
                    <button className="quote-btn">Get Quotes</button>
                    <button className="toggle-btn" onClick={toggleMenu}>
                        ☰
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default NavbarSection;
