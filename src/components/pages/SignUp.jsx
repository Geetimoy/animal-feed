import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import bgImage from "../../assets/images/slider-bg.png";
import logo from "../../assets/images/logo.png";

export default function SignUp() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div
        className="
          relative
          w-[92%] max-w-6xl md:max-w-4xl
          bg-white/20
          backdrop-blur-2xl
          rounded-[32px]
          border border-white/30
          shadow-[0_30px_80px_rgba(0,0,0,0.18)]
          p-4 md:p-8
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* ================= LEFT GLASS PANEL ================= */}
          <div
            className="
              hidden md:flex
              flex-col items-center justify-center text-center
             
            "
          >
            <img src={logo} alt="logo" className="w-[120px] h-[120px] mb-5" />

            <h2 className="text-3xl font-semibold text-white mb-3">
              Create Account
            </h2>

            <p className="text-white/90 max-w-sm leading-relaxed">
              Create your account to access all features and manage everything
              easily.
            </p>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="flex flex-col justify-center ">
            {/* MOBILE LOGO */}
            <div className="flex md:hidden justify-center mb-3">
              <img src={logo} alt="logo" className="w-[90px] h-[90px]" />
            </div>

          
            <h2 className="text-2xl font-semibold text-white mb-1 text-center md:text-left md:hidden">
              Sign Up
            </h2>

           
            <p className="text-sm text-white mb-4 text-center md:hidden">
              Create your account to get started.
            </p>

            <div
              className="
                bg-white/70
                backdrop-blur-xl
                rounded-[28px]
                border border-white/40
                px-4 py-4   md:px-8 md:py-8
                shadow-[0_20px_50px_rgba(0,0,0,0.12)]
              "
            >
              {/* Full name */}
              <div className="relative mb-2">
                <FontAwesomeIcon
                  icon={faUser}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600"
                />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="
                w-full pl-11 pr-4 py-3
                rounded-xl
                bg-white
                border border-gray-200
                text-gray-700
                placeholder-gray-400
                focus:outline-none
                focus:border-blue-400
              "
                />
              </div>
              {/* Email */}
              <div className="relative mb-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600"
                />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="
                w-full pl-11 pr-4 py-3
                rounded-xl
                bg-white
                border border-gray-200
                text-gray-700
                placeholder-gray-400
                focus:outline-none
                focus:border-blue-400
              "
                />
              </div>
              {/* Password */}

              <div className="relative mb-4">
                <FontAwesomeIcon
                  icon={faLock}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="
                w-full pl-11 pr-4 py-3
                rounded-xl
                bg-white
                border border-gray-200
                text-gray-700
                placeholder-gray-400
                focus:outline-none
                focus:border-blue-400
              "
                />
              </div>
              {/* Button */}
              <button
                className="
                   w-full py-3
             
              bg-gradient-to-r from-[#00a34a] to-[#009a62] text-white rounded-[12px]
              text-white font-semibold
             
              transition
                  shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                  hover:opacity-90
                  transition cursor-pointer
                "
              >
                Sign Up
              </button>
              <p className="text-center text-sm text-gray-600 mt-5">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-green-600 font-medium hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
