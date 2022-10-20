import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./foydaliLinkCarousel.css";
import bayroqImg from "../../images/Bayroq2.jpg";
import { ArrowBackIos } from "@mui/icons-material";
import { ArrowForwardIos } from "@mui/icons-material";
import yonalish from "../../images/yunalish.jpg";
import { carouselData } from "../carousel/CarouselData";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";

// const PreviousBtn = (props) => {
//   const { className, style, onClick } = props;

//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red", color: "white",  }}
//       onClick={onClick}
//     />
//   );
// };

// const NextBtn = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// };

const FoydaliLinkCarousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}
        slidesPerGroup={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      
        loopFillGroupWithBlank={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a className="position-relative rounded box">
            <img src={yonalish} alt="" className="img-fluid" />
            <div className="yunalish-div">
              <p className="text-light p-0 m-0 yunalish-name">Iqtisod </p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className="position-relative rounded box">
            <img src={yonalish} alt="" className="img-fluid" />
            <div className="yunalish-div">
              <p className="text-light p-0 m-0 yunalish-name">Iqtisod </p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className="position-relative rounded box">
            <img src={yonalish} alt="" className="img-fluid" />
            <div className="yunalish-div">
              <p className="text-light p-0 m-0 yunalish-name">Iqtisod </p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className="position-relative rounded box">
            <img src={yonalish} alt="" className="img-fluid" />
            <div className="yunalish-div">
              <p className="text-light p-0 m-0 yunalish-name">Iqtisod </p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className="position-relative rounded box">
            <img src={yonalish} alt="" className="img-fluid" />
            <div className="yunalish-div">
              <p className="text-light p-0 m-0 yunalish-name">Iqtisod </p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className="position-relative rounded box">
            <img src={yonalish} alt="" className="img-fluid" />
            <div className="yunalish-div">
              <p className="text-light p-0 m-0 yunalish-name">Iqtisod </p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className="position-relative rounded box">
            <img src={yonalish} alt="" className="img-fluid" />
            <div className="yunalish-div">
              <p className="text-light p-0 m-0 yunalish-name">Iqtisod </p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className="position-relative rounded box">
            <img src={yonalish} alt="" className="img-fluid" />
            <div className="yunalish-div">
              <p className="text-light p-0 m-0 yunalish-name">Iqtisod </p>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a className="position-relative rounded box">
            <img src={yonalish} alt="" className="img-fluid" />
            <div className="yunalish-div">
              <p className="text-light p-0 m-0 yunalish-name">Iqtisod </p>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default FoydaliLinkCarousel;
