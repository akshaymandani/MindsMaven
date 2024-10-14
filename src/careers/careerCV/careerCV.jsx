import React, { useState } from 'react'
import "./careerCV.css"
import { MdMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import ReCAPTCHA from 'react-google-recaptcha';
import { Link } from "react-router-dom"

const CareerCV = () => {
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const handleRecaptchaChange = (token) => {
        setRecaptchaToken(token);
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
                                    <form action="" className='cccrmd-form'>
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
                                                    <input type="text" placeholder='Full Name' />
                                                </span>
                                            </div>
                                            <div className='cccrmdfb-em'>
                                                <div className='cccrmdfb-email'>
                                                    <label htmlFor="">Email</label>
                                                    <span className='cccrmdfbe-span'>
                                                        <input type="email" placeholder='Email Id' />
                                                    </span>
                                                </div>
                                                <div className='cccrmdfb-mobile'>
                                                    <label htmlFor="">Mobile No.</label>
                                                    <span className='cccrmdfbm-span'>
                                                        <input type="tel" placeholder='Mobile Number' />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='cccrmdfb-position'>
                                                <label htmlFor="">Position</label>
                                                <span className='cccrmdfbp-span'>
                                                    <input type="text" placeholder='Position' />
                                                </span>
                                            </div>
                                            <div className='cccrmdfb-upload'>
                                                <label htmlFor="">Upload CV</label>
                                                <span className='cccrmdfbu-span'>
                                                    <input type="file" />
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
                                                <Link to="/">
                                                    <input type="submit" value="Send Message" />
                                                </Link>
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
