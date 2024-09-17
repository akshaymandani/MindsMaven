// import React, { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import { FaAngular, FaNodeJs, FaReact } from "react-icons/fa";
// import { RiFlutterLine } from "react-icons/ri";
// import { TbBrandNextjs } from "react-icons/tb";
// import { TiArrowSortedDown } from "react-icons/ti";
// import { Link, Outlet } from "react-router-dom";

// import MMLogo from "../../images/MindsMaven Logo.png";
// import "./navbarSection.css";

// const NavbarSection = () => {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [dropdownOpen, setDropdownOpen] = useState(false);

//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//         if (!menuOpen) {
//             setDropdownOpen(false);
//         }
//     };

//     const toggleDropdown = () => {
//         setDropdownOpen(!dropdownOpen);
//     };

//     const closeMenu = () => {
//         setMenuOpen(false);
//         setDropdownOpen(false);
//     };

//     return (
//         <>
//             <div className='ns-body'>
//                 <nav className="navbar">
//                     <div className="logo">
//                         <Link to="/">
//                             <img src={MMLogo} alt="MindsMaven Logo" />
//                         </Link>
//                     </div>
//                     <div className="menu-icon" onClick={toggleMenu}>
//                         {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
//                     </div>

//                     <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
//                         {/* <li className={`dropdown ${dropdownOpen ? "open" : ""}`} onClick={toggleDropdown}> */}
//                         <li className="dropdown">
//                             <a>About us <TiArrowSortedDown className="sideIcon" /></a>
//                             <div className="dropdown-content">
//                                 <div className="dropdown-column">
//                                     <Link to="/" onClick={closeMenu}>About Us</Link>
//                                     <Link to="/" onClick={closeMenu}>Careers</Link>
//                                     <Link to="/" onClick={closeMenu}>Life@MindsMaven IT Solutions</Link>
//                                 </div>
//                             </div>
//                         </li>
//                         <li className="dropdown">
//                             <a>Hire Developers <TiArrowSortedDown className="sideIcon" /></a>
//                             <div className="dropdown-content">
//                                 <div className="dropdown-wrapper">
//                                     <div className="dropdown-section">
//                                         <h1>Web Developer</h1>
//                                         <div>
//                                             <Link to="/react" onClick={closeMenu}><FaReact className="icon" /> Hire ReactJS Developer</Link>
//                                             <Link to="/angular" onClick={closeMenu}><FaAngular className="icon" /> Hire AngularJS Developer</Link>
//                                             <Link to="/next" onClick={closeMenu}><TbBrandNextjs className="icon" /> Hire NextJS Developer</Link>
//                                             <Link to="/node" onClick={closeMenu}><FaNodeJs className="icon" /> Hire NodeJS Developer</Link>
//                                         </div>
//                                     </div>
//                                     <div className="dropdown-section">
//                                         <h1>Mobile App Developer</h1>
//                                         <div>
//                                             <Link to="/flutter" onClick={closeMenu}><RiFlutterLine className="icon" /> Hire Flutter Developer</Link>
//                                             <Link to="/reactnative" onClick={closeMenu}><FaReact className="icon" /> Hire React Native Developer</Link>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </li>
//                         <li><Link to="/" onClick={closeMenu}>Technology</Link></li>
//                         <li><Link to="/" onClick={closeMenu}>Industry</Link></li>
//                     </ul>

//                     <div className="quote-button">
//                         <button className='nav-btn'>GET QUOTE</button>
//                     </div>
//                 </nav>
//             </div>
//             <Outlet />
//         </>
//     );
// };

// export default NavbarSection;



import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaAngular, FaNodeJs, FaReact } from "react-icons/fa";
import { RiFlutterLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link, Outlet } from "react-router-dom";

import MMLogo from "../../images/MindsMaven Logo.png";
import "./navbarSection.css";

const NavbarSection = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        if (!menuOpen) {
            setActiveDropdown(null);
        }
    };

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const closeMenu = () => {
        setMenuOpen(false);
        setActiveDropdown(null);
    };

    return (
        <>
            <div className='ns-body'>
                <nav className="navbar">
                    <div className="logo">
                        <Link to="/">
                            <img src={MMLogo} alt="MindsMaven Logo" />
                        </Link>
                    </div>
                    <div className="menu-icon" onClick={toggleMenu}>
                        {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </div>

                    <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                        <li className={`dropdown ${activeDropdown === 'about' ? 'open' : ''}`} onClick={() => toggleDropdown('about')}>
                            <a>About us <TiArrowSortedDown className="sideIcon" /></a>
                            <div className={`dropdown-content ${activeDropdown === 'about' ? 'ab-show' : ''}`}>
                                <div className="dropdown-column">
                                    <Link to="/" onClick={closeMenu}>About Us</Link>
                                    <Link to="/" onClick={closeMenu}>Careers</Link>
                                    <Link to="/" onClick={closeMenu}>Life@MindsMaven IT Solutions</Link>
                                </div>
                            </div>
                        </li>
                        <li className={`dropdown ${activeDropdown === 'hire' ? 'open' : ''}`} onClick={() => toggleDropdown('hire')}>
                            <a>Hire Developers <TiArrowSortedDown className="sideIcon" /></a>
                            <div className={`dropdown-content ${activeDropdown === 'hire' ? 'hi-show' : ''}`}>
                                <div className="dropdown-wrapper">
                                    <div className="dropdown-section">
                                        <h1>Web Developer</h1>
                                        <div>
                                            <Link to="/react" onClick={closeMenu}><FaReact className="icon" /> Hire ReactJS Developer</Link>
                                            <Link to="/angular" onClick={closeMenu}><FaAngular className="icon" /> Hire AngularJS Developer</Link>
                                            <Link to="/next" onClick={closeMenu}><TbBrandNextjs className="icon" /> Hire NextJS Developer</Link>
                                            <Link to="/node" onClick={closeMenu}><FaNodeJs className="icon" /> Hire NodeJS Developer</Link>
                                        </div>
                                    </div>
                                    <div className="dropdown-section">
                                        <h1>Mobile App Developer</h1>
                                        <div>
                                            <Link to="/flutter" onClick={closeMenu}><RiFlutterLine className="icon" /> Hire Flutter Developer</Link>
                                            <Link to="/reactnative" onClick={closeMenu}><FaReact className="icon" /> Hire React Native Developer</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><Link to="/" onClick={closeMenu}>Technology</Link></li>
                        <li><Link to="/" onClick={closeMenu}>Industry</Link></li>
                    </ul>

                    <div className="quote-button">
                        <button className='nav-btn'>GET QUOTE</button>
                    </div>
                </nav>
            </div>
            <Outlet />
        </>
    );
};

export default NavbarSection;
