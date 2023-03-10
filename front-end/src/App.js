import React, { useState } from "react";
import "./App.css";
import comicCity from "./extras/Comic City.png";
import marsRed from "./extras/marsRed.png";
import blueMoon from "./extras/vampireBlue.png";
import mushoku from "./extras/mushokuTensei.png";
import noblesse from "./extras/Noblesse.png";
// import marsRed from "./extras/marsRed.png";
// import marsRed from "./extras/marsRed.png";

// import Swiper core and required modules
import {EffectCoverflow, Navigation, Pagination,Autoplay, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/bundle';
import 'swiper/css/effect-coverflow'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(true);
  }

  return (
    <div className="App">
      <div id="navbar">
        <div id="logoContainer">
          <img src={comicCity} alt="logo" id="logo" />
        </div>

        <div id="navCentreButtons">
          <button className="newSearchButton" id="navButton">
            <Component />
          </button>
          <div id="newNavbar">
            <button id="navButton">Home</button>
            <button id="navButton">Upload</button>
            <button id="navButton">Comics</button>
            <button id="navButton">About Us</button>
          </div>
        </div>

        <div id="navLeftButtons">
          <button id="navButton">Sign In</button>
          <button id="navButton">Noti..</button>
        </div>
      </div>

      <Carousel />
    </div>
  );
}

const Component = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(true);
    console.log("clicked");
  }

  return (
    
      <div className={`input-box ${isOpen ? "open" : ""}`}>
        <input type="text" placeholder="Search..." />
        <span className="search" onClick={handleClick}>
          <i className="uil uil-search search-icon"
          ></i>
        </span>
        <i
          className="uil uil-times close-icon"
          onClick={() => setIsOpen(false)}          
        ></i>
      </div>
    
  );
};

const Carousel = () => {
  return (
    <div className="carousel">
      {/* <div className="carouselHere">
        <div className="slide">
          <img src={marsRed} alt="marsRed" />
        </div>
      </div> */}

    <div className="swiper">
      
    <Swiper

effect={'coverflow'}
centeredSlides={true}
loop={true}
slidesPerView={'auto'}
coverflowEffect={{
  rotate: 0,
  stretch: 0,
  depth: 100,
  modifier: 2.5,
}}
pagination={{ el: '.swiper-pagination', clickable: false }}
navigation={{
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  clickable: true,
}}
autoplay={{
  delay: 3200,
  disableOnInteraction: false,
}}
modules={[ Autoplay, Pagination, Navigation]}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      // spaceBetween={50}
      // slidesPerView={1}
      // autoplay={{
      //   delay:2000,
      //   disableOnInteraction:false,
      // }}
      // navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      >
      <SwiperSlide><img src={marsRed} alt="marsRed" /></SwiperSlide>
      <SwiperSlide><img src={blueMoon} alt="blueMoon" /></SwiperSlide>
      <SwiperSlide><img src={mushoku} alt="mushoku" /></SwiperSlide>
      <SwiperSlide><img src={noblesse} alt="noblesse" /></SwiperSlide>

    </Swiper>
      </div>
      </div>
  );
};

export default App;
