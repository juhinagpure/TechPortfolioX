import React, { useEffect } from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.about-us > *');
    const options = {
      root: null,
      threshold: 0.1,
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); 
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section className="about-us">
      <h2 className="fade-in">[ About TEZTECCH ]</h2>
      <p className="fade-in">
        We are a Nagpur-based, One-stop, Full-service IT, Branding & Advertising Company.
      </p>
      <h3 className="fade-in">What We Do?</h3>
      <div className="highlight fade-in">
        Hum Aapka Kaam Aasan Karte Hein!
      </div>
      <h3 className="fade-in">How?</h3>
      <p className="fade-in">
        Apka Problem <br />
        + <br />
        Aapka Vision <br />
        + <br />
        Aapka Budget <br />
        <span className="highlight"> = Humara Solution</span>
      </p>
      <h1 className="Result fade-in">Result</h1>
      <p className="result fade-in">
        To Build Credibility + To Generate More And More <br/>
        Business + Promote Goodwill + <br/>
        Increase Brand Value + To Win Over Corona And Such <br/>
        Kind Of Pandemics + <br/>
        To Build Your Own Clients Community Who Are Working <br/>
        For You As Your MARKETING AGENTS
      </p>
      <div className="highlight fade-in">
        = GROWTH OF YOUR BUSINESS
      </div>
    </section>
  );
};

export default AboutUs;