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
                    className="text-[#7f979f] text-lg font-medium"
                  >
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
                    className="text-[#7f979f] text-lg font-medium"
                  >
                    Products
                  </Link>
                </span>
              </li>
              <li className="flex items-center md:items-start justify-center md:justify-start gap-3 mb-3">
                <span className="mt-2 w-[9px] h-[9px] rounded-full bg-gray-800"></span>
                <span>
                  <Link
                    to="/quality"
                    className="text-[#7f979f] text-lg font-medium"
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
                    className="text-[#7f979f] text-lg font-medium"
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
                    className="text-[#7f979f] text-lg font-medium"
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
                    className="text-[#7f979f] text-lg font-medium"
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
                    className="text-[#7f979f] text-lg font-medium"
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
                    className="text-[#7f979f] text-lg font-medium"
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
                    className="text-[#7f979f] text-lg font-medium"
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
                    className="text-[#7f979f] text-lg font-medium"
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
                  Green Gold Animal Feed Pvt Ltd.
                  <br className="hidden md:block" />
                  Industrial Area, Kolkata
                  <br className="hidden md:block" />
                  West Bengal - 700001
                </span>
              </li>
              <li className="flex items-center md:items-start justify-center md:justify-start mb-3">
                <span className="mr-2 text-[#00de55] text-lg">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span className="text-[#7f979f] text-lg font-medium">
                  +91 9999999999
                </span>
              </li>
              <li className="flex items-center md:items-start justify-center md:justify-start">
                <span className="mr-2 text-[#00de55] text-lg">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className="text-[#7f979f] text-lg font-medium">
                  <a href="mailto:info@greengold.com">info@greengold.com</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}


export default Footer;