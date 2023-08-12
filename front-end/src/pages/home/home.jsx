import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import marsRed from "../../extras/marsRed.png";
import blueMoon from "../../extras/vampireBlue.png";
import mushoku from "../../extras/mushokuTensei.png";
import noblesse from "../../extras/Noblesse.png";


// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import "swiper/css/effect-coverflow";

function HomePage() {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <>
      <div className="App">
        <div id="navbar">
          <div id="logoContainer"></div>
        </div>

        <div>
          <Carousel />
        </div>
        <div>
          <PopularComics />
        </div>
      </div>
    </>
  );
}

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="swiper">
        <Swiper
          // effect={'coverflow'}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: false }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          autoplay={{
            delay: 3200,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          // install Swiper modules
          // modules={[Navigation, Pagination, Scrollbar, A11y]}
          // spaceBetween={50}
          // slidesPerView={1}
          // autoplay={{
          //   delay:2000,
          //   disableOnInteraction:false,
          // }}
          // navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <img src={marsRed} alt="marsRed" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={blueMoon} alt="blueMoon" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={mushoku} alt="mushoku" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={noblesse} alt="noblesse" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

const PopularComics = () => {

  // const { id } = useParams();
  const [popular, setPopular] = useState(null);

  useEffect(() => {
    const fetchComic = async () => {
      const response = await fetch(`${process.env.REACT_APP_URL}/api/comics`);
      const json = await response.json();

      if (response.ok) {
        setPopular(json);
        console.log(json);
        console.log("This is Comic Data:", popular);
        
      }
    };

    fetchComic();
  },[]);

  if (!popular) {
    return <div>Loading...</div>;
  }

  return (
    <div className="popularComics">
      <div className="header">
        <h1 id="popular">Popular This Week</h1>
      </div>

      <div id="template">
      {popular.map((popularComic) => (
          <Link to={`/comics/${popularComic._id}`} key={popularComic._id}>
            <div className="comic">
              <img src={popularComic.coverImage.url} alt={popularComic.comicName} />

              <div className="contents">
                <div className="contentsHeader">
                  <h3>{popularComic.comicName}</h3>
                </div>
              </div>
            </div>
          </Link>
        ))}      
      </div>
    </div>
  );
};



export default HomePage;
