import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";
import bgImage from "../../assets/images/slider-bg.png";
import logo from "../../assets/images/logo.png";

export default function Logout() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {

    logout();


    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          navigate("/login");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup
    return () => {
      clearInterval(countdownInterval);
    };
  }, [logout, navigate]);

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
          rounded-[32px]
          border border-white/30
          shadow-[0_30px_80px_rgba(0,0,0,0.18)]
          md:px-6 md:py-8
        "
      >
        {/* logo */}
        <div className="flex justify-center mb-2 mt-4 md:mt-0">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[100px] h-[100px]" />
          </Link>
        </div>

        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-center text-white">
          Successfully Logged Out
        </h2>
        <p className="text-center text-white text-sm mb-4">
          Your session has ended securely
        </p>

        <div
          className="
            bg-white/75
            rounded-[26px]
            px-4 py-4
            shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          "
        >
          {/* Auto Redirect Message */}
          <p className="text-center text-gray-600 text-sm mb-4">
            Redirecting to login in {countdown} seconds...
          </p>

          {/* Log In Again Button */}
          <Link to="/login">
            <button
              className="
                w-full py-3
                bg-gradient-to-r from-[#00a34a] to-[#009a62] 
                text-white rounded-[12px]
                font-semibold
                shadow-md
                hover:opacity-90
                transition cursor-pointer
              "
            >
              Log In Again
            </button>
          </Link>

          {/* Divider */}
          <div className="flex items-center gap-3 my-3">
            <div className="flex-1 h-px bg-gray-500/60"></div>
            <span className="text-gray-500 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-500/60"></div>
          </div>

          {/* Home Link */}
          <div className="text-center">
            <Link to="/" className="text-green-600 hover:underline text-sm">
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}