import React from 'react'
import "./reactJsSecondCard.css"

const ReactJsSecondCard = (props) => {
  return (
    // <div className='rjsc-card'>
    //   <div className='rjsc-img'>
    //     <img src={props.imageUrl} alt={props.title} />
    //   </div>
    //   <h3>{props.title}</h3>
    //   <p>{props.description}</p>
    // </div>
    <div className='rjsc-card'>
      <div className='rjscc-body'>
        <div className='rjscc-main'>
          <div className='rjscc-submain'>
            <div className='rjscc-content'>
              <div className='rjscc-img'>
                <img src={props.imageUrl} alt={props.title} className='rjscci-img' />
              </div>
              <h3 className='rjscc-h3'>{props.title}</h3>
              <p className='rjscc-p'>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReactJsSecondCard;
