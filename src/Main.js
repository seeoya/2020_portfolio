import React, { Component } from "react";
import Slider from "react-slick";
import $ from "jquery";
//import "./main.css";

function Main({ selectPage }) {
  const settings = {
    className: "main__slider",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    //centerMode: true,
    //centerPadding: "0px",
    swipe: true,
    draggable: true

    //fade: true,
    //pauseOnHover: true,
  };

  return (
    <>
      <div className="main">메인 {selectPage}</div>

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
    </>
  );
}

export default Main;
