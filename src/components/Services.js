import React, { useEffect } from 'react';
import "../styles/Services.css";

const services = [
    { name: "Website Development", icon: "🖥️" },
    { name: "Mobile App Development", icon: "📱" },
    { name: "Digital Marketing", icon: "📈" },
    { name: "Graphics Designing", icon: "🎨" },
    { name: "SMS Marketing", icon: "📩" },
    { name: "Animated Videos", icon: "🎥" },
    { name: "Email Marketing", icon: "✉️" },
    { name: "Whatsapp Marketing", icon: "💬" },
    { name: "Software Development", icon: "💻" },
    { name: "Online PR", icon: "🌐" },
    { name: "Ecommerce", icon: "🛒" },
   
];

const OurServices = () => {
    useEffect(() => {
        const serviceCards = document.querySelectorAll('.service-card');
        const options = {
            root: null,
            threshold: 0.1,
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible'); 
                    entry.target.style.transitionDelay = `${index * 0.4}s`; 
                }
            });
        }, options);

        serviceCards.forEach(card => {
            observer.observe(card);
        });

        return () => {
            serviceCards.forEach(card => {
                observer.unobserve(card);
            });
        };
    }, []);

    return (
        <div className="services-container">
            <h2>Our Services</h2>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className={`service-card ${service.highlighted ? 'highlighted' : ''}`}>
                        <span className="service-icon">{service.icon}</span>
                        <h3>{service.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;