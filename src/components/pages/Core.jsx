import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import OrderDetails from "./pages/OrderDetails";
import AddressManagement from "./pages/AddressManagement";
import Csr from "./pages/Csr";
import Quality from "./pages/Quality";
import Logout from "./pages/Logout";
import DistributorDetails from "./pages/DistributorDetails";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import ThankyouOrder from "./pages/ThankyouOrder";


export default function Core() {
  return (
    <BrowserRouter basename="/uidevelopment/animal-feed/">
      <ScrollToTop />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Static Pages */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/news-events" element={<NewsEvents />} />
        <Route path="/research-development" element={<ResearchDevelopment />} />
        <Route path="/distributor" element={<Distributor />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/news/:slug" element={<NewsDetails />} />
        <Route path="/feed-type" element={<FeedType />} />
        <Route path="/our-teams" element={<OurTeams />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/logout" element={<Logout />} />

        {/* User Pages */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-orders" element={<MyOrder />} />
        <Route path="/address-management" element={<AddressManagement />} />
        <Route path="/order-details/:orderId" element={<OrderDetails />} />

        {/* Product Pages */}
        <Route path="/products" element={<Products />} />

        {/* Dynamic Product Listing - Both URL Patterns */}
        {/* Pattern 1: Without /products prefix (from sidebar categories) */}
        <Route path="/:categorySlug/:subCategorySlug" element={<ProductListing />} />

        {/* Pattern 2: With /products prefix (from "View Products" button) */}
        <Route path="/products/:categorySlug/:subCategorySlug" element={<ProductListing />} />

        {/* Product Details */}
        <Route path="/product-details/:productSlug" element={<ProductDetails />} />

        {/* Cart & Checkout */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thankyou-order" element={<ThankyouOrder />} />

        {/* Other Pages */}
        <Route path="/quality" element={<Quality />} />
        <Route path="/csr" element={<Csr />} />
        <Route path="/distributors/:slug" element={<DistributorDetails />} />

        {/* 404 - Catch all route (optional) */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}