import React from "react";
import { GlobeIcon } from "../assets/Icons";
function SharedNav() {
  return (
    <div>
      <header className="hero-bg flex items-center justify-between  border-b border-b-[#e9eaec] px-7 h-14 shrink-0 ">
        <span className="logo font-extrabold text-[17px] text-[#111827] tracking-[-0.025em] ">
          Credify
        </span>
        <button
          className="flex items-center gap-1.5 bg-[#f5f6f8] border border-[#e5e7eb] rounded-[20px] px-3.75 py-1.5 text-[13px] font-medium text-[#374151] cursor-pointer"
          onMouseEnter={(e) => (e.currentTarget.style.background = "#eef0f3")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#f5f6f8")}
        >
          <GlobeIcon /> Help
        </button>
      </header>
    </div>
  );
}

export default SharedNav;
