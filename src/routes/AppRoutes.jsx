import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "../auth/ProtectedRoute";
import ScrollToTop from "../components/ScrollToTop";
import Home from "../components/pages/Home";
import AboutUs from "../components/pages/AboutUs";
import ContactUs from "../components/pages/ContactUs";
import NewsEvents from "../components/pages/NewsEvents";
import ResearchDevelopment from "../components/pages/ResearchDevelopment";
import Distributor from "../components/pages/Distributor";
import Gallery from "../components/pages/Gallery";
import Nutrition from "../components/pages/Nutrition";
import NewsDetails from "../components/pages/NewsDetails";
import NewsCategory from "../components/pages/NewsCategory";
import NewsTags from "../components/pages/NewsTags";
import FeedType from "../components/pages/FeedType";
import OurTeams from "../components/pages/OurTeams";
import Quality from "../components/pages/Quality";
import Csr from "../components/pages/Csr";
import DistributorDetails from "../components/pages/DistributorDetails";
import Login from "../components/pages/Login";
import SignUp from "../components/pages/SignUp";
import ForgotPassword from "../components/pages/ForgotPassword";
import VerifyOtp from "../components/pages/VerifyOtp";
import ChangePassword from "../components/pages/ChangePassword";
import ResetPassword from "../components/pages/ResetPassword";
import Logout from "../components/pages/Logout";
import Products from "../components/pages/Products";
import CalfProduct from "../components/pages/CalfProducts";
import GoatProduct from "../components/pages/GoatProduct";
import YakProduct from "../components/pages/YakProduct";
import PoultryPreStarterct from "../components/pages/PoultryPreStarter";
import PoultryStarter from "../components/pages/PoultryStarter";
import PoultryGrower from "../components/pages/PoultryGrower";
import PoultryFinisher from "../components/pages/PoultryFinisher";
import LayerPreStarter from "../components/pages/LayerPreStarter";
import LayerStarter from "../components/pages/LayerStarter";
import LayerFinisher from "../components/pages/LayerFinisher";
import PigFinisher from "../components/pages/PigFinisher";
import FishStarter from "../components/pages/FishStarter";
import FishGrower from "../components/pages/FishGrower";
import FishFinisher from "../components/pages/FishFinisher";
import FishMaintenance from "../components/pages/FishMaintenance";
import ProductListing from "../components/pages/ProductListing";
import ProductDetails from "../components/pages/ProductDetails";
import Profile from "../components/pages/Profile";
import Cart from "../components/pages/Cart";
import Checkout from "../components/pages/Checkout";
import MyOrders from "../components/pages/MyOrder";
import OrderDetails from "../components/pages/OrderDetails";
import AddressManagement from "../components/pages/AddressManagement";
import ThankyouOrder from "../components/pages/ThankyouOrder";
import CMSPage from "../components/pages/CMSPage";
import ComingSoon from "../components/pages/ComingSoon";



export default function AppRoutes() {
    return (
        <>
            <ScrollToTop />

            <Routes>

                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/news-events" element={<NewsEvents />} />
                <Route path="/research-development" element={<ResearchDevelopment />} />
                <Route path="/distributor" element={<Distributor />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/nutrition" element={<Nutrition />} />
                <Route path="/news/:slug" element={<NewsDetails />} />
                <Route path="/news/category/:slug" element={<NewsCategory />} />
                <Route path="/news/tag/:tagName" element={<NewsTags />} />
                <Route path="/feed-type" element={<FeedType />} />
                <Route path="/our-teams" element={<OurTeams />} />
                <Route path="/quality" element={<Quality />} />
                <Route path="/csr" element={<Csr />} />
                <Route path="/distributors/:slug" element={<DistributorDetails />} />
                <Route path="/pages/:slug" element={<CMSPage />} />
                <Route path="/press-media" element={<ComingSoon />} />

                {/* Auth Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/verify-otp" element={<VerifyOtp />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/change-password" element={<ChangePassword />} />
                {/* <Route path="/logout" element={<Logout />} /> */}


                {/* Product Routes */}
                <Route path="/products" element={<Products />} />
                <Route path="/calf-products" element={<CalfProduct />} />
                {/* <Route path="/adult-products" element={<AdultProduct />} /> */}
                {/* <Route path="/juvenilefish-products" element={<JubvnileProduct />} /> */}
                <Route path="/goat-products" element={<GoatProduct />} />
                <Route path="/yak-products" element={<YakProduct />} />
                <Route path="/poultryprestarter-products" element={<PoultryPreStarterct />} />
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
                <Route path="/product-detail/:productSlug" element={<ProductDetails />} />

                {/* Protected Routes  */}
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/cart"
                    element={
                        // <ProtectedRoute>
                        //   <Cart />
                        // </ProtectedRoute>
                        <Cart />
                    }
                />
                <Route
                    path="/checkout"
                    element={
                        <ProtectedRoute>
                            <Checkout />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/my-orders"
                    element={
                        <ProtectedRoute>
                            <MyOrders />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/order-details/:orderId"
                    element={
                        <ProtectedRoute>
                            <OrderDetails />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/address-management"
                    element={
                        <ProtectedRoute>
                            <AddressManagement />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/thankyou-order"
                    element={
                        <ProtectedRoute>
                            <ThankyouOrder />
                        </ProtectedRoute>
                    }
                />

            </Routes>
        </>
    );
}