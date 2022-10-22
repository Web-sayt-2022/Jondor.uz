import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import AlertContent, { Alert } from "../alert/Alert";
import "./verticalYangiliklarCard.css";
import { axiosInstance } from "../../config";

const VerticalYangilikCard = ({ sectionVerticalRef, sectionHorizontalRef }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [size, setSize] = useState(10);
  const [alert, setAlert] = useState({ open: false, color: "", text: "" });

  const toggleHandler = (isTrusty) => {
    sectionVerticalRef.current.style.display = "none";
    sectionHorizontalRef.current.style.display = "none";
    if (isTrusty) {
      sectionHorizontalRef.current.style.display = "block";
    } else {
      sectionVerticalRef.current.style.display = "block";
    }
  };

  useEffect(() => {
    axiosInstance
      .get(`news/getAll`, {
        page: currentPage,
        size: size,
        sort: null,
      })
      .then((res) => {
        console.log(res.data);
      });
  }, []);

  const handlePageClick = (e) => {
    axiosInstance
      .get(``, {
        page: e.selected,
        size: size,
      })
      .then((res) => {
        console.log(1);
      })
      .catch((error) => {
        Alert(setAlert, "warning", error.response.data);
      });
  };

  return (
    <section
      className="vertical-yangiliklar-section-left bg-light mt-4"
      ref={sectionVerticalRef}
      style={{ display: "none" }}
    >
      <div className="p-2 text-white  bg-primary mx-2 d-flex align-content-center justify-content-between">
        <h4
          style={{ fontSize: "1.125rem", textTransform: "uppercase" }}
          className="m-0 p-0"
        >
          Yangiliklar
        </h4>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <i
            onClick={() => toggleHandler(false)}
            className="icon-grid6"
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
          ></i>
          <i
            onClick={() => toggleHandler(true)}
            className="icon-paragraph-justify3"
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
          ></i>
        </div>
      </div>

      <div className="row p-2">
        <div className="col-lg-4 col-md-6">
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
            <div className="card-body p-2">
              <h6 className="card-title text-primary font-weight-bold p-0 m-0">
                <i className="icon-calendar3"></i>
                13.03.2003
              </h6>
              <p
                className="card-text card-text-title mt-1"
                style={{
                  textAlign: "justify",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "#2a4d85",
                  fontSize: "0.8rem",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
              </p>
            </div>

            <div
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
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
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
            <div className="card-body p-2">
              <h6 className="card-title text-primary font-weight-bold p-0 m-0">
                <i className="icon-calendar3"></i>
                13.03.2003
              </h6>
              <p
                className="card-text card-text-title mt-1"
                style={{
                  textAlign: "justify",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "#2a4d85",
                  fontSize: "0.8rem",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
              </p>
            </div>

            <div
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
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
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
            <div className="card-body p-2">
              <h6 className="card-title text-primary font-weight-bold p-0 m-0">
                <i className="icon-calendar3"></i>
                13.03.2003
              </h6>
              <p
                className="card-text card-text-title mt-1"
                style={{
                  textAlign: "justify",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "#2a4d85",
                  fontSize: "0.8rem",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
              </p>
            </div>

            <div
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
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
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
            <div className="card-body p-2">
              <h6 className="card-title text-primary font-weight-bold p-0 m-0">
                <i className="icon-calendar3"></i>
                13.03.2003
              </h6>
              <p
                className="card-text card-text-title mt-1"
                style={{
                  textAlign: "justify",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "#2a4d85",
                  fontSize: "0.8rem",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
              </p>
            </div>

            <div
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
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
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
            <div className="card-body p-2">
              <h6 className="card-title text-primary font-weight-bold p-0 m-0">
                <i className="icon-calendar3"></i>
                13.03.2003
              </h6>
              <p
                className="card-text card-text-title mt-1"
                style={{
                  textAlign: "justify",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "#2a4d85",
                  fontSize: "0.8rem",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
              </p>
            </div>

            <div
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
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
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
            <div className="card-body p-2">
              <h6 className="card-title text-primary font-weight-bold p-0 m-0">
                <i className="icon-calendar3"></i>
                13.03.2003
              </h6>
              <p
                className="card-text card-text-title mt-1"
                style={{
                  textAlign: "justify",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "#2a4d85",
                  fontSize: "0.8rem",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
              </p>
            </div>

            <div
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
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
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
            <div className="card-body p-2">
              <h6 className="card-title text-primary font-weight-bold p-0 m-0">
                <i className="icon-calendar3"></i>
                13.03.2003
              </h6>
              <p
                className="card-text card-text-title mt-1"
                style={{
                  textAlign: "justify",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "#2a4d85",
                  fontSize: "0.8rem",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
              </p>
            </div>

            <div
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
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
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
            <div className="card-body p-2">
              <h6 className="card-title text-primary font-weight-bold p-0 m-0">
                <i className="icon-calendar3"></i>
                13.03.2003
              </h6>
              <p
                className="card-text card-text-title mt-1"
                style={{
                  textAlign: "justify",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "#2a4d85",
                  fontSize: "0.8rem",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
              </p>
            </div>

            <div
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
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
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
            <div className="card-body p-2">
              <h6 className="card-title text-primary font-weight-bold p-0 m-0">
                <i className="icon-calendar3"></i>
                13.03.2003
              </h6>
              <p
                className="card-text card-text-title mt-1"
                style={{
                  textAlign: "justify",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "#2a4d85",
                  fontSize: "0.8rem",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
              </p>
            </div>

            <div
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
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
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
            <div className="card-body p-2">
              <h6 className="card-title text-primary font-weight-bold p-0 m-0">
                <i className="icon-calendar3"></i>
                13.03.2003
              </h6>
              <p
                className="card-text card-text-title mt-1"
                style={{
                  textAlign: "justify",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "#2a4d85",
                  fontSize: "0.8rem",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
              </p>
            </div>

            <div
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
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
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
            <div className="card-body p-2">
              <h6 className="card-title text-primary font-weight-bold p-0 m-0">
                <i className="icon-calendar3"></i>
                13.03.2003
              </h6>
              <p
                className="card-text card-text-title mt-1"
                style={{
                  textAlign: "justify",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "#2a4d85",
                  fontSize: "0.8rem",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
              </p>
            </div>

            <div
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
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
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
            <div className="card-body p-2">
              <h6 className="card-title text-primary font-weight-bold p-0 m-0">
                <i className="icon-calendar3"></i>
                13.03.2003
              </h6>
              <p
                className="card-text card-text-title mt-1"
                style={{
                  textAlign: "justify",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "#2a4d85",
                  fontSize: "0.8rem",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
              </p>
            </div>

            <div
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
            </div>
          </div>
        </div>
      </div>

      <ReactPaginate
        previousLabel="<<"
        nextLabel=">>"
        pageCount={500 / size}
        breakLabel="..."
        className="paginate"
        activeClassName="active"
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        forcePage={currentPage}
      />
    </section>
  );
};

export default VerticalYangilikCard;
