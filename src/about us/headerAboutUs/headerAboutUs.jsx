import React from 'react'
import "./headerAboutUs.css"
import experianceStarIcon from "../../images/experiance_star_icon.png"
import expertsIcon from "../../images/experts_icon.png"
import { Link } from "react-router-dom";
import curvedAerrow from "../../images/curved-aerrow.svg"

const HeaderAboutUs = () => {
    return (
        <div className='hau-body'>
            <div className='hau-main'>
                <div className='hau-submain'>
                    <div className='hau-content'>
                        <div className='hauc-left'>
                            <img src={experianceStarIcon} alt="" />
                            <h2>6 Years of experience</h2>
                        </div>
                        <div className='hauc-center'>
                            <div className='haucc-main'>
                                <h1>We Are MindsMaven IT Solutions</h1>
                                <p>Since 2023, our experienced team of developers are helping businesses across all industries. At MindsMaven IT Solutions we have a team of more than 15 people who are ready to deal with any challenges. We provide flexible hiring models and have been delivering innovative solutions to transform your ideas into reality.</p>
                                <div className='haucc-btn'>
                                    <img src={curvedAerrow} alt="" />
                                    <Link to="/" className='haucc-subbtn'>Take me to home</Link>
                                </div>
                            </div>
                        </div>
                        <div className='hauc-right'>
                            <img src={expertsIcon} alt="" />
                            <h2>Experts</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderAboutUs;
