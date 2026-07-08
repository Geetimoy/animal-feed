import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
// import { toast } from "react-toastify";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Header from "../Header";
// import Footer from "../Footer";
import logo from "../../assets/images/logo.png";
import { API_URL } from "../../config/api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

export default function ChangePassword() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const email = state?.email || "";
  const resetToken = state?.resetToken || "";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      toast.error("Please fill all fields.");
      return;
    }

    if (password.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `${API_URL}/customers/reset-password`,
        {
          email,
          reset_token: resetToken,
          password,
          password_confirmation: confirmPassword,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      toast.success(res.data.message);

      setPassword("");
      setConfirmPassword("");

      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 2600);

    } catch (err) {
      const res = err.response?.data;

      if (res?.errors) {
        Object.values(res.errors).forEach((messages) => {
          toast.error(messages[0]);
        });
      } else {
        toast.error(res?.message || "Password reset failed.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!email || !resetToken) {
      toast.error("Invalid password reset session.");
      navigate("/forgot-password", { replace: true });
    }
  }, [email, resetToken, navigate]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600;700&display=swap');

        .bg-pattern {
          background-color: #1B4D1B;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .gg-blob1 {
          position: absolute;
          top: -5rem; left: -5rem;
          width: 18rem; height: 18rem;
          border-radius: 50%;
          background: rgba(255,255,255,0.04);
          pointer-events: none;
        }
        .gg-blob2 {
          position: absolute;
          bottom: 2.5rem; right: 2.5rem;
          width: 24rem; height: 24rem;
          border-radius: 50%;
          background: rgba(203,163,68,0.08);
          pointer-events: none;
        }
      `}</style>
      {/* <Header /> */}

      <main className="min-h-screen bg-[#f5f0e8] flex justify-center">
        <div className="flex-1 flex items-center justify-center p-8 bg-[#f5f0e8]">
          <div className="w-full max-w-[26rem] px-4 mt-16 mb-16">

            {/* Logo */}
            {/* <div className="flex flex-col items-center mb-8">
              <img
                src={logo}
                alt="Green Gold"
                className="w-[72px] h-[72px] object-contain"
              />
              <p className="mt-2 text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#1a4731]">
                Customer Portal
              </p>
            </div> */}

            <div className="bg-white rounded-3xl p-10 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">

              <h2 className="font-['Playfair_Display'] text-[1.75rem] font-bold text-[#1a4731] mb-2">
                Change Password
              </h2>

              <p className="text-sm text-gray-500 mb-2">
                Create a new password for
              </p>

              <p className="font-semibold text-[#1a4731] break-all mb-8">
                {email}
              </p>

              <form onSubmit={handleChangePassword}>

                {/* New Password */}
                <div className="mb-5">
                  <label className="block text-[0.65rem] font-bold uppercase tracking-[0.1em] text-gray-500 mb-2">
                    New Password
                  </label>

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter new password"
                      className="w-full py-3 pl-4 pr-12 border-2 border-gray-100 rounded-xl bg-gray-50 focus:border-[#cba344] focus:bg-white outline-none"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#1a4731]"
                    >
                      <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                      />
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="mb-7">
                  <label className="block text-[0.65rem] font-bold uppercase tracking-[0.1em] text-gray-500 mb-2">
                    Confirm Password
                  </label>

                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm password"
                      className="w-full py-3 pl-4 pr-12 border-2 border-gray-100 rounded-xl bg-gray-50 focus:border-[#cba344] focus:bg-white outline-none"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#1a4731]"
                    >
                      <FontAwesomeIcon
                        icon={showConfirmPassword ? faEyeSlash : faEye}
                      />
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#1a4731] text-white rounded-xl font-bold transition-all hover:bg-[#255f40] disabled:opacity-70"
                >
                  {loading ? "Changing..." : "Change Password →"}
                </button>

                <div className="flex items-center gap-3 my-6">
                  <div className="flex-1 h-px bg-gray-200"></div>
                  <span className="text-xs text-gray-400">or</span>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                <p className="text-center text-sm text-gray-600">
                  Back to{" "}
                  <Link
                    to="/login"
                    className="text-[#cba344] font-semibold hover:text-[#a8842d]"
                  >
                    Sign In
                  </Link>
                </p>

              </form>
            </div>
          </div>
        </div>

        {/* ── Right Branding Panel ── */}
        <div className="hidden lg:flex lg:flex-col lg:justify-between w-1/2 p-16 bg-pattern relative overflow-hidden text-white">
          <div className="gg-blob1" />
          <div className="gg-blob2" />

          <div>
            <Link to="/">
            <img
              src={logo}
              alt="Green Gold Animal Feed"
              className="w-20 h-20 object-contain"
            />
            </Link>
            <p className="mt-4 text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#cba344]">
              Customer Portal
            </p>
          </div>

          <div className="relative z-10">
            <h1 className="font-['Playfair_Display'] text-5xl leading-[1.15] font-bold mb-6">
              Reset Your<br />
              <span className="text-[#cba344]">Password.</span>
            </h1>
            <p className="text-white/65 text-base leading-relaxed max-w-sm">
              {/* Don't worry! Enter your email address and we'll send you a link
              to reset your password and get back to managing your feed orders. */}
              Don't worry! Enter your registered email address and we'll send a One-Time Password (OTP) to verify your identity and reset your password securely.
            </p>
          </div>

          <div className="flex gap-8 text-white/55 text-xs relative z-10">
            <div>
              <span className="block text-2xl font-bold text-white mb-0.5">24/7</span>
              Support
            </div>
            <div>
              <span className="block text-2xl font-bold text-white mb-0.5">Secure</span>
              Encryption
            </div>
            <div>
              <span className="block text-2xl font-bold text-white mb-0.5">Fast</span>
              Recovery
            </div>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
      <ToastContainer />
    </>
  );
}