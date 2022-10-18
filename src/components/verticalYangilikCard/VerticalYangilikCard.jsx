import React from "react";
import "./verticalYangiliklarCard.css";
import cardImage from "../../images/person.jpg";

const VerticalYangilikCard = () => {
  return (
    <section className="vertical-yangiliklar-section-left bg-light mt-4">
      <div className="p-2 text-white  bg-primary mx-2 ">
        <h4
          style={{ fontSize: "1.125rem", textTransform: "uppercase" }}
          className="m-0 p-0"
        >
          Barcha yangiliklar
        </h4>
      </div>

      <div className="row p-2">
        <div className="col-lg-4">
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
        <div className="col-lg-4">
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

        <div className="col-lg-4">
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
    </section>
  );
};

export default VerticalYangilikCard;
