import { Route, Routes } from "react-router-dom";
import CarouselNews from "./components/carousel/CarouselNews";
import HorizontalYangilikCard from "./components/horizontalYangilikCard/HorizontalYangilikCard";
import AdminPanel from "./pages/adminPanel/AdminPanel";
import BatafsilYangilikPage from "./pages/BatafsilYangilikPage/BatafsilYangilikPage";

import Home from "./pages/Home/Home";
import UmumiyYangilikPage from "./pages/umumiyYangiliklarPage/UmumiyYangilikPage";
import Layout from "./utils/Layout";

function App() {
  return (
    // <CarouselNews />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/yangilik_batafsil" element={<BatafsilYangilikPage />} />
      <Route path="/admin_panel" element={<AdminPanel />} />
      <Route
        path="/1"
        element={
          <Layout>
            <UmumiyYangilikPage />
          </Layout>
        }
      ></Route>
    </Routes>
  );
}

export default App;
