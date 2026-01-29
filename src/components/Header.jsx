import logo from '../assets/images/logo.png';
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 overflow-hidden lg:overflow-visible">
        <nav className="h-[100px] bg-white flex items-center transition-all duration-300  justify-between shadow-sm ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between w-full">
            <div
              className="flex-shrink-0 flex items-center justify-center bg-white rounded-full
     lg:h-[156px] lg:w-[156px]    md:h-[120px] md:w-[120px] h-[100px] w-[100px] lg:mt-10 mt-0 relative z-50"
            >
              <img
                src={logo}
                alt="Logo"
                className="lg:h-[127px] lg:w-[130px]  h-[100px] w-[100px] "
              />
            </div>

            <div className="hidden lg:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
              <Link
                to="/"
                className="nav-link text-[18px] font-normal flex items-center gap-2"
              >
                {" "}
                <i className="ri-home-line"></i> Home{" "}
              </Link>
              <Link
                to="/about-us"
                className="nav-link text-[18px] font-normal flex items-center gap-2"
              >
                {" "}
                <i className="ri-information-line"></i> Know Us{" "}
              </Link>
              <Link
                to="/nutrition"
                className="nav-link text-[18px] font-normal flex items-center gap-2"
              >
                {" "}
                <i className="ri-drop-line"></i> Nutrition{" "}
              </Link>
              <Link
                to="/feed-type"
                className="nav-link text-[18px] font-normal flex items-center gap-2"
              >
                {" "}
                <i className="ri-leaf-line"></i> Feed Type{" "}
              </Link>
              <Link
                to="/csr"
                className="nav-link text-[18px] font-normal flex items-center gap-2"
              >
                {" "}
                <i className="ri-heart-line"></i> CSR{" "}
              </Link>
              <Link
                to="/media"
                className="nav-link text-[18px] font-normal flex items-center gap-2"
              >
                {" "}
                <i className="ri-camera-line"></i> Media{" "}
              </Link>
            </div>

            {/* CTA */}
            <div className="hidden lg:flex">
              <Link
                to="/contact-us"
                className="w-[198px] h-[48px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2"
              >
                <span className="text-[20px] font-bold font-inter">
                  <FontAwesomeIcon icon={faLocationDot} /> Where To Buy
                </span>
              </Link>
            </div>

            {/* <div className="lg:hidden  ">
              <Link
                to=""
                className="  transition flex items-center justify-center space-x-2"
              >
                <span className="text-[20px] font-bold font-inter">
                  <FontAwesomeIcon icon={faBars} />
                </span>
              </Link>
            </div> */}
            {/* Mobile Menu Button */}
            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-[22px]"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 transition-opacity duration-300 lg:hidden
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Slide Menu */}
        <div 
          className={`fixed top-[100px]  left-0  w-[280px] bg-white 
          transform transition-transform duration-300 h-full z-[999] lg:hidden
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Close */}
          <div className="flex justify-end px-8">
            <button onClick={() => setIsOpen(false)} className="text-[22px]">
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col gap-6 px-8">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about-us" onClick={() => setIsOpen(false)}>
              Know Us
            </Link>
            <Link to="/nutrition" onClick={() => setIsOpen(false)}>
              Nutrition
            </Link>
            <Link to="/feed-type" onClick={() => setIsOpen(false)}>
              Feed Type
            </Link>
            <Link to="/csr" onClick={() => setIsOpen(false)}>
              CSR
            </Link>
            <Link to="/media" onClick={() => setIsOpen(false)}>
              Media
            </Link>

            {/* Mobile CTA */}
            <Link
              to="/contact-us"
              onClick={() => setIsOpen(false)}
              className=" h-[48px] bg-gradient-to-r from-[#00a34a] to-[#009a62]
              text-white rounded-[12px] flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faLocationDot} />
              Where To Buy
            </Link>
          </div>
        </div>
        {/* </div>
        </nav> */}
      </header>
    </>
  );
}

export default Header;