import React from 'react';
import "../styles/Team.css";
import profileImage from '../assets/images/tej.png'; 

const TeamSection = () => {
  return (
    <div className="team-section">
      <h2 className="team-title">OUR TEAM</h2>

      <div className="team-member">
        <div className="team-member-image">
          <img src={profileImage} alt="Founder & Director" className="profile-img" />
        </div>

        <div className="team-member-info">
          <h3 className="team-member-title">FOUNDER & DIRECTOR</h3>
          <p className="team-member-description">
            A Dynamic Girl who represents aspirations & hopes like a phoenix!
          </p>
          <p className="team-member-bio">
            A change-agent, rapacious reader, a strategist, a fluent speaker, a promising entrepreneur and above all a passionate Indian. All these epithets best describe Tejaswini Bhandarkar. Our Founder, Tejaswini Bhandarkar, has developed her marketing, management, and creative expertise over the years. Her extensive understanding and vision of the digital world sets her apart from the competition. After earning her Bachelors and Master’s Degree in Computer Science, she ventured into the world of startup and laid the foundation for her brand - TezTecch. Her aim is to make TezTecch – One Complete Solution Provider for every Brand. She is an amazing Leader and Great Speaker too.
          </p>
          
          <button className="gallery-button">VIEW GALLERY</button>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
