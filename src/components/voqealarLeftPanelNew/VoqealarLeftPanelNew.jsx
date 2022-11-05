import React, { useState } from "react";
import "./voqealarLeftPanelNew.css";
import voqeaImg from "../../images/navruz.jpg";
import harakatlarStrategiyasiImg from "../../images/harakatlar strategiyasi.png";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const VoqealarLeftPanelNew = () => {
  const [value, onChange] = useState(new Date());
  return (
    <section className="voqealar p-2 pt-3">
      <div className="p-2 text-white bg-primary rounded">
        <h3 style={{ fontSize: "1.125rem", textTransform: "uppercase", textAlign: "center" }}
          className="m-0 p-0">
          Voqealar
        </h3>
      </div>

      <div className="voqea" style={{marginBottom: "8px"}}>
        <img src={voqeaImg} alt="" />
        <div className="voqea__text">
          <p>Huzuridagi turizm depart... Huzuridagi turizm depart...</p>
        </div>
      </div>

      <ul className="foydali-link pt-2">
        <li>
          <div className="foydali-link__img">
            <img src={harakatlarStrategiyasiImg} alt="" />
          </div>
          <div className="foydali-link__text">
            <span>Interaktiv Davlat Xizmatlar Ro'yxati</span>
          </div>
        </li>
        <li>
          <div className="foydali-link__img">
            <img src={harakatlarStrategiyasiImg} alt="" />
          </div>
          <div className="foydali-link__text">
            <span>Interaktiv Davlat Xizmatlar Ro'yxati</span>
          </div>
        </li>
        <li>
          <div className="foydali-link__img">
            <img src={harakatlarStrategiyasiImg} alt="" />
          </div>
          <div className="foydali-link__text">
            <span>Interaktiv Davlat Xizmatlar Ro'yxati</span>
          </div>
        </li>
        <li>
          <div className="foydali-link__img">
            <img src={harakatlarStrategiyasiImg} alt="" />
          </div>
          <div className="foydali-link__text">
            <span>Interaktiv Davlat Xizmatlar Ro'yxati</span>
          </div>
        </li>
      </ul>

      <div className="calendar" style={{marginBottom: "8px"}}>
        <div className="calendar">
          <Calendar onChange={onChange} value={value} className="w-100 h-100" />
        </div>
      </div>

      <ul className="foydali-link pt-2">
        <li>
          <div className="foydali-link__img">
            <img src={harakatlarStrategiyasiImg} alt="" />
          </div>
          <div className="foydali-link__text">
            <span>Interaktiv Davlat Xizmatlar Ro'yxati</span>
          </div>
        </li>
        <li>
          <div className="foydali-link__img">
            <img src={harakatlarStrategiyasiImg} alt="" />
          </div>
          <div className="foydali-link__text">
            <span>Interaktiv Davlat Xizmatlar Ro'yxati</span>
          </div>
        </li>
        <li>
          <div className="foydali-link__img">
            <img src={harakatlarStrategiyasiImg} alt="" />
          </div>
          <div className="foydali-link__text">
            <span>Interaktiv Davlat Xizmatlar Ro'yxati</span>
          </div>
        </li>
        <li>
          <div className="foydali-link__img">
            <img src={harakatlarStrategiyasiImg} alt="" />
          </div>
          <div className="foydali-link__text">
            <span>Interaktiv Davlat Xizmatlar Ro'yxati</span>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default VoqealarLeftPanelNew;
