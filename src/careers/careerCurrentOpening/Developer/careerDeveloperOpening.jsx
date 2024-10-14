import React from 'react'
import "./careerDeveloperOpening.css"
import CareerDeveloperOpeningCard from './careerDeveloperOpeningCard';
// import LocationCard from "../../../images/Location-card.svg"
// import timeCard from "../../../images/time-card.svg"
// import userCard from "../../../images/user-card.svg"
// import CareerDeveloperOpeningCard from './careerDeveloperOpeningCard';
import CareerDeveloperOpeningRecord from './careerDeveloperOpeningRecord';

const CareerDeveloperOpening = () => {
    return (
        <div className='cdo-body'>
            <h3 className='cdo-h3'>Developer</h3>
            {/* <div className='cdo-main'>
                <div className='cdom-top'>
                    <h4 className='cdomt-h4'>ReactJS</h4>
                    <div className='cdomt-main'>
                        <div className='cdomtm-left'>
                            <img src={LocationCard} alt="" className='cdomtml-img' />
                            <div className='cdomtml-div'>
                                <p className='cdomtmld-p'>Location</p>
                                <h6 className='cdomtmld-h6'>Onsite / Surat</h6>
                            </div>
                        </div>
                        <div className='cdomtm-center'>
                            <img src={timeCard} alt="" className='cdomtmc-img' />
                            <div className='cdomtmc-div'>
                                <p className='cdomtmcd-p'>Experince</p>
                                <h6 className='cdomtmcd-h6'>2+ Years</h6>
                            </div>
                        </div>
                        <div className='cdomtm-right'>
                            <img src={userCard} alt="" className='cdomtmr-img' />
                            <div className='cdomtmr-div'>
                                <p className='cdomtmrd-p'>Position</p>
                                <h6 className='cdomtmrd-h6'>3</h6>
                            </div>
                        </div>
                        <button className='cdomtm-btn'>View Details</button>
                    </div>
                </div>
                <div></div>
            </div> */}
            {/* <CareerDeveloperOpeningCard /> */}
            {CareerDeveloperOpeningRecord.map((job) => (
                <CareerDeveloperOpeningCard key={job.id} job={job} />
            ))}
        </div>
    )
}

export default CareerDeveloperOpening;
