import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/* ─────────────────────────────────────────
   Stackmark Logo Mark
───────────────────────────────────────── */
function LogoMark({ size = 22 }) {
  return (
    <svg width={size * 1.96} height={size} viewBox="0 0 55 28" fill="none">
      <rect x="0" y="11" width="32" height="9" rx="4.5" fill="#2563EB" />
      <rect x="0" y="0" width="23" height="9" rx="4.5" fill="#60A5FA" />
      <rect x="0" y="21" width="18" height="7" rx="3.5" fill="#BFDBFE" />
      <path
        d="M31 4.5L36 11.5L46 0.5"
        stroke="#2563EB"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────
   Nav links per role
───────────────────────────────────────── */
const NAV_LINKS = {
  candidate: [
    { to: "/dashboard", label: "Dashboard", icon: "▦" },
    { to: "/tests", label: "Tests", icon: "✎" },
    { to: "/results", label: "My Results", icon: "◎" },
    { to: "/profile", label: "Profile", icon: "◈" },
  ],
  recruiter: [
    { to: "/recruiter", label: "Search Talent", icon: "⊕" },
    { to: "/recruiter/shortlist", label: "Shortlist", icon: "◈" },
    { to: "/recruiter/company", label: "Company", icon: "▦" },
  ],
  admin: [
    { to: "/admin", label: "Dashboard", icon: "▦" },
    { to: "/admin/questions", label: "Questions", icon: "✎" },
    { to: "/admin/users", label: "Users", icon: "◎" },
    { to: "/admin/flagged", label: "Flagged", icon: "⚑" },
  ],
  public: [
    { to: "/#how", label: "How it works", icon: null },
    { to: "/#features", label: "Features", icon: null },
    { to: "/pricing", label: "Pricing", icon: null },
  ],
};

/* ─────────────────────────────────────────
   Role badge chip
───────────────────────────────────────── */
const ROLE_STYLE = {
  candidate: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
    dot: "bg-blue-400",
  },
  recruiter: {
    bg: "bg-teal-500/10",
    text: "text-teal-400",
    border: "border-teal-500/20",
    dot: "bg-teal-400",
  },
  admin: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/20",
    dot: "bg-amber-400",
  },
};

function RoleBadge({ role }) {
  const s = ROLE_STYLE[role] || ROLE_STYLE.candidate;
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border ${s.bg} ${s.text} ${s.border}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
      {role}
    </span>
  );
}

/* ─────────────────────────────────────────
   Avatar initials circle
───────────────────────────────────────── */
function Avatar({ name = "", size = "w-8 h-8" }) {
  const initials =
    name
      .split(" ")
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase() || "U";
  return (
    <div
      className={`${size} rounded-full bg-linear-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white text-xs font-bold font-mono flex-shrink-0 ring-2 ring-blue-500/20`}
    >
      {initials}
    </div>
  );
}

