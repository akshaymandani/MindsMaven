import React, { useState } from 'react'
import "./angularJsSeventh.css"
import reactJsTableData from './angularJsTableData';

const ReactJsSeventh = () => {
    const [showFullTable, setShowFullTable] = useState(false);

    const toggleTable = () => {
        setShowFullTable(!showFullTable);
    };
    return (
        <div className='ajse-body'>
            <div className='ajse-main'>
                <div className='ajse-title'>
                    {/* <h6>07. HIRE DEVELOPERS</h6> */}
                    <h6 className='ajse-h6'>05. HIRE DEVELOPERS</h6>
                    <h1><span>Hire AngularJs Developers:</span> In-House, Freelancers, Or From MindsMaven IT Solution</h1>
                    {/* <p>Get experienced AngularJS developers from Tagline Infotech or want the expertise of freelancers or an in-house team based on your project's needs so that you can get amazing apps.</p> */}
                    <p>Get experienced AngularJS developers from MindsMaven IT Solutions or want the expertise of freelancers or an in-house team based on your project's needs so that you can get amazing apps.</p>
                </div>
                <div className='ajse-content'>
                    <table className="ajse-table">
                        <thead>
                            <tr>
                                {/* <th>ID</th> */}
                                <th>Aspects</th>
                                <th>In-House</th>
                                <th>MindsMaven</th>
                                <th>Freelancer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {showFullTable
                                ? reactJsTableData.map((item) => (
                                    <tr key={item.id}>
                                        {/* <td>{item.id}</td> */}
                                        <td>{item.aspects}</td>
                                        <td>{item.inHouse}</td>
                                        <td>{item.mindsmaven}</td>
                                        <td>{item.freelancer}</td>
                                    </tr>
                                ))
                                : reactJsTableData.slice(0, 6).map((item) => (
                                    <tr key={item.id}>
                                        {/* <td>{item.id}</td> */}
                                        <td>{item.aspects}</td>
                                        <td>{item.inHouse}</td>
                                        <td>{item.mindsmaven}</td>
                                        <td>{item.freelancer}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                    <div className='ajse-btn'>
                        <button onClick={toggleTable}>{!showFullTable ? "View More " : "View Less"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReactJsSeventh;
