import React from 'react'
import "./stepsToHire.css"
import correctImage from "../../images/correct.png"

const StepsToHire = (props) => {
  return (
    <div className='sth-main'>
      <div className='sth-top'>
        <h2>01</h2>
        <img src={correctImage} alt="" />
      </div>
      <div className='sth-bottom'>
        <h3>Xyzzzzzzzzzzzzz</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, consequatur maiores. Ipsum natus nemo non perspiciatis, facere deserunt asperiores consectetur.</p>
      </div>
    </div>
  )
}

export default StepsToHire;
