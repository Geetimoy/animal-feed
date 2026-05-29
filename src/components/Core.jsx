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
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import ResetPassword from "./pages/ResetPassword";
import MyOrder from "./pages/MyOrder";
import AddressManagement from "./pages/AddressManagement";
import Csr from "./pages/Csr";
import Quality from "./pages/Quality";
import Logout from "./pages/Logout";
import DistributorDetails from "./pages/DistributorDetails";
// import Category from "./pages/Category";
import CalfProduct from "./pages/CalfProducts";
import AdultProduct from "./pages/AdultProduct";

import JubvnileProduct from "./pages/JuvenileProduct";
import GoatProduct from "./pages/GoatProduct";
import YakProduct from "./pages/YakProduct";
import PoultryPreStarterct from "./pages/PoultryPreStarter";
import PoultryStarter from "./pages/PoultryStarter";
import PoultryGrower from "./pages/PoultryGrower";
import PoultryFinisher from "./pages/PoultryFinisher";
import LayerPreStarter from "./pages/LayerPreStarter";
import LayerStarter from "./pages/LayerStarter";
import LayerFinisher from "./pages/LayerFinisher";
import PigFinisher from "./pages/PigFinisher";
import FishStarter from "./pages/FishStarter";
import FishFinisher from "./pages/FishFinisher";
import FishMaintenance from "./pages/FishMaintenance";
import FishGrower from "./pages/FishGrower";

import ProductListing from "./pages/ProductListing";




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
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/my-orders" element={<MyOrder />} />
        <Route path="/address-management" element={<AddressManagement />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/csr" element={<Csr />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/distributor-details" element={<DistributorDetails />} />
        {/* <Route path="/product-category" element={<Category />} /> */}
        <Route path="/calf-products" element={<CalfProduct />} />
        <Route path="/adult-products" element={<AdultProduct />} />
        <Route path="/juvenilefish-products" element={<JubvnileProduct />} />
        <Route path="/goat-products" element={<GoatProduct />} />
        <Route path="/yak-products" element={<YakProduct />} />
        <Route
          path="/poultryprestarter-products"
          element={<PoultryPreStarterct />}
        />
        <Route path="/poultrystarter-products" element={<PoultryStarter />} />
        <Route path="/poultrygrower-products" element={<PoultryGrower />} />
        <Route path="/poultryfinisher-products" element={<PoultryFinisher />} />
        <Route path="/layerorestarter-products" element={<LayerPreStarter />} />
        <Route path="/layerstarter-products" element={<LayerStarter />} />
        <Route path="/layerfinisher-products" element={<LayerFinisher />} />
        <Route path="/pigfinisher-products" element={<PigFinisher />} />
        <Route path="/starterfish-products" element={<FishStarter />} />
        <Route path="/growerfish-products" element={<FishGrower />} />
        <Route path="/finisherfish-products" element={<FishFinisher />} />
        <Route path="/maintenancefish-products" element={<FishMaintenance />} />

        <Route path="/:categorySlug/:subCategorySlug" element={<ProductListing />} />
      </Routes>
    </BrowserRouter>
  );
}