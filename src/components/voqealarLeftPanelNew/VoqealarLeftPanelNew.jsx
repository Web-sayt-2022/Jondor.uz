import React, { useState } from "react";
import "./voqealarLeftPanelNew.css";
import voqeaImg from "../../images/navruz.jpg";
import harakatlarStrategiyasiImg from "../../images/harakatlar strategiyasi.png";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const VoqealarLeftPanelNew = () => {
  const [value, onChange] = useState(new Date());
  return (
    <section className="voqealar">
      <div className="voqealar__header">
        <span>Voqealar</span>
      </div>

      <div className="voqea">
        <img src={voqeaImg} alt="" />
        <div className="voqea__text">
          <p>Huzuridagi turizm depart... Huzuridagi turizm depart...</p>
        </div>
      </div>

      <ul className="foydali-link">
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

      <div className="calendar">
        <div className="calendar">
          <Calendar onChange={onChange} value={value} className="w-100 h-100" />
        </div>
      </div>

      <ul className="foydali-link">
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
