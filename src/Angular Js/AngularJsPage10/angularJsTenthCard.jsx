import React from 'react'

// export const ReactJsTenthCardTop = (props) => {
//     return (
//         <div className='ajtect-card'>
//             <a href={props.contentLink}>
//                 <div className='ajtect-data'>
//                     <img src={props.imageUrl} alt={props.title} />
//                     <p>{props.title}</p>
//                 </div>
//             </a>
//         </div>
//     )
// }

// export const ReactJsTenthCardBottom = (props) => {
//     return (
//         <div className='ajtecb-card'>
//             <a href={props.contentLink}>
//                 <div className='ajtecb-data'>
//                     <img src={props.imageUrl} alt={props.title} />
//                     <p>{props.title}</p>
//                 </div>
//             </a>
//         </div>
//     )
// }


const ReactJsTenthCard = (props) => {
    return (
        <div className='ajtect-card'>
            <a href={props.contentLink}>
                <div className='ajtect-data'>
                    <img src={props.imageUrl} alt={props.title} />
                    <p>{props.title}</p>
                </div>
            </a>
        </div>
    )
}

export default ReactJsTenthCard;