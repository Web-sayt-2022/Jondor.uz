import React, { useState } from "react";
import "./voqealarLeftPanel.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import gerbImg from "../../images/gerb.png";
import x2Img from "../../images/x2.png";
import prezMurImg from "../../images/prezmur.png";
import govuzImg from "../../images/govuzlaw.png";
import govuzRectangle from "../../images/govuzRectangle.png";
import harakatlarStrategiyasiImg from "../../images/harakatlar strategiyasi.png";

const VoqealarLeftPanel = () => {
  const [value, onChange] = useState(new Date());

  return (
    <section className="voqealar-section-left bg-light mt-4">
      <div className="p-2 text-white  bg-primary mx-2 ">
        <h4
          style={{ fontSize: "1.125rem", textTransform: "uppercase" }}
          className="m-0 p-0"
        >
          Voqealar
        </h4>
      </div>

      <div className="row p-2">
        <div className="col-lg-12">
          <div className="card card-hover p-2">
            <div className="card-img-actions">
              <div className="img-scale">
                <img
                  className="img-fluid img-fluid-hover"
                  src="https://storage.kun.uz/source/thumbnails/_medium/8/j6psK3WhZryqGt8cQuT_Gp-VWBYK9cb__medium.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="card-body p-1">
              <a
                className="card-text card-text-title mt-1"
                style={{
                  textAlign: "justify",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "#2a4d85",
                  fontSize: "0.8rem",
                }}
              >
                Yerlarimiz shiddat bilan ishdan chiqyapti, chunki tayinli
                Yerlarimiz shiddat bilan ishdan chiqyapti, chunki tayinli
                yo‘q...
              </a>
            </div>

            {/* <div
              className="card-footer p-2 px-2"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a href="#" className="text-body">
                    <i className="icon-eye4 mr-2"></i>
                    438
                  </a>
                </li>
              </ul>

              <a
                href="./deteile_news.html"
                className="text-primary font-weight-semybold"
                style={{ cursor: "pointer" }}
              >
                Batafsil
                <i className="icon-arrow-right8"></i>
              </a>
            </div> */}
          </div>
        </div>

        <div className="col-lg-12 my-3 py-2">
          <div className="splide__track">
            <ul className="splide__list">
              <li className="splide__slide">
                <div className="img-div">
                  <img
                    src={harakatlarStrategiyasiImg}
                    alt=""
                    className="image"
                  />
                </div>
                <a href="#" className="text-light px-2">
                  Harakatlar strategiyasi
                </a>
              </li>
              <li className="splide__slide">
                <div className="img-div">
                  <img
                    src={harakatlarStrategiyasiImg}
                    alt=""
                    className="image"
                  />
                </div>
                <a href="#" className="text-light px-2">
                  Harakatlar strategiyasi
                </a>
              </li>
              <li className="splide__slide">
                <div className="img-div">
                  <img
                    src={harakatlarStrategiyasiImg}
                    alt=""
                    className="image"
                  />
                </div>
                <a href="#" className="text-light px-2">
                  Harakatlar strategiyasi
                </a>
              </li>
              <li className="splide__slide">
                <div className="img-div">
                  <img
                    src={harakatlarStrategiyasiImg}
                    alt=""
                    className="image"
                  />
                </div>
                <a href="#" className="text-light px-2">
                  Harakatlar strategiyasi
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-lg-12 py-1">
          <div>
            <Calendar onChange={onChange} value={value} />
          </div>
        </div>

        <div className="mt-3 p-2">
          <div className="splide__track">
            <ul className="splide__list">
              <li className="splide__slide">
                <div className="img-div">
                  <img
                    src={harakatlarStrategiyasiImg}
                    alt=""
                    className="image"
                  />
                </div>
                <a href="#" className="text-light px-2">
                  Harakatlar strategiyasi
                </a>
              </li>
              <li className="splide__slide">
                <div className="img-div">
                  <img
                    src={harakatlarStrategiyasiImg}
                    alt=""
                    className="image"
                  />
                </div>
                <a href="#" className="text-light px-2">
                  Harakatlar strategiyasi
                </a>
              </li>
              <li className="splide__slide">
                <div className="img-div">
                  <img
                    src={harakatlarStrategiyasiImg}
                    alt=""
                    className="image"
                  />
                </div>
                <a href="#" className="text-light px-2">
                  Harakatlar strategiyasi
                </a>
              </li>
              <li className="splide__slide">
                <div className="img-div">
                  <img
                    src={harakatlarStrategiyasiImg}
                    alt=""
                    className="image"
                  />
                </div>
                <a href="#" className="text-light px-2">
                  Harakatlar strategiyasi
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoqealarLeftPanel;
