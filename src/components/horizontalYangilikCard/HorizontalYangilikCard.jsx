import React from "react";
import Keldiyor from "../../images/gerb.png";

const HorizontalYangilikCard = ({ news }) => {
  return (
    <section className="blog-horizontal mt-4 px-2">
      <div
        className="p-2 text-light bg-primary mb-2"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "1.125rem", textTransform: "uppercase" }}>
          Yangiliklar
        </span>

        <div style={{ display: "flex", gap: "1rem" }}>
          <i
            className="icon-grid6"
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
            onclick="grid()"
          ></i>
          <i
            className="icon-paragraph-justify3"
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
            onclick="flex()"
          ></i>
        </div>
      </div>
      <div className="col-xl-12 px-0">
        <div className="card">
          <div className="card-body">
            <div className="card-img-actions mr-2">
              <img
                src="https://source.unsplash.com/random?city/sig-2"
                alt=""
                style={{
                  width: "100%",
                  maxHeight: "250px",
                  objectFit: "cover",
                }}
              />
            </div>

            <div>
              <h5 className="card-title text-primary font-weight-bold p-0 m-0">
                <i className="icon-calendar3"></i>
                {news.title}
              </h5>
              <h2
                className="text-secondary m-0 p-0"
                style={{ fontWeight: "500", fontSize: "1.5rem" }}
              >
                Yerlarimiz shiddat bilan ishdan chiqyapti, chunki... tayinli
                egasi yo‘q
              </h2>
            </div>

            <p
              className="card-text card-text-title"
              style={{ textAlign: "justify", fontSize: "1rem" }}
            >
              Agar yer singari ishlab chiqarish vositalari xususiy qo‘llarda
              bo‘lmasa, katta ehtimol bilan ular samarasiz ishlatiladi. Yerga
              xususiy egalik qilish huquqi nafaqat agrar davlatning rivoji
              uchun, balki butun boshli xalqning irsiy fondini saqlab qolish
              uchun ham kerak. Bu haqda Kun.uz kolumnisti Shahzod Yo‘ldoshboyev
              fikr yuritadi. Oxirgi haftalarning shiddatli xabarlari oqimi
              orasida bir muhim xabar, nazarimda, jamoatchilik nazaridan chetda
              qoldi – O‘zbekiston Respublikasi Konstitutsiyasiga kiritilishi
              taklif etilgan o‘zgarishlar qatorida uning 55-moddasini
              o‘zgartirish taklif etildi. Qanday taklif bu? Hozirda
              O‘zbekistonda dehqon va fermerlar yerlarni xususiy mulkka olishi
              imkoniyati yo‘q. Taklif mazkur me’yorni Konstitutsiyada
              mustahkamlashni nazarda tutyapti.
            </p>
          </div>

          <div
            className="card-footer p-2 px-3"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ul className="list-inline mb-0 footer-menu">
              <li className="list-inline-item">
                <a href="#" className="text-body">
                  <i className="icon-eye4 mr-2"></i>438
                </a>
              </li>

              {/* <li className="list-inline-item">
              <a href="#siyosat">siyosat</a>
            </li> */}

              <li className="list-inline-item">
                Manba: <a href="https://kun.uz/">Kun.uz</a>
              </li>

              {/* <li
              className="list-inline-item btn btn-light"
              type="button"
              data-toggle="modal"
              data-target="#modal_large"
            >
              <span className="text-body font-weight-bolder bg-primary-100 text-dark p-1 rounded">
                <i className="icon-comment-discussion mr-2"></i> 71
              </span>
            </li> */}

              {/* <li className="list-inline-item">
              <span
                style={{ marginLeft: "0" }}
                className="font-weight-bolder share bg-primary-100 text-dark"
              >
                <i className="icon-share3"></i>Ulashing
              </span>
            </li> */}
            </ul>

            <a
              href="../deteile_news.html"
              className="text-primary font-weight-semybold"
              style={{ cursor: "pointer" }}
            >
              Batafsil
              <i className="icon-arrow-right8"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalYangilikCard;
