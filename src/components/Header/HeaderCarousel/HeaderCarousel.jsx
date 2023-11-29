import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// desing by FREEPIK
import carouselImg1 from "../../../assets/images/carousel1.jpg";
import carouselImg2 from "../../../assets/images/carousel2.svg";

const HeaderCarousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    // dots: true,
    infinite: true,
    // arrows: true,
    prevArrow: <button>{/* <NavigateNextIcon /> */}</button>,
    nextArrow: <button>{/* <NavigateBeforeIcon /> */}</button>,
  };

  return (
    <div className="col-md-6 animated fadeIn">
      <Slider {...settings} className="owl-carousel header-carousel">
        <div className="owl-carousel-item">
          <img className="img-fluid" src={carouselImg1} alt="Slide 1" />
        </div>
        <div className="owl-carousel-item">
          <img className="img-fluid" src={carouselImg2} alt="Slide 2" />
        </div>
      </Slider>
    </div>
  );
};

export default HeaderCarousel;
