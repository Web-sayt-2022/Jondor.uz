import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { axiosInstance } from "../../config";
import language from "../../utils/img/language.png"
import buxImg from "../../utils/img/bux.png"
import logoNav from "../../utils/img/logo_nav.png"
import { LanguageContext } from "../../App";

const Header = () => {
  const [menu, setMenu] = useState([])
  const [subMenu, setSubMenu] = useState([])
  const lan = useContext(LanguageContext)
  console.log(lan.lan);

  // menularni o'qib olish
  useEffect(() => {
    let isMounted = true;
    axiosInstance.get("menu/getForAdmin").then((res) => {
      if (isMounted) {
        setMenu(res.data?.menuDTOS);
        setSubMenu(res.data?.submenuDTOS)
      }
    })

    return () => isMounted = false;
  }, [])

  return (
    <Wrapper>
      <nav
        className="navbar-local navbar d-flex justify-content-between flex-md-row flex-column align-items-center"
        style={{ background: "white" }}
      >
        <div className="languages_block d-flex align-items-center justify-content-between w-md-auto w-100">
          <img
            src={language}
            alt="..."
            style={{ maxWidth: "25px" }}
          />
          <div
            className="link_list"
            style={{
              fontSize: "16px",
              marginLeft: "10px",
              textTransform: "capitalize",
              display: "flex",
              gap: "8px"
            }}
          >
            <span style={{ fontSize: "16px", cursor: "pointer" }}
              className={lan.lan === "uz" ? "lan_active" : ""}
              onClick={() => lan.func("uz")}>
              O'z
            </span>

            <span style={{ fontSize: "16px", cursor: "pointer" }}
               className={lan.lan === "kr" ? "lan_active" : ""}
               onClick={() => lan.func("kr")}>
              Ўз
            </span>

            <span style={{ fontSize: "16px", cursor: "pointer" }}
               className={lan.lan === "ru" ? "lan_active" : ""}
               onClick={() => lan.func("ru")}>
              Рус
            </span>

          </div>
        </div>

        <div className="invalid_block w-md-auto w-100 mt-md-auto mt-2">
          <div
            className="link_list justify-content-between"
            style={{ fontSize: "16px" }}
          >
            <a href="#1" className="w-md-auto w-100">
              <input
                style={{ paddingLeft: "16px" }}
                className="search languages_block w-md-auto w-100"
                type="text"
                placeholder="Izlash..."
              />
            </a>

            <a
              href="#1"
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
                      href="#1"
                      className="view-box mx-auto simple-view d-block text-body text-center p-3"
                    >
                      <b style={{ fontSize: "18px" }}>A</b>
                    </a>
                  </div>

                  <div className="col-3">
                    <a
                      href="#1"
                      className="view-box mx-auto grey-view d-block text-body text-center p-3"
                    >
                      <b style={{ fontSize: "18px" }}>A</b>
                    </a>
                  </div>

                  <div className="col-3">
                    <a
                      href="#1"
                      className="view-box mx-auto dark-view d-block text-body text-center p-3"
                    >
                      <b style={{ fontSize: "18px" }}>A</b>
                    </a>
                  </div>

                  <div className="col-3">
                    <a
                      href="#1"
                      className="view-box mx-auto withoutImg-view d-block text-body text-center p-3"
                    >
                      <img
                        src={buxImg}
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
                        defaultValue="0"
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
              href="/"
              className="g-0 text-dark"
              style={{ display: "flex", alignItems: "center", gap: "16px" }}
            >
              <div>
                <img
                  src={logoNav}
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
                    Jondor tuman hokimligi
                  </h5>
                </div>
              </div>
            </a>
          </div>

          <div style={{ display: "flex", gap: "64px" }} className="hero-info">
            <div style={{ display: "flex", gap: "4px" }}>
              <img
                src={buxImg}
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
            <ul className="navbar-nav"
              style={{ display: "flex", flexWrap: "wrap" }}>

              {menu.length > 0 && menu.map((item) => {
                return (
                  <li key={item.id} className="nav-item dropdown">
                    <a
                      href="#1"
                      style={{ fontSize: "12px", padding: "16px" }}
                      className="uppercase navbar-nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      {item.uzName}
                    </a>
                    <div className="dropdown-menu dropdown-menu-left">
                      {subMenu.length > 0 && subMenu.filter((data) => data.menuId === item.id).map((item2) => {
                        return (
                          item2.type !== "link" ? (
                            <Link key={item.id} to={`/${item2.type}/${item.id}/${item2.id}`} className="dropdown-item">
                              {item2.uzName}
                            </Link>) :
                            (
                              <a href={`${item2.url}`} target="_blank" rel="noopener noreferrer"
                                className="dropdown-item">
                                {item2.uzName}
                              </a>
                            )
                        )
                      })}
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default React.memo(Header);

const Wrapper = styled.div`
  .navbar-local {
    padding: 8px 10px;
  }

  .hr-local {
    margin-right: 15px !important;
    margin-top: 20px !important;
  }

  .languages_block {
    border: 1px solid rgb(65, 64, 64);
    border-radius: 20px;
    padding: 7px 9px;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .dropdown-toggle::after {
    font-size: 16px;
  }

  .share {
    cursor: pointer;
    background: #0b3251;
    padding: 5px;
    color: white;
    border-radius: 4px;
    margin-left: 15px;
    transition: all 0.1s ease;
    user-select: none;
  }

  .share:hover {
    background: #2a4d85;
  }

  share:active {
    background: #1c2e37;
  }

  .localReader {
    position: fixed;
    z-index: 99999;
    color: white;
    background: #0d3c61;
    padding: 4px;
    border-radius: 4px;
    transition: 0.2s;
    cursor: pointer;
    opacity: 0;
  }

  .lan_active {
    color: #2196f3 !important;
    font-weight: 600;
    transition: .3s
  }
`;
