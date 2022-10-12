import React from "react";
import "./yonalishlar.css";
import yonalish from "../../images/yunalish.jpg";

const Yonalishlar = () => {
  return (
    <section className="yunalishlar-section bg-light">
      <div className="px-2">
        <div
          className=" p-2 rounded text-light bg-primary"
          style={{ fontSize: "1.125rem", textTransform: "uppercase" }}
        >
          Yo'nalishlar
        </div>

        <div className="boxes">
          <div style={{ width: "100%" }}>
            <div className="position-relative rounded box">
              <img src={yonalish} alt="" className="image" />
              <div className="yunalish-div">
                <p className="text-light p-0 m-0 yunalish-name">Iqtisod </p>
              </div>
            </div>
          </div>

          <div style={{ width: "100%" }}>
            <div className="position-relative rounded box">
              <img src={yonalish} alt="" className="image" />
              <div className="yunalish-div">
                <p className="text-light p-0 m-0 yunalish-name">Iqtisod </p>
              </div>
            </div>
          </div>

          <div style={{ width: "100%" }}>
            <div className="position-relative rounded box">
              <img src={yonalish} alt="" className="image" />
              <div className="yunalish-div">
                <p className="text-light p-0 m-0 yunalish-name">Iqtisod </p>
              </div>
            </div>
          </div>

          <div style={{ width: "100%" }}>
            <div className="position-relative rounded box">
              <img src={yonalish} alt="" className="image" />
              <div className="yunalish-div">
                <p className="text-light p-0 m-0 yunalish-name">Iqtisod </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Yonalishlar;
