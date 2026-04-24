import { ClockIcon } from "../assets/Icons";

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

export default function Modules() {
  return (
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
  );
}
