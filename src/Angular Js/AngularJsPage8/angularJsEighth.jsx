import React from 'react'
import "./angularJsEighth.css"
import reactJsEighthData from './angularJsEighthData';
import WhyHireDeveloper from '../../commonComponent/cc3/whyHireDeveloper';

const AngularJsEighth = () => {
    return (
        <div className='aje-body'>
            <div className='aje-main'>
                <div className='aje-title'>
                    {/* <h6>08. DEVELOPERS TO SUIT YOUR BUSINESS</h6> */}
                    <h6 className='aje-h6'>06. DEVELOPERS TO SUIT YOUR BUSINESS</h6>
                    <h1>Why should you Hire AngularJS Developers from <span>MindsMaven?</span></h1>
                    {/* <p>When you hire AngularJS developers from Tagline, you get the best talents as well as their expert development techniques. Our highly experienced staff have the skill of developing top-notch web-based solutions with world-class quality packed with numerous features. We are proud of our services, which provide the organisation with their required solutions to manage complicated business needs for incredibly substantial generation of revenue.</p> */}
                    <p>When you hire AngularJS developers from MindsMaven, you get the best talents as well as their expert development techniques. Our highly experienced staff have the skill of developing top-notch web-based solutions with world-class quality packed with numerous features. We are proud of our services, which provide the organisation with their required solutions to manage complicated business needs for incredibly substantial generation of revenue.</p>
                    <button>Convert your idea into reality</button>
                </div>
                <div className='aje-content'>
                    {reactJsEighthData.map((card, index) => (
                        <WhyHireDeveloper
                            key={index}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AngularJsEighth;
