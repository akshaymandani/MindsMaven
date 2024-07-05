import React from 'react'
import "./cloud.css"
import awsLogo from "../../images/aws.png"
import gcpLogo from "../../images/gcp.png"
import microsoftAzureLogo from "../../images/microsoftAzure.png"

const CloudTechnology = () => {
  return (
    <div className='cloud-body'>
      <div className='cloud-main'>
        <div className='cloud-mainText'>
            <h1>Clouds</h1>
        </div>
        <div className='cloud-submain'>
            <div>
                <img src={awsLogo} alt="Amazon Web Services" /><br />
                <p>Amazon Web Services</p>
            </div>
            <div>
                <img src={gcpLogo} alt="Google Cloud Platform" /><br />
                <p>Google Cloud Platform</p>
            </div>
            <div>
                <img src={microsoftAzureLogo} alt="Microsoft Azure" /><br />
                <p>Microsoft Azure</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CloudTechnology
