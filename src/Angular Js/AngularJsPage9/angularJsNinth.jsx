import React from 'react'
import "./angularJsNinth.css"
import AngularJsNinthData from './angularJsNinthData';
import AngularJsNinthCard from './angularJsNinthCard';

const AngularJsNinth = () => {
    return (
        <div className='rjn-body'>
            <div className='rjn-main'>
                <div className='rjn-title'>
                    {/* <h6>09. BENEFITS</h6> */}
                    <h6>07. BENEFITS</h6>
                    <h1>Benefits of <span>AngularJS Developers</span></h1>
                    {/* <p>Here you can see some of the main benefits of hiring our AngularJs developers so that you can get different types of solutions that not only satisfy but surpass your expectations.</p> */}
                </div>
                <div className='rjn-content'>
                    {AngularJsNinthData.map((angularJsNinthCard, index) => (
                        <div>
                            <AngularJsNinthCard key={index} content={angularJsNinthCard.content} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AngularJsNinth;
