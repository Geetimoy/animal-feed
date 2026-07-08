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

export default function VerifyOtp() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const email = state?.email || "";
  const generatedOtp = state?.otp || "";
  const expiresIn = state?.expiresIn || 10;

  const [otp, setOtp] = useState("");
  // const [otp, setOtp] = useState(state?.otp || "");
  const [loading, setLoading] = useState(false);

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    if (!otp) {
      toast.error("Please enter OTP");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        `${API_URL}/customers/verify-otp`,
        {
          email,
          otp,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      toast.success(res.data.message);

      setTimeout(() => {
        navigate("/change-password", {
          state: {
            email,
            resetToken: res.data.reset_token,
          },
        });
      }, 2000);

    } catch (err) {
      const res = err.response?.data;

      if (res?.errors) {
        Object.values(res.errors).forEach((arr) => {
          toast.error(arr[0]);
        });
      } else {
        toast.error(res?.message || "Invalid or expired OTP");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!email) {
      toast.error("Please request an OTP first.");
      navigate("/forgot-password", { replace: true });
    }
  }, [email, navigate]);

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
          <div className="w-full max-w-[26rem] px-4">

            {/* Mobile Logo */}
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

              <h2 className="font-['Playfair_Display'] text-[1.75rem] font-bold text-[#1a4731] mb-1">
                Verify OTP
              </h2>

              <p className="text-sm text-gray-500 mb-2">
                Enter the OTP sent to
              </p>

              <p className="font-semibold text-[#1a4731] mb-8 break-all">
                {email}
              </p>

              {generatedOtp && (
                <div className="mb-8 rounded-xl bg-green-50 border border-green-200 p-4 text-center">
                  <p className="text-sm text-gray-600">
                    Development OTP
                  </p>

                  <div className="text-4xl font-bold tracking-[10px] text-green-700 my-2">
                    {generatedOtp}
                  </div>

                  <p className="text-xs text-gray-500">
                    Valid for {expiresIn} minutes
                  </p>
                </div>
              )}

              <form onSubmit={handleVerifyOtp}>

                {/* OTP */}
                <div className="mb-6">
                  <label className="block text-[0.65rem] font-bold text-gray-500 uppercase tracking-[0.1em] mb-2">
                    One Time Password
                  </label>

                  <input
                    type="text"
                    maxLength={6}
                    value={otp}
                    onChange={(e) =>
                      setOtp(e.target.value.replace(/\D/g, ""))
                    }
                    placeholder="Enter 6-digit OTP"
                    className="w-full py-3 px-4 border-2 border-gray-100 rounded-xl text-center text-xl tracking-[8px] font-bold text-gray-700 bg-gray-50 outline-none focus:border-[#cba344] focus:bg-white"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#1a4731] text-white text-sm font-bold tracking-[0.05em] rounded-xl transition-all disabled:opacity-70"
                >
                  {loading ? "Verifying..." : "Verify OTP →"}
                </button>

                <div className="flex items-center gap-3 my-6">
                  <div className="flex-1 h-px bg-gray-200"></div>
                  <span className="text-gray-400 text-xs font-medium">
                    or
                  </span>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                <p className="text-center text-sm text-gray-600">
                  Wrong email?{" "}
                  <Link
                    to="/forgot-password"
                    className="text-[#cba344] font-semibold hover:text-[#a8842d]"
                  >
                    Go Back
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