import React from 'react';
import '../styles/Testimonials.css';

function TestimonialCard({ name, title, company, testimonial }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-image">
        {/* Replace with your actual image URL */}
        <img src="your-image.jpg" alt={name} />
      </div>
      <div className="testimonial-content">
        <h3 className="testimonial-name">{name}</h3>
        <p className="testimonial-title">{title}</p>
        <p className="testimonial-company">{company}</p>
        <p className="testimonial-text">{testimonial}</p>
      </div>
    </div>
  );
}

function Testimonials() {
  const testimonialsData = [
    {
      name: "Scholartude",
      title: "Director",
      company: "", // Replace with company name if applicable
      testimonial: "We at Scholartude have engaged with Tezztech to help redesign and redevelop our website. We were pretty much impressed with the final output delivered by them.",
    },
    {
      name: "Nilesh Khado",
      title: "MD, Comfort Group",
      company: "", // Replace with company name if applicable
      testimonial: "From start to finish, working with Tezztech on our website was a pleasure. The team was responsive, creative, and dedicated to ensuring we were completely satisfied with the final product.",
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="testimonials-section">
      <h2>Testimonials</h2>
      <div className="testimonial-cards">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;