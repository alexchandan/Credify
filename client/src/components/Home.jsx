import { useState, useEffect } from "react";

/* ─── DATA ───────────────────────────────────────────────── */
const NAV_LINKS = [
  "Home",
  "Assessments",
  "Performance",
  "Candidates",
  "Directory",
];

const STATS = [
  { value: "50,000+", label: "Verified Developers" },
  { value: "200+", label: "Partner Companies" },
  { value: "98%", label: "Accuracy Rate" },
  { value: "60%", label: "Faster Hiring" },
];

const TRUSTED_COMPANIES = [
  "TECHCORP",
  "DATASTREAM",
  "CLOUDCORE",
  "LOGICGATE",
  "SYNERGY",
  "TECHCORP",
  "DATASTREAM",
  "CLOUDCORE",
  "LOGICGATE",
  "SYNERGY",
];

const FEATURES = [
  {
    iconColor: "bg-blue-50 text-blue-600",
    icon: <CodeIcon />,
    title: "For Candidates: Verified Expertise",
    description:
      "Take industry-standard assessments in Frontend, Backend, and System Design. Earn digital badges that represent real-world coding ability.",
    bullets: [
      "Proctored coding environments",
      "Skill-specific performance analytics",
      "Immutable blockchain-backed badges",
    ],
    accent: "blue",
  },
  {
    iconColor: "bg-white/10 text-white",
    icon: <BadgeIcon />,
    title: "Immutable Badges",
    description:
      "Your accomplishments, verified and portable. Shared easily on LinkedIn and resumes.",
    dark: true,
    accent: "emerald",
  },
  {
    iconColor: "bg-violet-50 text-violet-600",
    icon: <UsersIcon />,
    title: "Talent Pool Discovery",
    description:
      "Recruiters access a curated directory of pre-vetted candidates, filtered by exact skill scores and performance metrics.",
    accent: "violet",
  },
  {
    iconColor: "bg-emerald-50 text-emerald-600",
    icon: <ClockIcon />,
    title: "Cut Hiring Time by 60%",
    description:
      "Eliminate early-stage technical rounds. Skip straight to final interviews with confidence in candidate quality.",
    accent: "emerald",
  },
];

const MODULES = [
  {
    tag: "FRONTEND DEVELOPMENT",
    title: "React & Design Systems",
    duration: "90 Minutes",
    level: "Advanced",
    levelColor: "text-orange-300 border-orange-400/30 bg-orange-400/10",
    accentColor: "#60a5fa",
    lines: [
      { w: "75%", color: "#60a5fa" },
      { w: "50%", color: "#94a3b8" },
      { w: "85%", color: "#34d399" },
      { w: "40%", color: "#94a3b8" },
      { w: "65%", color: "#60a5fa" },
    ],
  },
  {
    tag: "BACKEND ARCHITECTURE",
    title: "Distributed Systems & API Design",
    duration: "120 Minutes",
    level: "Expert",
    levelColor: "text-red-300 border-red-400/30 bg-red-400/10",
    accentColor: "#34d399",
    lines: [
      { w: "60%", color: "#34d399" },
      { w: "80%", color: "#94a3b8" },
      { w: "45%", color: "#60a5fa" },
      { w: "70%", color: "#34d399" },
      { w: "55%", color: "#94a3b8" },
    ],
  },
  {
    tag: "DATA ENGINEERING",
    title: "SQL Optimization & ETL Pipelines",
    duration: "75 Minutes",
    level: "Intermediate",
    levelColor: "text-blue-300 border-blue-400/30 bg-blue-400/10",
    accentColor: "#a78bfa",
    lines: [
      { w: "90%", color: "#a78bfa" },
      { w: "60%", color: "#94a3b8" },
      { w: "75%", color: "#a78bfa" },
      { w: "50%", color: "#34d399" },
      { w: "80%", color: "#94a3b8" },
    ],
  },
];

