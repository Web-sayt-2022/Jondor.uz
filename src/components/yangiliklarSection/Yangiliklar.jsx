import React from "react";
import { urlFile } from "../../config";
import { useNavigate } from "react-router-dom";
import "./yangiliklar.css";

const Yangiliklar = ({ news }) => {
  const navigate = useNavigate();

  const navigatorPage = (dat) => {
    navigate("/yangilik_batafsil", {
      state: dat,
    });
  };

  return (
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
        {news?.length > 0 &&
          news.map(
            (dat, index) =>
              !dat.actual && (
                <div
                  key={index}
                  className="col-xl-3 col-md-6"
                  onClick={() => navigatorPage(dat)}
                >
                  <div className="card card-hover">
                    <div className="card-img-actions">
                      <div className="img-scale">
                        <img
                          className="img-fluid img-fluid-hover"
                          src={`${urlFile}/${dat.generatedNames[0]}`}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="card-body py-2">
                      <h5 className="card-title text-primary font-weight-bold p-0 m-0">
                        <i className="icon-calendar3"></i>
                        {new Date(dat.createdAt).toLocaleDateString()}
                      </h5>
                      <p
                        className="card-text card-text-title"
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
                        display: "flex",
                        justifyContent: "space-between",
                      }}
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
                        href="./yangilik_batafsil"
                        className="text-primary font-weight-semybold"
                        style={{ cursor: "pointer" }}
                      >
                        Batafsil
                        <i className="icon-arrow-right8"></i>
                      </a>
                    </div>
                  </div>
                </div>
              )
          )}
      </div>
    </section>
  );
};

export default Yangiliklar;
