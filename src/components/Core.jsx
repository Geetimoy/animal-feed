import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ResearchDevelopment from "./pages/ResearchDevelopment";
import NewsEvents from "./pages/NewsEvents";
import Distributor from "./pages/Distributor";
import Gallery from "./pages/Gallery";
import Nutrition from "./pages/Nutrition";
import NewsDetails from "./pages/NewsDetails";
import FeedType from "./pages/FeedType";
import OurTeams from "./pages/OurTeams";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import ResetPassword from "./pages/ResetPassword";
import MyOrder from "./pages/MyOrder";
import AddressManagement from "./pages/AddressManagement";


export default function Core() {
  return (
    
      <BrowserRouter basename="/uidevelopment/animal-feed/">
        <ScrollToTop />
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
          <Route path="/news-details" element={<NewsDetails />} />
          <Route path="/feed-type" element={<FeedType />} />
          <Route path="/our-teams" element={<OurTeams />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products" element={<Products />} />
          <Route path="/my-orders" element={<MyOrder />} />
          <Route path="/address-management" element={<AddressManagement />} />
        </Routes>
      </BrowserRouter>
   
  );
}