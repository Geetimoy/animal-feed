import logo from '../assets/images/logo.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

function Header(){
  return(
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        <nav className="h-[100px] bg-white flex items-center transition-all duration-300 backdrop-blur-md justify-between shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between w-full">
            <div className="flex-shrink-0 flex items-center justify-center bg-white rounded-full
         h-[156px] w-[156px] mt-10 relative z-50">
              <img src={logo} alt="Logo" className="h-[127px] w-[130px]" />
            </div>
            
            <div className="hidden lg:flex space-x-8 absolute left-1/2 transform -translate-x-1/2"> 
              <Link to="/" className="nav-link text-[18px] font-normal flex items-center gap-2"> <i className="ri-home-line"></i> Home </Link> 
              <Link to="/about-us" className="nav-link text-[18px] font-normal flex items-center gap-2"> <i
              className="ri-information-line"></i> Know Us </Link> 
              <Link to="/nutrition" className="nav-link text-[18px] font-normal flex items-center gap-2"> <i className="ri-drop-line"></i> Nutrition </Link> 
              <Link to="/feed-type" className="nav-link text-[18px] font-normal flex items-center gap-2"> <i
              className="ri-leaf-line"></i> Feed Type </Link> 
              <Link to="/csr" className="nav-link text-[18px] font-normal flex items-center gap-2"> <i className="ri-heart-line"></i> CSR </Link> 
              <Link to="/media" className="nav-link text-[18px] font-normal flex items-center gap-2"> <i className="ri-camera-line"></i> Media </Link> 
            </div>

            {/* CTA */}
            <div className="hidden lg:flex">
              <Link to="/contact-us"
                className="w-[198px] h-[48px] bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-[12px] hover:opacity-90 transition flex items-center justify-center space-x-2">
                <span className="text-[20px] font-bold font-inter">
                  <FontAwesomeIcon icon={faLocationDot} /> Where To Buy
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;