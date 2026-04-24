import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BellIcon, SettingsIcon, CloseIcon, MenuIcon } from "../assets/Icons";

// _____________Data______________
const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Assessments", path: "/#" },
  { name: "Performance", path: "/#" },
  { name: "Candidates", path: "/#" },
  { name: "Directory", path: "/#" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  //testing area start here

  // testing area ends here

  return (
    <div>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md nav-shadow" : "bg-white/80 backdrop-blur-sm border-b border-gray-100/80"}`}
      >
        <div className="max-w-6xl mx-auto px-5 h-14.5 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="logo text-[17px] text-blue-900 select-none">
              Credify
            </span>
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.name} to={`${link.path}`}>
                  <button
                    onClick={() => setActiveNav(link.name)}
                    className={`nav-link text-sm font-medium px-3 py-1.5 rounded-lg transition-colors hover:cursor-pointer ${activeNav === link.name ? "active text-blue-600 bg-blue-50/60" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"}`}
                  >
                    {link.name}
                  </button>
                </NavLink>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all">
              <BellIcon />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all">
              <SettingsIcon />
            </button>
            <NavLink to={"/sign-in"}>
              <button className="btn ml-2 bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-gray-700 hidden md:block">
                Sign In
              </button>
            </NavLink>
            <button
              className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-all"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu md:hidden border-t border-gray-100 bg-white px-5 pb-4">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.name} to={`${link.path}`}>
                <button
                  key={link.name}
                  onClick={() => {
                    setActiveNav(link.name);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-3 text-sm font-medium text-gray-600 border-b border-gray-50 last:border-0"
                >
                  {link.name}
                </button>
              </NavLink>
            ))}
            <button className="btn mt-3 w-full bg-gray-900 text-white text-sm font-semibold py-2.5 rounded-xl">
              Sign In
            </button>
          </div>
        )}
      </header>
    </div>
  );
}
