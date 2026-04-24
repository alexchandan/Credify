import { useState } from "react";

/* ─── ICONS ───────────────────────────────────────────────── */
import { GoogleIcon, GitHubIcon, EyeIcon, AvatarIcon } from "../assets/Icons";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

/* ─── HERO LEFT PANEL ─────────────────────────────────────── */
function HeroPanel() {
  const avatars = ["#4B5563", "#374151", "#6B7280"];
  return (
    <div className="relative w-full h-full min-h-screen overflow-hidden flex flex-col">
      {/* Dark photo-like background */}
      <div className="absolute inset-0 bg-gray-950">
        {/* Layered gradients to simulate a moody office photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0f172a 0%, #1e293b 35%, #0f172a 70%, #020617 100%)",
          }}
        />
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Atmospheric radial light (simulates monitor glow) */}
        <div
          className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #38bdf8 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #818cf8 0%, transparent 65%)",
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)",
          }}
        />
        {/* Abstract person silhouette */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <svg
            viewBox="0 0 400 500"
            className="w-full h-full max-w-md"
            fill="none"
          >
            {/* Monitor */}
            <rect
              x="120"
              y="180"
              width="200"
              height="140"
              rx="8"
              fill="rgba(255,255,255,0.6)"
            />
            <rect
              x="130"
              y="190"
              width="180"
              height="120"
              rx="4"
              fill="rgba(100,150,255,0.3)"
            />
            {/* Screen content lines */}
            <rect
              x="145"
              y="205"
              width="80"
              height="6"
              rx="3"
              fill="rgba(255,255,255,0.5)"
            />
            <rect
              x="145"
              y="218"
              width="120"
              height="4"
              rx="2"
              fill="rgba(255,255,255,0.3)"
            />
            <rect
              x="145"
              y="229"
              width="100"
              height="4"
              rx="2"
              fill="rgba(255,255,255,0.3)"
            />
            <rect
              x="145"
              y="240"
              width="60"
              height="4"
              rx="2"
              fill="rgba(100,220,150,0.5)"
            />
            {/* Stand */}
            <rect
              x="183"
              y="320"
              width="14"
              height="40"
              rx="4"
              fill="rgba(255,255,255,0.4)"
            />
            <rect
              x="165"
              y="355"
              width="50"
              height="8"
              rx="4"
              fill="rgba(255,255,255,0.4)"
            />
            {/* Person silhouette */}
            <ellipse
              cx="200"
              cy="120"
              rx="40"
              ry="45"
              fill="rgba(255,255,255,0.2)"
            />
            <path
              d="M120 280 Q155 200 200 190 Q245 200 280 280 L290 420 L110 420 Z"
              fill="rgba(255,255,255,0.15)"
            />
          </svg>
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col h-full p-10 justify-end">
        {/* Badge pill */}
        <div className="mb-6">
          <span
            className="inline-flex items-center gap-2 border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-widest px-3 py-1.5 rounded-sm"
            style={{ fontFamily: "'Syne', sans-serif", fontSize: "10px" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            SKILLVERIFY ENGINE
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-white font-slogan font-extrabold leading-[1.08] mb-4 tracking-tight"
          style={{
            fontSize: "clamp(28px, 3.5vw, 42px)",
          }}
        >
          The gold standard for
          <br />
          technical excellence.
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-xs">
          Join 5,000+ industry-leading firms evaluating skills with precision,
          fairness, and speed.
        </p>

        {/* Avatar trust row */}
        <div className="flex items-center gap-3">
          <div className="flex -space-x-3">
            {avatars.map((bg, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full border-2 border-gray-800 overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: bg }}
              >
                <AvatarIcon />
              </div>
            ))}
          </div>
          <span className="text-gray-400 text-xs">
            Trusted by world-class teams
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── MAIN COMPONENT ─────────────────────────────────────── */
export default function TalentScaleLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passFocused, setPassFocused] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1800);
  };

  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');

        /* Input focus ring */
        .input-field { transition: border-color 0.18s ease, box-shadow 0.18s ease; outline: none; }
        .input-field:focus { border-color: #111827; box-shadow: 0 0 0 3px rgba(17,24,39,0.08); }
        .input-field.focused { border-color: #111827; box-shadow: 0 0 0 3px rgba(17,24,39,0.08); }

        /* Social button */
        .social-btn { transition: all 0.18s ease; }
        .social-btn:hover { background: #f9fafb; border-color: #9ca3af; transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,0.06); }
        .social-btn:active { transform: translateY(0); }

        /* Submit button */
        .submit-btn { transition: all 0.2s ease; }
        .submit-btn:hover:not(:disabled) { background: #1f2937; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(0,0,0,0.25); }
        .submit-btn:active:not(:disabled) { transform: translateY(0); }

        /* Fade in up */
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in { animation: fadeInUp 0.5s ease forwards; }
        .delay-1 { animation-delay: 0.05s; opacity: 0; }
        .delay-2 { animation-delay: 0.12s; opacity: 0; }
        .delay-3 { animation-delay: 0.19s; opacity: 0; }
        .delay-4 { animation-delay: 0.26s; opacity: 0; }
        .delay-5 { animation-delay: 0.33s; opacity: 0; }
        .delay-6 { animation-delay: 0.40s; opacity: 0; }

        /* Loading spinner */
        @keyframes spin { to { transform: rotate(360deg); } }
        .spinner { animation: spin 0.8s linear infinite; }

        /* Divider line */
        .divider-line { flex: 1; height: 1px; background: #e5e7eb; }

        /* Eye button */
        .eye-btn { transition: color 0.15s ease; }
        .eye-btn:hover { color: #374151; }

        /* Hero fade-in */
        @keyframes heroFade { from { opacity: 0; } to { opacity: 1; } }
        .hero-fade { animation: heroFade 0.8s ease forwards; }

        /* Floating badge on hero */
        @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        .float-badge { animation: floatY 4s ease-in-out infinite; }
      `}</style>

      {/* ── TOP NAV ── */}
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-15">
        <span
          className="text-white font-extrabold text-sm tracking-widest select-none"
          style={{
            fontFamily: "'Syne', sans-serif",
            letterSpacing: "0.12em",
          }}
        >
          Credify
        </span>
        <a
          href="#"
          className="text-gray-400 text-sm font-medium hover:text-black transition-colors"
        >
          Support
        </a>
      </header>

      {/* ── MAIN LAYOUT ── */}
      <div className="flex flex-1">
        {/* LEFT — Hero Panel */}
        <div className="hidden lg:block lg:w-[50%] relative hero-fade">
          <HeroPanel />
          {/* Floating metric badge */}
          <div className="float-badge absolute top-1/4 right-8 z-20 bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-3 shadow-2xl">
            <p className="text-gray-400 text-xs mb-0.5">Assessments today</p>
            <p
              className="text-white font-bold text-xl"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              1,247{" "}
              <span className="text-emerald-400 text-xs font-medium">
                ↑ 12%
              </span>
            </p>
          </div>
        </div>

        {/* RIGHT — Login Form */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 lg:py-0 bg-white">
          <div className="w-full max-w-105">
            {/* Heading */}
            <div className="mb-8 fade-in delay-1">
              <h2
                className="font-bold text-gray-900 mb-2"
                style={{ fontFamily: "'Syne', sans-serif", fontSize: "26px" }}
              >
                Access your account
              </h2>
              <p className="text-gray-500 text-sm">
                New to Credify?{" "}
                <NavLink
                  to={"/pre-sign-up"}
                  className="text-gray-900 font-semibold underline underline-offset-2 hover:text-gray-600 transition-colors"
                >
                  Create an account
                </NavLink>
              </p>
            </div>

            {/* Social buttons */}
            <div className="grid grid-cols-2 gap-3 mb-6 fade-in delay-2">
              <button className="social-btn flex items-center justify-center gap-2.5 border border-gray-200 bg-white text-gray-700 text-sm font-medium py-3 px-4 rounded-xl">
                <GoogleIcon />
                Google
              </button>
              <button className="social-btn flex items-center justify-center gap-2.5 border border-gray-200 bg-white text-gray-700 text-sm font-medium py-3 px-4 rounded-xl">
                <GitHubIcon />
                GitHub
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6 fade-in delay-3">
              <div className="divider-line" />
              <span
                className="text-gray-400 text-xs font-medium tracking-widest whitespace-nowrap"
                style={{ fontFamily: "'Syne', sans-serif", fontSize: "10px" }}
              >
                OR CONTINUE WITH EMAIL
              </span>
              <div className="divider-line" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div className="fade-in delay-4">
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                  className={`input-field w-full px-4 py-3.5 rounded-xl border text-sm text-gray-900 placeholder-gray-400 bg-white ${emailFocused ? "focused" : "border-gray-200"}`}
                  required
                />
              </div>

              {/* Password */}
              <div className="fade-in delay-5">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-semibold text-gray-800">
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setPassFocused(true)}
                    onBlur={() => setPassFocused(false)}
                    className={`input-field w-full px-4 py-3.5 pr-12 rounded-xl border text-sm text-gray-900 placeholder-gray-400 bg-white ${passFocused ? "focused" : "border-gray-200"}`}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="eye-btn absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    <EyeIcon open={showPassword} />
                  </button>
                </div>
              </div>

              {/* Submit */}
              <div className="fade-in delay-6 pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="submit-btn w-full bg-gray-900 text-white font-semibold text-sm py-4 rounded-xl disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg
                        className="spinner w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="3"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Signing in…
                    </>
                  ) : (
                    "Sign In to Credify"
                  )}
                </button>
              </div>
            </form>

            {/* Legal */}
            <p className="text-center text-gray-400 text-xs mt-8 leading-relaxed fade-in delay-6">
              By signing in, you agree to our{" "}
              <a
                href="#"
                className="text-gray-600 underline underline-offset-2 hover:text-gray-900 transition-colors"
              >
                Terms
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-gray-600 underline underline-offset-2 hover:text-gray-900 transition-colors"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <Footer />
    </div>
  );
}
