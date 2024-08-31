import React from 'react'

// export const ReactJsTenthCardTop = (props) => {
//     return (
//         <div className='rjtect-card'>
//             <a href={props.contentLink}>
//                 <div className='rjtect-data'>
//                     <img src={props.imageUrl} alt={props.title} />
//                     <p>{props.title}</p>
//                 </div>
//             </a>
//         </div>
//     )
// }

// export const ReactJsTenthCardBottom = (props) => {
//     return (
//         <div className='rjtecb-card'>
//             <a href={props.contentLink}>
//                 <div className='rjtecb-data'>
//                     <img src={props.imageUrl} alt={props.title} />
//                     <p>{props.title}</p>
//                 </div>
//             </a>
//         </div>
//     )
// }


const ReactJsTenthCard = (props) => {
    return (
        <div className='rjtect-card'>
            <a href={props.contentLink}>
                <div className='rjtect-data'>
                    <img src={props.imageUrl} alt={props.title} />
                    <p>{props.title}</p>
                </div>
            </a>
        </div>
    )
}

export default ReactJsTenthCard;