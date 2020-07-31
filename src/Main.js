import React, { Component } from "react";
import Slider from "react-slick";
import $ from "jquery";

function Main({ selectPage }) {
  const settings = {
    className: "main__slider",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    swipe: true,
    draggable: true
  };

  return (
    <div className="main">
      <h1 className="main__title">MAIN</h1>

      <Slider {...settings}>
        <div>
          <img src="/img/cinque.jpg" alt="sliderImage1"></img>
        </div>
        <div>
          <img src="/img/hungarian.jpg" alt="sliderImage2"></img>
        </div>
        <div>
          <img src="/img/lobby.jpg" alt="sliderImage3"></img>
        </div>
      </Slider>
    </div>
  );
}

export default Main;
