/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { axiosInstance, urlFile } from "../../config";
const Tuzilish = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axiosInstance.get(`link/list/1`).then((res) => {
      console.log(res.data);
      setData(res.data)
    })
  }, [])
  return (
    <Wrapper>
      <section className="tuzilish-section bg-light">
        <div className="p-2 mt-2">
          <div className="box row">
            <div className="col-lg-6 col-md-12">
              <div
                className="p-2 text-light bg-primary rounded"
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

            <div className="vertical-carousel col-lg-6 col-md-12">
              <div className="p-2 text-light bg-primary rounded"
                style={{ fontSize: "1.125rem", textTransform: "uppercase" }}
              >
                BILISH FOYDALI
              </div>


              <div className="row px-2">

                <div className="col-lg-6 mt-2 p-2 bg-white">
                  <div className="splide__track">
                    <ul className="splide__list">
                      {
                        data?.map((item, index) => {
                          if (index < 5) {
                            return (
                              <li className="splide__slide p-1">
                                <div className="img-div rounded">
                                  <img
                                    src={`${urlFile}/${item.imageID}`}
                                    alt=""
                                    className="image rounded"
                                  />
                                </div>
                                <a href={`${item.url}`} target="_blank" rel="noopener noreferrer"
                                  className="text-light px-2">
                                  {item.uzName}
                                </a>
                              </li>

                            )
                          }
                        })
                      }
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6 mt-2 p-2 bg-white" aria-label="Beautiful Images">
                  <div className="splide__track">
                    <ul className="splide__list">
                      {
                        data?.map((item, index) => {
                          if ((index >= 5) && (index < 10)) {
                            return (
                              <li className="splide__slide p-1">
                                <div className="img-div rounded">
                                  <img
                                    src={`${urlFile}/${item.imageID}`}
                                    alt=""
                                    className="image rounded"
                                  />
                                </div>
                                <a href={`${item.url}`} target="_blank" rel="noopener noreferrer"
                                  className="text-light px-2">
                                  {item.uzName}
                                </a>
                              </li>
                            )
                          }
                        })
                      }

                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section >
    </Wrapper>

  );
};

export default Tuzilish;

const Wrapper = styled.div`
  .tuzilish-section iframe {
    width: 100%;
    height: 25rem;
    border: 0;
  }

  .tuzilish-section .box {
    display: flex;
  }

  .tuzilish-section .tumanlar {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 3.125rem;
    gap: 0.625rem;
  }

  .tuzilish-section .tumanlar div {
    font-size: 1.125rem;
    transition: 0.3s;
  }

  .tuzilish-section .tumanlar div:hover {
    background-color: #ffffff !important;
    color: #45748a !important;
  }

  .tuzilish-section .tumanlar > div:nth-child(1) {
    grid-column: span 2;
  }

  .tuzilish-section .vertical-carousel {
    width: 100%;
  }

  .tuzilish-section .splide__list {
    margin: 0;
    padding: 0;
    height: 25rem;
    /* overflow-y: scroll; */
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .tuzilish-section .splide__list::-webkit-scrollbar {
    width: 6px;
  }

  .tuzilish-section .splide__list::-webkit-scrollbar-track {
    background-color: #fff;
  }

  .tuzilish-section .splide__list::-webkit-scrollbar-thumb {
    background-color: #2a4d85;
    border-radius: 5px;
  }

  .splide__slide {
    display: flex;
    align-items: center;
    background-color: #fff;
    min-height: 3rem !important;
    max-height: 6rem;
    border-radius: 5px;
  }

  .splide__slide img {
    width: 4rem;
    height: 4rem;
    object-fit: cover;
  }

  .my-slider-progress-bar {
    background: greenyellow;
    height: 2px;
    transition: width 400ms ease;
    width: 0;
  }

  #image-carousel button {
    display: none;
  }

  #image-carousel a {
    text-decoration: none;
    text-transform: uppercase;
    color: #fff !important;
    font-size: 1.25rem;
    margin-left: 1rem;
  }

  .splide__slide {
    height: 4.6rem !important;
    background-color: #2a4d85;
    border: 1px solid #2a4d85;
    padding: 0.2rem 0.4rem;
  }

  .splide__slide .img-div {
    width: 4rem;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 0;
    align-items: center;
  }

  .tuzilish-section .splide__slide a {
  
    text-decoration: none;
    text-transform: uppercase;
    color: #fff !important;
    font-size: 1rem;
    margin-left: 1rem;
  }

`
