import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../auth/AuthProvider";
import bgImage from "../../assets/images/slider-bg.png";
import logo from "../../assets/images/logo.png";

export default function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const result = await login(formData.email, formData.password);

        if (result.success) {
            navigate("/profile");
        } else {
            setError(result.error);
        }

        setLoading(false);
    };

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
                <div className="flex justify-center mb-2 mt-4 md:mt-0">
                    <Link to="/">
                        <img src={logo} alt="logo" className="w-[100px] h-[100px]" />
                    </Link>
                </div>

                <h2 className="text-2xl font-semibold text-center text-white">
                    Welcome to GGAF
                </h2>
                <p className="text-center text-white text-sm mb-4">
                    Please login to continue
                </p>

                <form
                    onSubmit={handleLogin}
                    className="
            bg-white/75
            rounded-[26px]
            px-4 py-4
            shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          "
                >
                    <div className="relative mb-2">
                        <FontAwesomeIcon
                            icon={faUser}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600"
                        />
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
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
                            required
                        />
                    </div>

                    <div className="relative mb-2">
                        <FontAwesomeIcon
                            icon={faLock}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600"
                        />
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
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
                            required
                        />
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm mb-3">{error}</p>
                    )}

                    <div className="text-right text-sm text-green-600 hover:underline cursor-pointer mb-4">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
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
                        {loading ? "Logging in..." : "Log In"}
                    </button>

                    <div className="flex items-center gap-3 my-3">
                        <div className="flex-1 h-px bg-gray-500/60"></div>
                        <span className="text-gray-500 text-sm">or</span>
                        <div className="flex-1 h-px bg-gray-500/60"></div>
                    </div>

                    <p className="text-center text-sm text-gray-600 mt-5">
                        Don't have an account?{" "}
                        <Link
                            to="/sign-up"
                            className="text-green-600 font-medium hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}