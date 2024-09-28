import React from 'react'
import "./mainTeam.css"
import "./mainTeamRecord"
import MainTeamCard from './mainTeamCard';
import MainTeamRecord from './mainTeamRecord';

const MainTeam = () => {
    return (
        <div className='mt-body'>
            <div className='mt-main'>
                <div className='mt-top'>
                    {/* Main Team */}
                    <h3>Core Team</h3>
                    <span className="team-span"></span>
                    <p>We have such an inspiring, polite and modernise top management team with aptitude and dignity. They are all the time ready to spark their zeal to catch one single opportunity.</p>
                </div>
                <div className='mt-bottom'>
                    {/* <MainTeamCard /> */}
                    {MainTeamRecord.map((mainTeamCard, index) => (
                        <MainTeamCard key={index} imageUrl={mainTeamCard.imageUrl} name={mainTeamCard.name} role={mainTeamCard.role} description={mainTeamCard.description} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MainTeam;
