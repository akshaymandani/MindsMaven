import React from 'react'
import "./ourStory.css"
import OurStoryCard from './ourStoryCard';
import OurStoryRecord from './ourStoryRecord';

const OurStory = () => {
    return (
        <div className='os-body'>
            <h3>Our Stories</h3>
            <span className='story-span'></span>
            <div className='os-main'>
                {/* main */}
                {/* <OurStoryCard /> */}
                {OurStoryRecord.map((mainTeamCard, index) => (
                    <OurStoryCard key={index} imageUrl={mainTeamCard.imageUrl} name={mainTeamCard.name} description={mainTeamCard.description} />
                ))}
            </div>
            <div className='os-lastDot'></div>
        </div>
    )
}

export default OurStory;
