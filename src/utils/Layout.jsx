import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import FoydaliLinkCarousel from "../components/foydaliLinkCarousel/FoydaliLinkCarousel";
import VoqealarLeftPanelNew from "../components/voqealarLeftPanelNew/VoqealarLeftPanelNew";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <main className="d-flex bg-light asosiy-main">
        <VoqealarLeftPanelNew />
        <div className="children">
          {children}
        </div>
      </main>
      <FoydaliLinkCarousel />
      <Footer />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  .children {
    width: 100%;
  }
`
