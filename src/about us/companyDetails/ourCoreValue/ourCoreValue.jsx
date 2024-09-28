import React from 'react'
import "./ourCoreValue.css"
import OurCoreValueCard from './ourCoreValueCard';
import OurCoreValueRecord from './ourCoreValueRecord';

const OurCoreValue = () => {
    return (
        <div className='ocv-body'>
            <div className='ocvb-leftline'></div>
            <div className='ocvb-rightline'></div>
            <div className='ocv-top'>
                <div className='ocvt-body'>
                    <div className='ocvt-main'>
                        <h3>Our Core Value</h3>
                        <span className='coreValue-span'></span>
                    </div>
                </div>
            </div>
            <div className='ocv-bottom'>
                <div className='ocvb-main'>
                    {/* <OurCoreValueCard /> */}
                    {OurCoreValueRecord.map((ourCoreValueCard, index) => (
                        <OurCoreValueCard key={index} imageUrl={ourCoreValueCard.imageUrl} title={ourCoreValueCard.title} description={ourCoreValueCard.description} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurCoreValue;
