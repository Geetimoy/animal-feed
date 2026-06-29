import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { API_URL } from "../../config/api";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(`${API_URL}/customers/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data?.errors) {
          const firstField = Object.keys(data.errors)[0];
          throw new Error(data.errors[firstField]?.[0] || "Signup failed.");
        }
        throw new Error(data?.message || "Signup failed.");
      }

      setSuccess("Account created successfully. You can sign in now.");
      setForm({ name: "", email: "", password: "" });
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

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
                Create Account
              </h2>
              <p className="text-sm text-gray-400 mb-8">
                Join Green Gold and get started
              </p>

              <form onSubmit={handleSubmit}>
                {/* Full Name */}
                <div className="mb-5">
                  <label className="block text-[0.65rem] font-bold text-gray-500 uppercase tracking-[0.1em] mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 flex pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </span>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name here"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full py-3 pl-11 pr-4 border-2 border-gray-100 rounded-xl text-sm font-semibold text-gray-700 bg-gray-50 outline-none focus:border-[#cba344] focus:bg-white transition-colors box-border"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-5">
                  <label className="block text-[0.65rem] font-bold text-gray-500 uppercase tracking-[0.1em] mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 flex pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </span>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email here"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full py-3 pl-11 pr-4 border-2 border-gray-100 rounded-xl text-sm font-semibold text-gray-700 bg-gray-50 outline-none focus:border-[#cba344] focus:bg-white transition-colors box-border"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="mb-5">
                  <label className="block text-[0.65rem] font-bold text-gray-500 uppercase tracking-[0.1em] mb-2" htmlFor="password">
                    Password
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 flex pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </span>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={form.password}
                      onChange={handleChange}
                      required
                      className="w-full py-3 pl-11 pr-11 border-2 border-gray-100 rounded-xl text-sm font-semibold text-gray-700 bg-gray-50 outline-none focus:border-[#cba344] focus:bg-white transition-colors box-border"
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-none border-none cursor-pointer text-gray-400 flex p-0 transition-colors hover:text-[#cba344]"
                      onClick={() => setShowPassword((p) => !p)}
                      aria-label="Toggle password visibility"
                    >
                      {showPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                          <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                          <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                          <line x1="2" x2="22" y1="2" y2="22" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {error && (
                  <p className="text-sm text-red-500 -mt-2 mb-4">{error}</p>
                )}

                {success && (
                  <p className="text-sm text-green-600 -mt-2 mb-4">{success}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#1a4731] text-white text-sm font-bold tracking-[0.05em] border-none rounded-xl cursor-pointer transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_6px_20px_rgba(26,71,49,0.28)] hover:bg-[#255f40] hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(26,71,49,0.36)] active:translate-y-0"
                >
                  {loading ? "Creating Account…" : "Create Account →"}
                </button>

                <div className="flex items-center gap-3 my-6">
                  <div className="flex-1 h-px bg-gray-200"></div>
                  <span className="text-gray-400 text-xs font-medium">or</span>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                <p className="text-center text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-[#cba344] font-semibold no-underline hover:text-[#a8842d]"
                  >
                    Sign in
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
              Join the<br />
              <span className="text-[#cba344]">Green Gold Family.</span>
            </h1>
            <p className="text-white/65 text-base leading-relaxed max-w-sm">
              Create your account to access premium feed products, track orders,
              manage subscriptions, and get personalized nutrition advice for your livestock.
            </p>
          </div>

          <div className="flex gap-8 text-white/55 text-xs relative z-10">
            <div>
              <span className="block text-2xl font-bold text-white mb-0.5">50+</span>
              Feed Products
            </div>
            <div>
              <span className="block text-2xl font-bold text-white mb-0.5">4.9★</span>
              Customer Rating
            </div>
            <div>
              <span className="block text-2xl font-bold text-white mb-0.5">98%</span>
              On-Time Delivery
            </div>
          </div>
        </div>
      </div>
    </>
  );
}