/* ─── ICONS ──────────────────────────────────────────────── */
function CodeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
function BadgeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M20 21a8 8 0 1 0-16 0" />
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function BellIcon() {
  return (
    <svg
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}
function SettingsIcon() {
  return (
    <svg
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.07 4.93A10 10 0 1 0 4.93 19.07" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#10b981"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ─── HERO CARD VISUAL ────────────────────────────────────── */
function HeroMockup() {
  const skills = [
    { name: "React", score: 94, color: "#60a5fa" },
    { name: "TypeScript", score: 87, color: "#34d399" },
    { name: "System Design", score: 79, color: "#a78bfa" },
    { name: "Node.js", score: 91, color: "#fb923c" },
  ];
  return (
    <div className="relative w-full max-w-sm">
      {/* floating badge top-left */}
      <div className="absolute -top-5 -left-4 z-20 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2 border border-gray-100 float-card">
        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#10b981"
            strokeWidth="2.5"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-bold text-gray-900 leading-none">
            Score Verified
          </p>
          <p className="text-xs text-gray-400 mt-0.5">Frontend Expert</p>
        </div>
      </div>

      {/* main card */}
      <div className="bg-gray-900 rounded-3xl p-6 shadow-2xl border border-white/10 relative overflow-hidden">
        {/* grid bg */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-white/50 text-xs mb-1">Assessment Report</p>
              <p className="text-white font-bold font-display text-sm">
                Alex Johnson
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
              AJ
            </div>
          </div>

          {/* Circular score */}
          <div className="flex justify-center mb-5">
            <div className="relative w-20 h-20">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="6"
                  fill="none"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="34"
                  stroke="#60a5fa"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 34 * 0.91} ${2 * Math.PI * 34}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-white font-bold text-lg leading-none">
                  91
                </span>
                <span className="text-white/40 text-xs">/ 100</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {skills.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-white/70 text-xs">{s.name}</span>
                  <span className="text-white/90 text-xs font-semibold">
                    {s.score}%
                  </span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${s.score}%`,
                      background: s.color,
                      transition: "width 1s ease",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
              <svg
                width="8"
                height="8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="text-white/60 text-xs">
              Blockchain verified · 2 hours ago
            </span>
          </div>
        </div>
      </div>

      {/* floating badge bottom-right */}
      <div className="absolute -bottom-4 -right-4 z-20 bg-gray-900 border border-white/10 rounded-2xl shadow-xl px-4 py-3 float-card-delay">
        <p className="text-white/40 text-xs mb-0.5">Global Rank</p>
        <p className="text-white font-bold text-lg leading-none">
          #142{" "}
          <span className="text-emerald-400 text-xs font-medium">↑ 38</span>
        </p>
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ─────────────────────────────────────── */
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Assessments");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');
        * { font-family: 'DM Sans', sans-serif; }
        .font-display { font-family: 'Syne', sans-serif; }

        /* Scrolled nav */
        .nav-shadow { box-shadow: 0 1px 30px rgba(0,0,0,0.07); }

        /* Hero gradient */
        .hero-bg {
          background: radial-gradient(ellipse 80% 60% at 60% 40%, #dbeafe 0%, #ede9fe 40%, #f0fdf4 70%, #f8fafc 100%);
        }

        /* Marquee */
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { animation: marquee 22s linear infinite; display: flex; width: max-content; }
        .marquee-track:hover { animation-play-state: paused; }

        /* Float cards */
        @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }
        .float-card { animation: floatA 4s ease-in-out infinite; }
        .float-card-delay { animation: floatB 4.5s ease-in-out 1s infinite; }

        /* Card hover */
        .card { transition: transform 0.28s cubic-bezier(.34,1.56,.64,1), box-shadow 0.28s ease; }
        .card:hover { transform: translateY(-5px); box-shadow: 0 20px 50px rgba(0,0,0,0.10); }

        /* Module card hover */
        .module-card { transition: transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease; }
        .module-card:hover { transform: translateY(-6px) scale(1.01); box-shadow: 0 24px 60px rgba(0,0,0,0.3); }

        /* Button */
        .btn { transition: all 0.2s ease; }
        .btn:hover { transform: translateY(-1px); }
        .btn:active { transform: translateY(0); }

        /* Nav link */
        .nav-link { position: relative; padding-bottom: 3px; }
        .nav-link::after { content:''; position:absolute; bottom:0; left:0; width:0; height:2px; background:#2563eb; border-radius:2px; transition: width 0.2s ease; }
        .nav-link.active::after, .nav-link:hover::after { width:100%; }

        /* Fade-in-up */
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        .fade-up { animation: fadeUp 0.6s ease forwards; }
        .fade-up-1 { animation-delay: 0.1s; opacity:0; }
        .fade-up-2 { animation-delay: 0.22s; opacity:0; }
        .fade-up-3 { animation-delay: 0.34s; opacity:0; }
        .fade-up-4 { animation-delay: 0.46s; opacity:0; }

        /* Badge glow */
        .badge-glow { box-shadow: 0 0 40px rgba(16,185,129,0.3), 0 0 80px rgba(16,185,129,0.1); }

        /* Mobile menu */
        @keyframes slideDown { from { opacity:0; transform:translateY(-12px); } to { opacity:1; transform:translateY(0); } }
        .mobile-menu { animation: slideDown 0.2s ease forwards; }

        /* Logo */
        .logo { font-family:'Syne',sans-serif; font-weight:800; letter-spacing:-0.03em; }

        /* Tag pill */
        .tag-pill { font-family:'Syne',sans-serif; font-weight:700; letter-spacing:0.1em; font-size:10px; }

        /* Stat card */
        .stat-card { transition: transform 0.2s ease; }
        .stat-card:hover { transform: translateY(-2px); }

        /* Scrollbar hide for marquee */
        .marquee-wrap { overflow: hidden; }
      `}</style>

      {/* ── NAVBAR ── */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md nav-shadow" : "bg-white/80 backdrop-blur-sm border-b border-gray-100/80"}`}
      >
        <div className="max-w-6xl mx-auto px-5 h-14.5 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="logo text-[17px] text-gray-900 select-none">
              Skill<span className="text-blue-600">Verify</span>
            </span>
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => setActiveNav(link)}
                  className={`nav-link text-sm font-medium px-3 py-1.5 rounded-lg transition-colors ${activeNav === link ? "active text-blue-600 bg-blue-50/60" : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"}`}
                >
                  {link}
                </button>
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
            <button className="btn ml-2 bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-xl hover:bg-gray-700 hidden md:block">
              Sign Out
            </button>
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
              <button
                key={link}
                onClick={() => {
                  setActiveNav(link);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left py-3 text-sm font-medium text-gray-600 border-b border-gray-50 last:border-0"
              >
                {link}
              </button>
            ))}
            <button className="btn mt-3 w-full bg-gray-900 text-white text-sm font-semibold py-2.5 rounded-xl">
              Sign Out
            </button>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="hero-bg pt-16 pb-20 px-5 md:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-8">
          {/* Left */}
          <div className="flex-1 max-w-lg">
            <div className="fade-up fade-up-1 inline-flex items-center gap-2 bg-white border border-blue-100 text-blue-600 tag-pill px-3 py-1.5 rounded-full mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              THE STANDARD FOR TECHNICAL VERIFICATION
            </div>
            <h1 className="font-display fade-up fade-up-2 text-[52px] leading-[1.08] font-extrabold text-gray-900 tracking-tight mb-2">
              Verify Your Skills.
            </h1>
            <h1 className="font-display fade-up fade-up-2 text-[52px] leading-[1.08] font-extrabold text-blue-600 tracking-tight mb-6">
              Land Your Dream Job.
            </h1>
            <p className="fade-up fade-up-3 text-gray-500 text-[15px] leading-relaxed mb-8 max-w-[400px]">
              SkillVerify bridges the gap between high-stakes recruitment and
              technical proficiency with data-driven assessments designed for
              accuracy.
            </p>
            <div className="fade-up fade-up-4 flex items-center gap-3 flex-wrap">
              <button className="btn bg-gray-900 text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-gray-700 shadow-md">
                Get Started Free
              </button>
              <button className="btn bg-white border border-gray-200 text-gray-700 font-semibold text-sm px-6 py-3 rounded-xl hover:border-gray-400 hover:shadow-sm">
                For Recruiters →
              </button>
            </div>
            {/* Mini trust indicators */}
            <div className="fade-up fade-up-4 flex items-center gap-4 mt-8">
              <div className="flex -space-x-2">
                {["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b"].map((c, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: c }}
                  >
                    {["A", "B", "C", "D"][i]}
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs">
                <span className="font-semibold text-gray-900">50,000+</span>{" "}
                developers verified worldwide
              </p>
            </div>
          </div>

          {/* Right — Mockup */}
          <div className="flex-1 flex justify-center md:justify-end fade-up fade-up-3">
            <HeroMockup />
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-gray-900 py-8 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="stat-card bg-gray-900 px-6 py-5 text-center cursor-default"
            >
              <p className="font-display text-2xl font-extrabold text-white mb-0.5">
                {s.value}
              </p>
              <p className="text-gray-500 text-xs font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUSTED BY ── */}
      <section className="py-12 bg-white border-b border-gray-100">
        <p className="text-center tag-pill text-gray-400 mb-7 tracking-widest">
          TRUSTED BY TOP TECH COMPANIES
        </p>
        <div className="marquee-wrap">
          <div className="marquee-track">
            {TRUSTED_COMPANIES.map((c, i) => (
              <span
                key={i}
                className="px-10 text-sm font-bold tracking-widest text-gray-300 hover:text-gray-600 transition-colors cursor-default select-none"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-24 px-5 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="tag-pill text-blue-500 mb-3">PLATFORM FEATURES</p>
            <h2 className="font-display text-[34px] font-extrabold text-gray-900 tracking-tight leading-tight max-w-sm">
              Precision-Engineered for Modern Teams
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-md leading-relaxed">
              A unified platform for candidates to showcase true competence and
              for recruiters to build high-performing engineering organizations.
            </p>
          </div>

          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {/* Candidate card */}
            <div className="card bg-white border border-gray-100 rounded-3xl p-8 shadow-sm relative overflow-hidden group">
              {/* Decorative corner element */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-50 rounded-full opacity-60 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 shadow-sm">
                  <CodeIcon />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  {FEATURES[0].title}
                </h3>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                  {FEATURES[0].description}
                </p>
                <ul className="space-y-2.5">
                  {FEATURES[0].bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2.5 text-sm text-gray-700"
                    >
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                        <CheckIcon />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Fake code editor decoration */}
              <div className="absolute right-4 bottom-4 bg-gray-900 rounded-xl p-3 w-28 opacity-40 group-hover:opacity-70 transition-opacity">
                <div className="flex gap-1 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                </div>
                <div className="space-y-1">
                  <div className="h-1 bg-blue-400 rounded w-3/4" />
                  <div className="h-1 bg-gray-600 rounded w-1/2" />
                  <div className="h-1 bg-emerald-400 rounded w-2/3" />
                  <div className="h-1 bg-gray-600 rounded w-1/3" />
                  <div className="h-1 bg-violet-400 rounded w-1/2" />
                </div>
              </div>
            </div>

            {/* Dark badge card */}
            <div className="card bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden group">
              {/* Animated orbs */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-colors duration-700" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-700" />

              <div className="relative z-10 h-full flex flex-col">
                <div className="w-11 h-11 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-5">
                  <BadgeIcon />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">
                  {FEATURES[1].title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {FEATURES[1].description}
                </p>

                {/* Badge display */}
                <div className="flex justify-center mt-auto">
                  <div className="badge-glow w-20 h-20 bg-emerald-500/15 border border-emerald-400/30 rounded-3xl flex items-center justify-center">
                    <ShieldIcon />
                  </div>
                </div>
                <p className="text-center text-xs text-emerald-400 mt-3 font-medium">
                  Blockchain-backed · Tamper-proof
                </p>
              </div>

              {/* Dot grid */}
              <div className="absolute top-5 right-5 grid grid-cols-4 gap-1.5 opacity-15">
                {Array(16)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white rounded-full" />
                  ))}
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card bg-white border border-gray-100 rounded-3xl p-8 shadow-sm relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-6 w-28 h-28 bg-violet-50 rounded-full opacity-60 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center mb-5 shadow-sm">
                  <UsersIcon />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  {FEATURES[2].title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {FEATURES[2].description}
                </p>
                {/* Mini candidate list */}
                <div className="mt-5 space-y-2">
                  {[
                    ["Sara K.", "React · Node.js", "98"],
                    ["James T.", "Python · ML", "94"],
                    ["Mia R.", "Golang · Infra", "91"],
                  ].map(([name, stack, score]) => (
                    <div
                      key={name}
                      className="flex items-center gap-3 bg-gray-50 rounded-xl px-3 py-2"
                    >
                      <div className="w-7 h-7 rounded-full bg-violet-200 flex items-center justify-center text-violet-700 text-xs font-bold">
                        {name[0]}
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-gray-800 leading-none">
                          {name}
                        </p>
                        <p className="text-gray-400 text-xs mt-0.5">{stack}</p>
                      </div>
                      <span className="text-xs font-bold text-emerald-600">
                        {score}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card bg-white border border-gray-100 rounded-3xl p-8 shadow-sm relative overflow-hidden group">
              <div className="absolute -left-6 -bottom-6 w-28 h-28 bg-emerald-50 rounded-full opacity-60 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 shadow-sm">
                  <ClockIcon />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  {FEATURES[3].title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {FEATURES[3].description}
                </p>
                {/* Hiring funnel mini chart */}
                <div className="mt-5 space-y-2.5">
                  {[
                    ["Applications", "100%", "bg-gray-200"],
                    ["Technical Screen", "40%", "bg-blue-300"],
                    ["Final Interview", "15%", "bg-emerald-400"],
                  ].map(([label, pct, color]) => (
                    <div key={label}>
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>{label}</span>
                        <span className="font-semibold text-gray-700">
                          {pct}
                        </span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${color}`}
                          style={{ width: pct }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-emerald-600 font-semibold mt-4">
                  ↓ Skip straight to final interviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODULES ── */}
      <section
        className="py-24 px-5 md:px-6"
        style={{
          background: "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="tag-pill text-blue-500 mb-3">ASSESSMENT CATALOG</p>
            <h2 className="font-display text-[34px] font-extrabold text-gray-900 tracking-tight mb-3">
              Curated Technical Modules
            </h2>
            <p className="text-gray-500 text-sm max-w-xs mx-auto leading-relaxed">
              Assessment tracks developed by industry veterans.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {MODULES.map((mod) => (
              <div
                key={mod.title}
                className="module-card bg-gray-900 rounded-3xl overflow-hidden cursor-pointer group border border-white/5"
              >
                {/* Code visual header */}
                <div className="relative h-44 bg-gray-950 border-b border-white/5 overflow-hidden p-5">
                  {/* Background glow */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `radial-gradient(circle at 70% 50%, ${mod.accentColor}40, transparent 70%)`,
                    }}
                  />
                  {/* Terminal dots */}
                  <div className="flex gap-1.5 mb-4">
                    <div className="w-2 h-2 rounded-full bg-red-400/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                    <div className="w-2 h-2 rounded-full bg-green-400/60" />
                  </div>
                  {/* Animated code lines */}
                  <div className="space-y-2.5">
                    {mod.lines.map((line, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-gray-600 text-xs w-4 text-right">
                          {i + 1}
                        </span>
                        <div
                          className="flex-1 h-2 rounded-full opacity-70 group-hover:opacity-100 transition-opacity"
                          style={{
                            width: line.w,
                            background: line.color,
                            maxWidth: line.w,
                            transition: `opacity 0.3s ease ${i * 0.05}s`,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <span
                    className="tag-pill block mb-2"
                    style={{ color: mod.accentColor }}
                  >
                    {mod.tag}
                  </span>
                  <h3 className="font-display font-bold text-white text-[15px] mb-5 leading-snug">
                    {mod.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs flex items-center gap-1.5">
                      <ClockIcon />
                      {mod.duration}
                    </span>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${mod.levelColor}`}
                    >
                      {mod.level}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Browse all link */}
          <div className="text-center mt-10">
            <button className="btn text-gray-500 text-sm font-medium hover:text-gray-900 border border-gray-200 px-5 py-2.5 rounded-xl hover:border-gray-400 bg-white">
              Browse all modules →
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-5 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gray-900 rounded-[32px] px-8 py-16 text-center text-white overflow-hidden">
            {/* Layered background effects */}
            <div className="absolute inset-0 overflow-hidden rounded-[32px]">
              <div className="absolute -top-20 left-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 right-1/4 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
            </div>
            {/* Subtle grid */}
            <div
              className="absolute inset-0 opacity-[0.04] rounded-[32px]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative z-10">
              <span className="tag-pill text-emerald-400 mb-4 block">
                JOIN 50,000+ DEVELOPERS
              </span>
              <h2 className="font-display text-[38px] md:text-[44px] font-extrabold tracking-tight leading-tight mb-4 max-w-lg mx-auto">
                Ready to verify your potential?
              </h2>
              <p className="text-gray-400 text-sm mb-10 max-w-xs mx-auto leading-relaxed">
                Prove your worth to global companies with verifiable,
                blockchain-backed credentials.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button className="btn bg-white text-gray-900 font-semibold text-sm px-7 py-3.5 rounded-xl hover:bg-gray-50 shadow-lg">
                  Create Candidate Profile
                </button>
                <button className="btn bg-white/10 border border-white/20 text-white font-semibold text-sm px-7 py-3.5 rounded-xl hover:bg-white/15 backdrop-blur-sm">
                  Request Demo for Teams
                </button>
              </div>
              {/* Social proof row */}
              <div className="flex items-center justify-center gap-6 mt-10 opacity-60">
                {[
                  "No credit card",
                  "Free forever plan",
                  "Setup in 2 minutes",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-xs text-gray-400 flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-emerald-400" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <span className="logo text-base text-gray-900">
              Skill<span className="text-blue-600">Verify</span>
            </span>
            <p className="text-gray-400 text-xs mt-1">
              © 2024 SkillVerify Inc. Corporate Modernism Standards.
            </p>
          </div>
          <div className="flex items-center gap-6 flex-wrap">
            {["Privacy Policy", "Terms of Service", "Security", "Status"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-gray-700 text-xs transition-colors"
                >
                  {link}
                </a>
              ),
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
