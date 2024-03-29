import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../assets/slide1.jpg"
import slide2 from "../assets/slide2.jpg"
import slide3 from "../assets/slide3.jpg"
import slide4 from "../assets/slide4.jpg"

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className=" h-44 bg-white">
        <img
          className="w-full h-full object-fill"
          src={slide1}
          alt=""
        />
      </div>
      <div className=" h-44 bg-white ">
      <img
          className="w-full h-full object-fill"
          src={slide2}
          alt=""
        />
      </div>
      <div className=" h-44 bg-white ">
      <img
      className="w-full h-full object-fill"
      src={slide3}
      alt=""
    />
      </div>
      <div className=" h-44 bg-white ">
      <img
      className="w-full h-full object-fill"
      src={slide4}
      alt=""
    />
      </div>
    </Slider>
  );
}
