import React from "react";
import styled from "styled-components";
import HeaderAdmin from "../components/headerAdmin/HeaderAdmin";
import SidebarAdmin from "../components/sidebarAdmin/SidebarAdmin";

const LayoutAdmin = ({ children }) => {
  return (
    <Wrapper>
      <HeaderAdmin />
      <div className="page-content">
          <SidebarAdmin />
        <div className="children">
          {children}
        </div>
      </div>
    </Wrapper>
  );
};

export default LayoutAdmin;

const Wrapper = styled.div`
  .page-content {
    height: calc(100vh - 74px) !important;
  }

  .children {
    margin-left: 3.5rem;
    width: 100%;
  }

  @media(max-width: 992px) {
    .children {
    margin-left: 0rem;
    width: 100%;
  }
  }
`