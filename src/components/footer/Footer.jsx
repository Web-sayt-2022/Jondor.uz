import "./footer.css";
import logoNav from "../../images/logo_nav.png";
import telegramIcon from "../../images/telegram.png";
import collectImage from "../../images/collect (1).png"

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-white text-secondary">
      <div className="text-center text-md-start py-3 page-header page-header-light px-lg-5">
        <div
          className="footer__topLink page-header-content header-elements-lg-inline d-flex flex-lg-row flex-column px-lg-4"
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div className="link_list mb-lg-0 mb-3 flex-lg-row flex-column">
            <a href="./deteile_news.html">Portal haqida</a>
            <a href="./portal_xaritasi.html">Portal xaritasi</a>
            <a href="./qayta_aloqa.html">Qayta aloqa</a>
            <a href="https://advice.uz/uz#/">Ko'p beriladigan savollar</a>
            <a href="./deteile_news.html">Malumotlarda foydalanish shartlari</a>
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
      <div className="containers text-center text-md-start mt-3 py-3 px-4">
        <div className="mb-4" style={{ textAlign: "left" }}>
          <div className="d-flex align-items-center">
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
              BUXORO VILOYATI HOKIMLIGI
            </h4>
          </div>
        </div>

        <div className="mb-4" style={{ textAlign: "left" }}>
          <h4
            className="text-uppercase fw-bold mb-2"
            style={{ fontWeight: 600, fontSize: "1.25rem" }}
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

        <div className="mb-4" style={{ textAlign: "left" }}>
          <h4
            className="text-uppercase fw-bold mb-2"
            style={{ fontWeight: 600, fontSize: "1.25rem" }}
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

        <div className="mb-4 align-left" style={{ textAlign: "left" }}>
          <h4
            className="text-uppercase fw-bold mb-2"
            style={{ fontWeight: 600, fontSize: "1.25rem", textAlign: "left" }}
          >
            Elektron manzil
          </h4>
          <p>
            <a href="#link" className="btn btn-primary-100">
              Reglament
            </a>
          </p>
          <i className="icon-envelop5"></i>
          <a href="mail:info@buxoro.uz" className="text-secondary">
            info@buxoro.uz
          </a>
        </div>

        <div className="mb-4" style={{ textAlign: "left" }}>
          <h4
            className="text-uppercase fw-bold mb-2"
            style={{ fontWeight: 600, fontSize: "17px" }}
          >
            Ish tartibi
          </h4>
          <p className="mb-2 text-secondary">
            <button className="btn btn-primary-100">Ish vaqti:</button>
            9:00–18:00 (13:00-14:00)
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
          <img
            src={collectImage}
            width="140"
            className="mb-2"
          />
          <img src={collectImage} width="140" />
        </div>
      </div>

      <div className="border-bottom-0 border-top px-4">
        <div className="px-md-5 px-0 navbar-expand-lg navbar-light border-left-0">
          <div
            className="navbar-collapse collapse d-flex align-items-center flex-column flex-md-row justify-content-between"
            id="navbar-footer"
          >
            <span className="navbar-text">
              &copy; 2015 - 2022. Barcha huquqlar himoyalangan
            </span>

            <span>
              Sayt materiallaridan foydalanilganda <a href="#">www.buxoro.uz</a>{" "}
              sayti ko'rsatilishi shart
            </span>

            <span className="navbar-text">
              Websayt <a href="#">Dariko Jamoasi </a>tomonidan tayorlandi
            </span>
          </div>
        </div>
      </div>
      <div
        className="scrollToTop"
        style={{ backgroundColor: "#2A4D85", border: "none" }}
      >
        <i className="icon-arrow-up12"></i>
      </div>
    </footer>
  );
};

export default Footer;
