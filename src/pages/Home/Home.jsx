import React from "react";
import AsosiyYangililar from "../../components/asosiyYangililar/AsosiyYangililar";
import DavlatHokimiyati from "../../components/davlatHokimiyatiSection/DavlatHokimiyati";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Homiylar from "../../components/homiylarSection/Homiylar";
import Tuzilish from "../../components/tuzilishSection/Tuzilish";
import Yangiliklar from "../../components/yangiliklarSection/Yangiliklar";
import Yonalishlar from "../../components/yonalishlarSection/Yonalishlar";

export default function Home() {
  return (
    <>
      <Header />
      <AsosiyYangililar />
      <Yangiliklar />
      <Yonalishlar />
      <DavlatHokimiyati />
      <Tuzilish />
      <Homiylar />
      <Footer />
    </>
  );
}
