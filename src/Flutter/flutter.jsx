import React from 'react'
import "./flutter.css"
import { Link } from "react-router-dom"

const FlutterMainPage = () => {
    return (
        <div className='Flutter'>
            {/* We are updating this service. */}
            {/* <h1 className='Flutter-h1'>Page Under Construction</h1> */}
            <h1 className='Flutter-h1'>We are updating this page!</h1>
            {/* <p className='Flutter-p'>Thank you for visiting our website! We are currently updating this page to enhance your experience. <br />Please check back soon; it will be available shortly. We appreciate your patience!</p> */}
            {/* <p className='Flutter-p'>Thank you for visiting our website! Our team is currently working on improving this service.
                <br />Please check back soon; it will be available shortly. We appreciate your patience!</p> */}
            <p className='Flutter-p'>Our team is currently working on improving this service. Please check back soon; it will be available shortly. Thank you for your patience!</p>
            <Link to='/'><button className='Flutter-btn'>Home Page</button></Link>
        </div>
    )
}

export default FlutterMainPage;
