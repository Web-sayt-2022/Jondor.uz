import { Route, Routes } from "react-router-dom";
import BoshSahifa from "./pages/adminPanel/bosh_sahifa/BoshSahifa";
import Login from "./pages/adminPanel/login/Login";
// import BatafsilYangilikPage from "./pages/batafsilYangilikPage/BatafsilYangilikPage";
import XalqDeputatlariPage from "./pages/xalqDeputatlariPage/XalqDeputatlariPage";

import Home from "./pages/homePage/Home";
import MilliyBayramlarPage from "./pages/milliyBayramlarPage/MilliyBayramlarPage";
import RahbariyatPage from "./pages/rahbariyatPage/RahbariyatPage";
import TarkibiyBolinmalarPage from "./pages/tarkibiyBo'linmalarPage/TarkibiyBolinmalarPage";
import News from "./pages/adminPanel/news/News";
import UmumiyYangilikPage from "./pages/umumiyYangiliklarPage/UmumiyYangilikPage";
import Layout from "./utils/Layout";
import LayoutAdmin from "./utils/LayoutAdmin";
import Information from "./pages/adminPanel/information/Information";

function App() {
  return (

    <div style={{ backgroundColor: "#eeeded" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/yangilik_batafsil" element={<BatafsilYangilikPage />} /> */}
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
        <Route path="/admin/information/:menuId/:subMenuId" element={<LayoutAdmin> <Information /></LayoutAdmin>} />


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

      </Routes>
    </div>
  );
}

export default App;
