import React from 'react'
import "./reactNative.css"
import { Link } from "react-router-dom"

const ReactNativeMainPage = () => {
    return (
        <div className='ReactNative'>
            {/* We are updating this service. */}
            {/* <h1 className='ReactNative-h1'>Page Under Construction</h1> */}
            <h1 className='ReactNative-h1'>We are updating this page!</h1>
            {/* <p className='ReactNative-p'>Thank you for visiting our website! We are currently updating this page to enhance your experience. <br />Please check back soon; it will be available shortly. We appreciate your patience!</p> */}
            {/* <p className='ReactNative-p'>Thank you for visiting our website! Our team is currently working on improving this service.
                <br />Please check back soon; it will be available shortly. We appreciate your patience!</p> */}
            <p className='ReactNative-p'>Our team is currently working on improving this service. Please check back soon; it will be available shortly. Thank you for your patience!</p>
            <Link to='/'><button className='ReactNative-btn'>Home Page</button></Link>
        </div>
    )
}

export default ReactNativeMainPage;
