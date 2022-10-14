import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carouselNews.css";
import { ArrowBackIos } from "@mui/icons-material";
import { ArrowForwardIos } from "@mui/icons-material";
import { urlFile } from "../../config";

const PreviousBtn = (props) => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "black", fontSize: "30px" }} />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "black", fontSize: "30px" }} />
    </div>
  );
};

const CarouselNews = ({ state }) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    initialSlide: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
    // dotsClass: "slick-dots custom-indicator",
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
    <div style={{}}>
      <Slider
        {...settings}
        // centerMode
        // centerPadding="100px"

        // autoplay={false}
        // autoplaySpeed={2000}
        // dots
        // initialSlide={1}
        // infinite
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
        customPaging={(i) => (
          <div>
            <img
              src={urlFile + "file/view/" + state?.images[i]?.generatedName}
              alt=""
              className="customImg"
            />
          </div>
        )}
        dotsClass="slick-dots custom-indicator"
      >
        {state?.images?.length > 0 &&
          state.images.map((src, index) => (
            <div key={index}>
              <img
                src={urlFile + "file/view/" + src.generatedName}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "450px",
                  borderRadius: "5px",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default CarouselNews;
