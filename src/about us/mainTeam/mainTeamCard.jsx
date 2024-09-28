import React from 'react'
import "./mainTeamCard.css"
// import Logo from "../../images/Black White Modern AI Company Logo.png"

const MainTeamCard = (props) => {
    return (
        <div className='mtc-body'>
            <div className='mtc-main'>
                <div className='mtc-content'>
                    {/* <img src={Logo} alt="" className='mtc-img' /> */}
                    <img src={props.imageUrl} alt={props.name} className='mtc-img' />
                    {/* <h4>Akshay Mandani</h4> */}
                    <h4>{props.name}</h4>
                    {/* <label>Chief Executive Officer</label> */}
                    <label>{props.role}</label>
                    {/* <p>With 8+ years of experience as a software engineer in the IT field, an Elite in Back-end development, DevOps, and Project & Team Management.</p> */}
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default MainTeamCard;
