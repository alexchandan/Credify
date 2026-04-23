import {
  BadgeIcon,
  UsersIcon,
  ClockIcon,
  CodeIcon,
  ShieldIcon,
  CheckIcon,
} from "../assets/Icons";

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

export default function Features() {
  return (
    <div>
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
    </div>
  );
}
