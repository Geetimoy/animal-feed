import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faEye,
  faEyeSlash,
  faShieldAlt,
  faCheckCircle,
  faKey
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.png";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from "../../config/api";
import { useAuth } from "../../auth/AuthProvider";

export default function ResetPassword() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleResetPassword = async () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error("All password fields are required");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("New passwords do not match");
      return;
    }

    if (newPassword.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      await axios.patch(
        `${API_URL}/customers/reset-password`,
        {
          current_password: currentPassword,
          password: newPassword,
          password_confirmation: confirmPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );

      // ✅ Success
      setIsSuccess(true);
      toast.success("Password updated successfully!");

      // ✅ Logout করুন
      logout();

      // ✅ Clear form
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

      // ✅ 2 সেকেন্ড পর Login page এ redirect
      setTimeout(() => {
        navigate("/login", { replace: true });
        // ✅ Page reload করুন (UI ঠিক করতে)
        window.location.reload();
      }, 2000);

    } catch (error) {
      const res = error.response?.data;
      if (res?.errors) {
        Object.values(res.errors).forEach((arr) => {
          toast.error(arr[0]);
        });
      } else {
        toast.error(res?.message || "Failed to reset password");
      }
    } finally {
      setLoading(false);
    }
  };

  // ✅ Success State দেখান
  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f5f0e8]">
        <div className="bg-white rounded-3xl p-12 shadow-[0_4px_24px_rgba(0,0,0,0.07)] text-center max-w-md">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FontAwesomeIcon icon={faCheckCircle} className="text-4xl text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-[#1a4731] mb-2">
            Password Updated!
          </h2>
          <p className="text-gray-600 mb-6">
            Your password has been changed successfully.
            <br />
            Redirecting to login page...
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full animate-pulse w-full"></div>
          </div>
          <Link to="/login" className="mt-6 inline-block text-[#cba344] font-semibold hover:underline">
            Click here if not redirected
          </Link>
        </div>
      </div>
    );
  }

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

      <div className="min-h-screen flex font-['Inter'] bg-[#f5f0e8]">
        {/* ── Left Form Panel ── */}
        <div className="flex-1 flex items-center justify-center p-8 bg-[#f5f0e8]">
          <div className="w-full max-w-[26rem]">
            {/* Mobile logo */}
            <div className="flex flex-col items-center mb-8 lg:hidden">
              <img
                src={logo}
                alt="Green Gold"
                className="w-[72px] h-[72px] object-contain"
              />
              <p className="mt-2 text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#1a4731]">
                Customer Portal
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
              <h2 className="font-['Playfair_Display'] text-[1.75rem] font-bold text-[#1a4731] mb-1">
                Reset Password
              </h2>
              <p className="text-sm text-gray-400 mb-8">
                Create a new password for your account
              </p>

              <form onSubmit={(e) => { e.preventDefault(); handleResetPassword(); }}>
                {/* Current Password */}
                <div className="mb-5">
                  <label className="block text-[0.65rem] font-bold text-gray-500 uppercase tracking-[0.1em] mb-2" htmlFor="current-password">
                    Current Password
                  </label>
                  <div className="relative">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      id="current-password"
                      type="password"
                      placeholder="Enter current password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      className="w-full py-3 pl-11 pr-4 border-2 border-gray-100 rounded-xl text-sm font-semibold text-gray-700 bg-gray-50 outline-none focus:border-[#cba344] focus:bg-white transition-colors box-border"
                      required
                    />
                  </div>
                </div>

                {/* New Password */}
                <div className="mb-5">
                  <label className="block text-[0.65rem] font-bold text-gray-500 uppercase tracking-[0.1em] mb-2" htmlFor="new-password">
                    New Password
                  </label>
                  <div className="relative">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      id="new-password"
                      type={showNewPassword ? "text" : "password"}
                      placeholder="Enter new password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full py-3 pl-11 pr-11 border-2 border-gray-100 rounded-xl text-sm font-semibold text-gray-700 bg-gray-50 outline-none focus:border-[#cba344] focus:bg-white transition-colors box-border"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-none border-none cursor-pointer text-gray-400 flex p-0 transition-colors hover:text-[#cba344]"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      aria-label="Toggle password visibility"
                    >
                      <FontAwesomeIcon icon={showNewPassword ? faEyeSlash : faEye} />
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="mb-6">
                  <label className="block text-[0.65rem] font-bold text-gray-500 uppercase tracking-[0.1em] mb-2" htmlFor="confirm-password">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <input
                      id="confirm-password"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full py-3 pl-11 pr-11 border-2 border-gray-100 rounded-xl text-sm font-semibold text-gray-700 bg-gray-50 outline-none focus:border-[#cba344] focus:bg-white transition-colors box-border"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-none border-none cursor-pointer text-gray-400 flex p-0 transition-colors hover:text-[#cba344]"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      aria-label="Toggle password visibility"
                    >
                      <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#1a4731] text-white text-sm font-bold tracking-[0.05em] border-none rounded-xl cursor-pointer transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_6px_20px_rgba(26,71,49,0.28)] hover:bg-[#255f40] hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(26,71,49,0.36)] active:translate-y-0"
                >
                  {loading ? "Processing…" : "Reset Password →"}
                </button>
              </form>

              <div className="flex items-center gap-3 my-6">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="text-gray-400 text-xs font-medium">or</span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>

              <p className="text-center text-sm text-gray-600">
                Remember your password?{" "}
                <Link
                  to="/login"
                  className="text-[#cba344] font-semibold no-underline hover:text-[#a8842d]"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* ── Right Branding Panel ── */}
        <div className="hidden lg:flex lg:flex-col lg:justify-between w-1/2 p-16 bg-pattern relative overflow-hidden text-white">
          <div className="gg-blob1" />
          <div className="gg-blob2" />

          <div>
            <img
              src={logo}
              alt="Green Gold Animal Feed"
              className="w-20 h-20 object-contain"
            />
            <p className="mt-4 text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#cba344]">
              Customer Portal
            </p>
          </div>

          <div className="relative z-10">
            <h1 className="font-['Playfair_Display'] text-5xl leading-[1.15] font-bold mb-6">
              Secure Your<br />
              <span className="text-[#cba344]">Account.</span>
            </h1>
            <p className="text-white/65 text-base leading-relaxed max-w-sm">
              Update your password to keep your account secure. Choose a strong,
              unique password that you haven't used elsewhere.
            </p>
          </div>

          <div className="flex gap-8 text-white/55 text-xs relative z-10">
            <div>
              <span className="block text-2xl font-bold text-white mb-0.5">
                <FontAwesomeIcon icon={faShieldAlt} />
              </span>
              Secure Connection
            </div>
            <div>
              <span className="block text-2xl font-bold text-white mb-0.5">
                <FontAwesomeIcon icon={faCheckCircle} />
              </span>
              Verified Account
            </div>
            <div>
              <span className="block text-2xl font-bold text-white mb-0.5">
                <FontAwesomeIcon icon={faKey} />
              </span>
              Strong Encryption
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}