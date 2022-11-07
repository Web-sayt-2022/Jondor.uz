import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import FoydaliLinkCarousel from "../components/foydaliLinkCarousel/FoydaliLinkCarousel";
import LeftPanel from "../components/yangiliklarLeftPanel/YangiliklarLeftPanel";

const LayoutNews = ({ children }) => {
  return (
    <>
      <Header />
      <main className="d-flex bg-light asosiy-main">
        <LeftPanel />
        {children}
      </main>
      <FoydaliLinkCarousel />
      <Footer />
    </>
  );
};

export default LayoutNews;
