import React, { useEffect, useRef, useState } from "react";
import TeamMember from "./TeamMember";
import "../styles/TeamMember.css";
import "../styles/OurTeam.css";
import founderImage from "../assets/images/tej.png";
import muneerImage from "../assets/images/Muneer Ahmad.jpg";
import vishalImage from "../assets/images/Vishal Agrawal.jpg";
import rahulImage from "../assets/images/Rahul Dangaye.jpg";
import aawaanImage from "../assets/images/Aawaan Ahmad.jpg";

const OurTeam = () => {
  const founderRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% is visible
    );

    if (founderRef.current) {
      observer.observe(founderRef.current);
    }

    return () => {
      if (founderRef.current) {
        observer.unobserve(founderRef.current);
      }
    };
  }, []);

  return (
    <div className="our-team">
      <h2>OUR TEAM</h2>
      <div className={`founder ${isVisible ? "animate" : ""}`} ref={founderRef}>
        <img src={founderImage} alt="Founder" className="founder-image" />
        <h3>FOUNDER & DIRECTOR</h3>
        <p>A Dynamic Girl who represents aspirations & hopes like a phoenix!</p>
        <p className="founder-description">
          A change-agent, rapacious reader, a strategist, a fluent speaker, a
          promising entrepreneur and above all a passionate Indian. All these
          epithets best describe Tejaswini Bhandarkar. Our Founder, Tejaswini
          Bhandarkar, has developed her marketing, management, and creative
          expertise over the years. Her extensive understanding and vision of
          the digital world sets her apart from the competition. After earning
          her Bachelors and Master’s Degree in Computer Science, she ventured
          into the world of startup and laid the foundation for her brand -
          TezTecch. Her aim is to make Teztecch – One Complete Solution Provider
          for every Brand. She is an amazing Leader and Great Speaker too.
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
