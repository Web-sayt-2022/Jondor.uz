import React from 'react'

function HeaderAdmin() {
  return (
    <div className="navbar navbar-expand-lg navbar-white bg-white navbar-static shadow bg-body rounded navbarComponents"
      style={{ backgroundColor: "#fff", zIndex: "5" }}
    >
      <div className="d-flex flex-1 d-lg-none">
        <button
          className="navbar-toggler sidebar-mobile-main-toggle"
          type="button"
        >
          <i className="icon-paragraph-justify3"></i>
        </button>
      </div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ width: "50px" }}
      >
        <i className="icon-menu7 " style={{ fontSize: "21px" }}></i>
      </div>
      <div className="row">
        <div className="navbar-brand d-flex justify-content-between align-items-center">
          <div className="ml-3">
            <img
              src="../../../utils/images/gerb.svg"
              style={{ width: "100%", height: "60px" }}
              alt=""
            />
          </div>
          <div className="d-flex justify-content-evenly align-items-center text-left">
            <h6 className="text-wrap">
              Jondor tuman hokimligi
            </h6>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end align-items-center flex-1 flex-lg-6 order-1 order-lg-2">
        <ul className="navbar-nav flex-row">
          <li className="nav-item">
            <a
              href="/"
              className="navbar-nav-link navbar-nav-link-toggler text-dark"
              style={{ fontWeight: "bold" }}
            >
              Chiqish
              <i className="icon-switch2" style={{ marginLeft: "5px" }}></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderAdmin