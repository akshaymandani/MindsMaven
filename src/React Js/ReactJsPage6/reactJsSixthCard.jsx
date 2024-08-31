import React from 'react'
import "./reactJsSixthCard.css"
// import correctImage from "../../images/correct.png"

const ReactJsSixthCard = (props) => {
    return (
        <div className='rjsc-main'>
            {/* <img src={correctImage} alt="" /> */}
            <h3>{props.id}{". "}{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default ReactJsSixthCard;
