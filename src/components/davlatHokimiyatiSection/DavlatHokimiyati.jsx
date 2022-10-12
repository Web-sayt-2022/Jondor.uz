import React from "react";
import sektor1Image from "../../images/sektor-1.png";
import "./davlatHokimiyati.css";
const DavlatHokimiyati = () => {
  return (
    <section className="davlat-hokimiyati-section bg-light ">
      <div className="davlat-sektor px-2 mt-2">
        <div>
          <div
            className="p-2 mt-2 text-light rounded bg-primary"
            style={{ fontSize: "1.125rem", textTransform: "uppercase" }}
          >
            Sektorlar
          </div>

          <div className="sectorlar mt-2">
            <div className="sektor">
              <div className="d-flex justify-content-center align-items-center sektor-img">
                <img src={sektor1Image} alt="" />
              </div>
              <h3 className="text-light bg-secondary name">SEKTOR-1</h3>
            </div>

            <div className="sektor">
              <div className="d-flex justify-content-center align-items-center sektor-img">
                <img src={sektor1Image} alt="" />
              </div>
              <h3 className="text-light bg-secondary name">SEKTOR-2</h3>
            </div>

            <div className="sektor">
              <div className="d-flex justify-content-center align-items-center sektor-img">
                <img src={sektor1Image} alt="" />
              </div>
              <h3 className="text-light bg-secondary name">SEKTOR-3</h3>
            </div>

            <div className="sektor">
              <div className="d-flex justify-content-center align-items-center sektor-img">
                <img src={sektor1Image} alt="" />
              </div>
              <h3 className="text-light bg-secondary name">SEKTOR-4</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DavlatHokimiyati;
