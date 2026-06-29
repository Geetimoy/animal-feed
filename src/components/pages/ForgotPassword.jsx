import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // Add your API call here
      // const response = await fetch(`${API_URL}/forgot-password`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email }),
      // });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSuccess("Password reset link sent to your email!");
      setEmail("");
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
                Forgot Password
              </h2>
              <p className="text-sm text-gray-400 mb-8">
                Enter your email to reset your password
              </p>

              <form onSubmit={handleSubmit}>
                {/* Email */}
                <div className="mb-6">
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
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full py-3 pl-11 pr-4 border-2 border-gray-100 rounded-xl text-sm font-semibold text-gray-700 bg-gray-50 outline-none focus:border-[#cba344] focus:bg-white transition-colors box-border"
                      required
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-sm text-red-500 -mt-4 mb-4">{error}</p>
                )}

                {success && (
                  <p className="text-sm text-green-600 -mt-4 mb-4">{success}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#1a4731] text-white text-sm font-bold tracking-[0.05em] border-none rounded-xl cursor-pointer transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_6px_20px_rgba(26,71,49,0.28)] hover:bg-[#255f40] hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(26,71,49,0.36)] active:translate-y-0"
                >
                  {loading ? "Sending…" : "Send Reset Link →"}
                </button>

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
              </form>
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
              Reset Your<br />
              <span className="text-[#cba344]">Password.</span>
            </h1>
            <p className="text-white/65 text-base leading-relaxed max-w-sm">
              Don't worry! Enter your email address and we'll send you a link
              to reset your password and get back to managing your feed orders.
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
      </div>
    </>
  );
}