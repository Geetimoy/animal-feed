import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ResearchDevelopment from "./pages/ResearchDevelopment";
import NewsEvents from "./pages/NewsEvents";
import Distributor from "./pages/Distributor";
import Gallery from "./pages/Gallery";
import Nutrition from "./pages/Nutrition";

export default function Core() {
  return (
    
      <BrowserRouter basename="/uidevelopment/animal-feed/">
        <Routes>
          {/* <Route path="/" element={<Navigate to="/home" />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/research-development" element={<ResearchDevelopment />} />
          <Route path="/distributor" element={<Distributor />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/nutrition" element={<Nutrition />} />
        </Routes>
      </BrowserRouter>
   
  );
}