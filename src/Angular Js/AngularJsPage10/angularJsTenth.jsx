import React from 'react'
import "./angularJsTenth.css"
// import { ReactJsTenthCardBottom, ReactJsTenthCardTop } from './reactJsTenthCard';
import ReactJsTenthCard from './angularJsTenthCard';
// import {ReactJsTenthData1,ReactJsTenthData2} from './reactJsTenthData';
import ReactJsTenthData from './angularJsTenthData';

const ReactJsTenth = () => {
    return (
        <div className='ajte-body'>
            <div className='ajte-main'>
                <div className='ajte-title'>
                    {/* <h6>10. FIELDS OF EXPERTISE</h6> */}
                    <h6 className='ajte-h6'>08. FIELDS OF EXPERTISE</h6>
                    <h1><span>Industry</span> We Serve</h1>
                    <p>Here you can explore the industries for which we provide best-in-class ReactJs development services.</p>
                </div>
                <div className='ajte-content'>
                    {/* <div className='ajtec-top'>
                    {ReactJsTenthData1.map((reactJsTenthCard, index) => (
                        <ReactJsTenthCardTop key={index} title={reactJsTenthCard.title} imageUrl={reactJsTenthCard.imageUrl} contentLink={reactJsTenthCard.contentLink} />
                    ))}
                    </div>
                    <div className='ajtec-bottom'>
                    {ReactJsTenthData2.map((reactJsTenthCard, index) => (
                        <ReactJsTenthCardBottom key={index} title={reactJsTenthCard.title} imageUrl={reactJsTenthCard.imageUrl} contentLink={reactJsTenthCard.contentLink} />
                    ))}
                    </div> */}
                    <div className='ajtec'>
                        {ReactJsTenthData.map((reactJsTenthCard, index) => (
                            <ReactJsTenthCard key={index} title={reactJsTenthCard.title} imageUrl={reactJsTenthCard.imageUrl} contentLink={reactJsTenthCard.contentLink} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReactJsTenth;
