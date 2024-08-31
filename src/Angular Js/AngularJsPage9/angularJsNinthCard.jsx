import React from 'react'
import "./angularJsNinthCard.css"
import correctImage from "../../images/correct.png"

const ReactJsNinthCard = (props) => {
    return (
        <div className='rjnc-main'>
            <img src={correctImage} alt="" />
            <p>{props.content}</p>
        </div>
    )
}

export default ReactJsNinthCard;
