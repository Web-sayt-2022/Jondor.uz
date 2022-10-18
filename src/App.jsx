import { Route, Routes } from "react-router-dom";
import CarouselNews from "./components/carousel/CarouselNews";
import HorizontalYangilikCard from "./components/horizontalYangilikCard/HorizontalYangilikCard";
import AdminPanel from "./pages/adminPanel/AdminPanel";
import Yangiliklar from "./pages/adminPanel/axborot_xizmati/yangiliklar/Yangiliklar";
import Login from "./pages/adminPanel/login/Login";
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
      <Route path="/admin" element={<LayoutAdmin> <AdminPanel /></LayoutAdmin>} />
      <Route
        path="/1"
        element={
          <Layout>
            <UmumiyYangilikPage />
          </Layout>
        }></Route>


      {/* tuman haqida */}

      <Route path="/tuman_haqida/konstitutsiya"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/tuman_haqida/davlat_ramzlari"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/tuman_haqida/milliy_bayramlar"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/tuman_haqida/milliy_valyuta"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/tuman_haqida/davlat_mukofotlari"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/tuman_haqida/hududi"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      {/* hokimlik haqida */}

      <Route path="/hokimlik_haqida/funksiya_vazifalari"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/hokimlik_haqida/xalq_deputatlari"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/hokimlik_haqida/rahbariyat"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/hokimlik_haqida/tarkibiy_tuzilma"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/hokimlik_haqida/tarkibiy_bulinmalar"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/hokimlik_haqida/hokimlikka_murojaat"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/hokimlik_haqida/hokimlik_tarixi"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      {/* hokimlik haqida */}

      <Route path="/hokimlik_faoliyati/amalga_oshirilgan_ishlar"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/hokimlik_faoliyati/maslahat_organlari"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/hokimlik_faoliyati/hokimlik_hamkorligi"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/hokimlik_faoliyati/xalqaro_hamkorlik"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/hokimlik_faoliyati/investitsion_faoliyat"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/hokimlik_faoliyati/loyihalar"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/hokimlik_faoliyati/tendrlar"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/hokimlik_faoliyati/elonlar"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/hokimlik_faoliyati/vakansiyalar"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      {/* hujjatlar */}

      <Route path="/hujjatlar/qonunchilik"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/hujjatlar/davlat_dasturlari"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/hujjatlar/viloyat_dasturlari"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/hujjatlar/normativ_hujjatlar"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/hujjatlar/meyoriy_hujjatlar"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/hujjatlar/xalqaro_shartnomalar"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/hujjatlar/tadbirkorlik_hujjatlari"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/hujjatlar/yerlar_malumoti"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/hujjatlar/statistika"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/hujjatlar/kuchini_yuqotgan_hujjatlar"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />


      {/* axborot xizmati */}

      <Route path="/axborot_xizmati/yangiliklar"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/axborot_xizmati/hokimning_nutqi"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/axborot_xizmati/matbuot_anjumanlari"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/axborot_xizmati/majlislar_tartibi"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/axborot_xizmati/websayt_ro'yxati"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/axborot_xizmati/press-relizlar"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/axborot_xizmati/axborot_olish_tartibi"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/axborot_xizmati/akkreditatsiya_utkazish"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      {/* mahalliylashtirish */}

      <Route path="/mahalliylashtirish/qonunchilik"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/mahalliylashtirish/statistik_hisobotlar"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      <Route path="/mahalliylashtirish/hududiy_import_tahlili"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />

      {/* murojaat */}

      <Route path="/murojaat"
        element={<Layout> <UmumiyYangilikPage /> </Layout>} />




      {/* ADMIN PANEL */}
      {/* tuman haqida */}

      <Route path="/admin/tuman_haqida/konstitutsiya"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/tuman_haqida/davlat_ramzlari"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/tuman_haqida/milliy_bayramlar"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/tuman_haqida/milliy_valyuta"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/tuman_haqida/davlat_mukofotlari"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/tuman_haqida/hududi"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      {/* hokimlik haqida */}

      <Route path="/admin/hokimlik_haqida/funksiya_vazifalari"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/hokimlik_haqida/xalq_deputatlari"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/hokimlik_haqida/rahbariyat"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/hokimlik_haqida/tarkibiy_tuzilma"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/hokimlik_haqida/tarkibiy_bulinmalar"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/hokimlik_haqida/hokimlikka_murojaat"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/hokimlik_haqida/hokimlik_tarixi"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      {/* hokimlik haqida */}

      <Route path="/admin/hokimlik_faoliyati/amalga_oshirilgan_ishlar"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/hokimlik_faoliyati/maslahat_organlari"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/hokimlik_faoliyati/hokimlik_hamkorligi"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/hokimlik_faoliyati/xalqaro_hamkorlik"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/hokimlik_faoliyati/investitsion_faoliyat"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/hokimlik_faoliyati/loyihalar"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/hokimlik_faoliyati/tendrlar"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/hokimlik_faoliyati/elonlar"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/hokimlik_faoliyati/vakansiyalar"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      {/* hujjatlar */}

      <Route path="/admin/hujjatlar/qonunchilik"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/hujjatlar/davlat_dasturlari"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/hujjatlar/viloyat_dasturlari"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/hujjatlar/normativ_hujjatlar"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/hujjatlar/meyoriy_hujjatlar"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/hujjatlar/xalqaro_shartnomalar"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/hujjatlar/tadbirkorlik_hujjatlari"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/hujjatlar/yerlar_malumoti"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/hujjatlar/statistika"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/hujjatlar/kuchini_yuqotgan_hujjatlar"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />


      {/* axborot xizmati */}

      <Route path="/admin/axborot_xizmati/yangiliklar"
        element={<LayoutAdmin> <Yangiliklar /> </LayoutAdmin>} />

      <Route path="/admin/axborot_xizmati/hokimning_nutqi"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/axborot_xizmati/matbuot_anjumanlari"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/axborot_xizmati/majlislar_tartibi"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/axborot_xizmati/websayt_ro'yxati"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/axborot_xizmati/press-relizlar"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/axborot_xizmati/axborot_olish_tartibi"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/axborot_xizmati/akkreditatsiya_utkazish"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      {/* mahalliylashtirish */}

      <Route path="/admin/mahalliylashtirish/qonunchilik"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/mahalliylashtirish/statistik_hisobotlar"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      <Route path="/admin/mahalliylashtirish/hududiy_import_tahlili"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

      {/* murojaat */}

      <Route path="/admin/murojaat"
        element={<LayoutAdmin> <UmumiyYangilikPage /> </LayoutAdmin>} />

    </Routes>
  );
}

export default App;
