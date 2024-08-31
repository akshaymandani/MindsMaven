import React from 'react'
import "./angularJsSecond.css"
import "./angularJsSecondRecord"
import AngularJsSecondRecord from './angularJsSecondRecord'
import AngularJsSecondCard from "./angularJsSecondCard"

const AngularJsSecond = (props) => {
    return (
        <div className='ajs-body'>
            <div className='ajs-main'>
                <div className='ajs-top'>
                    <h6 className='ajst-h6'>02. EXPERTISE AND SERVICES PROVIDED BY OUR ANGULARJS</h6>
                    <h1><span>Services</span> Our AngularJS Developers Can Offer</h1>
                    <p>Hire Angular Js developers from us who have used their experience to provide different types of AngularJs
                        development services to ensure that you can have highly scalable web and mobile applications.</p>
                </div>
                <div className='ajs-bottom'>
                    {AngularJsSecondRecord.map((angularJsSecondCard, index) => (
                        <AngularJsSecondCard key={index} imageUrl={angularJsSecondCard.imageUrl} title={angularJsSecondCard.title} description={angularJsSecondCard.description} />
                    ))}
                </div>
                <div className='ajs-btn'>
                    <button>Get your dedicated developers team now</button>
                </div>
            </div>
        </div>
    )
}

export default AngularJsSecond;
