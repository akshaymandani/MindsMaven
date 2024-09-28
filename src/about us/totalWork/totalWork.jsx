import React from 'react'
import "./totalWork.css"
import experiencedProfessionals from "../../images/experienced-professionals.webp"
import experiancedProjects from "../../images/experianced-projects.webp"
import experiancedFreelancing from "../../images/experianced-freelancing.webp"
import experiancedYears from "../../images/experianced-years.webp"

const TotalWork = () => {
    return (
        <div className='tw-body'>
            <div className='tw-main'>
                <div className='tw-left'>
                    <div className='twl-top'>
                        <div className='twlt-main'>
                            <h4>We have the experience</h4>
                        </div>
                        <p>We are experienced to make your dream come true, and these stats speak for themselves: we have 350+ clients worldwide in only five years and serve 45+ countries. We have worked on over 650+ projects, all of which have been completed on time and with 100% client satisfaction.</p>
                    </div>
                    <div className='twl-bottom'>
                        <div className='twlb-main'>
                            <h4>Successful campaigns</h4>
                        </div>
                        <p>We campaign team of synergy from individual and set up the business with change + positive progressive frame of mind in every aspect of work line. We satisfied our clients with this approach and gain unbelievable success within a short period of time.</p>
                    </div>
                </div>
                <div className='tw-right'>
                    <div className='twr-main'>
                        <div className='twr-div'>
                            <div className='twrd-div'>
                                <img className='Professionals-img' src={experiencedProfessionals} alt="" />
                                <h2>15+</h2>
                                <h3>Professionals</h3>
                            </div>
                        </div>
                        <div className='twr-div'>
                            <div className='twrd-div'>
                                <img className='Projects-img' src={experiancedProjects} alt="" />
                                <h2>15+</h2>
                                <h3>Completed Projects</h3>
                            </div>
                        </div>
                        <div className='twr-div'>
                            <div className='twrd-div'>
                                <img className='Countries-img' src={experiancedFreelancing} alt="" />
                                <h2>5+</h2>
                                <h3>Countries Served</h3>
                            </div>
                        </div>
                        <div className='twr-div'>
                            <div className='twrd-div'>
                                <img className='YearsOfExperience-img' src={experiancedYears} alt="" />
                                <h2>2+</h2>
                                <h3>Years Of Experience</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotalWork;
