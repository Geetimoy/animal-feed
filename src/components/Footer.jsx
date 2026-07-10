import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight, faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import logo from '../assets/images/logo-footer.png';

import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import axios from "axios";

import { useSettings } from "../context/SettingsContext";

function Footer() {
  const token = localStorage.getItem("customer_token");
  const { settings } = useSettings();

  return (
    <>
      <footer className="bg-gradient-to-b from-[#0a1424] via-[#0b1628] to-[#0a1322] text-gray-300 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-16 grid grid-cols-1 md:grid-cols-5 md:gap-12 gap-6 md:text-left text-center">
          {/* <!-- Brand / About --> */}
          <div className="space-y-6 md:text-left text-center">
            <img src={settings?.data?.brand?.logo_url} alt="Logo" className="w-24 block mx-auto md:mx-0" />

            <p className="text-[#7f979f] text-base md:text-left text-center">
              {settings?.data?.brand?.company_tagline}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <a
                href={`${settings?.data?.social?.facebook}`}
                target="_blank"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-gray-400 text-xs"
                />
              </a>
              <a
                href={`${settings?.data?.social?.twitter}`}
                target="_blank"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-gray-400 text-xs"
                />
              </a>
              <a
                href={`${settings?.data?.social?.instagram}`}
                target="_blank"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-gray-400 text-xs"
                />
              </a>
              <a
                href={`${settings?.data?.social?.youtube}`}
                target="_blank"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-gray-400 text-xs"
                />
              </a>
            </div>
          </div>

          {/* Column 1: Quick Links */}
          <div>
            <h3 className="text-white text-xl font-medium">
              <span className="text-[#00de55] text-base">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>{" "}
              Quick Links
            </h3>
            <ul className="md:mt-[25px] mt-[15px]">
              <li className="flex items-center md:items-start justify-center md:justify-start gap-3 mb-2.5">
                <span className="mt-1.5 w-[7px] h-[7px] rounded-full bg-gray-800"></span>
                <span>
                  <Link
                    to="/feed-type"
                    className="text-[#7f979f] text-base font-medium inline-block transition-transform duration-300 ease-in-out hover:translate-x-1"
                  >
                    Animal Nutrition
                  </Link>
                </span>
              </li>
              <li className="flex items-center md:items-start justify-center md:justify-start gap-3 mb-2.5">
                <span className="mt-1.5 w-[7px] h-[7px] rounded-full bg-gray-800"></span>
                <span>
                  <Link
                    to="/feed-type"
                    className="text-[#7f979f] text-base font-medium inline-block transition-transform duration-300 ease-in-out hover:translate-x-1"
                  >
                    Feed Types
                  </Link>
                </span>
              </li>
              <li className="flex items-center md:items-start justify-center md:justify-start gap-3 mb-2.5">
                <span className="mt-1.5 w-[7px] h-[7px] rounded-full bg-gray-800"></span>
                <span>
                  <Link
                    to="/research-development"
                    className="text-[#7f979f] text-base font-medium inline-block transition-transform duration-300 ease-in-out hover:translate-x-1"
                  >
                    Research & Development
                  </Link>
                </span>
              </li>
              <li className="flex items-center md:items-start justify-center md:justify-start gap-3 mb-2.5">
                <span className="mt-1.5 w-[7px] h-[7px] rounded-full bg-gray-800"></span>
                <span>
                  <Link
                    to="/quality"
                    className="text-[#7f979f] text-base font-medium inline-block transition-transform duration-300 ease-in-out hover:translate-x-1"
                  >
                    Quality
                  </Link>
                </span>
              </li>
            </ul>
          </div>

          {/* Column 2: Working at Green Gold */}
          <div>
            <h3 className="text-white text-xl font-medium">
              <span className="text-[#00de55] text-base">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>{" "}
              Working at Green Gold
            </h3>
            <ul className="md:mt-[25px] mt-[15px]">
              <li className="flex items-center md:items-start justify-center md:justify-start gap-3 mb-2.5">
                <span className="mt-1.5 w-[7px] h-[7px] rounded-full bg-gray-800"></span>
                <span>
                  <Link
                    to="/our-culture"
                    className="text-[#7f979f] text-base font-medium inline-block transition-transform duration-300 ease-in-out hover:translate-x-1"
                  >
                    Our Culture
                  </Link>
                </span>
              </li>
              <li className="flex items-center md:items-start justify-center md:justify-start gap-3 mb-2.5">
                <span className="mt-1.5 w-[7px] h-[7px] rounded-full bg-gray-800"></span>
                <span>
                  <Link
                    to="/learning-development"
                    className="text-[#7f979f] text-base font-medium inline-block transition-transform duration-300 ease-in-out hover:translate-x-1"
                  >
                    Learning & Development
                  </Link>
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Sustainability */}
          <div>
            <h3 className="text-white text-xl font-medium">
              <span className="text-[#00de55] text-base">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>{" "}
              Sustainability
            </h3>
            <ul className="md:mt-[25px] mt-[15px]">
              <li className="flex items-center md:items-start justify-center md:justify-start gap-3 mb-2.5">
                <span className="mt-1.5 w-[7px] h-[7px] rounded-full bg-gray-800"></span>
                <span>
                  <Link
                    to="/sustainability"
                    className="text-[#7f979f] text-base font-medium inline-block transition-transform duration-300 ease-in-out hover:translate-x-1"
                  >
                    Sustainability
                  </Link>
                </span>
              </li>
              <li className="flex items-center md:items-start justify-center md:justify-start gap-3 mb-2.5">
                <span className="mt-1.5 w-[7px] h-[7px] rounded-full bg-gray-800"></span>
                <span>
                  <Link
                    to="/responsible-feeding"
                    className="text-[#7f979f] text-base font-medium inline-block transition-transform duration-300 ease-in-out hover:translate-x-1"
                  >
                    Responsible Feeding
                  </Link>
                </span>
              </li>
              <li className="flex items-center md:items-start justify-center md:justify-start gap-3 mb-2.5">
                <span className="mt-1.5 w-[7px] h-[7px] rounded-full bg-gray-800"></span>
                <span>
                  <Link
                    to="/certificates"
                    className="text-[#7f979f] text-base font-medium inline-block transition-transform duration-300 ease-in-out hover:translate-x-1"
                  >
                    Certificates / Documentation
                  </Link>
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div>
            <h3 className="text-white text-xl font-medium">
              <span className="text-[#00de55] text-base">
                <FontAwesomeIcon icon={faAngleRight} />
              </span>{" "}
              Get in Touch
            </h3>
            <ul className="md:mt-[25px] mt-[15px]">
              <li className="flex items-center md:items-start justify-center md:justify-start gap-3 mb-2.5">
                <span className="mt-1.5 w-[7px] h-[7px] rounded-full bg-gray-800"></span>
                <span>
                  <Link
                    to="/contact"
                    className="text-[#7f979f] text-base font-medium inline-block transition-transform duration-300 ease-in-out hover:translate-x-1"
                  >
                    Contact Information
                  </Link>
                </span>
              </li>
              <li className="flex items-center md:items-start justify-center md:justify-start gap-3 mb-2.5">
                <span className="mt-1.5 w-[7px] h-[7px] rounded-full bg-gray-800"></span>
                <span>
                  <Link
                    to="/press-media"
                    className="text-[#7f979f] text-base font-medium inline-block transition-transform duration-300 ease-in-out hover:translate-x-1"
                  >
                    Press Media
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Manufactured by & Marketed by Section */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <p className="text-[#7f979f] text-base text-center md:text-left">
              <span className="font-semibold text-white">
                Manufactured by:
              </span>{" "}
              Rangoge Animal Feed Plant
            </p>

            <p className="text-[#7f979f] text-base text-center md:text-right">
              <span className="font-semibold text-white">
                Marketed by:
              </span>{" "}
              Green Gold Livestock Feed Pvt Ltd
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8">
          <hr className="border-gray-800" />
          <p className="text-center text-gray-500 text-xs py-4">
            &copy; {new Date().getFullYear()} {settings?.data?.legal?.copyright_text}{" "}
            <span>| Designed &amp; Developed By <a href="https://www.neonatetechnologies.com/" target="_blank" className="text-[#727272] hover:text-white">Neonate Technologies</a></span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;