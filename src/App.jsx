import { Route, Routes } from "react-router-dom";
import BoshSahifa from "./pages/adminPanel/bosh_sahifa/BoshSahifa";
import Login from "./pages/adminPanel/login/Login";
import XalqDeputatlariPage from "./pages/xalqDeputatlariPage/XalqDeputatlariPage";
import Home from "./pages/homePage/Home";
import MilliyBayramlarPage from "./pages/milliyBayramlarPage/MilliyBayramlarPage";
import RahbariyatPage from "./pages/rahbariyatPage/RahbariyatPage";
import News from "./pages/adminPanel/news/News";
import UmumiyYangilikPage from "./pages/umumiyYangiliklarPage/UmumiyYangilikPage";
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

function App() {
  return (

    <div style={{ backgroundColor: "#eeeded" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin_panel" element={<Login />} />

        <Route
          path="/1"
          element={
            <Layout>
              <UserGovGroup />
            </Layout>
          }></Route>

        <Route path="/admin/bosh_sahifa" element={<LayoutAdmin> <BoshSahifa /></LayoutAdmin>} />
        <Route path="/admin/news/:menuId/:subMenuId" element={<LayoutAdmin> <News /></LayoutAdmin>} />
        <Route path="/admin/information/:menuId/:subMenuId" element={<LayoutAdmin> <Information /></LayoutAdmin>} />
        <Route path="/admin/subGovGroup/:menuId/:subMenuId" element={<LayoutAdmin> <GovGroup /></LayoutAdmin>} />
        <Route path="/admin/employeeGroup/:menuId/:subMenuId" element={<LayoutAdmin> <EmployeeGroup /></LayoutAdmin>} />

        <Route path="/news/:menuId/:subMenuId" element={<Layout><UserNews /></Layout>} />
        <Route path="/news/detail/:id" element={<Layout><DetailNews /></Layout>} />

        <Route path="/information/:menuId/:subMenuId" element={<Layout><UserInformation /></Layout>} />
        <Route path="/information/detail/:id" element={<Layout><DetailNews /></Layout>} />

        <Route path="/subGovGroup/:menuId/:subMenuId" element={<Layout><UserGovGroup /></Layout>} />
        <Route path="/employeeGroup/:menuId/:subMenuId" element={<Layout><UserEmployee /></Layout>} />


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
