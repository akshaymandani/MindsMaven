import React from 'react'
import "./angularJsThird.css"
// import { AiOutlineCheck } from "react-icons/ai";
import timeImage from "../../images/time.svg"
import ratingImage from "../../images/rating.svg"
import hiringImage from "../../images/hiring.svg"

const AngularJSThird = () => {
    return (
        <div className='ajt-body'>
            <div className='ajt-main'>
                <div className='ajt-top'>
                    <h6 className='ajtt-h6'>03. PRICING TABLE</h6>
                    <h1>Hire Top 1% <span>AngularJS Developers</span> according to your needs</h1>
                    <p>Collaborate with our experienced AngularJS developers for your next project for better quality and efficiency.</p>
                </div>
                <div className='ajt-bottom'>
                    <div className='ajtb-left'>
                        <div>
                            <img src={timeImage} alt="timeImage" />
                            <p>Hourly Hiring</p>
                        </div>
                        <hr />
                        <div>
                            <img src={ratingImage} alt="ratingImage" />
                            <p>150+ Experts</p>
                        </div>
                        <hr />
                        <div>
                            <img src={hiringImage} alt="hiringImage" />
                            <p>Full-Time Hiring</p>
                        </div>
                    </div>
                    <div className='ajtb-center'>
                        <h3>MONTHLY (USD)</h3>
                        <h1>$2400</h1>
                        <div>
                            <ul>
                                <li>Suitable for long-term engagement</li>
                                <li>Dedicated team of developers, <br />Scrum Master, QAs, and architects</li>
                                <li>160 hours per month</li>
                            </ul>
                        </div>
                    </div>
                    <div className='ajtb-right'>
                        <h3>HOURLY (USD)</h3>
                        <h1>$20</h1>
                        <div>
                            <ul>
                                <li>Dedicated developer</li>
                                <li>Pay as you go</li>
                                <li>Suitable for short-term engagement</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='ajt-btn'>
                    <button>Schedule a Developer Interview</button>
                </div>
            </div>
        </div>
    )
}

export default AngularJSThird;
