import React from 'react'
import "./careerHeader.css"
import { Link } from "react-router-dom"
import aboutWhy from "../../images/about-why.webp"
import teamIcon1 from "../../images/team-icon-1.png"
import teams from "../../images/teams.png"
import setting from "../../images/setting.png"
import starDynamic from "../../images/star-dynamic.png"

const CareerHeader = () => {
    return (
        <div className='ch-body'>
            <div className="ch-main">
                <div className="ch-title">
                    <div className="cht-main">
                        <div className="cht-content">
                            <h1 className='cht-h1'>Why Minds Maven?</h1>
                            <span className="cht-span"></span>
                            <p className='cht-p'>We committed our extension with each employer's broadening.</p>
                            <Link to="/" className='cht-link'>
                                <div className='chtl-btn'>
                                    Apply Now
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="ch-content">
                    <div className="chc-left">
                        <div className="chcl-left">
                            <div className="chcl-img">
                                <img src={aboutWhy} alt="about-why" className='chcli-img' />
                                <div className="chcli-top">
                                    <img src={teamIcon1} alt="team icon" className='chclit-img' />
                                    <p className='chclit-p'>Team of 150+ IT Professionals</p>
                                    <div className="chclit-div">
                                        <img src={teams} alt="teams" className='chclitd-img' />
                                        <p className='chclitd-p'>150+</p>
                                    </div>
                                </div>
                                <div className="chcli-center">
                                    <img src={setting} alt="" className='chclic-img' />
                                    <p className='chclic-p'>Working On 8 Technology</p>
                                </div>
                                <div className="chcli-bottom">
                                    <img src={starDynamic} alt="" className='chclib-img' />
                                    <p className='chclib-p'>Freindly Culture</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chc-right">
                        <div className="chcr-title">
                            <h2 className="chcr-h2">
                                Join <br /><span className='chcr-span'>Our Team</span>
                            </h2>
                            {/* <a href="#contact-with-us" className="theme-btn">Apply Now</a> */}
                            <Link to="/" className='chcr-link'>
                                <div className='chcrl-btn'>
                                    Apply Now
                                </div>
                            </Link>
                        </div>
                        <div className="chcr-content">
                            <p className='chcrc-p'>Minds Maven is not just about improving the client’s products. It is also about
                                enhancing its
                                fresher's skills and help them in
                                contributing to the IT society. We provide a significant environment to bring out the best
                                from the
                                amateur programmers by providing
                                them with access to experienced programmers and training them with the latest trending
                                technologies. We
                                encourage you to think outside
                                the box and help you build confidence in implementing those genius ideas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareerHeader;
