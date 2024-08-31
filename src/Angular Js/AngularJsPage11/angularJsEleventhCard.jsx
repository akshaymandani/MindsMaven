import React from 'react'
// import { AiOutlineDown } from "react-icons/ai";
// import { AiOutlineUp } from "react-icons/ai";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";

const ReactJsEleventhCard = (props) => {
    const { que, ans, isRevealed, toggleReveal } = props;

    return (
        <div className={`question ${isRevealed ? 'is-revealed' : ''}`}>
            <div onClick={toggleReveal} className='que-div'>
                <h3>{que}</h3>
                <button onClick={toggleReveal}>
                    {isRevealed ? <span style={{ fontWeight: "bold", fontSize: "20px" }}><GoChevronUp /></span> : <span style={{ fontWeight: "bold", fontSize: "20px" }}><GoChevronDown /></span>}
                    {/* {isRevealed ? <span><AiOutlineUp /></span> : <span><AiOutlineDown /></span>} */}
                    {/* {isRevealed ? <span>&#9650;</span> : <span>&#9660;</span>} */}
                </button>
            </div>
            <p className="answer">{ans}</p>
        </div>
    )
}

export default ReactJsEleventhCard;
