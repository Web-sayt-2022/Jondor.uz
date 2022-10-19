import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import VoqealarLeftPanel from "../components/voqealarLeftPanel/VoqealarLeftPanel";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="d-flex bg-light">
        {/* <YangiliklarLeftPanel /> */}
        <VoqealarLeftPanel />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
