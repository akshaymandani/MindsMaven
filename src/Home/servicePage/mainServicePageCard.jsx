import React from 'react'

const MainServicePageCard = (props) => {
  return (
    <div className='msp-div msp-div2'>
      <div className='mspc-top'>
        <img src={props.imageUrl} alt={props.title} />
        <h6>{props.title}</h6>
      </div>
      <div className='mspc-des'>
        <p>{props.description}</p>
      </div>
      <div className='mspc-btn'>
        <a href={props.pageUrl}>Learn More&nbsp;→</a>
      </div>
    </div>
  )
}

export default MainServicePageCard;
