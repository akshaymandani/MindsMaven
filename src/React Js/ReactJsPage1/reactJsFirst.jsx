import React from 'react'
import "./reactJsFirst.css"
import hireReactJsImage from "../../images/hire-reactjs.png"

const ReactJsFirst = () => {
    return (
        <div className='rjf-body'>
            <div className='rjf-main'>
                <div className='rjf-img'>
                    <img src={hireReactJsImage} alt="Hire React Js Developer" />
                </div>
                <div className='rjf-content'>
                    <h6 className='rjfc-h6'>01. FOR NEXT-GEN WEB APPS</h6>
                    <h1><span>ReactJs Development</span> Company</h1>
                    <p>MindsMaven is a well-known ReactJs development company that has a team of the top
                        1% remote ReactJs developers. They use technologies like PHP, Node, and Python with ReactJs
                        to build Single-page applications and PWAs that provide top-notch user experience. Get different
                        types of ReactJs development services so that you can get real-time and scalable applications
                        according to your requirements.</p><br />
                    <p>Hire dedicated ReactJs developers who use their years of experience in frontend JSX, JS
                        fundamentals, Redux, Git Toolkit, and many other tools to build high-performing solutions to
                        boost your business. We use programming languages like ReactJS, HTML, CSS, Json-API, and many
                        more to deliver apps that solve real-world problems.</p>
                    <button>Hire Reliable ReactJs Developers</button>
                </div>
            </div>
        </div>
    )
}

export default ReactJsFirst;
