import React from "react";
import Slider from "react-slick";
import "../styles/Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image2 from "../assets/images/image2.png";
import image1 from "../assets/images/image1.png";
import image3 from "../assets/images/image3.png";

const testimonialsData = [
  {
    name: "Prof SN Basu",
    title: "EX–YCCE Group",
    imageUrl: image2,
    feedback:
      "<i>We made an order to create a website for our age-old Ashram at Benaras after searching Teztecch from Google. It was a pleasant experience to work with the dedicated & expert website company at Teztecch, Nagpur, under the management of Ms. Tejaswini Bhandarkar. I wish a bright & prosperous future for this company.</i>",
  },
  {
    name: "Raunak Agarwal",
    title: "Rachitects",
    imageUrl: image1,
    feedback:
      "<i>Teztecch helped our brand get access to a lot of customers by their special management of our brand’s social media handlers. The agency has a great team, we highly recommend the agency for other business startups.</i>",
  },
  {
    name: "Rashmi H Upasni",
    title: "Indoor System",
    imageUrl: image3,
    feedback:
      "<i>They listened to me, understood my strategies, and provided solutions with honesty, integrity, and efficiency.</i>",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonials-section">
      <h2 className="testimonials-heading">
        HAPPY MARKETING TEAM + RESULT-DRIVEN STRATEGIES = HAPPY CLIENTS
      </h2>
      <h1 className="testimonials-title">Testimonials</h1>
      <Slider {...settings} className="testimonials-slider">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <img
              src={testimonial.imageUrl}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-title">{testimonial.title}</p>
            <p
              className="testimonial-feedback"
              dangerouslySetInnerHTML={{ __html: testimonial.feedback }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
