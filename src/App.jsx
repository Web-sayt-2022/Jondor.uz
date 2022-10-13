import { Route, Routes } from "react-router-dom";
import CarouselNews from "./components/carousel/CarouselNews";
import AdminPanel from "./pages/adminPanel/AdminPanel";
import BatafsilYangilikPage from "./pages/BatafsilYangilikPage/BatafsilYangilikPage";

import Home from "./pages/Home/Home";

function App() {
  return (
    // <CarouselNews />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/yangilik_batafsil" element={<BatafsilYangilikPage />} />
      <Route path="/admin_panel" element={<AdminPanel />} />
    </Routes>
  );
}

export default App;
