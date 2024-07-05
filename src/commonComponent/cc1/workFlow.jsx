import React from 'react'
import "./workFlow.css"
import whiteArrowImage from "../../images/white-arrow-img.svg"
import orangeArrowImage from "../../images/orange-arrow-img.svg"
import searchImage from "../../images/search.svg"
import uiuxImage from "../../images/ui-ux.svg"
import appDevelopmentImage from "../../images/app-development.svg"
import pageImage from "../../images/page.svg"

const WorkFlow = (props) => {
  return (
    <div className='cwf-body'>
      <div className='cwf-main'>
        <div className='cwf-div1'>
            <div className='cwfd-top'>
                <img src={whiteArrowImage} alt="" />
                <h3 className='cwfdh3'>Discover</h3>
            </div>
            <div className='cwfd-img'>
                <img src={searchImage} alt="Discover" />
            </div>
            <div className='cwf-bottom'>
                <p>{props.description}</p>
            </div>
        </div>
        <div className='cwf-div2 cwf-div'>
            <div className='cwfd-top'>
                <img src={orangeArrowImage} alt="" />
                <h3 className='cwfdh3'>Design</h3>
            </div>
            <div className='cwfd-img'>
                <img src={uiuxImage} alt="Design" />
            </div>
            <div className='cwf-bottom'>
                <p>{props.description}</p>
            </div>
        </div>
        <div className='cwf-div3 cwf-div'>
            <div className='cwfd-top'>
                <img src={whiteArrowImage} alt="" />
                <h3 className='cwfdh3'>Build</h3>
            </div>
            <div className='cwfd-img'>
                <img src={appDevelopmentImage} alt="Build" />
            </div>
            <div className='cwf-bottom'>
                <p>{props.description}</p>
            </div>
        </div>
        <div className='cwf-div4 cwf-div'>
            <div className='cwfd-top'>
                <img src={orangeArrowImage} alt="" />
                <h3 className='cwfdh3'>Deliver</h3>
            </div>
            <div className='cwfd-img'>
                <img src={pageImage} alt="Deliver" />
            </div>
            <div className='cwf-bottom'>
                <p>{props.description}</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WorkFlow;
