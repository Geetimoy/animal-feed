import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faInstagram, faYoutube, } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight, faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import logo from '../assets/images/logo-footer.png';

import { Link } from "react-router-dom";

function Footer(){
  return (
    <>
      <footer className="bg-gradient-to-b from-[#0a1424] via-[#0b1628] to-[#0a1322] text-gray-300 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-12 md:text-left text-center ">
          {/* <!-- Brand / About --> */}
          <div className="space-y-6  md:text-left text-center">
            <img src={logo} alt="Logo" className="w-24 block mx-auto md:mx-0" />

            <p className="text-[#7f979f] text-lg  md:text-left text-center">
              Pioneering excellence in animal nutrition since 1998. Committed to
              quality, innovation, and sustainable farming practices.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 justify-center  md:justify-start">
              <Link
                to="#"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-gray-400 text-sm"
                />
              </Link>
              <Link
                to="#"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-gray-400 text-sm"
                />
              </Link>
              <Link
                to="#"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-gray-400 text-sm"
                />
              </Link>
              <Link
                to="#"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-gray-400 text-sm"
                />
              </Link>
            </div>
          </div>

          <div className=" ">
            <h3 className="text-white text-2xl font-medium">
              <span className="text-[#00de55] text-lg">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>{" "}
              Quick Links
            </h3>
            <ul className="mt-[30px]  ">
              <li className="flex items-center md:items-start justify-center md:justify-start  gap-3 mb-3">
                <span className="mt-2 w-[9px] h-[9px] rounded-full bg-gray-800"></span>
                <span>
                  <Link
                    to="/about-us"
                    className="text-[#7f979f] text-lg font-medium inline-block transition-transform duration-300 ease-in-out hover:translate-x-1" >
                    {" "}
                    About Us
                  </Link>
                </span>
              </li>
              <li className="flex items-center md:items-start justify-center md:justify-start gap-3 mb-3">
                <span className="mt-2 w-[9px] h-[9px] rounded-full bg-gray-800"></span>
                <span>
                  <Link
                    to="/products"
                    className="text-[#7f979f] text-lg font-medium transition hover:translate-x-1 duration-300 ease-in-out inline-block" >
                    Products
                  </Link>
                </span>
              </li>
              <li className="flex items-center md:items-start justify-center md:justify-start gap-3 mb-3">
                <span className="mt-2 w-[9px] h-[9px] rounded-full bg-gray-800"></span>
                <span>
                  <Link
                    to="/quality"
                    className="text-[#7f979f] text-lg font-medium inline-block transition-transform duration-300 ease-in-out hover:translate-x-1"
                  >
                    Quality
                  </Link>
                </span>
              </li>
              <li className="flex items-center md:items-start justify-center md:justify-start gap-3 mb-3">
                <span className="mt-2 w-[9px] h-[9px] rounded-full bg-gray-800"></span>
                <span>
                  <Link
                    to="/distributor"
                    className="text-[#7f979f] text-lg font-medium inline-block transition-transform duration-300 ease-in-out hover:translate-x-1"
                  >
                    Where to Buy
                  </Link>
                </span>
              </li>
              <li className="flex items-center md:items-start justify-center md:justify-start gap-3 mb-3">
                <span className="mt-2 w-[9px] h-[9px] rounded-full bg-gray-800"></span>
                <span>
                  <Link
                    to="/csr"
                    className="text-[#7f979f] text-lg font-medium inline-block transition-transform duration-300 ease-in-out hover:translate-x-1"
                  >
                    CSR Activities
                  </Link>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-2xl font-medium">
              <span className="text-[#00de55] text-lg">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>{" "}
              Our Products
            </h3>
            <ul className="mt-[30px]">
              <li className="flex items-center md:items-start justify-center md:justify-start gap-3 mb-3">
                <span className="mt-2 w-[9px] h-[9px] rounded-full bg-gray-800"></span>
                <span>
                  <Link
                    to="/feed-type"
                    className="text-[#7f979f] text-lg font-medium inline-block transition-transform duration-300 ease-in-out hover:translate-x-1"
                  >
                    {" "}
                    Cattle Feed
                  </Link>
                </span>
              </li>
              <li className="flex items-center md:items-start justify-center md:justify-start gap-3 mb-3">
                <span className="mt-2 w-[9px] h-[9px] rounded-full bg-gray-800"></span>
                <span>
                  <Link
                    to="/feed-type"
                    className="text-[#7f979f] text-lg font-medium inline-block transition-transform duration-300 ease-in-out hover:translate-x-1"
                  >
                    Poultry Feed
                  </Link>
                </span>
              </li>
              <li className="flex items-center md:items-start justify-center md:justify-start gap-3 mb-3">
                <span className="mt-2 w-[9px] h-[9px] rounded-full bg-gray-800"></span>
                <span>
                  <Link
                    to="/feed-type"
                    className="text-[#7f979f] text-lg font-medium inline-block transition-transform duration-300 ease-in-out hover:translate-x-1"
                  >
                    Pig Feed
                  </Link>
                </span>
              </li>
              <li className="flex items-center md:items-start justify-center md:justify-start gap-3 mb-3">
                <span className="mt-2 w-[9px] h-[9px] rounded-full bg-gray-800"></span>
                <span>
                  <Link
                    to="/feed-type"
                    className="text-[#7f979f] text-lg font-medium inline-block transition-transform duration-300 ease-in-out hover:translate-x-1"
                  >
                    Fish Feed
                  </Link>
                </span>
              </li>
              <li className="flex items-center md:items-start justify-center md:justify-start gap-3 mb-3">
                <span className="mt-2 w-[9px] h-[9px] rounded-full bg-gray-800"></span>
                <span>
                  <Link
                    to="/feed-type"
                    className="text-[#7f979f] text-lg font-medium inline-block transition-transform duration-300 ease-in-out hover:translate-x-1"
                  >
                    Specialty Feeds
                  </Link>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-2xl font-medium">
              <span className="text-[#00de55] text-lg">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>{" "}
              Contact Us
            </h3>
            <ul className="mt-[30px]">
              <li className="flex items-center md:items-start justify-center md:justify-start mb-3">
                <span className="mr-2 text-[#00de55] text-lg">
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <span className="text-[#7f979f] text-lg font-medium">
                  Rongoge Mega Food Park
                  <br className="hidden md:block" />
                  Dolikoto Banderdewa,
                  <br className="hidden md:block" />
                  Arunachal Pradesh 791123 
                </span>
              </li>
              <li className="flex items-center md:items-start justify-center md:justify-start mb-3">
                <span className="mr-2 text-[#00de55] text-lg">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span className="text-[#7f979f] text-lg font-medium">
                  <Link to="tel:+919999999999" className="inline-block transition-transform duration-300 ease-in-out hover:text-[#cfcfcf]">+91 9999999999</Link>
                </span>
              </li>
              <li className="flex items-center md:items-start justify-center md:justify-start">
                <span className="mr-2 text-[#00de55] text-lg">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className="text-[#7f979f] text-lg font-medium">
                  <Link to="mailto:info@greengold.com" className="inline-block transition-transform duration-300 ease-in-out hover:text-[#cfcfcf]">info@greengold.com</Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <hr className="border-gray-800" />
          <p className="text-center text-gray-500 text-sm py-4">
            &copy; {new Date().getFullYear()} Green Gold Feeds. All rights
            reserved. <span>| Designed &amp; Developed By <Link href="https://www.neonatetechnologies.com/" target="_blank" className="text-[#727272] hover:text-white">Neonate Technologies</Link></span>
          </p>
        </div>
      </footer>
    </>
  );
}


export default Footer;