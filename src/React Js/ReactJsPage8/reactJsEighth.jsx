import React from 'react'
import "./reactJsEighth.css"
import reactJsEighthData from './reactJsEighthData';
import WhyHireDeveloper from '../../commonComponent/cc3/whyHireDeveloper';

const ReactJsEighth = () => {
    return (
        <div className='rje-body'>
            <div className='rje-main'>
                <div className='rje-title'>
                    <h6>08. DEVELOPERS TO SUIT YOUR BUSINESS</h6>
                    <h1>Why should you Hire ReactJS Developers from <span>MindsMaven?</span></h1>
                    <p>You should hire ReactJs developers from us because they are highly skilled in technologies and tools like ReactJs, JSX, Routing, Slack, Bootstrap, and many more to build dynamic and interactive user interfaces for web applications that provide amazing performance. MindsMaven IT Solution is a top <span>ReactJS Development Company</span> that believes in delivering high-quality code by following the best coding standards and staying up-to-date with the latest advancements in ReactJs technology.</p>
                    <button>Convert your idea into reality</button>
                </div>
                <div className='rje-content'>
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

export default ReactJsEighth;
