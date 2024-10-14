import React from 'react'
import "./careerCurrentOpening.css"
import CareerDeveloperOpening from './Developer/careerDeveloperOpening';

const CareerCurrentOpening = () => {
    return (
        <div className='cco-body'>
            <div className='cco-main'>
                <div className='cco-top'>
                    <div className='ccot-main'>
                        <div className='ccot-content'>
                            <h3 className='ccotc-h3'>Current Openings</h3>
                            <div className='ccotc-headline'></div>
                            <p className='ccotc-p'>What's your expertise? See where do you fit in.</p>
                        </div>
                    </div>
                </div>
                <div className='cco-bottom'>
                    <div className='ccob-main'>
                        <div className='ccob-submain'>
                            <div className='ccob-content'>
                                {/* <h3></h3> */}
                                <CareerDeveloperOpening />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareerCurrentOpening;
