import React from "react";
import { axiosInstance, urlFile } from "../../config";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Yangiliklar = ({ news }) => {
  const navigate = useNavigate();

  const navigatorPage = (dat) => {
    navigate(`/news/detail/${dat.id}`, { state: dat })
  };

  const changeHandler = async (dat) => {
    try {
      await axiosInstance.post(`news/viewCount?code=${dat.id}`, {});
    } catch (error) {
      console.log(error);
    }
    navigate(`/news/detail/${dat.id}`, { state: dat });
  }

  return (
    <Wrapper>
      <section className="yangiliklar-section bg-light">
        <div className="p-2 text-light rounded bg-primary mx-2 mt-1">
          <h4
            style={{ fontSize: "1.125rem", textTransform: "uppercase" }}
            className="m-0 p-0"
          >
            Barcha yangiliklar
          </h4>
        </div>

        <div className="row p-2 mt-2">
          {news?.length > 0 && news.map((dat) =>
            !dat.actual && (
              <div
                key={dat.id}
                className="col-xl-3 col-md-6"
                onClick={() => navigatorPage(dat)}
              >
                <div className="card card-hover">
                  <div className="card-img-actions">
                    <div className="img-scale m-2">
                      <img
                        className="img-fluid img-fluid-hover rounded"
                        src={`${urlFile}/${dat.generatedNames[0]}`}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="card-body pt-0 pb-2 px-2">
                    <h5 className="card-title text-primary font-weight-bold p-0 m-0">
                      <i className="icon-calendar3"></i>
                      {dat?.createdDate.substr(0, 10).split("-").reverse().join(".")}
                    </h5>
                    <p
                      className="card-text card-text-title mt-2"
                      style={{
                        textAlign: "justify",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        color: "#2a4d85",
                        fontSize: "1rem",
                      }}
                    >
                      {dat.uzTitle}
                    </p>
                  </div>

                  <div
                    className="card-footer p-2 px-2"
                    style={{
                      height: "44px",
                      display: "flex",
                      justifyContent: "space-between",
                      background: "rgba(38, 137, 229, 0.1)"
                    }}
                  >
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a href="#1" className="text-primary font-weight-semybold">
                          <i className="icon-eye4 mr-2 text-black"></i>
                          {dat?.countView}
                        </a>
                      </li>
                    </ul>
                    <span onClick={() => changeHandler(dat)}
                      className="text-primary font-weight-semybold"
                      style={{ cursor: "pointer" }}>
                      Batafsil
                      <i className="icon-arrow-right8"></i>
                    </span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </Wrapper>

  );
};

export default React.memo(Yangiliklar);

const Wrapper = styled.div`
  /* .yangiliklar-section {
  width: 345px;
} */

.yangiliklar-section .card-body {
  height: 10rem;
  max-height: 11.25rem;
}

.yangiliklar-section .card-text-title {
  cursor: pointer;
}

.yangiliklar-section .card-text-title:hover {
  color: #2196f3;
}

.yangiliklar-section .img-scale {
  overflow: hidden;
}

.yangiliklar-section .img-fluid {
  transition: 0.3s linear !important;
  width: 100%;
  height: 15.625rem;
  object-fit: cover;
}

.yangiliklar-section .img-fluid-hover:hover {
  transform: scale(1.1);
}

.yangiliklar-section .card-hover {
  transition: 0.3s linear !important;
}

.yangiliklar-section .card-hover:hover {
  box-shadow: rgba(0, 0, 0, 0.19) 0px 0.625rem 1.25rem,
    rgba(0, 0, 0, 0.23) 0px 0.375rem 0.375rem;
  transform: scale(1.02);
}

.yangiliklar-section .modal-backdrop + .yangiliklar-section .show {
  opacity: 0.1 !important;
}

`
