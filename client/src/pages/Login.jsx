import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import { login } from "../services/authService";

/* ─── Stackmark Logo ─────────────────────────────────────────── */
function StackmarkLogo({ className = "" }) {
  return (
    <svg
      className={className}
      width="48"
      height="26"
      viewBox="0 0 55 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="11" width="32" height="9" rx="4.5" fill="#2563EB" />
      <rect x="0" y="0" width="23" height="9" rx="4.5" fill="#60A5FA" />
      <rect x="0" y="21" width="18" height="7" rx="3.5" fill="#BFDBFE" />
      <path
        d="M31 4.5L36 11.5L46 0.5"
        stroke="#2563EB"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Wordmark ───────────────────────────────────────────────── */
function Wordmark({ size = "text-xl" }) {
  return (
    <div className="flex items-center gap-2.5">
      <StackmarkLogo />
      <span
        className={`${size} font-extrabold tracking-tight text-slate-100 font-['Syne',sans-serif]`}
      >
        Stack<span className="text-blue-500">mark</span>
      </span>
    </div>
  );
}

/* ─── Role Tab ───────────────────────────────────────────────── */
function RoleTab({ role, label, icon, desc, active, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(role)}
      className={`flex-1 flex flex-col items-center gap-1 py-2.5 px-2 rounded-xl border transition-all duration-200 cursor-pointer
        ${
          active
            ? "border-blue-500/50 bg-blue-600/10 shadow-[0_0_0_3px_rgba(37,99,235,0.1)]"
            : "border-white/[0.06] bg-slate-900/50 hover:bg-slate-900/80 hover:border-white/10"
        }`}
    >
      <span className="text-xl">{icon}</span>
      <span
        className={`text-xs font-bold capitalize font-['Syne',sans-serif] transition-colors ${active ? "text-blue-400" : "text-slate-500"}`}
      >
        {label}
      </span>
      <span
        className={`text-[10px] font-mono transition-colors ${active ? "text-blue-300/70" : "text-slate-600"}`}
      >
        {desc}
      </span>
    </button>
  );
}

/* ─── Input Field ────────────────────────────────────────────── */
function InputField({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  icon,
  error,
  autoComplete,
}) {
  const [focused, setFocused] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const isPwd = type === "password";
  const inputType = isPwd ? (showPwd ? "text" : "password") : type;

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-medium tracking-widest text-slate-500 font-mono uppercase">
        {label}
      </label>

      <div className="relative">
        {/* Left icon */}
        <span
          className={`absolute left-3.5 top-1/2 -translate-y-1/2 text-sm pointer-events-none transition-opacity duration-200 ${focused ? "opacity-60" : "opacity-25"}`}
        >
          {icon}
        </span>

        <input
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full bg-slate-950/70 text-slate-100 text-sm font-mono rounded-xl px-10 py-3.5 outline-none transition-all duration-200 placeholder:text-slate-700
            border ${
              error
                ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                : "border-white/[0.07] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15"
            }
            focus:bg-slate-900/90`}
        />

        {/* Right: show/hide or check */}
        {isPwd ? (
          <button
            type="button"
            tabIndex={-1}
            onClick={() => setShowPwd((p) => !p)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-400 transition-colors text-sm"
          >
            {showPwd ? "🙈" : "👁️"}
          </button>
        ) : value ? (
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-green-400 text-xs">
            ✓
          </span>
        ) : null}
      </div>

      {error && (
        <p className="text-xs text-red-400 font-mono flex items-center gap-1.5">
          <span>⚠</span> {error}
        </p>
      )}
    </div>
  );
}

/* ─── Skill Badge (left panel) ───────────────────────────────── */
function SkillBadge({ icon, name, score, level, levelColor }) {
  return (
    <div className="flex items-center gap-2.5 bg-slate-900/80 border border-white/[0.07] rounded-xl px-3.5 py-2.5 backdrop-blur-sm">
      <span className="text-base">{icon}</span>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-bold text-slate-200 font-['Syne',sans-serif] truncate">
          {name}
        </p>
        <p className="text-[10px] text-slate-500 font-mono">{score}/100</p>
      </div>
      <span
        className="text-[10px] font-semibold font-mono px-2 py-0.5 rounded"
        style={{ color: levelColor, background: levelColor + "1a" }}
      >
        {level}
      </span>
    </div>
  );
}

/* ─── Divider ────────────────────────────────────────────────── */
function Divider({ text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      <span className="text-[10px] text-slate-700 font-mono whitespace-nowrap">
        {text}
      </span>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
    </div>
  );
}

/* ─── Login Page ─────────────────────────────────────────────── */
export default function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("candidate");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState("idle"); // idle | loading | success

  const roles = [
    { role: "candidate", label: "Candidate", icon: "🧑‍💻", desc: "Take tests" },
    { role: "recruiter", label: "Recruiter", icon: "🏢", desc: "Hire talent" },
    { role: "admin", label: "Admin", icon: "⚙️", desc: "Manage" },
  ];

  const skills = [
    {
      icon: "⚛️",
      name: "React.js",
      score: 92,
      level: "Expert",
      levelColor: "#34D399",
    },
    {
      icon: "🟦",
      name: "TypeScript",
      score: 78,
      level: "Advanced",
      levelColor: "#60A5FA",
    },
    {
      icon: "🟢",
      name: "Node.js",
      score: 88,
      level: "Expert",
      levelColor: "#34D399",
    },
    {
      icon: "🍃",
      name: "MongoDB",
      score: 64,
      level: "Mid-level",
      levelColor: "#FBBF24",
    },
  ];

  const validate = () => {
    const e = {};
    if (!email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = "Enter a valid email";
    if (!password) e.password = "Password is required";
    else if (password.length < 6) e.password = "Minimum 6 characters";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStep("loading");

    try {
      // const { token, user } = await login({ email, password, role });
      // localStorage.setItem("token", token);
      await new Promise((r) => setTimeout(r, 1500)); // remove when using real API
      setStep("success");
      setTimeout(() => navigate("/dashboard"), 1500);
    } catch (err) {
      setErrors({
        form: err.message || "Invalid credentials. Please try again.",
      });
      setStep("idle");
    }
  };

  /* ── Success state ── */
  if (step === "success") {
    return (
      <div className="min-h-screen bg-[#05080F] flex items-center justify-center px-4">
        <div className="flex flex-col items-center gap-5 text-center animate-[fadeUp_0.4s_ease_both]">
          <div className="w-16 h-16 rounded-full bg-blue-600/10 border border-blue-500/25 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M7 17L13 23L25 10"
                stroke="#2563EB"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-slate-100 tracking-tight font-['Syne',sans-serif] mb-1">
              Signed in!
            </h2>
            <p className="text-sm text-slate-500 font-mono">
              Redirecting to your {role} dashboard…
            </p>
          </div>
        </div>
      </div>
    );
  }

  /* ── Main Layout ── */
  return (
    <>
      {/* Google Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&display=swap');`}</style>

      <div className="min-h-screen bg-[#05080F] flex flex-col lg:flex-row font-mono">
        {/* ════════════════════════════════════
            LEFT PANEL — visible on lg+
        ════════════════════════════════════ */}
        <div className="hidden lg:flex flex-col justify-between flex-1 bg-[#060913] px-12 py-10 relative overflow-hidden">
          {/* Grid background */}
          <div
            className="absolute inset-0 opacity-[0.4] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage:
                "radial-gradient(ellipse 85% 85% at 50% 50%, black 5%, transparent 80%)",
            }}
          />

          {/* Glow */}
          <div
            className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle,rgba(37,99,235,0.09) 0%,transparent 70%)",
            }}
          />

          {/* Logo */}
          <div className="relative z-10">
            <Wordmark size="text-lg" />
          </div>

          {/* Skill badges */}
          <div className="relative z-10 flex flex-col gap-3 w-72">
            {skills.map((s) => (
              <SkillBadge key={s.name} {...s} />
            ))}
          </div>

          {/* Bottom copy */}
          <div className="relative z-10 max-w-sm">
            <h2 className="text-2xl font-extrabold text-slate-100 leading-snug tracking-tight mb-3 font-['Syne',sans-serif]">
              Prove your stack.
              <br />
              <span className="text-blue-500">Get hired faster.</span>
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed mb-5">
              24,000+ developers replaced résumé guesswork with verified skill
              scores.
            </p>

            {/* Social proof */}
            <div className="flex items-center gap-3">
              <div className="flex">
                {["#1D4ED8", "#7C3AED", "#0D9488", "#B45309"].map((c, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-[#060913] flex items-center justify-center text-xs"
                    style={{ background: c, marginLeft: i === 0 ? 0 : -8 }}
                  >
                    {["👨", "👩", "🧑", "👩"][i]}
                  </div>
                ))}
              </div>
              <span className="text-xs text-slate-500">
                <span className="text-slate-300">380+</span> companies hiring
                now
              </span>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════
            RIGHT PANEL — login form
        ════════════════════════════════════ */}
        <div className="flex-1 flex items-center justify-center px-5 py-10 sm:px-8 lg:px-12 bg-[#05080F]">
          <div className="w-full max-w-sm">
            {/* Mobile logo */}
            <div className="lg:hidden flex justify-center mb-8">
              <Wordmark size="text-xl" />
            </div>

            {/* Heading */}
            <div className="mb-7">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-50 font-['Syne',sans-serif] mb-2">
                Welcome back
              </h1>
              <p className="text-sm text-slate-500">
                Sign in to continue to your dashboard
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-5"
            >
              {/* Role selector */}
              <div>
                <p className="text-[10.5px] tracking-widest text-slate-600 mb-2.5 uppercase">
                  Sign in as
                </p>
                <div className="flex gap-2">
                  {roles.map((r) => (
                    <RoleTab
                      key={r.role}
                      {...r}
                      active={role === r.role}
                      onClick={setRole}
                    />
                  ))}
                </div>
              </div>

              <Divider text="account details" />

              {/* Form error */}
              {errors.form && (
                <div className="bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-mono rounded-xl px-4 py-3">
                  ⚠ {errors.form}
                </div>
              )}

              {/* Email */}
              <InputField
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((p) => ({ ...p, email: "" }));
                }}
                placeholder="you@company.com"
                icon="✉"
                error={errors.email}
                autoComplete="email"
              />

              {/* Password */}
              <InputField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors((p) => ({ ...p, password: "" }));
                }}
                placeholder="••••••••"
                icon="🔒"
                error={errors.password}
                autoComplete="current-password"
              />

              {/* Forgot */}
              <div className="flex justify-end -mt-2">
                <Link
                  to="/forgot-password"
                  className="text-xs text-blue-500 hover:text-blue-400 transition-colors font-mono"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={step === "loading"}
                className="w-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-mono text-sm font-medium tracking-wide py-3.5 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2.5 shadow-lg shadow-blue-900/20"
              >
                {step === "loading" ? (
                  <>
                    <svg
                      className="animate-spin w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="2.5"
                      />
                      <path
                        d="M12 3A9 9 0 0 1 21 12"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    Signing in…
                  </>
                ) : (
                  `Sign in as ${role[0].toUpperCase() + role.slice(1)} →`
                )}
              </button>

              <Divider text="or continue with" />

              {/* OAuth */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Google", icon: "🔵" },
                  { label: "GitHub", icon: "⚫" },
                ].map(({ label, icon }) => (
                  <button
                    key={label}
                    type="button"
                    className="flex items-center justify-center gap-2 py-3 rounded-xl border border-white/[0.07] bg-slate-950/60 text-slate-400 text-sm font-mono hover:bg-slate-900/80 hover:text-slate-200 hover:border-white/[0.12] transition-all duration-200"
                  >
                    {icon} {label}
                  </button>
                ))}
              </div>

              {/* Register */}
              <p className="text-center text-sm text-slate-500">
                No account?{" "}
                <Link
                  to="/register"
                  className="text-blue-500 hover:text-blue-400 transition-colors font-medium"
                >
                  Create one free →
                </Link>
              </p>
            </form>

            {/* Legal */}
            <p className="mt-7 text-center text-[10.5px] text-slate-700 leading-relaxed">
              By signing in you agree to our{" "}
              <Link
                to="/terms"
                className="underline hover:text-slate-500 transition-colors"
              >
                Terms
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy"
                className="underline hover:text-slate-500 transition-colors"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
