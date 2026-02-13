import logo from "../assets/images/logo.png";
import { useState } from "react";

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
} from "@fortawesome/free-solid-svg-icons";

import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [knowUsMobileOpen, setKnowUsMobileOpen] = useState(false);
  const [mediaMobileOpen, setMediaMobileOpen] = useState(false);

  const navigate = useNavigate();

  const goToSection = (section) => {
    navigate("/", { state: { scrollTo: section } });
  };


  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 overflow-hidden lg:overflow-visible">
        <nav className="h-[100px] bg-white flex items-center transition-all duration-300 justify-between shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-center bg-white rounded-full lg:h-[156px] lg:w-[156px] md:h-[120px] md:w-[120px] h-[100px] w-[100px] lg:mt-10 mt-0 relative z-50">
              <img
                src={logo}
                alt="Logo"
                className="lg:h-[127px] lg:w-[130px] h-[100px] w-[100px]"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
              <Link
                to="/"
                className="nav-link text-[15px] font-normal flex items-center gap-2"
              >
                <i className="ri-home-line"></i> Home
              </Link>

              {/* Know Us Dropdown (Desktop) */}
              <div className="relative group flex items-center">
                <Link
                  to="/about-us"
                  className="nav-link text-[15px] font-normal flex items-center gap-2"
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
                    <Link
                      to="/about-us"
                      className="block px-4 py-2 text-[15px] hover:bg-gray-100 hover:text-green-600"
                    >
                      <i className="ri-information-line mr-1 hover:text-green-600"></i>
                      About Us
                    </Link>
                    <Link
                      to="/#whygreengold"
                      className="block px-4 py-2 text-[15px] hover:bg-gray-100 hover:text-green-600"
                    >
                      <FontAwesomeIcon
                        icon={faStar}
                        className=" mr-1 hover:text-green-600"
                      />
                      Why Green Gold
                    </Link>
                    <Link
                      to="/about-us#ourstory"
                      className="block px-4 py-2 text-[15px] hover:bg-gray-100 hover:text-green-600"
                    >
                      <FontAwesomeIcon
                        icon={faBookOpen}
                        className=" mr-1 hover:text-green-600"
                      />
                      Our Story
                    </Link>
                    <Link
                      to="/about-us#missionvision"
                      className="block px-4 py-2 text-[15px] hover:bg-gray-100 hover:text-green-600"
                    >
                      <FontAwesomeIcon
                        icon={faBullseye}
                        className=" mr-1 hover:text-green-600"
                      />
                      Mission & Vision
                    </Link>
                    <Link
                      to="/about-us#ourcommitment"
                      className="block px-4 py-2 text-[15px] hover:bg-gray-100 hover:text-green-600"
                    >
                      <FontAwesomeIcon
                        icon={faAward}
                        className=" mr-1 hover:text-green-600"
                      />
                      Our Commitment
                    </Link>

                    <Link
                      to="/about-us#ourteam"
                      className="block px-4 py-2 text-[15px] hover:bg-gray-100 hover:text-green-600"
                    >
                      <FontAwesomeIcon
                        icon={faBriefcase}
                        className=" mr-1 hover:text-green-600"
                      />
                      Our Team
                    </Link>
                    <Link
                      to="/about-us#ourunit"
                      className="block px-4 py-2 text-[15px] hover:bg-gray-100 hover:text-green-600"
                    >
                      <FontAwesomeIcon
                        icon={faBoxOpen}
                        className=" mr-1 hover:text-green-600"
                      />
                      Our Units
                    </Link>
                    <Link
                      to="/research-development"
                      className="block px-4 py-2 text-[15px] hover:bg-gray-100 hover:text-green-600"
                    >
                      <FontAwesomeIcon
                        icon={faLayerGroup}
                        className=" mr-1 hover:text-green-600"
                      />
                      Research & Development
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                to="/nutrition"
                className="nav-link text-[15px] font-normal flex items-center gap-2"
              >
                <i className="ri-drop-line"></i> Nutrition
              </Link>

              <Link
                to="/feed-type"
                className="nav-link text-[15px] font-normal flex items-center gap-2"
              >
                <i className="ri-leaf-line"></i> Feed Type
              </Link>

              <Link
                to="/csr"
                className="nav-link text-[15px] font-normal flex items-center gap-2"
              >
                <i className="ri-heart-line"></i> CSR
              </Link>

              <div className="relative group flex items-center">
                <Link
                  to="/news-events"
                  className="nav-link text-[15px] font-normal flex items-center gap-2"
                >
                  <i className="ri-camera-line"></i> Media
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-[14px] transition-transform duration-200 group-hover:rotate-180"
                  />
                </Link>

                <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
                  <div className="bg-white shadow-lg rounded-lg w-[180px] py-3">
                    <Link
                      to="/news-events"
                      className="block px-4 py-2 text-[15px] hover:bg-gray-100 hover:text-green-600"
                    >
                      <FontAwesomeIcon
                        icon={faFileImage}
                        className=" mr-1 hover:text-green-600"
                      />
                      News & Events
                    </Link>
                    <Link
                      to="/gallery"
                      className="block px-4 py-2 text-[15px] hover:bg-gray-100 hover:text-green-600"
                    >
                      <FontAwesomeIcon
                        icon={faImage}
                        className=" mr-1 hover:text-green-600"
                      />
                      Gallery
                    </Link>
                  </div>
                </div>
              </div>

              {/* <Link
                to="/media"
                className="nav-link text-[18px] font-normal flex items-center gap-2"
              >
                <i className="ri-camera-line"></i> Media
              </Link> */}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex">
              <Link
                to="/login"
                className="nav-link text-[15px] font-normal flex items-center mr-2 gap-1 text-[#00a34a]"
              >
                <i className="ri-login-box-line"></i> Login
              </Link>
              <Link
                to="/distributor"
                className="w-[198px] h-[48px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2"
              >
                <span className="text-[20px] font-bold font-inter">
                  <FontAwesomeIcon icon={faLocationDot} /> Where To Buy
                </span>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-[22px]"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </nav>

        {/* Mobile Overlay */}
        <div
          className={`fixed inset-0 transition-opacity duration-300 lg:hidden ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Slide Menu */}
        <div
          className={`fixed top-[100px] left-0 w-[280px] bg-white transform transition-transform duration-300 h-full z-[999] lg:hidden ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close */}
          <div className="flex justify-end px-8">
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
          <div className="flex flex-col gap-6 px-8">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>

            {/* Mobile Know Us Dropdown */}
            <div>
              <button
                onClick={() => setKnowUsMobileOpen(!knowUsMobileOpen)}
                className="flex justify-between items-center w-full"
              >
                <span>Know Us</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`transition-transform ${
                    knowUsMobileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {knowUsMobileOpen && (
                <div className="mt-3 ml-4 flex flex-col gap-3 text-sm">
                  <Link to="/about-us" onClick={() => setIsOpen(false)}>
                    About Us
                  </Link>
                  <Link to="/whygreengold" onClick={() => setIsOpen(false)}>
                    Why Green Gold
                  </Link>
                  <Link
                    to="/about-us#ourstory"
                    onClick={() => setIsOpen(false)}
                  >
                    Our Story
                  </Link>
                  <Link
                    to="/about-us#visionmission"
                    onClick={() => setIsOpen(false)}
                  >
                    Mission & Vision
                  </Link>
                  <Link
                    to="/about-us#commitment"
                    onClick={() => setIsOpen(false)}
                  >
                    Our Commitment
                  </Link>
                  <Link to="/about-us#ourteam" onClick={() => setIsOpen(false)}>
                    Our Team
                  </Link>
                  <Link
                    to="//about-us#ourunit"
                    onClick={() => setIsOpen(false)}
                  >
                    Our Units
                  </Link>
                  <Link
                    to="/research-development"
                    onClick={() => setIsOpen(false)}
                  >
                    Research & Development
                  </Link>
                </div>
              )}
            </div>

            <Link to="/nutrition" onClick={() => setIsOpen(false)}>
              Nutrition
            </Link>
            <Link to="/feed-type" onClick={() => setIsOpen(false)}>
              Feed Type
            </Link>
            <Link to="/csr" onClick={() => setIsOpen(false)}>
              CSR
            </Link>
            {/* <Link to="/media" onClick={() => setIsOpen(false)}>
              Media
            </Link> */}
            <div>
              <button
                onClick={() => setMediaMobileOpen(!mediaMobileOpen)}
                className="flex justify-between items-center w-full"
              >
                <span>Media</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`transition-transform ${
                    mediaMobileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mediaMobileOpen && (
                <div className="mt-3 ml-4 flex flex-col gap-3 text-sm">
                  <Link to="/news-events" onClick={() => setIsOpen(false)}>
                    News & Events
                  </Link>
                  <Link to="/gallery" onClick={() => setIsOpen(false)}>
                    Gallery
                  </Link>
                  <Link
                    to="/about-us#ourstory"
                    onClick={() => setIsOpen(false)}
                  >
                    Our Story
                  </Link>
                </div>
              )}
            </div>

            <Link to="/login" onClick={() => setIsOpen(false)}>
              Login
            </Link>

            <Link
              to="/distributor"
              onClick={() => setIsOpen(false)}
              className="h-[48px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-[12px] flex items-center justify-center gap-2"
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
