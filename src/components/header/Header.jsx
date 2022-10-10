import React from "react";

const Header = () => {
  return (
    <>
      <nav
        className="navbar-local navbar d-flex justify-content-between flex-md-row flex-column align-items-center"
        style={{background: "white"}}
      >
        <div className="languages_block d-flex align-items-center justify-content-between w-md-auto w-100">
          <img
            src="./assets/img/language.png"
            alt="..."
            style={{ maxWidth: "25px" }}
          />
          <div
            className="link_list"
            style={{
              fontSize: "16px",
              marginLeft: "10px",
              textTransform: "capitalize",
            }}
          >
            <a href="#" style={{ fontSize: "16px" }} className="lan_active">
              O'zbekcha
            </a>
            <a href="#" style={{ fontSize: "16px" }}>
              Ўзбекча
            </a>
            <a href="#" style={{ fontSize: "16px" }}>
              Russian
            </a>
            <a href="#" style={{ fontSize: "16px" }}>
              English
            </a>
          </div>
        </div>

        <div className="invalid_block w-md-auto w-100 mt-md-auto mt-2">
          <div
            className="link_list justify-content-between"
            style={{ fontSize: "16px" }}
          >
            <a className="w-md-auto w-100">
              <input
                style={{ paddingLeft: "16px" }}
                className="search languages_block w-md-auto w-100"
                type="text"
                placeholder="Izlash..."
              />
            </a>

            <a
              className="pl-md-1 pl-0 pr-sm-1"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="icon-eye2" style={{ fontSize: "24px" }}></i>
            </a>

            <div
              className="dropdown-menu dropdown-menu-right dropdown-content"
              style={{ zIndex: 999, width: "350px" }}
            >
              <div
                className="dropdown-content-body"
                style={{ padding: "12px" }}
              >
                <div className="row no-gutters">
                  <div className="col-12">
                    <h4 style={{ marginBottom: "-20px", fontSize: "15px" }}>
                      Ko'rinish
                    </h4>
                    <hr
                      className="hr-local"
                      style={{ marginBottom: "5px", fontSize: "15px" }}
                    />
                  </div>
                  <div className="col-3">
                    <a
                      href="#"
                      className="view-box mx-auto simple-view d-block text-body text-center p-3"
                    >
                      <b style={{ fontSize: "18px" }}>A</b>
                    </a>
                  </div>

                  <div className="col-3">
                    <a
                      href="#"
                      className="view-box mx-auto grey-view d-block text-body text-center p-3"
                    >
                      <b style={{ fontSize: "18px" }}>A</b>
                    </a>
                  </div>

                  <div className="col-3">
                    <a
                      href="#"
                      className="view-box mx-auto dark-view d-block text-body text-center p-3"
                    >
                      <b style={{ fontSize: "18px" }}>A</b>
                    </a>
                  </div>

                  <div className="col-3">
                    <a
                      href="#"
                      className="view-box mx-auto withoutImg-view d-block text-body text-center p-3"
                    >
                      <img
                        src="./assets/img/img.png"
                        style={{ maxWidth: "20px", minWidth: "19.9px" }}
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="col-12" style={{ marginTop: "12px" }}>
                    <h4 style={{ marginBottom: "-20px", fontSize: "18px" }}>
                      Matn o'lchami
                    </h4>
                    <hr className="hr-local" style={{ marginBottom: "5px" }} />

                    <div className="position-relative fontChanger">
                      <b id="fontSize" style={{ fontSize: "16px" }}>
                        0
                      </b>
                      <span style={{ fontSize: "16px" }}>
                        % kattalashtirildi
                      </span>
                      <input
                        type="range"
                        value="0"
                        min="0"
                        max="50"
                        style={{ height: "40px", width: "100%" }}
                        placeholder="Placeholder"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="bg-light newsFirstOption-section">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div className="mb-3 mt-3 pl-3">
            <a
              href="./index.html"
              className="g-0 text-dark"
              style={{ display: "flex", alignItems: "center", gap: "16px" }}
            >
              <div>
                <img
                  src="./assets/img/logo_nav.png"
                  className="img-fluid rounded-start logo"
                  alt="..."
                  style={{ width: "170px" }}
                />
              </div>
              <div className="p-0 d-flex justify-content-center">
                <div className="card-body m-0 p-0 d-flex justify-content-center align-items-center">
                  <h5
                    className="card-title m-0"
                    style={{
                      fontWeight: 600,
                      textTransform: "uppercase",
                      fontSize: "32px",
                    }}
                  >
                    Buxoro viloyati <br /> hokimligi
                  </h5>
                </div>
              </div>
            </a>
          </div>

          <div style={{ display: "flex", gap: "64px" }} className="hero-info">
            <div style={{ display: "flex", gap: "4px" }}>
              <img
                src="./assets/img/bux.png"
                alt="..."
                className="img-fluid"
                style={{ height: "170px" }}
              />
            </div>
          </div>
        </div>

        <div
          className="navbar navbar-dark navbar-expand-xl p-0"
          style={{ backgroundColor: "#2A4D85" }}
        >
          <div className="d-xl-none">
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbar-demo3-mobile"
              aria-expanded="false"
            >
              <i className="icon-grid3"></i>
            </button>
          </div>

          <div className="navbar-collapse collapse" id="navbar-demo3-mobile">
            <ul
              className="navbar-nav"
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              <li className="nav-item dropdown">
                <a
                  href="#"
                  style={{ fontSize: "12px", padding: "16px" }}
                  className="uppercase navbar-nav-link dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Viloyat Haqida
                </a>
                <div className="dropdown-menu dropdown-menu-left">
                  <a href="#" className="dropdown-item">
                    O'ZBEKISTON RESPUBLIKASI
                  </a>
                  <a href="./konstitutsiya.html" className="dropdown-item">
                    KONSTITUTSIYASI
                  </a>
                  <a href="#" className="dropdown-item">
                    DAVLAT RAMZLARI
                  </a>
                  <a href="#" className="dropdown-item">
                    MILLIY BAYRAMLAR
                  </a>
                  <a href="#" className="dropdown-item">
                    MILLIY VALYUTA
                  </a>
                  <a href="#" className="dropdown-item">
                    DAVLAT MUKOFOTLARI
                  </a>
                  <a href="#" className="dropdown-item">
                    HUDUDI VA AHOLI
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  style={{ fontSize: "12px", padding: "16px" }}
                  className="navbar-nav-link uppercase dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Hokimlik to'g'risida
                </a>
                <div className="dropdown-menu dropdown-menu-left">
                  <a href="#" className="dropdown-item">
                    HOKIMLIK FUNKSIYA VA VAZIFALARI
                  </a>
                  <a href="#" className="dropdown-item">
                    XALQ DEPUTATLARI BUXORO VILOYATI KENGASHI
                  </a>
                  <a href="#" className="dropdown-item">
                    RAHBARIYAT
                  </a>
                  <a href="#" className="dropdown-item">
                    TARKIBIY TUZILMANING
                  </a>
                  <a href="#" className="dropdown-item">
                    SXEMATIK KO'RINISHI
                  </a>
                  <a href="#" className="dropdown-item">
                    TARKIBIY BO'LINMALAR
                  </a>
                  <a href="#" className="dropdown-item">
                    HOKIMLIKKA MUROJAAT
                  </a>
                  <a href="#" className="dropdown-item">
                    HOKIMLIK TARIXI
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown" style={{ fontSize: "16px" }}>
                <a
                  href="#"
                  style={{ fontSize: "12px", padding: "16px" }}
                  className="navbar-nav-link uppercase dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Hokimlik faoliyati
                </a>
                <div
                  className="dropdown-menu dropdown-menu-left"
                  style={{ fontSize: "16px", textTransform: "uppercase" }}
                >
                  <a href="#" className="dropdown-item">
                    DAVLAT DASTURI DOIRASIDA AMALGA OSHIRILGAN ISHLAR
                  </a>
                  <a href="#" className="dropdown-item">
                    MUVOFIQLASHTIRUVCHI MASLAHAT ORGANLAR <br />
                    RAHBARLARI(KOMISSIYALAR, KENGASHLAR, QO'MITALAR)
                  </a>
                  <a href="#" className="dropdown-item">
                    HOKIMLIKNING TASHKILOT VA IDORALAR BILAN HAMKORLIGI
                  </a>
                  <a href="#" className="dropdown-item">
                    XALQARO HAMKORLIK
                  </a>
                  <a href="#" className="dropdown-item">
                    INVESTITSION FAOLIYAT
                  </a>
                  <a href="#" className="dropdown-item">
                    LOYIHALAR
                  </a>
                  <a href="#" className="dropdown-item">
                    TENDERLAR
                  </a>
                  <a href="#" className="dropdown-item">
                    E'LONLAR
                  </a>
                  <a href="#" className="dropdown-item">
                    VAKANSIYALAR
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  style={{ fontSize: "12px", padding: "16px" }}
                  className="navbar-nav-link uppercase dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Hujjatlar
                </a>
                <div className="dropdown-menu dropdown-menu-left">
                  <a href="#" className="dropdown-item">
                    QONUNCHILIK
                  </a>
                  <a href="#" className="dropdown-item">
                    DAVLAT DASTURLARI
                  </a>
                  <a href="#" className="dropdown-item">
                    VILOYAT DASTURLARI
                  </a>
                  <a href="#" className="dropdown-item">
                    NORMATIV HUQUQIY HUJJATLAR
                  </a>
                  <a href="#" className="dropdown-item">
                    HOKIMLIKNING ME'YORIY HUQUQIY HUJJATLARI
                  </a>
                  <a href="#" className="dropdown-item">
                    XALQARO SHARTNOMALAR
                  </a>
                  <a href="#" className="dropdown-item">
                    TADBIRKORLIK SUBYEKTLARIGA OID HUJJATLAR
                  </a>
                  <a href="#" className="dropdown-item">
                    YERLAR TO'G'RISIDA MA'LUMOT
                  </a>
                  <a href="#" className="dropdown-item">
                    STATISTIK, TAHLILIY, MA'RUZA VA AXBOROTLAR
                  </a>
                  <a href="#" className="dropdown-item">
                    ME'YORIY HUQUQIY HUJJATLAR LOYIHALARINI MUHOKAMALASH
                  </a>
                  <a href="#" className="dropdown-item">
                    O'Z KUCHINI YO'QOTGAN HUJJATLAR
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  style={{ fontSize: "12px", padding: "16px" }}
                  className="navbar-nav-link uppercase dropdown-toggle"
                  data-toggle="dropdown"
                >
                  axborot xizmati
                </a>

                <div className="dropdown-menu dropdown-menu-left">
                  <a
                    href="./axborotXizmati/yangilik.html"
                    className="dropdown-item"
                  >
                    YANGILIKLAR
                  </a>
                  <a
                    href="./axborotXizmati/hokimningNutqi.html"
                    className="dropdown-item"
                  >
                    HOKIMNING NUTQ VA MA'RUZALARI
                  </a>
                  <a
                    href="./axborotXizmati/matbuotAnjumanlari.html"
                    className="dropdown-item"
                  >
                    MATBUOT ANJUMANLARI
                  </a>
                  <a
                    href="./axborotXizmati/ochiqMajlislarTartibi.html"
                    className="dropdown-item"
                  >
                    OCHIQ MAJLISLARDA HOZIR BO'LISH TARTIBI
                  </a>
                  <a
                    href="./axborotXizmati/axborotRuyxati.html"
                    className="dropdown-item"
                  >
                    WEB SAYTDA JOYLASHTIRILADIGAN AXBOROTLAR RO'YXATI
                  </a>
                  <a
                    href="./axborotXizmati/pressRelizlar.html"
                    className="dropdown-item"
                  >
                    PRESS-RELIZLAR
                  </a>
                  <a
                    href="./axborotXizmati/qabulQilishTartibi.html"
                    className="dropdown-item"
                  >
                    AXBOROT OLISHGA DOIR so'ROVLARNI QABUL QILISH TARTIBI
                  </a>
                  <a
                    href="./axborotXizmati/AKKREDITATSIYA.html"
                    className="dropdown-item"
                  >
                    AKKREDITATSIYA O'TKAZISH
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  style={{ fontSize: "12px", padding: "16px" }}
                  className="navbar-nav-link uppercase dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Mahalliylashtirish
                </a>
                <div className="dropdown-menu dropdown-menu-left">
                  <a href="#" className="dropdown-item">
                    QONUNCHILIK
                  </a>
                  <a href="#" className="dropdown-item">
                    STATISTIK HISOBOTLAR
                  </a>
                  <a href="#" className="dropdown-item">
                    HUDUDIY IMPORT TAHLILI
                  </a>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a
                  href="./murojaat/murojaat.html"
                  style={{ fontSize: "12px", padding: "16px" }}
                  className="navbar-nav-link uppercase"
                >
                  murojaat
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  href="#"
                  style={{ fontSize: "12px", padding: "16px" }}
                  className="navbar-nav-link uppercase"
                >
                  YOSHLAR SEKTORI
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  style={{ fontSize: "12px", padding: "16px" }}
                  className="navbar-nav-link uppercase"
                  title="KORRUPSIYAGA QARSHI KURASHISH"
                >
                  KQK
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  style={{ fontSize: "12px", padding: "16px" }}
                  className="navbar-nav-link uppercase"
                >
                  OCHIQ MALUMOTLAR
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
