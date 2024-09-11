import React, { useEffect } from "react";
import "../styles/Services.css";

const services = [
  { name: "Website Development", icon: "/images/services/Website-Design.png",  },
  { name: "Mobile App Development", icon: "/images/services/Service-Icons-02.png" },
  { name: "Digital Marketing", icon: "/images/services/Service-Icons-03.png" },
  { name: "Graphics Designing", icon: "/images/services/Service-Icons-04.png" },
  { name: "SMS Marketing", icon: "/images/services/Service-Icons-05.png" },
  { name: "Animated Videos", icon: "/images/services/Service-Icons-06.png" },
  { name: "Email Marketing", icon: "/images/services/Service-Icons-07.png" },
  { name: "Whatsapp Marketing", icon: "/images/services/Service-Icons-08.png" },
  { name: "Software Development", icon: "/images/services/Services-Icon-09.png" },
  { name: "Online PR", icon: "/images/services/Services-Icon-10.png" },
  { name: "Ecommerce", icon: "/images/services/Services-Icon-11.png" },
];

const OurServices = () => {
  useEffect(() => {
    const serviceCards = document.querySelectorAll(".service-card");
    const options = {
      root: null,
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); 
          entry.target.style.transitionDelay = `${index * 0.4}s`; 
        }
      });
    }, options);

    serviceCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      serviceCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="services-container">
      <h2 className="service">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-card ${
              service.highlighted ? "highlighted" : ""
            }`}
          >
          <img className="service-icon" src={service.icon} alt={service.name} />
            
            <h3>{service.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
