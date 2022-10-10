import React from "react";
import AsosiyYangililar from "../../components/asosiyYangililar/AsosiyYangililar";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Yangiliklar from "../../components/yangiliklarSection/Yangiliklar";

export default function Home() {
  return (
    <>
      <Header />
      <AsosiyYangililar />
      <Yangiliklar />
      <Footer />
    </>
  );
}
