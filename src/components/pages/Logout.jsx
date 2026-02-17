import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";

import bgImage from "../../assets/images/slider-bg.png";
import logo from "../../assets/images/logo.png";

export default function Logout() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/75"></div>

      <div
        className="
          relative
          w-[92%] max-w-[460px]
          bg-white/35
          backdrop-blur-[20px]
          rounded-2xl
          backdrop-blur-2xl
          rounded-[32px]
          border border-white/30
          shadow-[0_30px_80px_rgba(0,0,0,0.18)]
        md:px-4 md:py-4    md:px-6 md:py-8
        "
      >
        {/* logo */}
        <div className="flex justify-center mb-2 mt-4 md:mt-0">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[100px] h-[100px]" />
          </Link>
        </div>

        <h2 className="text-2xl font-semibold text-center text-white">
          Successfully Logged Out
        </h2>
        <p className="text-center text-white text-sm mb-4">
          Your Session has ended securely
        </p>

        <div
          className="
            bg-white/75
            rounded-[26px]
            px-4 py-4
            shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          "
        >
          {/* login button  */}
          <button
            className="
              w-full py-3
             
              bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-[12px]
              text-white font-semibold
              shadow-md
              hover:opacity-90
              transition cursor-pointer
            "
          >
            <Link to="/login">Log In Again</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
