import React, { useState, useEffect, useRef } from "react";
import logoNav from "../../images/logo_nav.png";
import telegramIcon from "../../images/telegram.png";
import collectImage from "../../images/collect (1).png";
import { MdOutlineClose } from 'react-icons/md';
import styled from "styled-components";
import { axiosInstance } from "../../config";
import { Link } from "react-router-dom";

const Footer = () => {
  const [openReglaments, setOpenReglaments] = useState({ open: false, data: {} });
  const [reglaments, setReglaments] = useState([]);
  const selectRef = useRef();

  // get all reglaments
  useEffect(() => {
    let isMounted = true;

    const getData = async () => {
      try {
        const res = await axiosInstance.get("footerElement/list");
        if (isMounted) {
          setReglaments(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getData();
    return () => {
      isMounted = false;
    };
  }, []);

  // choose language
  const changeHandler = (e, data) => {
    document.querySelector('.reglaments_data').innerHTML = data.uzRegulations;
    if (parseInt(e.target.value) === 1) {
      document.querySelector('.reglaments_data').innerHTML = data.uzRegulations;
    } else if (parseInt(e.target.value) === 2) {
      document.querySelector('.reglaments_data').innerHTML = data.krRegulations;
    } else {
      document.querySelector('.reglaments_data').innerHTML = data.ruRegulations;
    }
  }

  return (
    <Wrapper>
      <footer className="text-center text-lg-start bg-white text-secondary">
        <div className="text-center text-md-start py-2 page-header page-header-light px-lg-2">
          <div
            className="page-header-content header-elements-lg-inline d-flex flex-lg-row flex-column px-lg-4"
            style={{ justifyContent: "space-between", alignItems: "center", width: "100%" }}
          >
            <div className="link_list mb-lg-0 mb-3 flex-lg-row flex-column">
              <a href="#1">Web-Sayt haqida</a>
              <Link to={"/xarita"}>
              Web-Sayt xaritasi
              </Link>
              {/* <a href="#1">Web-Sayt xaritasi</a> */}
              <a href="#1">Qayta aloqa</a>
              <a href="https://advice.uz/uz#/">Ko'p beriladigan savollar</a>
              <a href="#1">Ma'lumotlardan foydalanish shartlari</a>
            </div>

            <div className="icons">
              <a href="/facebook" target="_blank">
                <i className="icon-facebook2 mr-2" style={{ fontSize: "2rem", color: "#4267B2" }}></i>
              </a>
              <a href="/instagram" target="_blank">
                <i className="icon-instagram mr-2" style={{ fontSize: "2rem", color: "#f57185" }}></i>
              </a>

              <a href="/mail" target="_blank">
                <i className="icon-mail-read mr-2" style={{ fontSize: "2rem" }} ></i>
              </a>

              <a href="/youtube" target="_blank">
                <i className="icon-youtube3 mr-2" style={{ fontSize: "2rem", color: "rgb(220, 20, 20)" }} ></i>
              </a>

              <a href="/telegram" target="_blank">
                <img src={telegramIcon} width="40" alt="telegram" />
              </a>
            </div>
          </div>
        </div>
        <div className="containers text-center text-md-start mt-3 p-2">
          <div className="mb-4" style={{ textAlign: "left" }}>
            <div className="d-flex align-items-center p-2">
              <img
                src={logoNav}
                alt="logo"
                style={{ height: "6rem" }}
                className="logo mr-2"
              />
              <h4 className="text-uppercase fw-bold m-0"
                style={{
                  fontWeight: 600,
                  fontSize: "1.25rem",
                  width: "200px",
                  textAlign: "center",
                }}
              >
                JONDOR TUMAN HOKIMLIGI
              </h4>
            </div>
          </div>

          <div className="mb-4" style={{ textAlign: "center", display: "flex", flexDirection: "column" }}>
            <h4 className="text-uppercase fw-bold mb-2" style={{ fontWeight: 600, fontSize: "1rem" }} >
              Ishonch telefoni
            </h4>
            <p className="btn btn-primary-100" onClick={() => setOpenReglaments({ open: true, data: reglaments.find(r => r.type === 1) })}>Reglament</p>
            <a href="tel:+998 (65) 222 22 22" className="text-secondary">
              <i className="icon-phone2"></i> (65) 222 22 22
            </a>
          </div>

          <div className="mb-4" style={{ textAlign: "center", display: "flex", flexDirection: "column" }}>
            <h4 className="text-uppercase fw-bold mb-2" style={{ fontWeight: 600, fontSize: "1rem" }} >
              Umumiy bo'lim
            </h4>
            <p className="btn btn-primary-100" onClick={() => setOpenReglaments({ open: true, data: reglaments.find(r => r.type === 2) })}>Reglament</p>
            <a href="tel:+998 (65) 223 68 47" className="text-secondary">
              <i className="icon-phone2"></i> (65) 223 68 47
            </a>
          </div>

          <div className="mb-4 align-left" style={{ textAlign: "center", display: "flex", flexDirection: "column" }}>
            <h4
              className="text-uppercase fw-bold mb-2"
              style={{
                fontWeight: 600,
                fontSize: "1rem",
                textAlign: "center",
              }}
            >
              Elektron manzil
            </h4>
            <p className="btn btn-primary-100" onClick={() => setOpenReglaments({ open: true, data: reglaments.find(r => r.type === 3) })}>Reglament</p>
            <div>
              <i className="icon-envelop5"></i>{" "}
              <a href="mail:info@buxoro.uz" className="text-secondary">
                {" "}
                info@buxoro.uz
              </a>
            </div>
          </div>

          <div className="mb-4" style={{ textAlign: "center", display: "flex", flexDirection: "column" }}>
            <h4
              className="text-uppercase fw-bold mb-2"
              style={{ fontWeight: 600, fontSize: "1rem" }}
            >
              Ish tartibi
            </h4>
            <p className="mb-2 text-secondary">
              <button className="btn btn-primary-100">
                9:00–18:00 (13:00-14:00)
              </button>
            </p>
            <p className="mb-3 text-secondary">
              <b>Dam olish kuni:</b> shanba va yakshanba
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", cursor: "pointer" }}>
            <img src={collectImage} width="140" className="mb-2" />
            <img src={collectImage} width="140" />
          </div>
        </div>

        <div className="border-bottom-0 border-top px-4">
          <div className="px-md-5 px-0 navbar-expand-lg navbar-light border-left-0">
            <div
              className="navbar-collapse collapse d-flex align-items-center flex-column flex-md-row justify-content-between"
              id="navbar-footer"
            >
              <div>
                Diqqat! Agar siz matnda xatoliklarni aniqlasangiz, ularni
                belgilab, ma'muriyatni xabardor qilish uchun{" "}
                <b style={{ color: "#2196F3" }}>Ctrl+Enter</b> tugmasini bosing
              </div>
              <br />
              <span className="navbar-text">&copy; 2022. Barcha huquqlar himoyalangan.</span>
            </div>
          </div>
        </div>
      </footer>

      {/* reglaments modal */}
      {(openReglaments.open && openReglaments.data?.id) && (
        <div className="reglaments_modal_container">
          <div className="reglaments_modal_wrapper">
            <div className="reglaments_modal_wrapper_header">
              <h5>{openReglaments.data.type === 1 ? "Ishonch telefoni" : openReglaments.data.type === 2 ? "Umumiy bo'lim" : "Elektron manzil"}</h5>
              <MdOutlineClose onClick={() => setOpenReglaments({ open: false, data: {} })} />
            </div>
            <div className="reglaments_modal_wrapper_body">
              <div className="reglaments_modal_wrapper_body_top">
                <select id="chooseLanguage" className="btn btn-light" onChange={(e) => changeHandler(e, openReglaments.data)} ref={selectRef}>
                  <option selected="selected" disabled hidden>Tilni tanlang:</option>
                  <option value="1">Uz</option>
                  <option value="2">Kr</option>
                  <option value="3">Ru</option>
                </select>
              </div>
              <div className="reglaments_modal_wrapper_body_bottom">
                <p className="reglaments_data"></p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
    position: relative;

    /* reglaments */
    .reglaments_modal_container {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4));
      z-index: 99 !important;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .reglaments_modal_wrapper {
      width: 700px;
      border-radius: 5px !important;
      background-color: #fff;
      animation: reglaments_modal_container .2s;
    }
    .reglaments_modal_wrapper_header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      background-color: #2a4d85 !important;
      color: #fff;
    }
    .reglaments_modal_wrapper_header svg {
      font-size: 20px;
      cursor: pointer;
    }
    .reglaments_modal_wrapper_body {
      padding: 10px;
    }
    .reglaments_data {
      margin: 5px 0;
    }
    .reglaments_modal_wrapper_body_top {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    .containers {
    position: relative;
    z-index: 10;
    display: grid;
    width: 100%;
    grid-template-columns: 3fr 2fr 2fr 2fr 3fr 2fr;
    grid-auto-rows: auto auto auto auto;
    /* margin-left: 3rem; */
    gap: 1rem;
  }

  .containers div {
    width: 100%;
  }

  .containers p {
    font-size: 1rem;
  }

  .karvon {
    width: 60%;
    height: 20rem;
    object-fit: unset;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 5;
  }

  @media (max-width: 1400px) {
    .containers {
      margin-left: 0rem;
      grid-template-columns: 3fr 1fr 1fr 1fr 3fr 1fr;
    }

    h4 {
      width: 100px;
    }
  }

  @media (max-width: 1200px) {
    .containers {
      grid-template-columns: repeat(3, 1fr);
    }

    h4 {
      width: max-content;
    }
  }

  @media (max-width: 992px) {
    .gimn_note {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .containers {
      grid-template-columns: repeat(2, 1fr);
    }

    .gimn_note {
      display: none;
    }
  }

  @media (max-width: 670px) {
    .containers {
      grid-template-columns: repeat(1, 1fr);
    }

    .containers div {
      text-align: center !important;
    }

    .containers div h4 {
      margin: 0 auto !important;
    }

    .containers div p.mb-2 {
      display: flex;
      flex-direction: column;
      width: max-content;
      margin: 0 auto;
    }

    .containers div,
    .containers div div {
      display: flex;
      flex-direction: column;
      width: max-content;
      margin: 0 auto;
    }
  }

  .link_list {
    display: flex;
    align-items: center;
    text-transform: uppercase;
  
  }

  .link_list a {
    color: inherit;
    
  }

  .link_list a:not(:last-of-type) {
    border-right: 1px solid black;
    padding: 0 10px;
  }

  @media only screen and (max-width: 992px) {
    .link_list a:not(:last-of-type) {
        border-right: none;
    }
  }

  .link_list a:is(:last-of-type) {
    padding-left: 10px;
  }

  .link_list a:is(:first-of-type) {
    padding-left: 0px;
  }
  
  @keyframes reglaments_modal_container {
    0% {opacity: 0}
    100% {opacity: 1}
  }

`
