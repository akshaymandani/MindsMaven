import React, { useState } from 'react'
import "./reactJsSeventh.css"
import reactJsTableData from './reactJsTableData';

const ReactJsSeventh = () => {
    const [showFullTable, setShowFullTable] = useState(false);

    const toggleTable = () => {
        setShowFullTable(!showFullTable);
    };
    return (
        <div className='rjse-body'>
            <div className='rjse-main'>
                <div className='rjse-title'>
                    <h6>07. HIRE DEVELOPERS</h6>
                    <h1><span>Hire ReactJs Developers:</span> In-House, Freelancers, Or From Tagline Infotech</h1>
                    <p>Get experienced ReactJS developers from Tagline Infotech or want the expertise of freelancers or an in-house team based on your project's needs so that you can get amazing apps.</p>
                </div>
                <div className='rjse-content'>
                    <table className="rjse-table">
                        <thead>
                            <tr>
                                {/* <th>ID</th> */}
                                <th>Factor</th>
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
                                        <td>{item.factor}</td>
                                        <td>{item.inHouse}</td>
                                        <td>{item.mindsmaven}</td>
                                        <td>{item.freelancer}</td>
                                    </tr>
                                ))
                                : reactJsTableData.slice(0, 6).map((item) => (
                                    <tr key={item.id}>
                                        {/* <td>{item.id}</td> */}
                                        <td>{item.factor}</td>
                                        <td>{item.inHouse}</td>
                                        <td>{item.mindsmaven}</td>
                                        <td>{item.freelancer}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                    <div className='rjse-btn'>
                        <button onClick={toggleTable}>{!showFullTable ? "View More " : "View Less"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReactJsSeventh;
