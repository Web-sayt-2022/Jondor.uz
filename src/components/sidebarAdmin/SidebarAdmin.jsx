import React from 'react'
import { Link } from 'react-router-dom'

function SidebarAdmin() {
  const open = (name) => {
    if (document.querySelector(`.${name}`).querySelector('ul').style.display === "none") {
      document.querySelector(`.${name}`).querySelector('ul').style.display = "block";
    } else {
      document.querySelector(`.${name}`).querySelector('ul').style.display = "none";
    }
  }

  return (
    <div className="sidebar sidebar-light sidebar-main sidebar-expand-lg sidebar-main-resized">
      <div className="sidebar-content sidebar-content-hover" style={{ postion: 'relative' }}>
        <div className="sidebar-section sidebar-user">
          <div className="sidebar-user-material">
            <div className="sidebar-section-body">
              <div className="d-flex">
                <div className={'flex-1'} />
                <span className="text-center">
                  sadfasd
                </span>

                <div className="text-right position-absolute" style={{ right: 10 }}>
                  <button type="button"
                    className="btn btn-outline-light border-transparent btn-icon rounded-pill btn-sm sidebar-control sidebar-main-resize d-none d-lg-inline-flex">
                    <i className="icon-transmission" />
                  </button>
                </div>
              </div>

              <div className="text-center">
                <h6 className="mb-0 text-white text-shadow-dark mt-3 cursor-pointer"> fdsdfsd </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar-section" style={{ paddingBottom: 30 }}>
          <ul className="nav nav-sidebar" data-nav-type="accordion">
            {/* <li className="nav-item " style={{ fontSize: '18px' }}>
                            <Link to="/asosiy" className="nav-link liHover">
                                <i className="icon-home4" style={{ color: "#0056B8" }} />
                                <span>Bosh sahifa</span>
                            </Link>
                        </li> */}

            <li className="nav-item nav-item-submenu kiruvchi" style={{ display: "block" }}>
              <div className="nav-link" style={{ fontSize: '18px', cursor: "pointer" }}
                onClick={() => open('kiruvchi')}>
                <i className="icon-home4 text-primary" />
                <span>Bosh sahifa</span>
              </div>

              <ul className="nav-item-ul" style={{ display: "none" }}>
                <li className="nav-item">
                  <Link to="/admin/bosh_sahifa/foydali_manzillar" className="nav-link liHover" style={{ fontSize: '18px' }}>
                    <i className="icon-magazine" style={{ color: "#0056B8" }} />
                    <span>Foydali manzillar</span>
                  </Link>
                </li>

              </ul>
            </li>


            <li className="nav-item nav-item-submenu axborot_xizmati" style={{ display: "block" }}>
              <div className="nav-link" style={{ fontSize: '18px', cursor: "pointer" }}
                onClick={() => open('axborot_xizmati')}>
                <i className="icon-home4 text-primary" />
                <span>Axborot xizmati</span>
              </div>

              <ul className="nav-item-ul" style={{ display: "none" }}>
                <li className="nav-item">
                  <Link to="/admin/axborot_xizmati/yangiliklar" className="nav-link liHover" style={{ fontSize: '18px' }}>
                    <i className="icon-magazine" style={{ color: "#0056B8" }} />
                    <span>Yangiliklar</span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/admin/axborot_xizmati/hokimning_nutqi" className="nav-link liHover" style={{ fontSize: '18px' }}>
                    <i className="icon-magazine" style={{ color: "#0056B8" }} />
                    <span>Hokimning nutqi va maruzalari</span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/admin/axborot_xizmati/yangiliklar" className="nav-link liHover" style={{ fontSize: '18px' }}>
                    <i className="icon-magazine" style={{ color: "#0056B8" }} />
                    <span>Matbuot anjumanlari</span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/admin/axborot_xizmati/yangiliklar" className="nav-link liHover" style={{ fontSize: '18px' }}>
                    <i className="icon-magazine" style={{ color: "#0056B8" }} />
                    <span>Ochiq majlislarda hozir bo'lish tartibi</span>
                  </Link>
                </li>

              </ul>
            </li>



          </ul>
        </div>

      </div>
    </div>
  )
}

export default SidebarAdmin