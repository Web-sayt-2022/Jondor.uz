import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <Wrapper>
      <div className="sidebar sidebar-light sidebar-main sidebar-expand-lg sidebar-main-resized" style={{left: "3rem", height: "100vh" }}>
        <div className="sidebar-content sidebar-content-hover" style={{ postion: 'relative'}}>
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

          <div className="sidebar-section" style={{ paddingBottom: 30}}>
            <ul className="nav nav-sidebar" data-nav-type="accordion">
              <li className="nav-item " style={{ fontSize: '18px' }}>
                <Link to="/asosiy" className="nav-link liHover">
                  <i className="icon-home4" style={{ color: "#0056B8" }} />
                  <span>Bosh sahifa</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </Wrapper>
  );
}

export default Sidebar;

const Wrapper = styled.div`

`
