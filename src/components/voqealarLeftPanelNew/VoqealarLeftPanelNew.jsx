import React, { useState } from "react";
import voqeaImg from "../../images/navruz.jpg";
import harakatlarStrategiyasiImg from "../../images/harakatlar strategiyasi.png";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import { useEffect } from "react";
import { axiosInstance, urlFile } from "../../config";

const VoqealarLeftPanelNew = () => {
  const [value, onChange] = useState(new Date());
  const [data, setData] = useState([])

  useEffect(() => {
    axiosInstance.get(`link/list/2`).then((res) => {
      console.log(res.data);
      setData(res.data)
    })
  }, [])
  return (
    <Wrapper>
      <section className="voqealar p-2 pt-3">
        <div className="p-2 text-white bg-primary rounded">
          <h3 style={{ fontSize: "1.125rem", textTransform: "uppercase", textAlign: "center" }}
            className="m-0 p-0">
            Voqealar
          </h3>
        </div>

        <div className="voqea" style={{ marginBottom: "8px" }}>
          <img src={voqeaImg} alt="" />
          <div className="voqea__text">
            <p>Huzuridagi turizm depart... Huzuridagi turizm depart...</p>
          </div>
        </div>

        <ul className="foydali-link pt-2">
          {
            data.map((item, index) => {
              if (index < 4) {
                return (
                  <li>
                    <div className="foydali-link__img rounded">
                      <img className="rounded"
                        src={`${urlFile}/${item.imageID}`} alt="" />
                    </div>
                    <div className="foydali-link__text">
                      <span>{item?.uzName}</span>
                    </div>
                  </li>
                )
              }
            })
          }
        </ul>

        <div className="calendar" style={{ marginBottom: "8px" }}>
          <div className="calendar">
            <Calendar onChange={onChange} value={value} className="w-100 h-100" />
          </div>
        </div>

        <ul className="foydali-link pt-2">
          {
            data.map((item, index) => {
              if ((index >= 4) && (index < 8)) {
                return (
                  <li>
                    <div className="foydali-link__img rounded">
                      <img className="rounded"
                        src={`${urlFile}/${item.imageID}`} alt="" />
                    </div>
                    <div className="foydali-link__text">
                      <span>{item?.uzName}</span>
                    </div>
                  </li>
                )
              }
            })
          }
        </ul>
      </section>
    </Wrapper>

  );
};

export default VoqealarLeftPanelNew;

const Wrapper = styled.div`
  .voqealar {
  width: 345px !important;
}

.voqealar > * {
  border-radius: 5px;
}

.voqealar__header {
  background-color: #2a4d85;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 0px 4px rgba(51, 51, 51, 0.25);
}

.voqealar__header span {
  color: #fff;
  text-transform: uppercase;
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  font-variant: small-caps;
}

.voqealar .voqea {
  background: #fff;
  height: 350px;
  margin-top: 10px;
  box-shadow: 0px 0px 4px rgba(51, 51, 51, 0.25);
}

.voqealar .voqea img {
  width: 100%;
  height: 255px;
  padding: 10px;
  border-radius: 5px;
}

.voqealar .voqea .voqea__text {
  padding: 10px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-variant: small-caps;
  text-align: justify;
  font-style: normal;
}

.voqealar .voqea .voqea__text p {
  color: #333333;
  font-size: 1.25rem;
  line-height: 1;
}

.voqealar .foydali-link {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.voqealar .foydali-link li {
  display: flex;
  align-items: center;
  height: 72.5px;
  box-shadow: 0px 0px 4px rgba(51, 51, 51, 0.25);
  background-color: #2196f3;
  overflow: hidden;
  border-radius: 5px;
}

.voqealar .foydali-link__img {
  background-color: #fff;
  margin: 5.5px 10px;
  border-radius: 5px;
}

.voqealar .calendar {
  height: 340px;
  margin-top: 20px;
  box-shadow: 0px 0px 4px rgba(51, 51, 51, 0.25);
}

.voqealar .foydali-link__img img {
  display: block;
  width: 100%;
  width: 77.5px;
  height: 58.75px;
}

.voqealar .foydali-link .foydali-link__text {
  display: inline-block;
  cursor: pointer;
}

.voqealar .foydali-link .foydali-link__text span {
  font-size: 20px;
  font-weight: 400;
  line-height: 1;
  text-align: justify;
  font-variant: small-caps;
  color: #fff;
  /* padding: 3px; */
}

.voqealar .calendar {
  box-shadow: 0px 8.26788px 33.0715px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  height: 350px;
}

`
