import React from "react";
import slider_1 from "../../assets/images/banner/image-1600x460 (3).jpg";
import slider_2 from "../../assets/images/banner/image-1600x460 (2).jpg";
import slider_3 from "../../assets/images/banner/image-1600x460 (1).jpg";
import slider_4 from "../../assets/images/banner/image-1600x460 (4).jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
const Banner = () => {
  var settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={slider_1} className="img-fluid" alt="slider" />
      </div>
      <div>
        <img src={slider_2} className="img-fluid" alt="slider" />
      </div>
      <div>
        <img src={slider_3} className="img-fluid" alt="slider" />
      </div>
      <div>
        <img src={slider_4} className="img-fluid" alt="slider" />
      </div>
    </Slider>
  );
};

export default Banner;
