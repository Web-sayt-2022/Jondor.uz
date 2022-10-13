import React, { useEffect } from "react";
import AsosiyYangililar from "../../components/asosiyYangililar/AsosiyYangililar";
import DavlatHokimiyati from "../../components/davlatHokimiyatiSection/DavlatHokimiyati";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Homiylar from "../../components/homiylarSection/Homiylar";
import Tuzilish from "../../components/tuzilishSection/Tuzilish";
import Yangiliklar from "../../components/yangiliklarSection/Yangiliklar";
import Yonalishlar from "../../components/yonalishlarSection/Yonalishlar";
import { axiosInstance } from "../../config";

export default function Home() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axiosInstance.get("/book");

  //     } catch (error) {}
  //   };

  //   fetchData();
  // }, []);

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
