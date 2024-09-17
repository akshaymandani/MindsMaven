import React from 'react'
import "./reactJsFifth.css"
// import WorkFlow from '../../commonComponent/cc1/workFlow'
import reactJsFifthData from './reactJsFifthData'
import WorkFlow1 from '../../commonComponent/cc1/workFlow1'
import whiteArrowImage from "../../images/white-arrow-img.svg"
import orangeArrowImage from "../../images/orange-arrow-img.svg"

const ReactJsFifth = () => {
    return (
        <div className='rjfi-body'>
            <div className='rjfi-main'>
                <div className='rjfi-title'>
                    {/* <h6>05. DEVELOPERS TO SUIT YOUR BUSINESS REQUIREMENTS</h6> */}
                    <h6 className='rjfi-h6'>04. DEVELOPERS TO SUIT YOUR BUSINESS REQUIREMENTS</h6>
                    <h1>Our ReactJS Development <span>Workflow</span></h1>
                    <p>Explore the structured ReactJs development workflow that we follow to build high-quality web applications.</p>
                </div>
                <div className='rjfi-content'>
                    {reactJsFifthData.map((card, index) => (
                        <WorkFlow1
                            key={index}
                            arrowImage={index % 2 === 0 ? whiteArrowImage : orangeArrowImage}
                            title={card.title}
                            imageUrl={card.imageUrl}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ReactJsFifth;
