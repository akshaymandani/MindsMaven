import React from 'react'
import './careerFresher.css';
import { Link } from 'react-router-dom';

function CareerFresher() {
    return (
        <>
            <div className="cf-body">
                <div className="cf-content">
                    <div className="cfc-title">
                        <div className="cfct">
                            <div className="cfct-div">
                                <h3 className='cfctd-h3'>Are you a Fresher?</h3>
                                <div className="cfctd-line" />
                                <p className='cfctd-p'>
                                    Dont't worry, <Link to="/" className="cfctdp-link">Build your career with us!</Link> we will
                                    help you to build it.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="cf-center">
                        <div className="cfc-right">
                            <div className="cfcri">
                                <img
                                    width={473}
                                    height={432}
                                    src="https://taglineinfotech.com/wp-content/uploads/2022/06/fresher.webp"
                                    className='cfcr-img' />
                            </div>
                        </div>
                        <div className="cfc-left">
                            <div className="cfcl">
                                <h4 className='cfcl-h4'>Benefits for actual opportunity finder</h4>
                                <p className='cfcl-p'>
                                    Our benefits to our employees are the foundation of our success, and
                                    we treat our staff like family members. We provide them with various
                                    refreshing opportunities such as corporate parties, sick leave,
                                    awards &amp; rewards, free training classes, occasional lunch and
                                    dinner treats, and many more. <br />
                                    <br /> At Tagline Infotech, we always have the opportunity to thrive
                                    via employee personal and professional development.{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CareerFresher;