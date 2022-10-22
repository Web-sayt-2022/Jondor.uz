import { Route, Routes } from "react-router-dom";
import BoshSahifa from "./pages/adminPanel/bosh_sahifa/BoshSahifa";
import Informarion from "./pages/adminPanel/information/Informarion";
import Login from "./pages/adminPanel/login/Login";
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





    </Routes>
  );
}

export default App;
