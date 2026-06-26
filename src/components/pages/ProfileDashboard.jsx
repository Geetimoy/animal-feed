import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faUser,
  faLocationDot,
  faKey,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useAuth } from "../../auth/AuthProvider";

export default function ProfileDashboard() {
  const { pathname } = useLocation();
  const { user, logout } = useAuth();


  const getInitial = (name) => {
    if (!name) return 'U';
    return name.charAt(0).toUpperCase();
  };


  const getUserName = () => {
    if (user?.name) return user.name;
    if (user?.full_name) return user.full_name;
    if (user?.first_name) return user.first_name;
    return 'User';
  };

  const isActive = (path) => pathname === path;

  const itemBase =
    "relative flex items-center gap-[12px] px-[16px] py-[14px] rounded-[14px] transition";

  return (
    <aside className="hidden md:block w-[288px] bg-[#f7f8fa] shadow-[inset_-1px_0_0_#e9ebef]">
      {/* USER HEADER */}
      <div className="px-[1px] py-[18px]">
        <div className="flex items-center gap-[30px] mt-4 bg-green-100 py-4 px-[16px]">
          <div className="w-[44px] h-[44px] rounded-full bg-[#2f855a] text-white flex items-center justify-center font-semibold text-lg">
            {getInitial(getUserName())}
          </div>
          <div>
            <div className="text-[14px] text-[#9aa0a6]">Hello</div>
            <h2 className="text-[18px] font-semibold text-[#1f2937]">
              {getUserName()}
            </h2>
          </div>
        </div>
      </div>

      {/* SECTION LABEL */}
      <div className="px-[16px] space-y-[12px]">
        {/* SECTION LABEL */}
        <div className="px-[8px] pt-[6px] text-[12px] tracking-wide text-gray-600">
          ACCOUNT SETTINGS
        </div>

        {/* PROFILE */}
        <Link
          to="/profile"
          className={`${itemBase} ${isActive("/profile") ? "bg-green-100 shadow-xl" : "bg-white"
            } hover:shadow-[0_6px_16px_rgba(0,0,0,0.05)]`}
        >
          <span
            className={`w-[36px] h-[36px] rounded-full flex items-center justify-center
              ${isActive("/profile")
                ? "bg-[#e8f5ee] text-[#2f855a]"
                : "bg-[#eef0f3] text-[#9aa0a6]"
              }`}
          >
            <FontAwesomeIcon icon={faUser} />
          </span>
          <span
            className={`text-[16px] font-medium ${isActive("/profile") ? "text-[#2f855a]" : "text-[#6b7280]"
              }`}
          >
            Profile
          </span>
        </Link>

        {/* RESET PASSWORD */}
        <Link
          to="/reset-password"
          className={`${itemBase} ${isActive("/reset-password") ? "bg-green-100 shadow-xl" : "bg-white"
            } hover:shadow-[0_6px_16px_rgba(0,0,0,0.05)]`}
        >
          <span
            className={`w-[36px] h-[36px] rounded-full flex items-center justify-center
              ${isActive("/reset-password")
                ? "bg-[#e8f5ee] text-[#2f855a]"
                : "bg-[#eef0f3] text-[#9aa0a6]"
              }`}
          >
            <FontAwesomeIcon icon={faKey} />
          </span>
          <span
            className={`text-[16px] font-medium ${isActive("/reset-password") ? "text-[#2f855a]" : "text-[#6b7280]"
              }`}
          >
            Reset Password
          </span>
        </Link>

        {/* ADDRESS */}
        <Link
          to="/address-management"
          className={`${itemBase} ${isActive("/address-management") ? "bg-green-100 shadow-xl" : "bg-white"
            } hover:shadow-[0_6px_16px_rgba(0,0,0,0.05)]`}
        >
          <span
            className={`w-[36px] h-[36px] rounded-full flex items-center justify-center
              ${isActive("/address-management")
                ? "bg-[#e8f5ee] text-[#2f855a]"
                : "bg-[#eef0f3] text-[#9aa0a6]"
              }`}
          >
            <FontAwesomeIcon icon={faLocationDot} />
          </span>
          <span
            className={`text-[16px] font-medium ${isActive("/address-management") ? "text-[#2f855a]" : "text-[#6b7280]"
              }`}
          >
            Address
          </span>
        </Link>

        <div className="px-[8px] pt-[6px] text-[12px] tracking-wide text-gray-600">
          ORDER SETTINGS
        </div>

        {/* MY ORDERS */}
        <Link
          to="/my-orders"
          className={`${itemBase} ${isActive("/my-orders") ? "bg-green-100 shadow-xl" : "bg-white"
            } hover:shadow-[0_6px_16px_rgba(0,0,0,0.05)]`}
        >
          <span
            className={`w-[36px] h-[36px] rounded-full flex items-center justify-center
              ${isActive("/my-orders")
                ? "bg-[#e8f5ee] text-[#2f855a]"
                : "bg-[#eef0f3] text-[#9aa0a6]"
              }`}
          >
            <FontAwesomeIcon icon={faBoxOpen} />
          </span>
          <span
            className={`text-[15px] font-medium ${isActive("/my-orders") ? "text-[#2f855a]" : "text-[#6b7280]"
              }`}
          >
            My Orders
          </span>
        </Link>

        {/* LOGOUT - Optional */}
        <button
          onClick={logout}
          className={`${itemBase} bg-white hover:shadow-[0_6px_16px_rgba(0,0,0,0.05)] w-full text-left cursor-pointer`}
        >
          <span
            className="w-[36px] h-[36px] rounded-full flex items-center justify-center bg-[#fef2f2] text-[#dc2626]"
          >
            <FontAwesomeIcon icon={faSignOutAlt} />
          </span>
          <span className="text-[16px] font-medium text-[#dc2626]">
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
}