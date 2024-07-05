import React from 'react'
import "./database.css"
import mySQLLogo from "../../images/Mysql.png"
import mongoDBLogo from "../../images/Mongodb.png"
import oracleLogo from "../../images/Oracle.png"
import postgreLogo from "../../images/Postgresql.png"

const DatabaseTechnology = () => {
  return (
    <div className='database-body'>
      <div className='database-main'>
        <div className='database-mainText'>
            <h1>Databases / Data Storages</h1>
        </div>
        <div className='database-submain'>
            <div>
                <img src={mySQLLogo} alt="MySQL" /><br />
                <p>MySQL</p>
            </div>
            <div>
                <img src={mongoDBLogo} alt="MongoDB" /><br />
                <p>MongoDB</p>
            </div>
            <div>
                <img src={oracleLogo} alt="oracle" /><br />
                <p>ORACLE</p>
            </div>
            <div>
                <img src={postgreLogo} alt="PostgreSQL" /><br />
                <p>Postgre SQL</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DatabaseTechnology;
