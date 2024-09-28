import React from 'react'
import "./ourStoryCard.css"
// import Logo from "../../../images/vision.svg"

const OurStoryCard = (props) => {
    return (
        <div className='osc-body'>
            <div className='osc-main'>
                <div className='osc-top'>
                    {/* <img src={Logo} alt="" /> */}
                    <img src={props.imageUrl} alt={props.name} />
                </div>
                <div className='osc-bottom'>
                    {/* <h4>Vision</h4> */}
                    <h4>{props.name}</h4>
                    {/* <p>Empowering businesses & individuals to achieve growth and prosperity in the Digital realm</p> */}
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default OurStoryCard;
