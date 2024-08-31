import React from 'react'
import "./angularJsSixth.css"
import AngularJsSixthData from './angularJsSixthData';
import AngularJsSixthCard from './angularJsSixthCard';

const AngularJsSixth = () => {
  return (
    <div className='ajsi-body'>
      <div className='ajsi-main'>
        <div className='ajsi-title'>
          {/* <h6>06. SIMPLIFIED: 3 STEPS TO HIRE ANGULARJS DEVELOPERS</h6> */}
          <h6>04. SIMPLIFIED: 3 STEPS TO HIRE ANGULARJS DEVELOPERS</h6>
          <h1>Hiring AngularJs Developers in <span>4 easy steps</span></h1>
          <p>Hire skilled AngularJS Developers with Tagline Infotech's in a simple 4-step process. Choose expertise, select the best fit, and onboard swiftly. Simplifying your recruitment journey.</p>
        </div>
        <div className='ajsi-content'>
          {AngularJsSixthData.map((angularJsSixthCard, index) => (
            <div>
              <AngularJsSixthCard key={index} id={angularJsSixthCard.id} title={angularJsSixthCard.title} content={angularJsSixthCard.content} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AngularJsSixth;
