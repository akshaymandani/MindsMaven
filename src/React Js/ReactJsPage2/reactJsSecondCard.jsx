import React from 'react'
import "./reactJsSecondCard.css"

const ReactJsSecondCard = (props) => {
  return (
    <div className='rjsc-card'>
      <div className='rjsc-img'>
        <img src={props.imageUrl} alt={props.title} />
      </div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default ReactJsSecondCard;
