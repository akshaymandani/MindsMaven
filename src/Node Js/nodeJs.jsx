import React from 'react'
import "./nodeJs.css"
import { Link } from "react-router-dom"

const NodeJsMainPage = () => {
    return (
        <div className='NodeJs'>
            {/* We are updating this service. */}
            {/* <h1 className='NodeJs-h1'>Page Under Construction</h1> */}
            <h1 className='NodeJs-h1'>We are updating this page!</h1>
            {/* <p className='NodeJs-p'>Thank you for visiting our website! We are currently updating this page to enhance your experience. <br />Please check back soon; it will be available shortly. We appreciate your patience!</p> */}
            <p className='NodeJs-p'>Thank you for visiting our website! Our team is currently working on improving this service.
                <br />Please check back soon; it will be available shortly. We appreciate your patience!</p>
            <Link to='/'><button className='NodeJs-btn'>Home Page</button></Link>
        </div>
    )
}

export default NodeJsMainPage;
