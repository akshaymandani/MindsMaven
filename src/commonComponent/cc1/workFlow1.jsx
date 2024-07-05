import React from 'react'
import "./workFlow1.css"

const WorkFlow1 = (props) => {
    return (
        // <div className='cwf-body'>
        //     <div className='cwf-main'>
        <div className='cwf-div'>
            <div className='cwfd-top'>
                <img src={props.arrowImage} alt="" />
                <h3 className='cwfdh3'>{props.title}</h3>
            </div>
            <div className='cwfd-img'>
                <img src={props.imageUrl} alt={props.title} />
            </div>
            <div className='cwf-bottom'>
                <p>{props.description}</p>
            </div>
        </div>
        //     </div>
        // </div>
    )
}

export default WorkFlow1;
