import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import VoqealarLeftPanel from "../components/voqealarLeftPanel/VoqealarLeftPanel";
import YangiliklarLeftPanel from "../components/yangiliklarLeftPanel/YangiliklarLeftPanel";
import FoydaliLinkCarousel from '../components/foydaliLinkCarousel/FoydaliLinkCarousel'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="d-flex bg-light">
        {/* <YangiliklarLeftPanel /> */}
        <VoqealarLeftPanel />
        {children}
      </main>
      <FoydaliLinkCarousel />
      <Footer />
    </>
  );
};

export default Layout;
