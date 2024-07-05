import React from 'react'
import "./reactJsSecond.css"
import "./reactJsSecondRecord"
import ReactJsSecondRecord from './reactJsSecondRecord'
import ReactJsSecondCard from "./reactJsSecondCard"

const ReactJsSecond = (props) => {
    return (
        <div className='rjs-body'>
            <div className='rjs-main'>
                <div className='rjs-top'>
                    <h6 className='rjst-h6'>02. EXPERTISE AND SERVICES PROVIDED BY OUR REACTJS</h6>
                    <h1><span>Services</span> Our ReactJS Developers Can Offer</h1>
                    <p>Hire React Js developers from us who have used their experience to provide different types of ReactJs
                        development services to ensure that you can have highly scalable web and mobile applications.</p>
                </div>
                <div className='rjs-bottom'>
                    {ReactJsSecondRecord.map((reactJsSecondCard, index)=>(
                        <ReactJsSecondCard key={index} imageUrl={reactJsSecondCard.imageUrl} title={reactJsSecondCard.title} description={reactJsSecondCard.description} />
                    ))}
                </div>
                <div className='rjs-btn'>
                    <button>Get your dedicated developers team now</button>
                </div>
            </div>
        </div>
    )
}

export default ReactJsSecond;
