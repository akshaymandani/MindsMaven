import React from 'react'
import "./reactJsNinth.css"
import ReactJsNinthData from './reactJsNinthData';
import ReactJsNinthCard from './reactJsNinthCard';

const ReactJsNinth = () => {
    return (
        <div className='rjn-body'>
            <div className='rjn-main'>
                <div className='rjn-title'>
                    <h6>09. BENEFITS</h6>
                    <h1>Benefits of <span>ReactJS Developers</span></h1>
                    <p>Here you can see some of the main benefits of hiring our ReactJs developers so that you can get different types of solutions that not only satisfy but surpass your expectations.</p>
                </div>
                <div className='rjn-content'>
                    {ReactJsNinthData.map((reactJsNinthCard, index) => (
                        <div>
                            <ReactJsNinthCard key={index} content={reactJsNinthCard.content} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ReactJsNinth;
