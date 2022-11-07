import React from "react";

import yonalish from "../../images/yunalish.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
import styled from "styled-components";

const FoydaliLinkCarousel = () => {
  return (
    <Wrapper>
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
      </Swiper>
    </Wrapper>
  );
};

export default FoydaliLinkCarousel;

const Wrapper = styled.div`
  .swiper {
    width: 100%;
    height: 180px;
    padding: 1rem !important;
    background: rgba(51, 51, 51, 0.321);
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    height: 100%;
    /* padding: 2rem !important; */
    width: 220px !important;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;

  
    
    border-radius: 5px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover; 
    border-radius: 5px;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    color: #fff;
    display: none;
  }

  .swiper-slide .box {
    width: 100%;
    /* height: 22.5rem; */
    overflow: hidden;
    transition: 0.5s !important;
    cursor: pointer;
  }

  .swiper-slide .image {
    /* width: 220px !important; */
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-slide .box:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }

  .swiper-slide .box:hover .yunalish-div {
    height: 100%;
  }

  .swiper-slide .yunalish-div {
    width: 100%;
    height: 1.5rem;
    position: absolute;
    bottom: 0;
    margin: 0;
    background-color: rgb(42, 77, 133, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s !important;
  }

  .swiper-slide .yunalish-name {
    max-height: 3rem;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
  }

`
