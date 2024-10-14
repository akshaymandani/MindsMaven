import React from 'react'
import "./careerApplyPage.css"
import { Link } from "react-router-dom"
import oneClick1 from "../../images/one-click-1.svg"
import oneClick2 from "../../images/one-click-2.svg"
import oneClick3 from "../../images/one-click-3.svg"

const CareerApplyPage = () => {
    return (
        <div className='cap-body'>
            <div className='cap-main'>
                <div className='cap-content'>
                    <div className='capc-top'>
                        <div className='capct-main'>
                            <div className='capct-left'>
                                <h2>Your are one click Away</h2>
                                <h6>Let’s get apply Online</h6>
                            </div>
                            <div className='capct-right'>
                                <Link to="/" className='capctr-Link'>Apply Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className='capc-bottom'>
                        <img src={oneClick1} alt="" className='capcb-img' />
                        <img src={oneClick2} alt="" className='capcb-img1' />
                        <img src={oneClick3} alt="" className='capcb-img2' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareerApplyPage;
