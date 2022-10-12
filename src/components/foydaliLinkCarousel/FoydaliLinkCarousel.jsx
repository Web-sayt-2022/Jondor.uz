// import React from "react";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./foydaliLinkCarousel.css";
// import { ArrowBackIos } from "@mui/icons-material";
// import { ArrowForwardIos } from "@mui/icons-material";

// import { carouselData } from "../carousel/CarouselData";

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

// const FoydaliLinkCarousel = () => {
//   return (
//     <div style={{ margin: "30px 150px", padding: "30px" }}>
//       <Slider
//         // centerMode
//         // centerPadding="100px"

//         slidesToShow={3}
//         slidesToScroll={3}
//         autoplay={true}
//         autoplaySpeed={1000}
//         dots={false}
//         initialSlide={1}
//         infinite={true}
//         prevArrow={<PreviousBtn />}
//         nextArrow={<NextBtn />}
//         // customPaging={(i) => {
//         //   return (
//         //     <div>
//         //       <img
//         //         src={carouselData[i]}
//         //         alt=""
//         //         style={{
//         //           width: "60px",
//         //           height: "60px",
//         //           objectFit: "cover",
//         //           borderRadius: "5px",
//         //         }}
//         //       />
//         //     </div>
//         //   );
//         // }}
//         dotsClass="slick-dots custom-indicator"
//       >
//         {carouselData.map((item) => (
//           <ul className="bg-primary row">
//             <li className="">
//               <img
//                 src={item}
//                 alt=""
//                 style={{
//                   width: "100%",
//                   borderRadius: "50%",
//                   objectFit: "cover",
//                 }}
//               />
//               <br />
//               <span>O'zbekiston Respublikasi</span>
//             </li>
//           </ul>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default FoydaliLinkCarousel;
