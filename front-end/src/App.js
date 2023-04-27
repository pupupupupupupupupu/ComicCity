// import React from "react";
// import "./App.css";
// import Navbar from "./components/navbar"
// import Footer from "./components/footer"
// // import comicCity from "./extras/Comic City.png";
// import marsRed from "./extras/marsRed.png";
// import blueMoon from "./extras/vampireBlue.png";
// import mushoku from "./extras/mushokuTensei.png";
// import noblesse from "./extras/Noblesse.png";
// import TianGuanCiFu from "./extras/TianGuanCiFu.png"
// import NanoMachine from "./extras/NanoMachine.png"
// import SwordSage from "./extras/SowrdSage.png"
// import SwordKing from "./extras/SwordKing.png"
// // import footerLogo from "./extras/ComicCityFooter.png"



// // import Swiper core and required modules
// import { Navigation, Pagination, Autoplay } from 'swiper'; //EffectCoverflow,Scrollbar, A11y

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import 'swiper/css/bundle';
// import 'swiper/css/effect-coverflow'

// function App() {
  
//   return (
//     <>

//       <Navbar />
//       <div className="App">
//         <div id="navbar">
        
//           <div id="logoContainer">
//           </div>
//         </div>

//         <div><Carousel /></div>
//         <div><PopularComics /></div>      
//         <div><LastRead /></div>

//       </div>

//       <footer><Footer /></footer>
    
//     </>
//   );
// }


// const Carousel = () => {
//   return (
//     <div className="carousel">  
//        <div className="swiper">
      
//           <Swiper
//             // effect={'coverflow'}
//             centeredSlides={true}
//             loop={true}
//             slidesPerView={'auto'}
//             coverflowEffect={{
//               rotate: 0,
//               stretch: 0,
//               depth: 100,
//               modifier: 2.5,
//             }}
//             pagination={{ el: '.swiper-pagination', clickable: false }}
//             navigation={{
//               nextEl: '.swiper-button-next',
//               prevEl: '.swiper-button-prev',
//               clickable: true,
//             }}
//             autoplay={{
//               delay: 3200,
//               disableOnInteraction: false,
//             }}
//             modules={[ Autoplay, Pagination, Navigation]}
//                   // install Swiper modules
//                   // modules={[Navigation, Pagination, Scrollbar, A11y]}
//                   // spaceBetween={50}
//                   // slidesPerView={1}
//                   // autoplay={{
//                   //   delay:2000,
//                   //   disableOnInteraction:false,
//                   // }}
//                   // navigation
//                   // pagination={{ clickable: true }}
//                   // scrollbar={{ draggable: true }}
//                   // onSwiper={(swiper) => console.log(swiper)}
//                   // onSlideChange={() => console.log('slide change')}
//                   >
//                   <SwiperSlide><img src={marsRed} alt="marsRed" /></SwiperSlide>
//                   <SwiperSlide><img src={blueMoon} alt="blueMoon" /></SwiperSlide>
//                   <SwiperSlide><img src={mushoku} alt="mushoku" /></SwiperSlide>
//                   <SwiperSlide><img src={noblesse} alt="noblesse" /></SwiperSlide>

//           </Swiper>
//       </div>
//     </div>
//   );
// };


// const PopularComics = () => {
//   return (
//     <div className="popularComics">
//       <div className="header">
//           <h1>Popular This Week</h1>
//       </div>

//       <div id="template">

//           <div className="comic">
//             <img src={ TianGuanCiFu } alt="TianGuanCiFu" />
            
//             <div className="contents">
//               <div className="contentsHeader">
//                     <h3>Tian Guan Ci Fu</h3>
//                 </div>

//                 {/* <div className="contentsInfo">
//                     <p>Author's Name</p>
//                     <p>Genre</p>
//                 </div>  */}
//             </div>
//           </div>

//           <div className="comic">
//             <img src={ SwordKing } alt="SwordKing" />
            
//             <div className="contents">
//               <div className="contentsHeader">
//                     <h3>Rebirth of Sword King</h3>
//               </div>

//                 {/* <div className="contentsInfo">
//                     <p>Author's Name</p>
//                     <p>Genre</p>
//                 </div>  */}
//             </div>

//           </div>

//           <div className="comic">
//             <img src={ NanoMachine } alt="NanoMachine" />
            
//             <div className="contents">
//                 <div className="contentsHeader">
//                       <h3>Nano Machine</h3>
//                   </div>

//                   {/* <div className="contentsInfo">
//                       <p>Author's Name</p>
//                       <p>Genre</p>
//                   </div> */}
//             </div>
//           </div>

//           <div className="comic">
//             <img src={ SwordSage } alt="SwordSage" />
            
//             <div className="contents">
//               <div className="contentsHeader">
//                   <h3>Heavenly Sword Sage's Grand Saga</h3>
//               </div>

//               {/* <div className="contentsInfo">
//                   <p>Author's Name</p>
//                   <p>Genre</p>
//               </div>               */}
//             </div>
//           </div>
          
//       </div>

//     </div>
//   )
// }


// const LastRead = () => {
//   return (
//     <div className="lastRead">

//       <div className="secondHeader">
//           <h1>Your History</h1>
//       </div>

//       <div className="historyContent">

//           <div className="history">
//             <img src={ SwordSage } alt="Heavenly Sword Sage's Grand Saga" id="historyCover"/>

//             <div className="historyInfo">       
//                 <h3>Heavenly Sword Sage's Grand Saga</h3>
//                 <p>Chapter 17</p>
//                 <p>Chapter 16</p>
//                 <p>Chapter 15</p>
//             </div>
//           </div>

//           <div className="history">
//             <img src={ NanoMachine } alt="historyCover" id="historyCover"/>

//             <div className="historyInfo">       
//                 <h3>Nano Machine</h3>
//                 <p>Chapter 118</p>
//                 <p>Chapter 117</p>
//                 <p>Chapter 116</p>
//             </div>
//           </div>
          
//       </div>

//     </div>
//   )
// }



// export default App;
