import {Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import bgImage from "../../assets/images/slider-bg.png";
import logo from "../../assets/images/logo.png";

export default function ForgotPassword() {
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
          px-6 py-8
        "
      >
        {/* logo */}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="logo" className="w-[100px] h-[100px]" />
        </div>

        <h2 className="text-2xl font-semibold text-center text-white">
          Forgot Password
        </h2>
        <p className="text-center text-white text-sm mb-4">
          Enter your email to reset your password
        </p>

        <div
          className="
            bg-white/75
            rounded-[26px]
            px-4 py-5
            shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          "
        >
          <div className="relative mb-4">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="
                w-full pl-11 pr-4 py-3
                rounded-xl
                bg-white
                border border-gray-200
                text-gray-700
                placeholder-gray-400
                focus:outline-none
                focus:border-green-500
              "
            />
          </div>

          <button
            className="
              w-full py-3
              bg-gradient-to-r from-[#00a34a] to-[#009a62]
              text-white font-semibold rounded-[12px]
              shadow-md hover:opacity-90 transition cursor-pointer
            "
          >
            Send Reset Link
          </button>

          {/* divider */}
          <div className="flex items-center gap-3 my-3">
            <div className="flex-1 h-px bg-gray-500/60"></div>
            <span className="text-gray-500 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-500/60"></div>
          </div>

          <p className="text-center text-sm text-gray-600 mt-4">
            Remember your password?{" "}
            <Link to="/login" className="text-green-600 font-medium cursor-pointer hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}