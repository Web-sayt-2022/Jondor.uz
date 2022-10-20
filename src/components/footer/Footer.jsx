import "./footer.css";
import logoNav from "../../images/logo_nav.png";
import telegramIcon from "../../images/telegram.png";
import collectImage from "../../images/collect (1).png";
import styled from "styled-components";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-white text-secondary">
      <div className="text-center text-md-start py-2 page-header page-header-light px-lg-2">
        <div
          className="page-header-content header-elements-lg-inline d-flex flex-lg-row flex-column px-lg-4"
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div className="link_list mb-lg-0 mb-3 flex-lg-row flex-column">
            <a href="#">Web-Sayt haqida</a>
            <a href="#">Web-Sayt xaritasi</a>
            <a href="#">Qayta aloqa</a>
            <a href="https://advice.uz/uz#/">Ko'p beriladigan savollar</a>
            <a href="#">Ma'lumotlardan foydalanish shartlari</a>
          </div>

          <div className="icons">
            <a href="/facebook" target="_blank">
              <i
                className="icon-facebook2 mr-2"
                style={{ fontSize: "2rem", color: "#4267B2" }}
              ></i>
            </a>

            <a href="/instagram" target="_blank">
              <i
                className="icon-instagram mr-2"
                style={{ fontSize: "2rem", color: "#f57185" }}
              ></i>
            </a>

            <a href="/mail" target="_blank">
              <i
                className="icon-mail-read mr-2"
                style={{ fontSize: "2rem" }}
              ></i>
            </a>

            <a href="/youtube" target="_blank">
              <i
                className="icon-youtube3 mr-2"
                style={{ fontSize: "2rem", color: "rgb(220, 20, 20)" }}
              ></i>
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
            <h4
              className="text-uppercase fw-bold m-0"
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

        <div className="mb-4" style={{ textAlign: "center" }}>
          <h4
            className="text-uppercase fw-bold mb-2"
            style={{ fontWeight: 600, fontSize: "1rem" }}
          >
            Ishonch telefoni
          </h4>
          <p>
            <a href="#link" className="btn btn-primary-100">
              Reglament
            </a>
          </p>
          <a href="tel:+998 (65) 222 22 22" className="text-secondary">
            <i className="icon-phone2"></i> (65) 222 22 22
          </a>
        </div>

        <div className="mb-4" style={{ textAlign: "center" }}>
          <h4
            className="text-uppercase fw-bold mb-2"
            style={{ fontWeight: 600, fontSize: "1rem" }}
          >
            Umumiy bo'lim
          </h4>
          <p>
            <a href="#link" className="btn btn-primary-100">
              Reglament
            </a>
          </p>
          <a href="tel:+998 (65) 223 68 47" className="text-secondary">
            <i className="icon-phone2"></i> (65) 223 68 47
          </a>
        </div>

        <div className="mb-4 align-left" style={{ textAlign: "center" }}>
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
          <p>
            <a href="#link" className="btn btn-primary-100">
              Reglament
            </a>
          </p>
          <i className="icon-envelop5"></i>{" "}
          <a href="mail:info@buxoro.uz" className="text-secondary">
            {" "}
            info@buxoro.uz
          </a>
        </div>

        <div className="mb-4" style={{ textAlign: "left" }}>
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

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            cursor: "pointer",
          }}
        >
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
            <span className="navbar-text">
              &copy; 2022. Barcha huquqlar himoyalangan
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
