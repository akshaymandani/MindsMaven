import React from 'react'
import "./mainExperianceSection.css"
import { Link } from 'react-router-dom'
import contactWoman from "../../images/contact-woman.webp"
import elementWoman from "../../images/element-woman.webp"
import experiencedProfessionals from "../../images/experienced-professionals.webp"
import experiancedProjects from "../../images/experianced-projects.webp"
import experiancedFreelancing from "../../images/experianced-freelancing.webp"
import experiancedYears from "../../images/experianced-years.webp"
import experianceElement1 from "../../images/experiance-element-1.webp"
import experianceElement2 from "../../images/experiance-element-2.png"
import experianceElement3 from "../../images/experiance-element-3.png"
import experianceElement4 from "../../images/experiance-element-4.png"

const MainExperianceSection = () => {
    return (
        <div className='mes-body'>
            <div className='mes-main'>
                <div className='mes-content'>
                    <div className='mesc-left'>
                        <h4 className='mescl-h4'>We have the experience</h4>
                        {/* <p className='mescl-p'>We are experienced to make your dream come true, and these stats speak for themselves: we have 350+ clients worldwide in only five years and serve 45+ countries. We have worked on over 650+ projects, all of which have been completed on time and with 100% client satisfaction.</p> */}
                        <p className='mescl-p'>We are experienced to make your dream come true, and these stats speak for themselves: we have 25+ clients worldwide in only one year and serve 15+ countries. We have worked on over 15+ projects, all of which have been completed on time and with 100% client satisfaction.</p>
                        <Link to="/" className='mescl-link'>Contact us</Link>
                    </div>
                    <div className='mesc-center'>
                        <img src={contactWoman} alt="" className='mescc-img' />
                        <img src={elementWoman} alt="" className='mescc-img1' />
                    </div>
                    <div className='mesc-right'>
                        <ul className='mescr-ul'>
                            <li className='mescr-li'>
                                <div className='mescrl-div'>
                                    <img src={experiencedProfessionals} alt="" className='mescrld-img' />
                                    <p className='mescrld-p'>15+</p>
                                    <p className='mescrld-p1'>Professional</p>
                                </div>
                            </li>
                            <li className='mescr-li'>
                                <div className='mescrl-div'>
                                    <img src={experiancedProjects} alt="" className='mescrld-img' />
                                    <p className='mescrld-p'>15+</p>
                                    <p className='mescrld-p1'>Completed Projects</p>
                                </div>
                            </li>
                            <li className='mescr-li'>
                                <div className='mescrl-div'>
                                    <img src={experiancedFreelancing} alt="" className='mescrld-img' />
                                    <p className='mescrld-p'>15+</p>
                                    <p className='mescrld-p1'>Countries Served</p>
                                </div>
                            </li>
                            <li className='mescr-li'>
                                <div className='mescrl-div'>
                                    <img src={experiancedYears} alt="" className='mescrld-img' />
                                    <p className='mescrld-p'>1+</p>
                                    <p className='mescrld-p1'>Years of experience</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <img src={experianceElement1} alt="" className='mes-img1' />
            <img src={experianceElement2} alt="" className='mes-img2' />
            <img src={experianceElement3} alt="" className='mes-img3' />
            <img src={experianceElement4} alt="" className='mes-img4' />
        </div>
    )
}

export default MainExperianceSection;
