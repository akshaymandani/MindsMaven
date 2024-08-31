import React from 'react'
import "./reactJsSixth.css"
import ReactJsSixthData from './reactJsSixthData';
import ReactJsSixthCard from './reactJsSixthCard';

const ReactJsSixth = () => {
  return (
    <div className='rjsi-body'>
      <div className='rjsi-main'>
        <div className='rjsi-title'>
          <h6>06. SIMPLIFIED: 3 STEPS TO HIRE REACTJS DEVELOPERS</h6>
          <h1>Hiring ReactJS Developers in <span>3 easy steps</span></h1>
          <p>Here you can see the 3 easy steps that you need to follow before hiring ReactJs developers who work dedicatedly on your project.</p>
        </div>
        <div className='rjsi-content'>
          {ReactJsSixthData.map((reactJsSixthCard, index) => (
            <div>
              <ReactJsSixthCard key={index} id={reactJsSixthCard.id} title={reactJsSixthCard.title} content={reactJsSixthCard.content} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ReactJsSixth;
