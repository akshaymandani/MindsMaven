import React, { useState } from 'react'
import "./angularJsEleventh.css"
import ReactJsEleventhData from './angularJsEleventhData';
import ReactJsEleventhCard from './angularJsEleventhCard';

const ReactJsEleventh = () => {

  const [revealedIndex, setRevealedIndex] = useState(-1);

  const toggleReveal = (index) => {
    setRevealedIndex(revealedIndex === index ? -1 : index);
  };

  return (
    <div className='ajel-body'>
      <div className='ajel-main'>
        <div className='ajel-title'>
          {/* <h6>11. FIELDS OF EXPERTISE</h6> */}
          <h6 className='ajel-h6'>09. FIELDS OF EXPERTISE</h6>
          <h1><span>Frequently</span> Asked Questions</h1>
        </div>
        <div className='ajel-content'>
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
        <hr />
      </div>
    </div>
  )
}

export default ReactJsEleventh;
