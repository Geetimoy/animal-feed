import logo from "../assets/images/logo.png";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import { useCart } from "../context/CartContext";
import { useSettings } from "../context/SettingsContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBars,
  faXmark,
  faChevronDown,
  faStar,
  faBookOpen,
  faBullseye,
  faAward,
  faBriefcase,
  faBoxOpen,
  faLayerGroup,
  faFileImage,
  faImage,
  faCartArrowDown,
  faCircleUser,
  faUser,
  faBox,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "../config/api";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();
  const { settings } = useSettings();
  const { cartCount, setCartCount } = useCart();

  // Mobile Menu States
  const [isOpen, setIsOpen] = useState(false);
  const [knowUsMobileOpen, setKnowUsMobileOpen] = useState(false);
  const [mediaMobileOpen, setMediaMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Helper function to check if link is active
  const isActiveLink = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //  Fetch Cart Count - Updated
  const fetchCartCount = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setCartCount(0);
      return;
    }

    try {
      const res = await axios.get(`${API_URL}/customers/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      // console.log("Cart API Response:", res.data); // Debugging

      //  Correct way to get count
      const count = res.data?.data?.summary?.items_count ||
        res.data?.data?.items?.length ||
        res.data?.count ||
        0;

      setCartCount(count);
    } catch (err) {
      // console.log("Cart count error:", err);
      setCartCount(0);
    }
  };

  //  Fetch cart count on auth change
  useEffect(() => {
    if (isAuthenticated) {
      fetchCartCount();
    } else {
      setCartCount(0);
    }
  }, [isAuthenticated]);

  //  Also fetch when component mounts
  useEffect(() => {
    if (isAuthenticated) {
      fetchCartCount();
    }
  }, []);

  //  Handle cart update from other components (like Cart page)
  useEffect(() => {
    const handleCartUpdate = () => {
      if (isAuthenticated) {
        fetchCartCount();
      }
    };

    window.addEventListener('cartUpdated', handleCartUpdate);
    window.addEventListener('focus', handleCartUpdate);

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
      window.removeEventListener('focus', handleCartUpdate);
    };
  }, [isAuthenticated]);

  // Handle Logout
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        await axios.post(
          `${API_URL}/customers/logout`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );
      }

      logout();
      setCartCount(0);

      toast.success("Logged out successfully!", {
        autoClose: 1500,
        onClose: () => {
          navigate("/logout");
        },
      });
    } catch (error) {
      console.error("Logout failed:", error);
      logout();
      setCartCount(0);
      navigate("/logout");
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 overflow-hidden lg:overflow-visible">
        <nav className="md:h-[100px] bg-white flex items-center transition-all duration-300 justify-between shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between w-full py-2">
            {/* Logo */}
            <div
              className={`flex-shrink-0 flex items-center justify-center bg-white rounded-full relative z-[1000] transition-all duration-300 ${scrolled
                ? "lg:h-[90px] lg:w-[90px] md:h-[80px] md:w-[80px] h-[70px] w-[70px] mt-0"
                : "lg:h-[156px] lg:w-[156px] md:h-[120px] md:w-[120px] h-[100px] w-[100px] lg:mt-10 mt-0"
                }`}
            >
              <Link to="/">
                <img
                  src={settings?.data?.brand?.logo_url || logo}
                  alt="Logo"
                  className={`transition-all duration-300 ${scrolled
                    ? "lg:h-[90px] lg:w-[90px] h-[60px] w-[60px]"
                    : "lg:h-[127px] lg:w-[127px] h-[100px] w-[100px]"
                    }`}
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-6">
              <Link
                to="/"
                className={`nav-link text-[15px] font-normal flex items-center gap-2 ${isActiveLink('/') ? 'text-[#00a34a] font-semibold' : ''
                  }`}
              >
                <i className="ri-home-line"></i> Home
              </Link>

              {/* Know Us Dropdown */}
              <div className="relative group flex items-center">
                <Link
                  to=""
                  className={`nav-link text-[15px] font-normal flex items-center gap-2 ${isActiveLink('/about-us') || isActiveLink('/research-development') ? 'text-[#00a34a] font-semibold' : ''
                    }`}
                >
                  <i className="ri-information-line"></i>
                  Know Us
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-[14px] transition-transform duration-200 group-hover:rotate-180"
                  />
                </Link>
                <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
                  <div className="bg-white shadow-lg rounded-lg w-[245px] py-3">
                    <Link to="/about-us" className="block px-4 py-2 text-[15px] hover:bg-gray-100 hover:text-green-600">
                      <i className="ri-information-line mr-1"></i> About Us
                    </Link>
                    <Link to="/#whygreengold" className="block px-4 py-2 text-[15px] hover:bg-gray-100 hover:text-green-600">
                      <FontAwesomeIcon icon={faStar} className="mr-1" /> Why Green Gold
                    </Link>
                    <Link to="/about-us#ourstory" className="block px-4 py-2 text-[15px] hover:bg-gray-100 hover:text-green-600">
                      <FontAwesomeIcon icon={faBookOpen} className="mr-1" /> Our Story
                    </Link>
                    <Link to="/about-us#missionvision" className="block px-4 py-2 text-[15px] hover:bg-gray-100 hover:text-green-600">
                      <FontAwesomeIcon icon={faBullseye} className="mr-1" /> Mission & Vision
                    </Link>
                    <Link to="/about-us#ourcommitment" className="block px-4 py-2 text-[15px] hover:bg-gray-100 hover:text-green-600">
                      <FontAwesomeIcon icon={faAward} className="mr-1" /> Our Commitment
                    </Link>
                    <Link to="/about-us#ourteam" className="block px-4 py-2 text-[15px] hover:bg-gray-100 hover:text-green-600">
                      <FontAwesomeIcon icon={faBriefcase} className="mr-1" /> Our Team
                    </Link>
                    <Link to="/about-us#ourunit" className="block px-4 py-2 text-[15px] hover:bg-gray-100 hover:text-green-600">
                      <FontAwesomeIcon icon={faBoxOpen} className="mr-1" /> Our Units
                    </Link>
                    <Link to="/research-development" className="block px-4 py-2 text-[15px] hover:bg-gray-100 hover:text-green-600">
                      <FontAwesomeIcon icon={faLayerGroup} className="mr-1" /> Research & Development
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                to="/nutrition"
                className={`nav-link text-[15px] font-normal flex items-center gap-2 ${isActiveLink('/nutrition') ? 'text-[#00a34a] font-semibold' : ''
                  }`}
              >
                <i className="ri-drop-line"></i> Nutrition
              </Link>

              <Link
                to="/feed-type"
                className={`nav-link text-[15px] font-normal flex items-center gap-2 ${isActiveLink('/feed-type') ? 'text-[#00a34a] font-semibold' : ''
                  }`}
              >
                <i className="ri-leaf-line"></i> Feed Type
              </Link>

              <Link
                to="/products"
                className={`nav-link text-[15px] font-normal flex items-center gap-2 ${isActiveLink('/products') ? 'text-[#00a34a] font-semibold' : ''
                  }`}
              >
                <i className="ri-heart-line"></i> Products
              </Link>

              {/* Media Dropdown */}
              <div className="relative group flex items-center">
                <Link
                  to="/news-events"
                  className={`nav-link text-[15px] font-normal flex items-center gap-2 ${isActiveLink('/news-events') || isActiveLink('/gallery') ? 'text-[#00a34a] font-semibold' : ''
                    }`}
                >
                  <i className="ri-camera-line"></i> Media
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-[14px] transition-transform duration-200 group-hover:rotate-180"
                  />
                </Link>
                <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
                  <div className="bg-white shadow-lg rounded-lg w-[180px] py-3">
                    <Link to="/news-events" className="block px-4 py-2 text-[15px] hover:bg-gray-100 hover:text-green-600">
                      <FontAwesomeIcon icon={faFileImage} className="mr-1" /> News & Events
                    </Link>
                    <Link to="/gallery" className="block px-4 py-2 text-[15px] hover:bg-gray-100 hover:text-green-600">
                      <FontAwesomeIcon icon={faImage} className="mr-1" /> Gallery
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ✅ Cart Icon - Updated with better badge */}
            <div className="flex relative cursor-pointer md:flex-0 flex-1 justify-end mr-2">
              <Link to="/cart" className="inline-block relative">
                <span className="bg-[#ffe7a3] w-[30px] h-[30px] rounded-full text-center text-sm leading-[30px] inline-block">
                  <FontAwesomeIcon icon={faCartArrowDown} />
                </span>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </Link>
            </div>

            {/* Desktop Auth Section */}
            <div className="hidden lg:flex items-center space-x-4">
              {isAuthenticated ? (
                <div className="dropdown-trigger relative">
                  <button className={`nav-link flex items-center space-x-1 ${isActiveLink('/profile') || isActiveLink('/my-orders') ? 'text-[#00a34a]' : ''
                    }`}>
                    <FontAwesomeIcon icon={faCircleUser} className="text-lg mr-1" />
                    <span className="text-sm font-medium">{user?.name || 'User'}</span>
                    <FontAwesomeIcon icon={faChevronDown} className="text-[10px] chevron ml-1" />
                  </button>
                  <div className="dropdown absolute top-full right-0 pt-4 w-36">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                      <Link to="/profile" className="dropdown-item flex items-center px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50">
                        <FontAwesomeIcon icon={faUser} className="w-4 text-green-500 mr-3" /> Profile
                      </Link>
                      <Link to="/my-orders" className="dropdown-item flex items-center px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50">
                        <FontAwesomeIcon icon={faBox} className="w-4 text-green-500 mr-3" /> My Orders
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="dropdown-item flex items-center px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 w-full text-left"
                      >
                        <FontAwesomeIcon icon={faSignOutAlt} className="w-4 text-red-500 mr-3" /> Logout
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to="/login"
                  className={`nav-link text-[15px] font-normal flex items-center mr-2 gap-1 ${isActiveLink('/login') ? 'text-[#00a34a] font-semibold' : 'text-[#00a34a]'
                    }`}
                >
                  <i className="ri-login-box-line"></i> Login
                </Link>
              )}

              <Link
                to="/distributor"
                className={`w-[198px] h-[48px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2 ${isActiveLink('/distributor') ? 'ring-2 ring-white ring-offset-2 ring-offset-[#00a34a]' : ''
                  }`}
              >
                <span className="text-[20px] font-bold font-inter">
                  <FontAwesomeIcon icon={faLocationDot} /> Where To Buy
                </span>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="lg:hidden flex items-center gap-2">
              {isAuthenticated ? (
                <Link to="/profile" className="text-[#00a34a]">
                  <FontAwesomeIcon icon={faCircleUser} className="text-2xl" />
                </Link>
              ) : (
                <Link
                  to="/login"
                  className={`nav-link text-[15px] font-normal flex items-center mr-2 gap-1 ${isActiveLink('/login') ? 'text-[#00a34a] font-semibold' : 'text-[#00a34a]'
                    }`}
                >
                  <i className="ri-login-box-line"></i> Login
                </Link>
              )}
              <button onClick={() => setIsOpen(true)} className="text-[22px]">
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Overlay */}
        <div
          className={`fixed inset-0 transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Slide Menu */}
        <div
          className={`fixed top-[84px] left-0 w-[280px] bg-white transform transition-transform duration-300 h-full z-[999] lg:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          {/* Close */}
          <div className="flex justify-end px-8 pt-4">
            <button
              onClick={() => {
                setIsOpen(false);
                setKnowUsMobileOpen(false);
              }}
              className="text-[22px]"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="flex flex-col gap-6 px-8 pb-8">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={isActiveLink("/") ? "text-[#00a34a] font-semibold" : ""}
            >
              Home
            </Link>

            {/* Know Us */}
            <div>
              <button
                onClick={() => setKnowUsMobileOpen(!knowUsMobileOpen)}
                className={`flex justify-between items-center w-full ${isActiveLink("/about-us") || isActiveLink("/research-development")
                  ? "text-[#00a34a] font-semibold"
                  : ""
                  }`}
              >
                <span>Know Us</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`transition-transform ${knowUsMobileOpen ? "rotate-180" : ""}`}
                />
              </button>

              {knowUsMobileOpen && (
                <div className="mt-3 ml-4 flex flex-col gap-3 text-sm">
                  <Link to="/about-us" onClick={() => setIsOpen(false)}>About Us</Link>
                  <Link to="/#whygreengold" onClick={() => setIsOpen(false)}>Why Green Gold</Link>
                  <Link to="/about-us#ourstory" onClick={() => setIsOpen(false)}>Our Story</Link>
                  <Link to="/about-us#missionvision" onClick={() => setIsOpen(false)}>Mission & Vision</Link>
                  <Link to="/about-us#ourcommitment" onClick={() => setIsOpen(false)}>Our Commitment</Link>
                  <Link to="/about-us#ourteam" onClick={() => setIsOpen(false)}>Our Team</Link>
                  <Link to="/about-us#ourunit" onClick={() => setIsOpen(false)}>Our Units</Link>
                  <Link to="/research-development" onClick={() => setIsOpen(false)}>Research & Development</Link>
                </div>
              )}
            </div>

            <Link
              to="/nutrition"
              onClick={() => setIsOpen(false)}
              className={isActiveLink("/nutrition") ? "text-[#00a34a] font-semibold" : ""}
            >
              Nutrition
            </Link>

            <Link
              to="/feed-type"
              onClick={() => setIsOpen(false)}
              className={isActiveLink("/feed-type") ? "text-[#00a34a] font-semibold" : ""}
            >
              Feed Type
            </Link>

            <Link
              to="/products"
              onClick={() => setIsOpen(false)}
              className={isActiveLink("/products") ? "text-[#00a34a] font-semibold" : ""}
            >
              Products
            </Link>

            {/* Media */}
            <div>
              <button
                onClick={() => setMediaMobileOpen(!mediaMobileOpen)}
                className={`flex justify-between items-center w-full ${isActiveLink("/news-events") || isActiveLink("/gallery")
                  ? "text-[#00a34a] font-semibold"
                  : ""
                  }`}
              >
                <span>Media</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`transition-transform ${mediaMobileOpen ? "rotate-180" : ""}`}
                />
              </button>

              {mediaMobileOpen && (
                <div className="mt-3 ml-4 flex flex-col gap-3 text-sm">
                  <Link to="/news-events" onClick={() => setIsOpen(false)}>News & Events</Link>
                  <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
                </div>
              )}
            </div>

            {/* Auth */}
            {isAuthenticated ? (
              <>
                <Link
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className={isActiveLink("/profile") ? "text-[#00a34a] font-semibold" : ""}
                >
                  Profile
                </Link>
                <Link
                  to="/my-orders"
                  onClick={() => setIsOpen(false)}
                  className={isActiveLink("/my-orders") ? "text-[#00a34a] font-semibold" : ""}
                >
                  My Orders
                </Link>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleLogout();
                  }}
                  className="text-left text-red-500"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className={isActiveLink("/login") ? "text-[#00a34a] font-semibold" : ""}
              >
                Login
              </Link>
            )}

            <Link
              to="/distributor"
              onClick={() => setIsOpen(false)}
              className={`h-[48px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-xl flex items-center justify-center gap-2 ${isActiveLink("/distributor") ? "ring-2 ring-white ring-offset-2 ring-offset-[#00a34a]" : ""
                }`}
            >
              <FontAwesomeIcon icon={faLocationDot} />
              Where To Buy
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;