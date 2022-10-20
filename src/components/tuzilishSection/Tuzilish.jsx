import React from "react";
import harakatlarStrategiyasiImg from "../../images/harakatlar strategiyasi.png";
import "./tuzilish.css";
const Tuzilish = () => {
  return (
    <section className="tuzilish-section bg-light">
      <div className="p-2 mt-2">
        <div className="box row">
          <div className="col-lg-6 col-md-12">
            <div
              className="p-2 text-light bg-primary"
              style={{ fontSize: "1.125rem", textTransform: "uppercase" }}
            >
              Jondor Tumani
            </div>

            <div
              style={{ position: "relative", overflow: "hidden" }}
              className="mt-2 p-2 bg-white"
            >
              <a
                href="https://yandex.uz/maps/10330/bukhara/?utm_medium=mapframe&utm_source=maps"
                style={{
                  color: "#eee",
                  fontSize: "12px",
                  position: "absolute",
                  top: "0px",
                }}
              >
                Бухара
              </a>
              <a
                href="https://yandex.uz/maps/10330/bukhara/?ll=64.419239%2C39.767361&utm_medium=mapframe&utm_source=maps&z=13.14"
                style={{
                  color: "#eee",
                  fontSize: "12px",
                  position: "absolute",
                  top: "14px",
                }}
              >
                Бухара — Яндекс Карты
              </a>
              <iframe
                src="https://yandex.uz/map-widget/v1/-/CCUNyQe~cC"
                frameBorder="1"
                allowFullScreen={true}
                style={{ position: "relative" }}
              ></iframe>
            </div>
          </div>

          <div className="vertical-carousel col-lg-3 col-md-6">
            <div
              className="p-2 text-light bg-primary"
              style={{ fontSize: "1.125rem", textTransform: "uppercase" }}
            >
              BILISH FOYDALI
            </div>

            <div className="mt-2  p-2 bg-white">
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

          <div className="vertical-carousel col-lg-3 col-md-6">
          <div
              className="p-2 text-light bg-primary"
              style={{ fontSize: "1.125rem", textTransform: "uppercase" }}
            >
              BILISH FOYDALI
            </div>

            <div className="mt-2 p-2 bg-white" aria-label="Beautiful Images">
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
                    <a href="#" className="text-light px-2 splide__slide--text">
                      Harakatlar strategiyasini
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
        </div>
      </div>
    </section>
  );
};

export default Tuzilish;
