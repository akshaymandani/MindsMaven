import React from 'react'
import "./reactJsFourth.css"

const ReactJsFourth = () => {
  return (
    <div className='rjfo-body'>
      <div className='rjfo-main'>
        <div className='rjfo-title'>
          <h1>Schedule A Quick Interview Now To Avail A 15-days Risk-free Trial.</h1>
          <p>Don't know where to begin? Simply fill out this form and set up a meeting to get started.</p>
        </div>
        <div className='rjfo-form'>
          <div className='rjfof-main'>
            <form action="submit" method='post'>
              <input type="text" placeholder='Name' required />
              <div className='rjfof-em'>
                <input type="email" placeholder='Email' required />
                <input type="tel" placeholder='Mobile' required />
              </div>
              <textarea name="Message" id="message" placeholder='Message' cols="30" rows="5" aria-required="true" aria-invalid="false" data-gramm="false" wt-ignore-input="true"></textarea><br />
              <div className='rjfof-btn'>
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReactJsFourth;
