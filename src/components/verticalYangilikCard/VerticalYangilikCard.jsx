import React from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { urlFile } from "../../config";
import "./verticalYangiliklarCard.css";

const VerticalYangilikCard = ({ data, totalElements, setToggleHandler, currentPage, size, handlePageClick }) => {
  const navigate = useNavigate()
  console.log(data);
  return (
    <section className="vertical-yangiliklar-section-left bg-light mt-3">
      <div className="p-2 text-white  bg-primary mx-2 d-flex align-content-center justify-content-between rounded">
        <h4 style={{ fontSize: "1.125rem", textTransform: "uppercase" }}
          className="m-0 p-0">
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
            onClick={() => setToggleHandler(true)}
            className="icon-grid6"
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
          ></i>
          <i
            onClick={() => setToggleHandler(false)}
            className="icon-paragraph-justify3"
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
          ></i>
        </div>
      </div>

      <div className="row px-2 pt-2">
        {
          data?.map((item) => {
            return (
              <div className="col-lg-4 col-md-6 mb-2">
                <div className="card card-hover p-2 m-0 pb-0">
                  <div className="card-img-actions">
                    <div className="img-scale">
                      <img className="img-fluid img-fluid-hover"
                        src={`${urlFile}/${item?.generatedNames[0]}`}
                        alt="rasm" />
                    </div>
                  </div>
                  <div className="card-body p-1">
                    <h6 className="card-title text-primary font-weight-bold p-0 m-0">
                      <i className="icon-calendar3"></i>
                      {item?.createdDate.substr(0, 10).split("-").reverse().join(".")}
                    </h6>
                    <p className="card-text card-text-title mt-1 new-p-vertical">
                      {item.uzTitle}
                    </p>
                  </div>

                  <div
                    className="card-footer py-2 px-2 bg-white"
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                  >
                    <ul className="list-inline mb-0 mt-1">
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
          })
        }

        {/* <div className="col-lg-4 col-md-6 mb-2">
          <div className="card card-hover p-2 m-0 pb-0">
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
              <h6 className="card-title text-primary font-weight-bold p-0 m-0">
                <i className="icon-calendar3"></i>
                13.03.2003
              </h6>
              <p
                className="card-text card-text-title mt-1 new-p-vertical"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
              </p>
            </div>

            <div
              className="card-footer py-2 px-2 bg-white"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <ul className="list-inline mb-0 mt-1">
                <li className="list-inline-item">
                  <a href="#1" className="text-body">
                    <i className="icon-eye4 mr-2"></i>
                    438
                  </a>
                </li>
              </ul>

              <a
                href="#1"
                className="text-primary font-weight-semybold"
                style={{ cursor: "pointer" }}
              >
                Batafsil
                <i className="icon-arrow-right8"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-2">
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
              <h6 className="card-title text-primary font-weight-bold p-0 m-0">
                <i className="icon-calendar3"></i>
                13.03.2003
              </h6>
              <p
                className="card-text card-text-title mt-1 new-p-vertical"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
              </p>
            </div>

            <div
              className="card-footer p-2 px-2 bg-white"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <ul className="list-inline mb-0 mt-1">
                <li className="list-inline-item">
                  <a href="#1" className="text-body">
                    <i className="icon-eye4 mr-2"></i>
                    438
                  </a>
                </li>
              </ul>

              <a
                href="#1"
                className="text-primary font-weight-semybold"
                style={{ cursor: "pointer" }}
              >
                Batafsil
                <i className="icon-arrow-right8"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-2">
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
              <h6 className="card-title text-primary font-weight-bold p-0 m-0">
                <i className="icon-calendar3"></i>
                13.03.2003
              </h6>
              <p
                className="card-text card-text-title mt-1 new-p-vertical"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
              </p>
            </div>

            <div
              className="card-footer p-2 px-2 bg-white"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <ul className="list-inline mb-0 mt-1">
                <li className="list-inline-item">
                  <a href="#1" className="text-body">
                    <i className="icon-eye4 mr-2"></i>
                    438
                  </a>
                </li>
              </ul>

              <a
                href="#1"
                className="text-primary font-weight-semybold"
                style={{ cursor: "pointer" }}
              >
                Batafsil
                <i className="icon-arrow-right8"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-2">
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
              <h6 className="card-title text-primary font-weight-bold p-0 m-0">
                <i className="icon-calendar3"></i>
                13.03.2003
              </h6>
              <p
                className="card-text card-text-title mt-1 new-p-vertical"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
              </p>
            </div>

            <div
              className="card-footer p-2 px-2 bg-white"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <ul className="list-inline mb-0 mt-1">
                <li className="list-inline-item">
                  <a href="#1" className="text-body">
                    <i className="icon-eye4 mr-2"></i>
                    438
                  </a>
                </li>
              </ul>

              <a
                href="#1"
                className="text-primary font-weight-semybold"
                style={{ cursor: "pointer" }}
              >
                Batafsil
                <i className="icon-arrow-right8"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-2">
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
              <h6 className="card-title text-primary font-weight-bold p-0 m-0">
                <i className="icon-calendar3"></i>
                13.03.2003
              </h6>
              <p
                className="card-text card-text-title mt-1 new-p-vertical"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
              </p>
            </div>

            <div
              className="card-footer p-2 px-2 bg-white"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <ul className="list-inline mb-0 mt-1">
                <li className="list-inline-item">
                  <a href="#1" className="text-body">
                    <i className="icon-eye4 mr-2"></i>
                    438
                  </a>
                </li>
              </ul>

              <a
                href="#1"
                className="text-primary font-weight-semybold"
                style={{ cursor: "pointer" }}
              >
                Batafsil
                <i className="icon-arrow-right8"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-2">
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
              <h6 className="card-title text-primary font-weight-bold p-0 m-0">
                <i className="icon-calendar3"></i>
                13.03.2003
              </h6>
              <p
                className="card-text card-text-title mt-1 new-p-vertical"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
              </p>
            </div>

            <div
              className="card-footer p-2 px-2 bg-white"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <ul className="list-inline mb-0 mt-1">
                <li className="list-inline-item">
                  <a href="#1" className="text-body">
                    <i className="icon-eye4 mr-2"></i>
                    438
                  </a>
                </li>
              </ul>

              <a
                href="#1"
                className="text-primary font-weight-semybold"
                style={{ cursor: "pointer" }}
              >
                Batafsil
                <i className="icon-arrow-right8"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-2">
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
              <h6 className="card-title text-primary font-weight-bold p-0 m-0">
                <i className="icon-calendar3"></i>
                13.03.2003
              </h6>
              <p
                className="card-text card-text-title mt-1 new-p-vertical"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
              </p>
            </div>

            <div
              className="card-footer p-2 px-2 bg-white"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <ul className="list-inline mb-0 mt-1">
                <li className="list-inline-item">
                  <a href="#1" className="text-body">
                    <i className="icon-eye4 mr-2"></i>
                    438
                  </a>
                </li>
              </ul>

              <a
                href="#1"
                className="text-primary font-weight-semybold"
                style={{ cursor: "pointer" }}
              >
                Batafsil
                <i className="icon-arrow-right8"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-2">
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
              <h6 className="card-title text-primary font-weight-bold p-0 m-0">
                <i className="icon-calendar3"></i>
                13.03.2003
              </h6>
              <p
                className="card-text card-text-title mt-1 new-p-vertical"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
              </p>
            </div>

            <div
              className="card-footer p-2 px-2 bg-white"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <ul className="list-inline mb-0 mt-1">
                <li className="list-inline-item">
                  <a href="#1" className="text-body">
                    <i className="icon-eye4 mr-2"></i>
                    438
                  </a>
                </li>
              </ul>

              <a
                href="#1"
                className="text-primary font-weight-semybold"
                style={{ cursor: "pointer" }}
              >
                Batafsil
                <i className="icon-arrow-right8"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-2">
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
              <h6 className="card-title text-primary font-weight-bold p-0 m-0">
                <i className="icon-calendar3"></i>
                13.03.2003
              </h6>
              <p
                className="card-text card-text-title mt-1 new-p-vertical"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
              </p>
            </div>

            <div
              className="card-footer p-2 px-2 bg-white"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <ul className="list-inline mb-0 mt-1">
                <li className="list-inline-item">
                  <a href="#1" className="text-body">
                    <i className="icon-eye4 mr-2"></i>
                    438
                  </a>
                </li>
              </ul>

              <a
                href="#1"
                className="text-primary font-weight-semybold"
                style={{ cursor: "pointer" }}
              >
                Batafsil
                <i className="icon-arrow-right8"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-2">
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
              <h6 className="card-title text-primary font-weight-bold p-0 m-0">
                <i className="icon-calendar3"></i>
                13.03.2003
              </h6>
              <p
                className="card-text card-text-title mt-1 new-p-vertical"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
              </p>
            </div>

            <div
              className="card-footer p-2 px-2 bg-white"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <ul className="list-inline mb-0 mt-1">
                <li className="list-inline-item">
                  <a href="#1" className="text-body">
                    <i className="icon-eye4 mr-2"></i>
                    438
                  </a>
                </li>
              </ul>

              <a
                href="#1"
                className="text-primary font-weight-semybold"
                style={{ cursor: "pointer" }}
              >
                Batafsil
                <i className="icon-arrow-right8"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-2">
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
              <h6 className="card-title text-primary font-weight-bold p-0 m-0">
                <i className="icon-calendar3"></i>
                13.03.2003
              </h6>
              <p
                className="card-text card-text-title mt-1 new-p-vertical"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
              </p>
            </div>

            <div
              className="card-footer p-2 px-2 bg-white"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <ul className="list-inline mb-0 mt-1">
                <li className="list-inline-item">
                  <a href="#1" className="text-body">
                    <i className="icon-eye4 mr-2"></i>
                    438
                  </a>
                </li>
              </ul>

              <a
                href="#1"
                className="text-primary font-weight-semybold"
                style={{ cursor: "pointer" }}
              >
                Batafsil
                <i className="icon-arrow-right8"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-2">
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
              <h6 className="card-title text-primary font-weight-bold p-0 m-0">
                <i className="icon-calendar3"></i>
                13.03.2003
              </h6>
              <p
                className="card-text card-text-title mt-1 new-p-vertical"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
                ratione excepturi expedita assumenda voluptas facilis accusamus
                earum modi nesciunt ipsa.
              </p>
            </div>

            <div
              className="card-footer p-2 px-2 bg-white"
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <ul className="list-inline mb-0 mt-1">
                <li className="list-inline-item">
                  <a href="#1" className="text-body">
                    <i className="icon-eye4 mr-2"></i>
                    438
                  </a>
                </li>
              </ul>

              <a
                href="#1"
                className="text-primary font-weight-semybold"
                style={{ cursor: "pointer" }}
              >
                Batafsil
                <i className="icon-arrow-right8"></i>
              </a>
            </div>
          </div>
        </div> */}
      </div>

      <ReactPaginate
        previousLabel="<<"
        nextLabel=">>"
        pageCount={totalElements / size}
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

export default React.memo(VerticalYangilikCard);
