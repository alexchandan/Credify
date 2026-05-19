import { useState } from "react";

/* ─── ICONS ───────────────────────────────────────────────── */
import {
  GoogleIcon,
  GitHubIcon,
  EyeIcon,
  AvatarIcon,
  Spinner,
} from "../assets/Icons";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import SharedNav from "../components/SharedNav";

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
    <div className="min-h-screen page-light-bg flex flex-col font-['DM Sans', sans-serif]">
      <style>{`

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

        

        /* Divider line */
        .divider-line { flex: 1; height: 1px; background: #e5e7eb; }

       


      `}</style>
      {/* ── TOP NAV ── */}
      <SharedNav />
      <div className="flex flex-col items-center justify-center px-6 py-16 lg:py-0 ">
        <div className="w-full max-w-105 p-4  mt-7 mb-7 rounded-3xl glass-bg">
          {/* Heading */}
          <div className="mb-8 fade-in delay-1">
            <h2 className=" flex justify-center font-bold text-gray-900 mt-2 mb-2 font-['Syne', sans-serif] text-[26px]">
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
            <span className="text-gray-700 text-xs font-medium tracking-widest whitespace-nowrap font-['syne', sans-serif] text-[10px]">
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
                    <Spinner />
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
      {/* </div> */}
      {/* ── FOOTER ── */}
      <Footer />
    </div>
  );
}
