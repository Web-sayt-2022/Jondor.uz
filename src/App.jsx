import { Route, Routes } from "react-router-dom";
import BoshSahifa from "./pages/adminPanel/bosh_sahifa/BoshSahifa";
import Informarion from "./pages/adminPanel/information/Informarion";
import Login from "./pages/adminPanel/login/Login";
import BatafsilYangilikPage from "./pages/batafsilYangilikPage/BatafsilYangilikPage";
import XalqDeputatlariPage from "./pages/xalqDeputatlariPage/XalqDeputatlariPage";

import Home from "./pages/homePage/Home";
import MilliyBayramlarPage from "./pages/milliyBayramlarPage/MilliyBayramlarPage";
import RahbariyatPage from "./pages/rahbariyatPage/RahbariyatPage";
import TarkibiyBolinmalarPage from "./pages/tarkibiyBo'linmalarPage/TarkibiyBolinmalarPage";
import News from "./pages/adminPanel/news/News";
import BatafsilYangilikPage from "./pages/BatafsilYangilikPage/BatafsilYangilikPage";
import Home from "./pages/Home/Home";
import UmumiyYangilikPage from "./pages/umumiyYangiliklarPage/UmumiyYangilikPage";
import Layout from "./utils/Layout";
import LayoutAdmin from "./utils/LayoutAdmin";

function App() {
  return (
    // <CarouselNews />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/yangilik_batafsil" element={<BatafsilYangilikPage />} />
      <Route path="/admin_panel" element={<Login />} />
      <Route
        path="/1"
        element={
          <Layout>
            <UmumiyYangilikPage />
          </Layout>
        }></Route>

      <Route path="/admin/bosh_sahifa" element={<LayoutAdmin> <BoshSahifa /></LayoutAdmin>} />
      <Route path="/admin/news/:menuId/:subMenuId" element={<LayoutAdmin> <News /></LayoutAdmin>} />
      <Route path="/admin/information/:menuId/:subMenuId" element={<LayoutAdmin> <Informarion /></LayoutAdmin>} />
    <div style={{ backgroundColor: "#eeeded" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yangilik_batafsil" element={<BatafsilYangilikPage />} />
        <Route path="/admin_panel" element={<Login />} />
        <Route
          path="/admin"
          element={
            <LayoutAdmin>
              {" "}
              <AdminPanel />
            </LayoutAdmin>
          }
        />
        <Route
          path="/1"
          element={
            <Layout>
              <UmumiyYangilikPage />
            </Layout>
          }
        ></Route>
        <Route
          path="/milliy_bayramlar"
          element={
            <Layout>
              <MilliyBayramlarPage />
            </Layout>
          }
        ></Route>

        <Route
          path="/rahbariyat"
          element={
            <Layout>
              <RahbariyatPage />
            </Layout>
          }
        ></Route>

        <Route
          path="/tarkibiy_bolinmalar"
          element={
            <Layout>
              <TarkibiyBolinmalarPage />
            </Layout>
          }
        ></Route>

        <Route
          path="/xalq_deputatlari"
          element={
            <Layout>
              <XalqDeputatlariPage />
            </Layout>
          }
        ></Route>

        {/* tuman haqida */}

        <Route
          path="/tuman_haqida/konstitutsiya"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/tuman_haqida/davlat_ramzlari"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/tuman_haqida/milliy_bayramlar"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/tuman_haqida/milliy_valyuta"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/tuman_haqida/davlat_mukofotlari"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/tuman_haqida/hududi"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        {/* hokimlik haqida */}

        <Route
          path="/hokimlik_haqida/funksiya_vazifalari"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/hokimlik_haqida/xalq_deputatlari"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/hokimlik_haqida/rahbariyat"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/hokimlik_haqida/tarkibiy_tuzilma"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/hokimlik_haqida/tarkibiy_bulinmalar"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/hokimlik_haqida/hokimlikka_murojaat"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/hokimlik_haqida/hokimlik_tarixi"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        {/* hokimlik haqida */}

        <Route
          path="/hokimlik_faoliyati/amalga_oshirilgan_ishlar"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/hokimlik_faoliyati/maslahat_organlari"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/hokimlik_faoliyati/hokimlik_hamkorligi"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/hokimlik_faoliyati/xalqaro_hamkorlik"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/hokimlik_faoliyati/investitsion_faoliyat"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/hokimlik_faoliyati/loyihalar"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/hokimlik_faoliyati/tendrlar"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/hokimlik_faoliyati/elonlar"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/hokimlik_faoliyati/vakansiyalar"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        {/* hujjatlar */}

        <Route
          path="/hujjatlar/qonunchilik"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/hujjatlar/davlat_dasturlari"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/hujjatlar/viloyat_dasturlari"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/hujjatlar/normativ_hujjatlar"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/hujjatlar/meyoriy_hujjatlar"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/hujjatlar/xalqaro_shartnomalar"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/hujjatlar/tadbirkorlik_hujjatlari"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/hujjatlar/yerlar_malumoti"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/hujjatlar/statistika"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/hujjatlar/kuchini_yuqotgan_hujjatlar"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        {/* axborot xizmati */}

        <Route
          path="/axborot_xizmati/yangiliklar"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/axborot_xizmati/hokimning_nutqi"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/axborot_xizmati/matbuot_anjumanlari"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/axborot_xizmati/majlislar_tartibi"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/axborot_xizmati/websayt_ro'yxati"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/axborot_xizmati/press-relizlar"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/axborot_xizmati/axborot_olish_tartibi"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/axborot_xizmati/akkreditatsiya_utkazish"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        {/* mahalliylashtirish */}

        <Route
          path="/mahalliylashtirish/qonunchilik"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/mahalliylashtirish/statistik_hisobotlar"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        <Route
          path="/mahalliylashtirish/hududiy_import_tahlili"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        {/* murojaat */}

        <Route
          path="/murojaat"
          element={
            <Layout>
              {" "}
              <UmumiyYangilikPage />{" "}
            </Layout>
          }
        />

        {/* ADMIN PANEL */}
        {/* bosh sahifa */}
        <Route
          path="/admin/bosh_sahifa/foydali_manzillar"
          element={
            <LayoutAdmin>
              {" "}
              <FoydaliManzillar />{" "}
            </LayoutAdmin>
          }
        />

        {/* tuman haqida */}

        <Route
          path="/admin/tuman_haqida/konstitutsiya"
          element={
            <LayoutAdmin>
              {" "}
              <UmumiyYangilikPage />{" "}
            </LayoutAdmin>
          }
        />

        <Route
          path="/admin/tuman_haqida/davlat_ramzlari"
          element={
            <LayoutAdmin>
              {" "}
              <UmumiyYangilikPage />{" "}
            </LayoutAdmin>
          }
        />

        <Route
          path="/admin/tuman_haqida/milliy_bayramlar"
          element={
            <LayoutAdmin>
              {" "}
              <UmumiyYangilikPage />{" "}
            </LayoutAdmin>
          }
        />

        <Route
          path="/admin/tuman_haqida/milliy_valyuta"
          element={
            <LayoutAdmin>
              {" "}
              <UmumiyYangilikPage />{" "}
            </LayoutAdmin>
          }
        />

      <Route path="/admin/tuman_haqida/davlat_mukofotlari"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/tuman_haqida/hududi"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      {/* hokimlik haqida */}


    </Routes>
  );
}

export default App;