/* ─────────────────────────────────────────
   Dropdown menu
───────────────────────────────────────── */
function DropdownMenu({ user, onLogout, onClose }) {
  return (
    <div className="absolute right-0 top-full mt-2.5 w-60 bg-[#0C1120] border border-white/[0.08] rounded-2xl shadow-2xl shadow-black/60 overflow-hidden z-50">
      {/* User info */}
      <div className="px-4 py-4 border-b border-white/[0.06]">
        <div className="flex items-center gap-3">
          <Avatar name={user.name} size="w-9 h-9" />
          <div className="min-w-0">
            <p className="text-sm font-bold text-slate-100 font-['Syne',sans-serif] truncate">
              {user.name}
            </p>
            <p className="text-xs text-slate-500 font-mono truncate">
              {user.email}
            </p>
          </div>
        </div>
        <div className="mt-2.5">
          <RoleBadge role={user.role} />
        </div>
      </div>

      {/* Menu items */}
      <div className="py-1.5">
        {[
          { to: "/profile", label: "View Profile", emoji: "👤" },
          { to: "/settings", label: "Settings", emoji: "⚙️" },
          {
            to: "/u/" + (user.username || "me"),
            label: "Public Profile",
            emoji: "🔗",
          },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={onClose}
            className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-400 hover:text-slate-100 hover:bg-white/[0.04] transition-colors font-mono"
          >
            <span className="text-base w-5 text-center">{item.emoji}</span>
            {item.label}
          </Link>
        ))}
      </div>

      {/* Logout */}
      <div className="border-t border-white/6 py-1.5">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/[0.06] transition-colors font-mono"
        >
          <span className="text-base w-5 text-center">🚪</span>
          Sign out
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Notification bell
───────────────────────────────────────── */
function NotificationBell({ count = 0 }) {
  return (
    <button className="relative p-2 rounded-xl text-slate-500 hover:text-slate-300 hover:bg-white/[0.05] transition-colors">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
      {count > 0 && (
        <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full ring-2 ring-[#05080F]" />
      )}
    </button>
  );
}

/* ─────────────────────────────────────────
   Mobile drawer nav link
───────────────────────────────────────── */
function MobileNavLink({ to, label, icon, onClick }) {
  const location = useLocation();
  const active =
    location.pathname === to || location.pathname.startsWith(to + "/");
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-mono transition-colors
        ${
          active
            ? "bg-blue-600/10 text-blue-400 border border-blue-500/20"
            : "text-slate-400 hover:text-slate-100 hover:bg-white/[0.04]"
        }`}
    >
      {icon && <span className="text-base opacity-60">{icon}</span>}
      {label}
    </Link>
  );
}

/* ─────────────────────────────────────────
   Main Navbar
───────────────────────────────────────── */
export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  //   const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  /* Scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on route change */
  //   useEffect(() => {
  //     setMobileOpen(false);
  //     setDropdownOpen(false);
  //   }, [location.pathname]);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    setMobileOpen(false);
    navigate("/login");
  };

  const links = user
    ? NAV_LINKS[user.role] || NAV_LINKS.candidate
    : NAV_LINKS.public;

  return (
    <>
      {/* ══════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════ */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200
          ${
            scrolled
              ? "bg-[#05080F]/90 backdrop-blur-xl border-b border-white/[0.07] shadow-lg shadow-black/30"
              : "bg-[#05080F]/60 backdrop-blur-md border-b border-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* ── Logo ── */}
            <Link
              to="/"
              className="flex items-center gap-2.5 flex-shrink-0 group"
            >
              <LogoMark size={22} />
              <span className="text-lg font-extrabold tracking-tight text-slate-100 font-['Syne',sans-serif] group-hover:text-white transition-colors">
                Stack<span className="text-blue-500">mark</span>
              </span>
            </Link>

            {/* ── Desktop nav links ── */}
            <nav className="hidden md:flex items-center gap-1">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `relative px-3.5 py-2 text-sm font-mono rounded-xl transition-colors duration-150
                    ${
                      isActive
                        ? "text-slate-100 bg-white/[0.06]"
                        : "text-slate-500 hover:text-slate-200 hover:bg-white/[0.04]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* ── Right side ── */}
            <div className="flex items-center gap-2">
              {user ? (
                <>
                  {/* Notification bell */}
                  <div className="hidden sm:block">
                    <NotificationBell count={2} />
                  </div>

                  {/* User dropdown */}
                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDropdownOpen((o) => !o)}
                      className={`flex items-center gap-2.5 pl-1 pr-3 py-1 rounded-xl border transition-all duration-150
                        ${
                          dropdownOpen
                            ? "bg-white/[0.07] border-white/[0.12]"
                            : "border-transparent hover:bg-white/[0.05] hover:border-white/[0.07]"
                        }`}
                    >
                      <Avatar name={user.name} size="w-7 h-7" />
                      <div className="hidden sm:flex flex-col items-start">
                        <span className="text-xs font-bold text-slate-200 font-['Syne',sans-serif] leading-tight max-w-[100px] truncate">
                          {user.name?.split(" ")[0]}
                        </span>
                        <RoleBadge role={user.role} />
                      </div>
                      <svg
                        className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-150 ${dropdownOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </button>

                    {dropdownOpen && (
                      <DropdownMenu
                        user={user}
                        onLogout={handleLogout}
                        onClose={() => setDropdownOpen(false)}
                      />
                    )}
                  </div>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="hidden sm:inline-flex text-sm font-mono text-slate-400 hover:text-slate-100 px-4 py-2 rounded-xl border border-transparent hover:border-white/[0.08] hover:bg-white/[0.04] transition-all duration-150"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/register"
                    className="inline-flex items-center gap-1.5 text-sm font-mono font-medium text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 px-4 py-2 rounded-xl transition-colors duration-150 shadow-md shadow-blue-900/30"
                  >
                    Get started
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </>
              )}

              {/* Mobile menu toggle */}
              <button
                className="md:hidden ml-1 p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-white/[0.05] transition-colors"
                onClick={() => setMobileOpen((o) => !o)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M3 12h18M3 6h18M3 18h18" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════
          MOBILE DRAWER
      ══════════════════════════════════════ */}
      {/* Backdrop */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-200
          ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-30 w-72 bg-[#0A0E1C] border-l border-white/[0.07] flex flex-col md:hidden transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => setMobileOpen(false)}
          >
            <LogoMark size={18} />
            <span className="font-extrabold text-slate-100 font-['Syne',sans-serif]">
              Stack<span className="text-blue-500">mark</span>
            </span>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-300 hover:bg-white/[0.05] transition-colors"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* User info (if logged in) */}
        {user && (
          <div className="px-5 py-4 border-b border-white/6">
            <div className="flex items-center gap-3">
              <Avatar name={user.name} size="w-10 h-10" />
              <div className="min-w-0">
                <p className="text-sm font-bold text-slate-100 font-['Syne',sans-serif] truncate">
                  {user.name}
                </p>
                <p className="text-xs text-slate-500 font-mono truncate">
                  {user.email}
                </p>
                <div className="mt-1">
                  <RoleBadge role={user.role} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-1">
          <p className="text-[10px] font-mono tracking-widest text-slate-600 uppercase px-1 mb-1">
            Navigation
          </p>
          {links.map((link) => (
            <MobileNavLink
              key={link.to}
              {...link}
              onClick={() => setMobileOpen(false)}
            />
          ))}

          {user && (
            <>
              <div className="h-px bg-white/[0.06] my-3" />
              <p className="text-[10px] font-mono tracking-widest text-slate-600 uppercase px-1 mb-1">
                Account
              </p>
              <MobileNavLink
                to="/profile"
                label="View Profile"
                icon="👤"
                onClick={() => setMobileOpen(false)}
              />
              <MobileNavLink
                to="/settings"
                label="Settings"
                icon="⚙️"
                onClick={() => setMobileOpen(false)}
              />
              <MobileNavLink
                to={"/u/" + (user.username || "me")}
                label="Public Profile"
                icon="🔗"
                onClick={() => setMobileOpen(false)}
              />
            </>
          )}
        </nav>

        {/* Drawer footer */}
        <div className="px-3 py-4 border-t border-white/[0.06]">
          {user ? (
            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-red-500/20 bg-red-500/[0.06] text-red-400 hover:bg-red-500/[0.12] hover:text-red-300 text-sm font-mono transition-colors"
            >
              🚪 Sign out
            </button>
          ) : (
            <div className="flex flex-col gap-2">
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center py-3 rounded-xl border border-white/[0.08] text-slate-300 text-sm font-mono hover:bg-white/[0.04] transition-colors"
              >
                Log in
              </Link>
              <Link
                to="/register"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-mono font-medium transition-colors shadow-md shadow-blue-900/30"
              >
                Get started →
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Spacer so content doesn't hide under fixed navbar */}
      <div className="h-16" />
    </>
  );
}
