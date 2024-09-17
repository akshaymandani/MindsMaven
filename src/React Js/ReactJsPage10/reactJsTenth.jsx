// import React from 'react'
// import "./reactJsTenth.css"
// import { ReactJsTenthCardBottom, ReactJsTenthCardTop } from './reactJsTenthCard';
// import {ReactJsTenthData1,ReactJsTenthData2} from './reactJsTenthData';

// const ReactJsTenth = () => {
//     return (
//         <div className='rjte-body'>
//             <div className='rjte-main'>
//                 <div className='rjte-title'>
//                     <h6>10. FIELDS OF EXPERTISE</h6>
//                     <h1><span>Industry</span> We Serve</h1>
//                     <p>Here you can explore the industries for which we provide best-in-class ReactJs development services.</p>
//                 </div>
//                 <div className='rjte-content'>
//                     <div className='rjtec-top'>
//                     {ReactJsTenthData1.map((reactJsTenthCard, index) => (
//                         <ReactJsTenthCardTop key={index} title={reactJsTenthCard.title} imageUrl={reactJsTenthCard.imageUrl} contentLink={reactJsTenthCard.contentLink} />
//                     ))}
//                     </div>
//                     <div className='rjtec-bottom'>
//                     {ReactJsTenthData2.map((reactJsTenthCard, index) => (
//                         <ReactJsTenthCardBottom key={index} title={reactJsTenthCard.title} imageUrl={reactJsTenthCard.imageUrl} contentLink={reactJsTenthCard.contentLink} />
//                     ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ReactJsTenth;






import React from 'react'
import "./reactJsTenth.css"
// import { ReactJsTenthCardBottom, ReactJsTenthCardTop } from './reactJsTenthCard';
import ReactJsTenthCard from './reactJsTenthCard';
// import {ReactJsTenthData1,ReactJsTenthData2} from './reactJsTenthData';
import ReactJsTenthData from './reactJsTenthData';

const ReactJsTenth = () => {
    return (
        <div className='rjte-body'>
            <div className='rjte-main'>
                <div className='rjte-title'>
                    {/* <h6>10. FIELDS OF EXPERTISE</h6> */}
                    <h6 className='rjte-h6'>08. FIELDS OF EXPERTISE</h6>
                    <h1><span>Industry</span> We Serve</h1>
                    <p>Here you can explore the industries for which we provide best-in-class ReactJs development services.</p>
                </div>
                <div className='rjte-content'>
                    {/* <div className='rjtec-top'>
                    {ReactJsTenthData1.map((reactJsTenthCard, index) => (
                        <ReactJsTenthCardTop key={index} title={reactJsTenthCard.title} imageUrl={reactJsTenthCard.imageUrl} contentLink={reactJsTenthCard.contentLink} />
                    ))}
                    </div>
                    <div className='rjtec-bottom'>
                    {ReactJsTenthData2.map((reactJsTenthCard, index) => (
                        <ReactJsTenthCardBottom key={index} title={reactJsTenthCard.title} imageUrl={reactJsTenthCard.imageUrl} contentLink={reactJsTenthCard.contentLink} />
                    ))}
                    </div> */}
                    <div className='rjtec'>
                        {ReactJsTenthData.map((reactJsTenthCard, index) => (
                            <ReactJsTenthCard key={index} title={reactJsTenthCard.title} imageUrl={reactJsTenthCard.imageUrl} contentLink={reactJsTenthCard.contentLink} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReactJsTenth;
