import React from 'react'
import "./whyHireDeveloper.css"

const WhyHireDeveloper = (props) => {
    return (
        <div className='whd-body'>
            <div className='whd-main'>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default WhyHireDeveloper;
