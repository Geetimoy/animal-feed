import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faUser,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function ProfileDashboard() {
  const { pathname } = useLocation();
  const isActive = (path) => pathname === path;

  const itemBase =
    "relative flex items-center gap-[12px] px-[16px] py-[14px] rounded-[14px] bg-white transition";

  return (
    <aside className="hidden md:block w-[288px]  bg-[#f7f8fa] shadow-[inset_-1px_0_0_#e9ebef] ">
      {/* USER HEADER */}
      <div className="px-[1px] py-[18px]">
        <div className="flex items-center  gap-[30px] mt-4  bg-green-100 py-4 px-[16px]">
          <div className="w-[44px] h-[44px] rounded-full bg-[#2f855a] text-white flex items-center justify-center font-semibold">
            R
          </div>
          <div>
            <div className="text-[14px] text-[#9aa0a6]">Hello</div>
            <div className="text-[18px] font-semibold text-[#1f2937]">Amit</div>
          </div>
        </div>
      </div>

      {/* SECTION LABEL */}

      <div className="px-[16px] space-y-[12px]">
        <div className="px-[8px] pt-[6px] text-[12px] tracking-wide text-gray-600">
          ORDER SETTINGS
        </div>

        {/* MY ORDERS */}
        <Link
          to="/my-orders"
          className={`${itemBase} hover:shadow-[0_6px_16px_rgba(0,0,0,0.05)]`}
        >
          {/* LEFT STRIP */}
          <span
            className={`absolute left-[-6px] top-[10px] bottom-[10px] w-[4px] rounded-r-[4px]
              ${isActive("/my-orders") ? "bg-[#f6c453]" : "bg-[#2f855a]"}`}
          />

          {/* ICON */}
          <span
            className={`w-[36px] h-[36px] rounded-full flex items-center justify-center
              ${
                isActive("/my-orders")
                  ? "bg-[#e8f5ee] text-[#2f855a]"
                  : "bg-[#eef0f3] text-[#9aa0a6]"
              }`}
          >
            <FontAwesomeIcon icon={faBoxOpen} />
          </span>

          {/* TEXT */}
          <span
            className={`text-[15px] font-medium ${
              isActive("/my-orders") ? "text-[#2f855a]" : "text-[#6b7280]"
            }`}
          >
            My Orders
          </span>
        </Link>

        {/* SECTION LABEL */}
        <div className="px-[8px] pt-[6px] text-[12px] tracking-wide  text-gray-600">
          ACCOUNT SETTINGS
        </div>

        {/* PROFILE */}
        <Link
          to="/profile"
          className={`${itemBase} hover:shadow-[0_6px_16px_rgba(0,0,0,0.05)]`}
        >
          <span
            className={`absolute left-[-6px] top-[10px] bottom-[10px] w-[4px] rounded-r-[4px]
              ${isActive("/profile") ? "bg-[#f6c453]" : "bg-[#2f855a]"}`}
          />

          <span
            className={`w-[36px] h-[36px] rounded-full flex items-center justify-center
              ${
                isActive("/profile")
                  ? "bg-[#e8f5ee] text-[#2f855a]"
                  : "bg-[#eef0f3] text-[#9aa0a6]"
              }`}
          >
            <FontAwesomeIcon icon={faUser} />
          </span>

          <span
            className={`text-[16px] font-medium ${
              isActive("/profile") ? "text-[#2f855a]" : "text-[#6b7280]"
            }`}
          >
            Profile
          </span>
        </Link>

        {/* ADDRESS */}
        <Link
          to="/address-management"
          className={`${itemBase} hover:shadow-[0_6px_16px_rgba(0,0,0,0.05)]`}
        >
          <span
            className={`absolute left-[-6px] top-[10px] bottom-[10px] w-[4px] rounded-r-[4px]
              ${
                isActive("/address-management")
                  ? "bg-[#f6c453]"
                  : "bg-[#2f855a]"
              }`}
          />

          <span
            className={`w-[36px] h-[36px] rounded-full flex items-center justify-center
              ${
                isActive("/address-management")
                  ? "bg-[#e8f5ee] text-[#2f855a]"
                  : "bg-[#eef0f3] text-[#9aa0a6]"
              }`}
          >
            <FontAwesomeIcon icon={faLocationDot} />
          </span>

          <span
            className={`text-[16px] font-medium ${
              isActive("/address-management")
                ? "text-[#2f855a]"
                : "text-[#6b7280]"
            }`}
          >
            Address
          </span>
        </Link>
      </div>
    </aside>
  );
}
