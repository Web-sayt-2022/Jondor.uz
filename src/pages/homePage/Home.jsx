import React, { useEffect, useState } from "react";
import AsosiyYangililar from "../../components/asosiyYangililar/AsosiyYangililar";
import DavlatHokimiyati from "../../components/davlatHokimiyatiSection/DavlatHokimiyati";
import Footer from "../../components/footer/Footer";
import FoydaliLinkCarousel from "../../components/foydaliLinkCarousel/FoydaliLinkCarousel";
import Header from "../../components/header/Header";
// import Homiylar from "../../components/homiylarSection/Homiylar";
import Tuzilish from "../../components/tuzilishSection/Tuzilish";
import Yangiliklar from "../../components/yangiliklarSection/Yangiliklar";
// import Yonalishlar from "../../components/yonalishlarSection/Yonalishlar";
import { axiosInstance } from "../../config";

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/news/getForHome");
        if (isMounted) setNews(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    return () => (isMounted = false);
  }, []);

  return (
    <>
      <Header />
      <AsosiyYangililar news={news} />
      <Yangiliklar news={news} />
      {/* <Yonalishlar /> */}
      <DavlatHokimiyati />
      <Tuzilish />
      <FoydaliLinkCarousel />
      {/* <Homiylar /> */}
      <Footer />
    </>
  );
}

export default React.memo(Home);
