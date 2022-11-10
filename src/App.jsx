import { Route, Routes } from "react-router-dom";
import BoshSahifa from "./pages/adminPanel/bosh_sahifa/BoshSahifa";
import Login from "./pages/adminPanel/login/Login";
import XalqDeputatlariPage from "./pages/xalqDeputatlariPage/XalqDeputatlariPage";
import Home from "./pages/homePage/Home";
import MilliyBayramlarPage from "./pages/milliyBayramlarPage/MilliyBayramlarPage";
import RahbariyatPage from "./pages/rahbariyatPage/RahbariyatPage";
import News from "./pages/adminPanel/news/News";
import Layout from "./utils/Layout";
import LayoutAdmin from "./utils/LayoutAdmin";
import Information from "./pages/adminPanel/information/Information";
import GovGroup from "./pages/adminPanel/gov_group/GovGroup";
import EmployeeGroup from "./pages/adminPanel/employee_group/EmployeeGroup";
import UserNews from "./pages/news/UserNews";
import DetailNews from "./pages/news/DetailNews";
import UserInformation from "./pages/information/UserInformation";
import UserGovGroup from "./pages/govGroup.jsx/UserGovGroup";
import UserEmployee from "./pages/employee/UserEmployee";
import FooterCarousel from "./pages/adminPanel/footerCarousel/FooterCarousel";
import LayoutNews from "./utils/LayoutNews";
import GoodKnow from "./pages/adminPanel/good_know/GoodKnow";
import Tegs from "./pages/adminPanel/tegs/Tegs";
import Sectors from "./pages/adminPanel/sektorlar/Sectors";
import { useEffect } from "react";
import { useState } from "react";
import CtrlEnter from "./components/ctrlEnter/CtrlEnter";
import Employee2 from "./components/employee/Employee2";
import SectorDetail from "./components/davlatHokimiyatiSection/SectorDetail";
import AlertContent, { Alert } from "./components/alert/Alert";

function App() {
  const [alert, setAlert] = useState({ open: false, color: "", text: "" });
  const [ctrlEnter, setCtrlEnter] = useState({ isShow: false, data: "" })
  useEffect(() => {
    document.onkeydown = (e) => {
      console.log(e);
      if (e.ctrlKey && e.keyCode === 13) {
        console.log(ctrlEnter);

        if (window.getSelection().toString().length > 0) {
          if (window.getSelection().toString().length > 3) {
            setCtrlEnter({ isShow: true, data: window.getSelection().toString() })
          } else {
            Alert(setAlert, "warning", "3 ta belgidan ko'proq tanlang");
          }
        }
      }
    }
  }, [ctrlEnter])
  return (

    <div style={{ backgroundColor: "#eeeded" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin_panel" element={<Login />} />
        <Route path="/1" element={<Layout><Employee2 /></Layout>}></Route>
        <Route path="/admin/bosh_sahifa" element={<LayoutAdmin> <BoshSahifa /></LayoutAdmin>} />
        <Route path="/admin/news/:menuId/:subMenuId" element={<LayoutAdmin> <News /></LayoutAdmin>} />
        <Route path="/admin/information/:menuId/:subMenuId" element={<LayoutAdmin> <Information /></LayoutAdmin>} />
        <Route path="/admin/subGovGroup/:menuId/:subMenuId" element={<LayoutAdmin> <GovGroup /></LayoutAdmin>} />
        <Route path="/admin/employeeGroup/:menuId/:subMenuId" element={<LayoutAdmin> <EmployeeGroup /></LayoutAdmin>} />

        <Route path="/news/:menuId/:subMenuId" element={<Layout><UserNews /></Layout>} />
        <Route path="/news/detail/:id" element={<LayoutNews><DetailNews /></LayoutNews>} />

        <Route path="/information/:menuId/:subMenuId" element={<Layout><UserInformation /></Layout>} />
        <Route path="/information/detail/:id" element={<Layout><DetailNews /></Layout>} />
        <Route path="/subGovGroup/:menuId/:subMenuId" element={<Layout><UserGovGroup /></Layout>} />
        <Route path="/employeeGroup/:menuId/:subMenuId" element={<Layout><UserEmployee /></Layout>} />
        <Route path="/sector/detail/:id" element={<Layout><SectorDetail /></Layout>} />
        <Route path="/admin/carousel" element={<LayoutAdmin><FooterCarousel /></LayoutAdmin>} />
        <Route path="/admin/good_know" element={<LayoutAdmin><GoodKnow /></LayoutAdmin>} />
        <Route path="/admin/tegs" element={<LayoutAdmin><Tegs /></LayoutAdmin>} />
        <Route path="/admin/sectors" element={<LayoutAdmin><Sectors /></LayoutAdmin>} />
        <Route path="/milliy_bayramlar" element={<Layout><MilliyBayramlarPage /></Layout>}></Route>
        <Route
          path="/rahbariyat"
          element={
            <Layout>
              <RahbariyatPage />
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

      {ctrlEnter.isShow && (
        <CtrlEnter
          ctrlEnter={ctrlEnter}
          setCtrlEnter={setCtrlEnter}
        />
      )}

      {/* alert */}
      <AlertContent alert={alert} />
    </div >
  );
}

export default App;
