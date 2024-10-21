import React, { useState } from 'react';
import "./careerCV.css";

const CareerCV = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [Phone,setPhone]=useState('');
    const[Position,setPosition]=useState('');
    const [cv, setCv] = useState(null);
    const handleCvChange = (e) => {
        setCv(e.target.files[0]);
      };

      
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !cv) {
      alert('error ');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(cv);
    reader.onloadend = async () => {
      const base64Cv = reader.result.split(',')[1];

      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('Position',Position);
      formData.append('phone',Phone);
      formData.append('cv', base64Cv);
      formData.append('cvName', cv.name);
      formData.append('mimeType', cv.type);

      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbwQYPYCfG86kXAQTeCX3sUjHy-JJMNJjFsJCLwMq9ly-P6bKk_U5fH5W-U5niElRKjjRQ/exec', { // यहाँ Google Apps Script URL डालें
          method: 'POST',
          body: formData
        });
        const result = await response.json();
        if (result.status === 'success') {
          alert('आपका डेटा और CV सफलतापूर्वक सेव हो गया है!');
        }
      } catch (error) {
        console.error('Form submission failed:', error);
      }
    };
  };

    
    return (
        <div className='cc-body'>
            <div className='cc-main'>
                <div className='cc-submain'>
                    <div className='cc-content'>
                        <div className='ccc-left'>
                            <div className='cccl-main'>
                                <h4 className='ccclm-h4'>Feel Free to <br />Contact Us</h4>
                                <h6 className='ccclm-h6'>HR Inquiry</h6>
                                <ul className='ccclm-ul'>
                                    <li className='ccclm-li'>
                                        <a href="mailto:contact@mindsmaven.in" className='ccclml-a'>
                                            {/* <icon>
                                                <MdMail />
                                            </icon>&nbsp; */}
                                            <i className='fas fs-envelope'></i>
                                            contact@mindsmaven.in
                                        </a>
                                    </li>
                                    <li className='ccclm-li'>
                                        <a href="tel:+918849492570" className='ccclml-a'>
                                            {/* <icon>
                                                <FaPhone />
                                            </icon>&nbsp; */}
                                            <i className='fas fs-phone phone-icon'></i>
                                            +91 8849492570
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='ccc-right'>
                            <div className='cccr-main'>
                                <h2 className='cccrm-h2'>Kindly E-mail your CV</h2>
                                <div className='cccrm-div'>
                                    <div className='cccrmd-div'>
                                        <p></p>
                                        <ul></ul>
                                    </div>
                                    <form action="" className='cccrmd-form' onSubmit={handleFormSubmit}>
                                        <div className='cccrmdf-top'>
                                            <input type="hidden" />
                                            <input type="hidden" />
                                            <input type="hidden" />
                                            <input type="hidden" />
                                            <input type="hidden" />
                                            <input type="hidden" />
                                        </div>
                                        <div className='cccrmdf-bottom'>
                                            <div className='cccrmdfb-name'>
                                                <label htmlFor="">First Name</label>
                                                <span className='cccrmdfbn-span'>
                                                    <input type="text" placeholder='Full Name'   value={name} onChange={(e) => setName(e.target.value)} />
                                                </span>
                                            </div>
                                            <div className='cccrmdfb-em'>
                                                <div className='cccrmdfb-email'>
                                                    <label htmlFor="">Email</label>
                                                    <span className='cccrmdfbe-span'>
                                                        <input type="email" placeholder='Email Id'  value={email}  onChange={(e) => setEmail(e.target.value)}/>
                                                    </span>
                                                </div>
                                                <div className='cccrmdfb-mobile'>
                                                    <label htmlFor="">Mobile No.</label>
                                                     <span className='cccrmdfbm-span'>
                                                        <input type="tel" placeholder='Mobile Number'  value={Phone}  onChange={(e) =>setPhone(e.target.value)}/>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='cccrmdfb-position'>
                                                <label htmlFor="">Position</label>
                                                <span className='cccrmdfbp-span'>
                                                    <input type="text" placeholder='Position' value={Position}  onChange={(e) =>setPosition(e.target.value)}/>
                                                </span>
                                            </div>
                                            <div className='cccrmdfb-upload'>
                                                <label htmlFor="">Upload CV</label>
                                                <span className='cccrmdfbu-span'>
                                                    <input type="file"   onChange={handleCvChange} />
                                                </span>
                                            </div>
                                            <div className='cccrmdfb-recaptcha'>
                                                {/* <div>
                                                    <div>
                                                        <iframe src="" frameborder="0"></iframe>
                                                    </div>
                                                    <textarea name="" id=""></textarea>
                                                </div> */}
                                                {/* <ReCAPTCHA
                                                    // sitekey="YOUR_RECAPTCHA_SITE_KEY"
                                                    sitekey="6Le9DWEqAAAAAHgv6XodfDb6FsdAMbPq0-AljpWJ"
                                                    onChange={handleRecaptchaChange}
                                                /> */}
                                            </div>
                                            <span>
                                                <input type="hidden" />
                                            </span>
                                            <div className='cccrmdfb-submit'>
                                                
                                                    <input type="submit" value="Send Message" name="Name" />
                                                   
                                               
                                                <span></span>
                                            </div>
                                        </div>
                                        <div></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareerCV;
