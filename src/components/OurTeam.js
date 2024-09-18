import React from 'react';
import TeamMember from './TeamMember';
import '../styles/TeamMember.css';
import '../styles/OurTeam.css';
import founderImage from '../assets/images/tej.png';  
import muneerImage from '../assets/images/Muneer Ahmad.jpg';
import vishalImage from '../assets/images/Vishal Agrawal.jpg';
import rahulImage from '../assets/images/Rahul Dangaye.jpg';
import aawaanImage from '../assets/images/Aawaan Ahmad.jpg';

const OurTeam = () => {
    return (
        <div className="our-team">
            <h2>OUR TEAM</h2>
            <div className="founder">
                <img 
                    src={founderImage} 
                    alt="Founder" 
                    className="founder-image"
                />
                <h3>FOUNDER & DIRECTOR</h3>
                <p>A Dynamic Girl who represents aspirations & hopes like a phoenix!</p>
                <p className="founder-description">
                    A change-agent, rapacious reader, a strategist, a fluent speaker, a promising entrepreneur and above all a passionate Indian. 
                    Our Founder, Tejaswini Bhandarkar, has developed her marketing, management, and creative expertise over the years...
                </p>
                <button className="view-gallery">VIEW GALLERY</button>
            </div>
            <div className="team-section">
                <TeamMember 
                    name="Muneer Ahmad"
                    title="Sr. Web Developer"
                    image={muneerImage}
                />
                <TeamMember 
                    name="Vishal Agrawal"
                    title="Sales & Marketing Head"
                    image={vishalImage}
                />
                <TeamMember 
                    name="Rahul Dangaye"
                    title="Sales & Marketing"
                    image={rahulImage}
                />
                <TeamMember 
                    name="Aawaan Ahmad"
                    title="Sr. Frontend Developer"
                    image={aawaanImage}
                />
            </div>
            <button className="view-all">VIEW ALL</button>
        </div>
    );
};

export default OurTeam;
