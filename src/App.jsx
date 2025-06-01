import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Error from "./layout/Error";
import Home from "./layout/Home";
import Layout from "./layout/Layout";
import TermsOfService from "./pages/footer/TermsOfService";
import PrivacyPolicy from "./pages/footer/PrivacyPolicy";
import Disclaimer from "./pages/footer/Disclaimer";
import About from "./pages/footer/About";
import Gallery from "./pages/gallery/Gallery";
import GalleryMadhubani from "./pages/gallery/GalleryMadhubani";
import AboutMithila from "./pages/about/AboutMithila";

function App() {
  return (
    <Routes>
      <Route path="" element={<Layout />} errorElement={<Error />}>
        <Route path="/" element={<Home />} />
        <Route path="pages" element={<Outlet />}>
          <Route path="gallery" element={<Outlet />}>
            <Route path="all" element={<Gallery />} />
            <Route path="madhubani" element={<GalleryMadhubani />} />
          </Route>
          <Route path="about" element={<Outlet />}>
            <Route path="website" element={<About />} />
            <Route path="mithila" element={<AboutMithila />} />
          </Route>
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
