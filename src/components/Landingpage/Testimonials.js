import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
  let settings = {
    infinite: true,
    dots: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const exemple = [
    {
      avatar:
        "https://images.unsplash.com/photo-1578489758854-f134a358f08b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Lorem Ipsum",
      job: "Lorem ipsum dolor sit",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan, erat sed dapibus pretium, nunc ante rutrum lacus, quis bibendum est risus in est. In hac habitasse platea dictumst",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1548946526-f69e2424cf45?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Lorem Ipsum",
      job: "Lorem ipsum dolor sit",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan, erat sed dapibus pretium, nunc ante rutrum lacus, quis bibendum est risus in est. In hac habitasse platea dictumst",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Lorem Ipsum",
      job: "Lorem ipsum dolor sit",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan, erat sed dapibus pretium, nunc ante rutrum lacus, quis bibendum est risus in est. In hac habitasse platea dictumst",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
      name: "Lorem Ipsum",
      job: "Lorem ipsum dolor sit",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan, erat sed dapibus pretium, nunc ante rutrum lacus, quis bibendum est risus in est. In hac habitasse platea dictumst",
    },
  ];
  return (
    <div className="testimonials">
      <div className="section-title">
        <p>What Our Cients Say About Us</p>
        <hr className="line" />
      </div>
      <div className="testimonials-container">
        <Slider {...settings}>
          {exemple.map((item) => {
            return (
              <div className="testimonial-item">
                <div
                  className="avatar"
                  style={{ backgroundImage: "url(" + item.avatar + ")" }}
                />
                <p className="name">{item.name}</p>
                <p className="job">{item.job}</p>
                <p className="testimonial">{item.testimonial}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
