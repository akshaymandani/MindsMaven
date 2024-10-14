import React, { useState } from 'react'
import "./careerDeveloperOpening.css"
import LocationCard from "../../../images/Location-card.svg"
import timeCard from "../../../images/time-card.svg"
import userCard from "../../../images/user-card.svg"
import { Link } from "react-router-dom"

const CareerDeveloperOpeningCard = ({ job }) => {
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);
    const toggleDetails = () => {
        setIsDetailsVisible(!isDetailsVisible);
    }
    return (
        <div className='cdoc-main'>
            <div className='cdocm-top'>
                {/* <h4 className='cdocmt-h4'>ReactJS</h4> */}
                <h4 className='cdocmt-h4'>{job.title}</h4>
                <div className='cdocmt-main'>
                    <div className='cdocmtm-left'>
                        <img src={LocationCard} alt="" className='cdocmtml-img' />
                        <div className='cdocmtml-div'>
                            <p className='cdocmtmld-p'>Location</p>
                            {/* <h6 className='cdocmtmld-h6'>Onsite / Surat</h6> */}
                            <h6 className='cdocmtmld-h6'>{job.location}</h6>
                        </div>
                    </div>
                    <div className='cdocmtm-center'>
                        <img src={timeCard} alt="" className='cdocmtmc-img' />
                        <div className='cdocmtmc-div'>
                            <p className='cdocmtmcd-p'>Experience</p>
                            {/* <h6 className='cdocmtmcd-h6'>2+ Years</h6> */}
                            <h6 className='cdocmtmcd-h6'>{job.experience}</h6>
                        </div>
                    </div>
                    <div className='cdocmtm-right'>
                        <img src={userCard} alt="" className='cdocmtmr-img' />
                        <div className='cdocmtmr-div'>
                            <p className='cdocmtmrd-p'>Position</p>
                            {/* <h6 className='cdocmtmrd-h6'>3</h6> */}
                            <h6 className='cdocmtmrd-h6'>{job.position}</h6>
                        </div>
                    </div>
                    {/* <button className='cdomtm-btn'>View Details</button> */}
                    <button className='cdomtm-btn' onClick={toggleDetails}>
                        {isDetailsVisible ? 'Hide Details' : 'View Details'}
                    </button>
                </div>
            </div>
            {isDetailsVisible && (
                <div className='cdocm-bottom'>
                    <div className='cdocmb-body'>
                        <div className='cdocmb-main'>
                            {/* <p className='cdocmbm-p'>In this role, the React developer will be responsible for developing and implementing highly-responsive user interface components for web and mobile applications using React.</p> */}
                            <p className='cdocmbm-p'>{job.description}</p>
                            {/* <p className='cdocmbm-p1'>In order to fulfill this role, the candidate must also be an open-minded and creative team player. Good time management and project management skills are a must.</p> */}
                            {/* <p className='cdocmbm-p1'>{job.description1}</p> */}
                            {job.description1 && <p className='cdocmbm-p1'>{job.description1}</p>}
                            {/* <h4 className='cdocmbm-h4'>Responsibilities and Duties :</h4> */}
                            {/* <h4 className='cdocmbm-h4'>{job.title1}</h4> */}
                            {job.title1 && <h4 className='cdocmbm-h4'>{job.title1}</h4>}
                            <div className='cdocmbm-top'>
                                <div className='cdocmbmt-main'>
                                    <ul className='cdocmbmtm-ul'>
                                        {/* <li className='cdocmbmtm-li'>Extensive knowledge of ReactJS, JSX, Babel, data structures, and algorithms.</li>
                                        <li className='cdocmbmtm-li'>Strong proficiency in JavaScript, HTML, and CSS.</li>
                                        <li className='cdocmbmtm-li'>Build reusable components and front-end libraries.</li>
                                        <li className='cdocmbmtm-li'>Test and troubleshoot interface software.</li>
                                        <li className='cdocmbmtm-li'>Knowledge across a vast array of web-capable devices and browsers.</li>
                                        <li className='cdocmbmtm-li'>Communication and Collaboration.</li>
                                        <li className='cdocmbmtm-li'>Performance Optimization.</li> */}
                                        {job.li.map((item) => (
                                            <li key={item.id} className='cdocmbmtm-li'>
                                                {item.lDescription}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className='cdocmbm-bottom'>
                                <Link to="/" className='cdocmbmb-link'>Apply Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CareerDeveloperOpeningCard;
