import Navbar from "./Navbar";
import {
  CodeIcon,
  BadgeIcon,
  UsersIcon,
  ClockIcon,
  BellIcon,
  SettingsIcon,
  CheckIcon,
  ShieldIcon,
  MenuIcon,
  CloseIcon,
} from "../assets/Icons";
import Features from "./Features";
import Modules from "./Modules";

/* ─── DATA ───────────────────────────────────────────────── */
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
      <Navbar />

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
              Credify bridges the gap between high-stakes recruitment and
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
      <Features />

      {/* ── MODULES ── */}
      <Modules />

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
            <span className="logo text-base text-gray-900">Credify</span>
            <p className="text-gray-400 text-xs mt-1">
              © 2026 Credify@alexchandan
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
