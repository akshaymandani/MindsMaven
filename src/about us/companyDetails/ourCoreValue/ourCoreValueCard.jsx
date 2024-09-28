import React from 'react'
import "./ourCoreValueCard.css"
// import Logo from "../../../images/Black White Modern AI Company Logo.png"

const OurCoreValueCard = (props) => {
    return (
        <div className='ocvc-body'>
            <div className='ocvc-main'>
                <div className='ocvc-top'>
                    {/* <img src={Logo} alt="" /> */}
                    <img src={props.imageUrl} alt={props.title} />
                </div>
                <div className='ocvc-bottom'>
                    {/* <h4>Growth Mindset</h4> */}
                    <h4>{props.title}</h4>
                    {/* <p>We are a company with a growth mindset where we are willing to take risks to get success and we have the skills and abilities to face the challenges.</p> */}
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default OurCoreValueCard;
