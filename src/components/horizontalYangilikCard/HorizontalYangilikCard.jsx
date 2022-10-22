import React, { useEffect, useState } from "react";
import Keldiyor from "../../images/gerb.png";
import "./horizontalYangilikCard.css";
import { axiosInstance } from "../../config";
import ReactPaginate from "react-paginate";
import AlertContent, { Alert } from "../alert/Alert";
import keldiyorImg from "../../images/dolzarb.jpg";

const HorizontalYangilikCard = ({
  sectionHorizontalRef,
  sectionVerticalRef,
}) => {
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
      ref={sectionHorizontalRef}
      className="blog-horizontal mt-4 px-2"
      style={{ width: "calc(100% - 300px)" }}
    >
      <div
        className="p-2 text-white bg-primary"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h4 style={{ fontSize: "1.125rem", textTransform: "uppercase" }}>
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
      <div className="col-xl-12 py-2 px-0">
        <div className="card">
          <div className="card-body">
            <div className="card-img-actions mr-2" style={{ width: "320px" }}>
              <img
                src={keldiyorImg}
                alt=""
                style={{
                  width: "100%",
                  maxHeight: "220px",
                  objectFit: "cover",
                }}
              />
            </div>

            <div className="card-header">
              <h2
                className="text-secondary m-0 p-0"
                style={{ fontWeight: "500", fontSize: "1.5rem", fontVariant: "small-caps" }}
              >
                Yerlarimiz shiddat bilan ishdan chiqyapti, chunki... tayinli
                egasi yo‘q
              </h2>

              <div className="d-flex align-content-center">
                <h6 className="card-title font-weight-bold mr-2">
                  <i className="text-primary icon-calendar3"></i>
                  10.10.2022
                </h6>

                <h6 className="mr-2">
                  <a className="text-primary font-weight-semybold ml-1 cursor-pointer">
                    Madaniyat
                  </a>
                </h6>

                <h6 className="mr-2">
                  Manba: <a href="https://kun.uz/">Kun.uz</a>
                </h6>
              </div>
            </div>

            <p
              className="card-text card-text-title"
              style={{ textAlign: "justify", fontSize: "1rem", lineHeight: 1.15 }}
            >
              Agar yer singari ishlab chiqarish vositalari xususiy qo‘llarda
              bo‘lmasa, katta ehtimol bilan ular samarasiz ishlatiladi. Yerga
              xususiy egalik qilish huquqi nafaqat agrar davlatning rivoji
              uchun, balki butun boshli xalqning irsiy fondini saqlab qolish
              uchun ham kerak. Bu haqda Kun.uz kolumnisti Shahzod Yo‘ldoshboyev
              fikr yuritadi. Oxirgi haftalarning shiddatli xabarlari oqimi
              orasida bir muhim xabar, nazarimda, jamoatchilik nazaridan naz
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

              {/* <li className="list-inline-item">
                Manba: <a href="https://kun.uz/">Kun.uz</a>
              </li> */}

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

      <div className="col-xl-12 py-2 px-0">
        <div className="card">
          <div className="card-body">
            <div className="card-img-actions mr-2" style={{ width: "320px" }}>
              <img
                src={keldiyorImg}
                alt=""
                style={{
                  width: "100%",
                  maxHeight: "220px",
                  objectFit: "cover",
                }}
              />
            </div>

            <div className="card-header">
              <h2
                className="text-secondary m-0 p-0"
                style={{ fontWeight: "500", fontSize: "1.5rem", fontVariant: "small-caps" }}
              >
                Yerlarimiz shiddat bilan ishdan chiqyapti, chunki... tayinli
                egasi yo‘q
              </h2>

              <div className="d-flex align-content-center">
                <h6 className="card-title font-weight-bold mr-2">
                  <i className="text-primary icon-calendar3"></i>
                  10.10.2022
                </h6>

                <h6 className="mr-2">
                  <a className="text-primary font-weight-semybold ml-1 cursor-pointer">
                    Madaniyat
                  </a>
                </h6>

                <h6 className="mr-2">
                  Manba: <a href="https://kun.uz/">Kun.uz</a>
                </h6>
              </div>
            </div>

            <p
              className="card-text card-text-title"
              style={{ textAlign: "justify", fontSize: "1rem", lineHeight: 1.15 }}
            >
              Agar yer singari ishlab chiqarish vositalari xususiy qo‘llarda
              bo‘lmasa, katta ehtimol bilan ular samarasiz ishlatiladi. Yerga
              xususiy egalik qilish huquqi nafaqat agrar davlatning rivoji
              uchun, balki butun boshli xalqning irsiy fondini saqlab qolish
              uchun ham kerak. Bu haqda Kun.uz kolumnisti Shahzod Yo‘ldoshboyev
              fikr yuritadi. Oxirgi haftalarning shiddatli xabarlari oqimi
              orasida bir muhim xabar, nazarimda, jamoatchilik nazaridan naz
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

              {/* <li className="list-inline-item">
                Manba: <a href="https://kun.uz/">Kun.uz</a>
              </li> */}

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
      <div className="col-xl-12 py-2 px-0">
        <div className="card">
          <div className="card-body">
            <div className="card-img-actions mr-2" style={{ width: "320px" }}>
              <img
                src={keldiyorImg}
                alt=""
                style={{
                  width: "100%",
                  maxHeight: "220px",
                  objectFit: "cover",
                }}
              />
            </div>

            <div className="card-header">
              <h2
                className="text-secondary m-0 p-0"
                style={{ fontWeight: "500", fontSize: "1.5rem", fontVariant: "small-caps" }}
              >
                Yerlarimiz shiddat bilan ishdan chiqyapti, chunki... tayinli
                egasi yo‘q
              </h2>

              <div className="d-flex align-content-center">
                <h6 className="card-title font-weight-bold mr-2">
                  <i className="text-primary icon-calendar3"></i>
                  10.10.2022
                </h6>

                <h6 className="mr-2">
                  <a className="text-primary font-weight-semybold ml-1 cursor-pointer">
                    Madaniyat
                  </a>
                </h6>

                <h6 className="mr-2">
                  Manba: <a href="https://kun.uz/">Kun.uz</a>
                </h6>
              </div>
            </div>

            <p
              className="card-text card-text-title"
              style={{ textAlign: "justify", fontSize: "1rem", lineHeight: 1.15 }}
            >
              Agar yer singari ishlab chiqarish vositalari xususiy qo‘llarda
              bo‘lmasa, katta ehtimol bilan ular samarasiz ishlatiladi. Yerga
              xususiy egalik qilish huquqi nafaqat agrar davlatning rivoji
              uchun, balki butun boshli xalqning irsiy fondini saqlab qolish
              uchun ham kerak. Bu haqda Kun.uz kolumnisti Shahzod Yo‘ldoshboyev
              fikr yuritadi. Oxirgi haftalarning shiddatli xabarlari oqimi
              orasida bir muhim xabar, nazarimda, jamoatchilik nazaridan naz
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

              {/* <li className="list-inline-item">
                Manba: <a href="https://kun.uz/">Kun.uz</a>
              </li> */}

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
      <div className="col-xl-12 py-2 px-0">
        <div className="card">
          <div className="card-body">
            <div className="card-img-actions mr-2" style={{ width: "320px" }}>
              <img
                src={keldiyorImg}
                alt=""
                style={{
                  width: "100%",
                  maxHeight: "220px",
                  objectFit: "cover",
                }}
              />
            </div>

            <div className="card-header">
              <h2
                className="text-secondary m-0 p-0"
                style={{ fontWeight: "500", fontSize: "1.5rem", fontVariant: "small-caps" }}
              >
                Yerlarimiz shiddat bilan ishdan chiqyapti, chunki... tayinli
                egasi yo‘q
              </h2>

              <div className="d-flex align-content-center">
                <h6 className="card-title font-weight-bold mr-2">
                  <i className="text-primary icon-calendar3"></i>
                  10.10.2022
                </h6>

                <h6 className="mr-2">
                  <a className="text-primary font-weight-semybold ml-1 cursor-pointer">
                    Madaniyat
                  </a>
                </h6>

                <h6 className="mr-2">
                  Manba: <a href="https://kun.uz/">Kun.uz</a>
                </h6>
              </div>
            </div>

            <p
              className="card-text card-text-title"
              style={{ textAlign: "justify", fontSize: "1rem", lineHeight: 1.15 }}
            >
              Agar yer singari ishlab chiqarish vositalari xususiy qo‘llarda
              bo‘lmasa, katta ehtimol bilan ular samarasiz ishlatiladi. Yerga
              xususiy egalik qilish huquqi nafaqat agrar davlatning rivoji
              uchun, balki butun boshli xalqning irsiy fondini saqlab qolish
              uchun ham kerak. Bu haqda Kun.uz kolumnisti Shahzod Yo‘ldoshboyev
              fikr yuritadi. Oxirgi haftalarning shiddatli xabarlari oqimi
              orasida bir muhim xabar, nazarimda, jamoatchilik nazaridan naz
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

              {/* <li className="list-inline-item">
                Manba: <a href="https://kun.uz/">Kun.uz</a>
              </li> */}

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

export default HorizontalYangilikCard;
