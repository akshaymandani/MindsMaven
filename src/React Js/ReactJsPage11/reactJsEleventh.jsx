import React, { useState } from 'react'
import "./reactJsEleventh.css"
import ReactJsEleventhData from './reactJsEleventhData';
import ReactJsEleventhCard from './reactJsEleventhCard';

const ReactJsEleventh = () => {

  const [revealedIndex, setRevealedIndex] = useState(-1);

  const toggleReveal = (index) => {
    setRevealedIndex(revealedIndex === index ? -1 : index);
  };

  return (
    <div className='rjel-body'>
      <div className='rjel-main'>
        <div className='rjel-title'>
          {/* <h6>11. FIELDS OF EXPERTISE</h6> */}
          <h6 className='rjel-h6'>09. FIELDS OF EXPERTISE</h6>
          <h1><span>Frequently</span> Asked Questions</h1>
        </div>
        <div className='rjel-content'>
          {ReactJsEleventhData.map((faq, index) => (
            <ReactJsEleventhCard
              key={index}
              que={faq.que}
              ans={faq.ans}
              isRevealed={revealedIndex === index}
              toggleReveal={() => toggleReveal(index)}
            />
          ))}
        </div>
        {/* <hr /> */}
      </div>
    </div>
  )
}

export default ReactJsEleventh;
