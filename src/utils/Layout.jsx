import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import LeftPanel from "../components/leftPanel/LeftPanel";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="d-flex bg-light">
        <LeftPanel />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
