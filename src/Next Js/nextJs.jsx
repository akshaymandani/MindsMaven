import React from 'react'
import "./nextJs.css"
import { Link } from "react-router-dom"

const NextJsMainPage = () => {
    return (
        <div className='NextJs'>
            {/* We are updating this service. */}
            <h1 className='NextJs-h1'>Page Under Construction</h1>
            <p className='NextJs-p'>Thank you for visiting our website! We are currently updating this page to enhance your experience. <br />Please check back soon; it will be available shortly. We appreciate your patience!</p>
            <Link to='/'><button className='NextJs-btn'>Home Page</button></Link>
        </div>
    )
}

export default NextJsMainPage;
