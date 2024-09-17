import React from 'react'
import "./reactJsThird.css"
// import { AiOutlineCheck } from "react-icons/ai";
import timeImage from "../../images/time.svg"
import ratingImage from "../../images/rating.svg"
import hiringImage from "../../images/hiring.svg"

const ReactJsThird = () => {
  return (
    <div className='rjt-body'>
      <div className='rjt-main'>
        <div className='rjt-top'>
            <h6 className='rjt-h6'>03. PRICING TABLE</h6>
            <h1>Hire Qualified <span>ReactJS Developers</span> For Your Project</h1>
            <p>Collaborate with our experienced ReactJs developers for your next project for better quality and efficiency.</p>
        </div>
        <div className='rjt-bottom'>
            <div className='rjtb-left'>
                <div>
                    <img src={timeImage} alt="timeImage" />
                    <p>Hourly Hiring</p>
                </div>
                <hr />
                <div>
                    <img src={ratingImage} alt="ratingImage" />
                    <p>150+ Experts</p>
                </div>
                <hr />
                <div>
                    <img src={hiringImage} alt="hiringImage" />
                    <p>Full-Time Hiring</p>
                </div>
            </div>
            <div className='rjtb-center'>
                <h3>MONTHLY (USD)</h3>
                <h1>$2400</h1>
                <div>
                    <ul>
                        <li>Suitable for long-term engagement</li>
                        <li>Dedicated team of developers, <br/>Scrum Master, QAs, and architects</li>
                        <li>160 hours per month</li>
                    </ul>
                </div>
            </div>
            <div className='rjtb-right'>
                <h3>HOURLY (USD)</h3>
                <h1>$20</h1>
                <div>
                    <ul>
                        <li>Dedicated developer</li>
                        <li>Pay as you go</li>
                        <li>Suitable for short-term engagement</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='rjt-btn'>
            <button>Schedule a Developer Interview</button>
        </div>
      </div>
    </div>
  )
}

export default ReactJsThird;
