import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { axiosInstance, urlFile } from "../../config";

const LeftPanel = () => {
  const [data, setData] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    axiosInstance.get(`news/getBySize/?size=4`).then(res => {
      setData(res.data)
    })
  }, [])

  return (
    <Wrapper>
      <section className="yangiliklar-section-left bg-light mt-3">
        <div className="p-2 text-white  bg-primary mx-2 rounded">
          <h4
            style={{ fontSize: "1.125rem", textTransform: "uppercase" }}
            className="m-0 p-0 text-center"
          >
            So'ngi yangiliklar
          </h4>
        </div>

        <div className="row p-2">
          {data?.length > 0 && data?.map((item) => {
            return (
              <div className="col-lg-12 px-2">
                <div className="card card-hover p-2">
                  <div className="card-img-actions">
                    <div className="img-scale">
                      <img
                        className="img-fluid img-fluid-hover"
                        src={`${urlFile}/${item?.generatedNames[0]}`}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="card-body p-2">
                    <h6 className="card-title text-primary font-weight-bold p-0 m-0">
                      <i className="icon-calendar3"></i>
                      {item?.createdDate.substr(0, 10).split("-").reverse().join(".")}
                    </h6>
                    <p
                      className="card-text card-text-title mt-1 horiz-p"
                      style={{
                        textAlign: "justify",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        color: "#2a4d85",
                        fontSize: "0.8rem",
                      }}
                    >
                      {item.uzTitle}
                    </p>
                  </div>

                  <div
                    className="card-footer p-2 px-2 bg-white"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a href="#1" className="text-body">
                          <i className="icon-eye4 mr-2"></i>
                          {item?.countView}
                        </a>
                      </li>
                    </ul>

                    <span onClick={() => navigate(`/news/detail/${item.id}`, { state: item })}
                      className="text-primary font-weight-semybold"
                      style={{ cursor: "pointer" }}>
                      Batafsil
                      <i className="icon-arrow-right8"></i>
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </Wrapper>

  );
};

export default LeftPanel;

const Wrapper = styled.div`
  .yangiliklar-section-left {
  width: 345px;
}

.yangiliklar-section-left .card-text-title {
  cursor: pointer;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-align: justify;
  margin-bottom: 0;
  overflow: hidden;
}

.yangiliklar-section-left .card-text-title:hover {
  color: #2196f3;
}

.yangiliklar-section-left .img-scale {
  overflow: hidden;
}

.yangiliklar-section-left .img-fluid {
  transition: 0.3s linear !important;
  width: 100%;
  object-fit: cover;
}

.yangiliklar-section-left .img-fluid-hover:hover {
  transform: scale(1.1);
}

.yangiliklar-section-left .card-hover {
  transition: 0.3s linear !important;
  margin-bottom: 0.5rem !important;
}

.yangiliklar-section-left .card-hover:hover {
  box-shadow: rgba(0, 0, 0, 0.19) 0px 0.625rem 1.25rem,
    rgba(0, 0, 0, 0.23) 0px 0.375rem 0.375rem;
  transform: scale(1.02);
}

.yangiliklar-section-left .modal-backdrop+.yangiliklar-section .show {
  opacity: 0.1 !important;
}

`
