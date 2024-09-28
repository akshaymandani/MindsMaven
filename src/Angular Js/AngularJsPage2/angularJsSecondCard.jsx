import React from 'react'
import "./angularJsSecondCard.css"

const AngularJsSecondCard = (props) => {
  return (
    // <div className='ajsc-card'>
    //   <div className='ajsc-img'>
    //     <img src={props.imageUrl} alt={props.title} />
    //   </div>
    //   <h3>{props.title}</h3>
    //   <p>{props.description}</p>
    // </div>
    <div className='ajsc-card'>
      <div className='ajscc-body'>
        <div className='ajscc-main'>
          <div className='ajscc-submain'>
            <div className='ajscc-content'>
              <div className='ajscc-img'>
                <img src={props.imageUrl} alt={props.title} className='ajscci-img' />
              </div>
              <h3 className='ajscc-h3'>{props.title}</h3>
              <p className='ajscc-p'>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AngularJsSecondCard;
