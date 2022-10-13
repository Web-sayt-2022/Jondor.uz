import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./foydaliLinkCarousel.css";
import { ArrowBackIos } from "@mui/icons-material";
import { ArrowForwardIos } from "@mui/icons-material";

import { carouselData } from "../carousel/CarouselData";

// const PreviousBtn = (props) => {
//   const { className, onClick } = props;

//   return (
//     <div className={className} onClick={onClick}>
//       <ArrowBackIos style={{ color: "black", fontSize: "30px" }} />
//     </div>
//   );
// };

// const NextBtn = (props) => {
//   const { className, onClick } = props;
//   return (
//     <div className={className} onClick={onClick}>
//       <ArrowForwardIos style={{ color: "black", fontSize: "30px" }} />
//     </div>
//   );
// };

const FoydaliLinkCarousel = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",

    // autoplay: true,
    // autoplaySpeed: 2000,
    // slidesToShow: 5,
    // dots: true,
    // initialSlide: 1,
    // infinite: true,
    // slidesToScroll: 1,
    // autoplay: true,
    // speed: 2000,
    // // autoplaySpeed: 2000,
    // cssEase: "linear",
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
    // prevArrow: <PreviousBtn />,
    // nextArrow: <NextBtn />,
    // customPaging: (i) => {
    //   return (
    //     <div>
    //       <img
    //         src={carouselData[i]}
    //         alt=""
    //         style={{
    //           width: "60px",
    //           height: "60px",
    //           objectFit: "cover",
    //           borderRadius: "5px",
    //         }}
    //       />
    //     </div>
    //   );
    // },
    slickClass: "slick-slide custom-slick",
  };

  // const renderSlides = carouselData.map((item) => (
  //   <div>
  //     <img
  //       src={item}
  //       alt=""
  //       style={{
  //         width: "100%",
  //         height: "40vh",
  //         borderRadius: "5px",
  //         objectFit: "contain",
  //       }}
  //     />
  //   </div>
  // ));

  return (
    <div className="my-2 bg-light custom-slide">
      <Slider
        {...settings}
        // centerMode
        // centerPadding="100px"

        // autoplay={false}
        // autoplaySpeed={2000}
        // dots
        // initialSlide={1}
        // infinite
        // prevArrow={<PreviousBtn />}
        // nextArrow={<NextBtn />}
        // customPaging={(i) => {
        //   return (
        //     <div>
        //       <img
        //         src={carouselData[i]}
        //         alt=""
        //         style={{
        //           width: "60px",
        //           height: "60px",
        //           objectFit: "cover",
        //           borderRadius: "5px",
        //         }}
        //       />
        //     </div>
        //   );
        // }}
        // dotsClass="slick-dots custom-indicator"
      >
        {/* <div>
          <img
            src={carouselData[0]}
            alt=""
            style={{
              width: "100%",
              height: "auto",

              // maxHeight: "450px",
              borderRadius: "5px",
              objectFit: "contain",
            }}
          />
        </div>

        <div>
          <img
            src={carouselData[0]}
            alt=""
            style={{
              width: "100%",
              height: "auto",

              // maxHeight: "450px",
              borderRadius: "5px",
              objectFit: "contain",
            }}
          />
        </div>
        <div>
          <img
            src={carouselData[0]}
            alt=""
            style={{
              width: "100%",
              height: "auto",

              // maxHeight: "450px",
              borderRadius: "5px",
              objectFit: "contain",
            }}
          />
        </div>
        <div>
          <img
            src={carouselData[0]}
            alt=""
            style={{
              width: "100%",
              height: "auto",

              // maxHeight: "450px",
              borderRadius: "5px",
              objectFit: "contain",
            }}
          />
        </div>
        <div>
          <img
            src={carouselData[0]}
            alt=""
            style={{
              width: "100%",
              height: "auto",

              // maxHeight: "450px",
              borderRadius: "5px",
              objectFit: "contain",
            }}
          />
        </div> */}

        <a className="d-flex flex-column justify-content-center align-items-center my-2">
          <img
            src={carouselData[0]}
            style={{ width: "220px", height: "130px", borderRadius: "5px" }}
          />
          <br />
          <h5 className="text-center">
            O'zbekiston Respublikasi Konstitutsiyasi
          </h5>
        </a>

        <a
          className="d-flex flex-column justify-content-center align-items-center my-2"
          style={{ cursor: "pointer !important" }}
        >
          <img
            src={carouselData[0]}
            style={{ width: "220px", height: "130px", borderRadius: "5px" }}
          />
          <br />
          <h5 className="text-center">
            O'zbekiston Respublikasi Konstitutsiyasi
          </h5>
        </a>
        <a className="d-flex flex-column justify-content-center align-items-center my-2">
          <img
            src={carouselData[0]}
            style={{ width: "220px", height: "130px", borderRadius: "5px" }}
          />
          <br />
          <h5 className="text-center">
            O'zbekiston Respublikasi Konstitutsiyasi
          </h5>
        </a>
        <a className="d-flex flex-column justify-content-center align-items-center my-2">
          <img
            src={carouselData[0]}
            style={{ width: "220px", height: "130px", borderRadius: "5px" }}
          />
          <br />
          <h5 className="text-center">
            O'zbekiston Respublikasi Konstitutsiyasi
          </h5>
        </a>
        <a className="d-flex flex-column justify-content-center align-items-center my-2">
          <img
            src={carouselData[0]}
            style={{ width: "220px", height: "130px", borderRadius: "5px" }}
          />
          <br />
          <h5 className="text-center">
            O'zbekiston Respublikasi Konstitutsiyasi
          </h5>
        </a>
        <a className="d-flex flex-column justify-content-center align-items-center my-2">
          <img
            src={carouselData[0]}
            style={{ width: "220px", height: "130px", borderRadius: "5px" }}
          />
          <br />
          <h5 className="text-center">
            O'zbekiston Respublikasi Konstitutsiyasi
          </h5>
        </a>
      </Slider>
    </div>
  );
};

export default FoydaliLinkCarousel;
