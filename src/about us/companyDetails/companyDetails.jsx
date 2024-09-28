import React from 'react'
import "./companyDetails.css"
import OurStory from './ourStory/ourStory';
import OurCoreValue from './ourCoreValue/ourCoreValue';

const CompanyDetails = () => {
  return (
    <div className='cd-body'>
      {/* Company Details */}
      <OurStory />
      <div className='cd-main'>
        <OurCoreValue />
      </div>
    </div>
  )
}

export default CompanyDetails;
