import { useState } from "react";

/* ════════════════════════════════════════════════════════════
   ICONS
════════════════════════════════════════════════════════════ */
const Icon = {
  Globe: () => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  Pin: () => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#aab"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Briefcase: () => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#aab"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  ),
  Code: () => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#aab"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Mail: () => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#aab"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  Link: () => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#aab"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  ),
  Shield: () => (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  CheckBadge: () => (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  Arrow: () => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  Plus: () => (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  X: () => (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  Check: () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Confetti: () => (
    <svg width="52" height="52" viewBox="0 0 64 64" fill="none">
      <circle
        cx="32"
        cy="32"
        r="28"
        fill="#f0fdf4"
        stroke="#bbf7d0"
        strokeWidth="2"
      />
      <polyline
        points="20 34 28 42 44 26"
        stroke="#16a34a"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  User: () => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#aab"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  Clock: () => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#aab"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
};

/* ════════════════════════════════════════════════════════════
   SHARED UI PRIMITIVES
════════════════════════════════════════════════════════════ */
function InputField({
  label,
  icon,
  placeholder,
  value,
  onChange,
  type = "text",
}) {
  const [f, setF] = useState(false);
  return (
    <div style={{ marginBottom: 18 }}>
      {label && <label style={S.label}>{label}</label>}
      <div style={{ position: "relative" }}>
        {icon && <span style={S.iconWrap}>{icon}</span>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setF(true)}
          onBlur={() => setF(false)}
          style={{
            ...S.input,
            paddingLeft: icon ? 38 : 14,
            borderColor: f ? "#111827" : "#e2e4e9",
            boxShadow: f ? "0 0 0 3px rgba(17,24,39,0.07)" : "none",
          }}
        />
      </div>
    </div>
  );
}

function SelectField({ label, icon, options, value, onChange }) {
  const [f, setF] = useState(false);
  return (
    <div style={{ marginBottom: 18 }}>
      {label && <label style={S.label}>{label}</label>}
      <div style={{ position: "relative" }}>
        {icon && <span style={S.iconWrap}>{icon}</span>}
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setF(true)}
          onBlur={() => setF(false)}
          style={{
            ...S.input,
            paddingLeft: icon ? 38 : 14,
            paddingRight: 36,
            appearance: "none",
            cursor: "pointer",
            color: value ? "#111827" : "#9ca3af",
            borderColor: f ? "#111827" : "#e2e4e9",
            boxShadow: f ? "0 0 0 3px rgba(17,24,39,0.07)" : "none",
          }}
        >
          {options.map((o) => (
            <option
              key={o.value}
              value={o.value}
              disabled={o.disabled}
              style={{ color: "#111827" }}
            >
              {o.label}
            </option>
          ))}
        </select>
        <span
          style={{
            position: "absolute",
            right: 12,
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
          }}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="2.2"
            strokeLinecap="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </div>
    </div>
  );
}

function BtnPrimary({ children, onClick, disabled, green }) {
  const [h, setH] = useState(false);
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        ...S.btnPrimary,
        background: green ? "#16a34a" : h && !disabled ? "#1f2937" : "#111827",
        transform: h && !disabled ? "translateY(-1px)" : "none",
        boxShadow:
          h && !disabled
            ? "0 8px 22px rgba(0,0,0,0.22)"
            : "0 3px 12px rgba(0,0,0,0.15)",
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {children}
    </button>
  );
}

function BtnSecondary({ children, onClick }) {
  const [h, setH] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        ...S.btnSecondary,
        background: h ? "#f5f6f8" : "#fff",
        borderColor: h ? "#9ca3af" : "#d1d5db",
      }}
    >
      {children}
    </button>
  );
}

function InfoCard({ icon, title, desc, iconBg, iconColor }) {
  return (
    <div
      style={{
        flex: 1,
        minWidth: 200,
        background: "#fff",
        border: "1px solid #e9eaec",
        borderRadius: 14,
        padding: "18px 20px",
        display: "flex",
        gap: 14,
      }}
    >
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: 10,
          background: iconBg,
          color: iconColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <p
          style={{
            fontSize: 13.5,
            fontWeight: 700,
            color: "#111827",
            marginBottom: 4,
          }}
        >
          {title}
        </p>
        <p style={{ fontSize: 12.5, color: "#6b7280", lineHeight: 1.55 }}>
          {desc}
        </p>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   STEP INDICATOR
════════════════════════════════════════════════════════════ */
function StepBar({ current }) {
  const steps = [
    { n: 1, label: "Personal" },
    { n: 2, label: "Experience" },
    { n: 3, label: "Skills" },
  ];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        maxWidth: 580,
        margin: "0 auto 36px",
      }}
    >
      {steps.map((s, i) => {
        const done = current > s.n,
          active = current === s.n;
        return (
          <div
            key={s.n}
            style={{
              display: "flex",
              alignItems: "flex-start",
              flex: i < steps.length - 1 ? 1 : "0 0 auto",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  fontWeight: 700,
                  background: active || done ? "#111827" : "#fff",
                  color: active || done ? "#fff" : "#9ca3af",
                  border: active || done ? "none" : "1.5px solid #d1d5db",
                  boxShadow: active ? "0 4px 14px rgba(0,0,0,0.2)" : "none",
                  transition: "all .3s",
                }}
              >
                {done ? <Icon.Check /> : s.n}
              </div>
              <span
                style={{
                  fontSize: 11.5,
                  fontWeight: active ? 600 : 400,
                  color: active ? "#111827" : done ? "#374151" : "#9ca3af",
                  transition: "color .3s",
                }}
              >
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                style={{
                  flex: 1,
                  height: 1.5,
                  marginTop: 20,
                  marginLeft: 6,
                  marginRight: 6,
                  background: done ? "#111827" : "#e5e7eb",
                  transition: "background .4s",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   STEP 1 — PERSONAL DETAILS
════════════════════════════════════════════════════════════ */
function Step1({ d, set, onNext }) {
  return (
    <>
      <div style={S.formHeader}>
        <h2 style={S.h2}>Personal Details</h2>
        <p style={S.sub}>
          Precision starts with identity. Tell us about your professional
          background to personalize your assessment journey.
        </p>
      </div>
      <InputField
        label="Full Name"
        placeholder="e.g. Alexander Pierce"
        value={d.name}
        onChange={(v) => set("name", v)}
        icon={<Icon.User />}
      />
      <InputField
        label="Professional Title"
        placeholder="e.g. Senior Software Engineer"
        value={d.title}
        onChange={(v) => set("title", v)}
        icon={<Icon.Code />}
      />
      <InputField
        label="Location"
        placeholder="City, Country"
        value={d.location}
        onChange={(v) => set("location", v)}
        icon={<Icon.Pin />}
      />
      <InputField
        label="Email Address"
        type="email"
        placeholder="name@company.com"
        value={d.email}
        onChange={(v) => set("email", v)}
        icon={<Icon.Mail />}
      />
      <div style={S.btnRow}>
        <BtnSecondary onClick={onNext}>Skip for now</BtnSecondary>
        <BtnPrimary onClick={onNext}>
          <span>Next: Experience</span>
          <Icon.Arrow />
        </BtnPrimary>
      </div>
    </>
  );
}

/* ════════════════════════════════════════════════════════════
   STEP 2 — EXPERIENCE
════════════════════════════════════════════════════════════ */
function Step2({ d, set, onNext, onBack }) {
  const levels = [
    { value: "", label: "Select experience level", disabled: true },
    { value: "junior", label: "Junior (0–2 yrs)" },
    { value: "mid", label: "Mid-level (2–5 yrs)" },
    { value: "senior", label: "Senior (5–8 yrs)" },
    { value: "staff", label: "Staff / Principal (8+ yrs)" },
    { value: "lead", label: "Engineering Lead / Manager" },
  ];
  const domains = [
    { value: "", label: "Select primary domain", disabled: true },
    { value: "frontend", label: "Frontend Development" },
    { value: "backend", label: "Backend Development" },
    { value: "fullstack", label: "Full-Stack Development" },
    { value: "devops", label: "DevOps / Infrastructure" },
    { value: "data", label: "Data Engineering" },
    { value: "ml", label: "Machine Learning / AI" },
    { value: "mobile", label: "Mobile Development" },
    { value: "security", label: "Security Engineering" },
  ];
  const avails = [
    { value: "", label: "Select availability", disabled: true },
    { value: "immediate", label: "Immediately available" },
    { value: "2w", label: "2-week notice" },
    { value: "1m", label: "1-month notice" },
    { value: "3m", label: "3-month notice" },
    { value: "passive", label: "Passively exploring" },
  ];
  const sizes = [
    { value: "", label: "Preferred company size", disabled: true },
    { value: "startup", label: "Startup (1–50)" },
    { value: "scaleup", label: "Scale-up (50–500)" },
    { value: "mid", label: "Mid-size (500–5,000)" },
    { value: "enterprise", label: "Enterprise (5,000+)" },
    { value: "any", label: "No preference" },
  ];
  return (
    <>
      <div style={S.formHeader}>
        <h2 style={S.h2}>Work Experience</h2>
        <p style={S.sub}>
          Help us tailor assessments to the right seniority level and
          engineering domain for your profile.
        </p>
      </div>
      <InputField
        label="Current / Last Company"
        placeholder="e.g. Stripe, Google, Startup"
        value={d.company}
        onChange={(v) => set("company", v)}
        icon={<Icon.Briefcase />}
      />
      <InputField
        label="LinkedIn / Portfolio URL"
        placeholder="https://linkedin.com/in/yourname"
        value={d.url}
        onChange={(v) => set("url", v)}
        icon={<Icon.Link />}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0 16px",
        }}
      >
        <SelectField
          label="Experience Level"
          options={levels}
          value={d.level}
          onChange={(v) => set("level", v)}
        />
        <SelectField
          label="Primary Domain"
          options={domains}
          value={d.domain}
          onChange={(v) => set("domain", v)}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0 16px",
        }}
      >
        <SelectField
          label="Availability"
          options={avails}
          value={d.avail}
          onChange={(v) => set("avail", v)}
          icon={<Icon.Clock />}
        />
        <SelectField
          label="Company Size Pref."
          options={sizes}
          value={d.size}
          onChange={(v) => set("size", v)}
        />
      </div>
      <div style={S.btnRow}>
        <BtnSecondary onClick={onBack}>← Back</BtnSecondary>
        <BtnPrimary onClick={onNext}>
          <span>Next: Skills</span>
          <Icon.Arrow />
        </BtnPrimary>
      </div>
    </>
  );
}

/* ════════════════════════════════════════════════════════════
   STEP 3 — SKILLS
════════════════════════════════════════════════════════════ */
const QUICK_SKILLS = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "Go",
  "Rust",
  "AWS",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "GraphQL",
  "System Design",
  "Next.js",
  "Redis",
  "MongoDB",
];

function Step3({ d, set, onNext, onBack }) {
  const [inp, setInp] = useState("");
  const [f, setF] = useState(false);

  const add = (s) => {
    const t = s.trim();
    if (t && !d.skills.includes(t)) set("skills", [...d.skills, t]);
    setInp("");
  };
  const rm = (s) =>
    set(
      "skills",
      d.skills.filter((x) => x !== s),
    );

  return (
    <>
      <div style={S.formHeader}>
        <h2 style={S.h2}>Technical Skills</h2>
        <p style={S.sub}>
          Add your core technologies so we can match you to the right assessment
          modules and opportunities.
        </p>
      </div>

      {/* Quick add */}
      <div style={{ marginBottom: 22 }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: "#9ca3af",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          Quick add
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {QUICK_SKILLS.filter((s) => !d.skills.includes(s)).map((s) => (
            <QuickChip key={s} label={s} onClick={() => add(s)} />
          ))}
        </div>
      </div>

      {/* Custom input */}
      <div style={{ marginBottom: 20 }}>
        <label style={S.label}>Or type a skill</label>
        <div style={{ display: "flex", gap: 8 }}>
          <input
            placeholder="e.g. Kafka, Swift, Terraform…"
            value={inp}
            onChange={(e) => setInp(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === ",") {
                e.preventDefault();
                add(inp);
              }
            }}
            onFocus={() => setF(true)}
            onBlur={() => setF(false)}
            style={{
              ...S.input,
              flex: 1,
              borderColor: f ? "#111827" : "#e2e4e9",
              boxShadow: f ? "0 0 0 3px rgba(17,24,39,0.07)" : "none",
            }}
          />
          <button
            onClick={() => add(inp)}
            disabled={!inp.trim()}
            style={{
              padding: "0 18px",
              border: "none",
              borderRadius: 10,
              fontSize: 13,
              fontWeight: 600,
              cursor: inp.trim() ? "pointer" : "default",
              background: inp.trim() ? "#111827" : "#e5e7eb",
              color: inp.trim() ? "#fff" : "#9ca3af",
              transition: "all .18s",
            }}
          >
            Add
          </button>
        </div>
      </div>

      {/* Tag pool */}
      {d.skills.length > 0 && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            padding: "14px 16px",
            background: "#f9fafb",
            border: "1px solid #e9eaec",
            borderRadius: 12,
            marginBottom: 24,
          }}
        >
          {d.skills.map((s) => (
            <SkillChip key={s} label={s} onRemove={() => rm(s)} />
          ))}
        </div>
      )}
      {d.skills.length === 0 && (
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            color: "#c4c7ce",
            fontSize: 13,
            marginBottom: 20,
            background: "#fafafa",
            borderRadius: 12,
            border: "1.5px dashed #e5e7eb",
          }}
        >
          No skills added yet — click chips above or type one
        </div>
      )}

      <div style={S.btnRow}>
        <BtnSecondary onClick={onBack}>← Back</BtnSecondary>
        <BtnPrimary onClick={onNext}>
          <span>Complete Profile</span>
          <Icon.Arrow />
        </BtnPrimary>
      </div>
    </>
  );
}

function QuickChip({ label, onClick }) {
  const [h, setH] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        padding: "6px 13px",
        border: `1.5px dashed ${h ? "#111827" : "#d1d5db"}`,
        borderRadius: 20,
        background: h ? "#f3f4f6" : "#fafafa",
        color: "#374151",
        fontSize: 12.5,
        fontWeight: 500,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 5,
        transition: "all .15s",
      }}
    >
      <Icon.Plus /> {label}
    </button>
  );
}

function SkillChip({ label, onRemove }) {
  const [h, setH] = useState(false);
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        background: "#fff",
        border: "1.5px solid #e2e4e9",
        borderRadius: 20,
        padding: "5px 10px 5px 12px",
        fontSize: 13,
        fontWeight: 500,
        color: "#374151",
      }}
    >
      {label}
      <button
        onClick={onRemove}
        onMouseEnter={() => setH(true)}
        onMouseLeave={() => setH(false)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: h ? "#ef4444" : "#9ca3af",
          display: "flex",
          transition: "color .15s",
          padding: 0,
        }}
      >
        <Icon.X />
      </button>
    </span>
  );
}

/* ════════════════════════════════════════════════════════════
   STEP 4 — CONFIRMATION
════════════════════════════════════════════════════════════ */
function Step4({ personal, experience, skills }) {
  const [launching, setLaunching] = useState(false);
  const [launched, setLaunched] = useState(false);

  const domainLabels = {
    frontend: "Frontend Development",
    backend: "Backend Development",
    fullstack: "Full-Stack",
    devops: "DevOps / Infra",
    data: "Data Engineering",
    ml: "ML / AI",
    mobile: "Mobile",
    security: "Security",
    "": "—",
  };
  const levelLabels = {
    junior: "Junior",
    mid: "Mid-level",
    senior: "Senior",
    staff: "Staff / Principal",
    lead: "Lead / Manager",
    "": "—",
  };
  const availLabels = {
    immediate: "Immediately",
    "2w": "2-week notice",
    "1m": "1-month notice",
    "3m": "3-month notice",
    passive: "Passively exploring",
    "": "—",
  };

  const handle = () => {
    setLaunching(true);
    setTimeout(() => {
      setLaunching(false);
      setLaunched(true);
    }, 1400);
  };

  if (launched) {
    return (
      <div style={{ textAlign: "center", padding: "20px 0 10px" }}>
        <div style={{ marginBottom: 20 }}>
          <Icon.Confetti />
        </div>
        <h2 style={{ ...S.h2, marginBottom: 10 }}>You're all set! 🎉</h2>
        <p style={{ ...S.sub, maxWidth: 380, margin: "0 auto 32px" }}>
          Your candidate profile has been created. We're matching you to
          relevant assessments and opportunities now.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            maxWidth: 340,
            margin: "0 auto 32px",
          }}
        >
          {[
            {
              icon: "🧪",
              title: "Take your first assessment",
              desc: "Match your skills with a curated test",
            },
            {
              icon: "📋",
              title: "Review your profile",
              desc: "Check and update your details anytime",
            },
            {
              icon: "🔔",
              title: "Turn on job alerts",
              desc: "Get notified of matching opportunities",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                background: "#f9fafb",
                border: "1px solid #e9eaec",
                borderRadius: 12,
                padding: "14px 16px",
                textAlign: "left",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#f3f4f6")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#f9fafb")
              }
            >
              <span style={{ fontSize: 22 }}>{item.icon}</span>
              <div>
                <p
                  style={{ fontSize: 13.5, fontWeight: 600, color: "#111827" }}
                >
                  {item.title}
                </p>
                <p style={{ fontSize: 12, color: "#6b7280" }}>{item.desc}</p>
              </div>
              <span style={{ marginLeft: "auto", color: "#d1d5db" }}>
                <Icon.Arrow />
              </span>
            </div>
          ))}
        </div>
        <button
          style={{ ...S.btnPrimary, width: "100%", justifyContent: "center" }}
        >
          Go to Dashboard
        </button>
      </div>
    );
  }

  return (
    <>
      <div style={S.formHeader}>
        <h2 style={S.h2}>Review & Confirm</h2>
        <p style={S.sub}>
          Everything look right? You can always update your profile later from
          settings.
        </p>
      </div>

      {/* Summary sections */}
      {[
        {
          title: "Personal Details",
          step: 1,
          rows: [
            ["Full Name", personal.name || "—"],
            ["Title", personal.title || "—"],
            ["Location", personal.location || "—"],
            ["Email", personal.email || "—"],
          ],
        },
        {
          title: "Work Experience",
          step: 2,
          rows: [
            ["Company", experience.company || "—"],
            ["Level", levelLabels[experience.level] || "—"],
            ["Domain", domainLabels[experience.domain] || "—"],
            ["Availability", availLabels[experience.avail] || "—"],
          ],
        },
      ].map((section) => (
        <div
          key={section.title}
          style={{
            background: "#f9fafb",
            border: "1px solid #e9eaec",
            borderRadius: 14,
            padding: "18px 20px",
            marginBottom: 14,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 14,
            }}
          >
            <p
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "#111827",
                letterSpacing: "0.01em",
              }}
            >
              {section.title}
            </p>
            <span
              style={{
                fontSize: 12,
                color: "#6b7280",
                cursor: "pointer",
                fontWeight: 500,
                padding: "2px 8px",
                border: "1px solid #e2e4e9",
                borderRadius: 6,
                background: "#fff",
              }}
            >
              Edit
            </span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px 24px",
            }}
          >
            {section.rows.map(([k, v]) => (
              <div key={k}>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#9ca3af",
                    textTransform: "uppercase",
                    letterSpacing: "0.07em",
                    marginBottom: 2,
                  }}
                >
                  {k}
                </p>
                <p
                  style={{
                    fontSize: 13.5,
                    color: v === "—" ? "#c4c7ce" : "#111827",
                    fontWeight: v !== "—" ? 500 : 400,
                  }}
                >
                  {v}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Skills summary */}
      <div
        style={{
          background: "#f9fafb",
          border: "1px solid #e9eaec",
          borderRadius: 14,
          padding: "18px 20px",
          marginBottom: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <p style={{ fontSize: 13, fontWeight: 700, color: "#111827" }}>
            Technical Skills
          </p>
          <span
            style={{
              fontSize: 12,
              color: "#6b7280",
              cursor: "pointer",
              fontWeight: 500,
              padding: "2px 8px",
              border: "1px solid #e2e4e9",
              borderRadius: 6,
              background: "#fff",
            }}
          >
            Edit
          </span>
        </div>
        {skills.length > 0 ? (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
            {skills.map((s) => (
              <span
                key={s}
                style={{
                  padding: "4px 12px",
                  background: "#fff",
                  border: "1px solid #e2e4e9",
                  borderRadius: 20,
                  fontSize: 12.5,
                  fontWeight: 500,
                  color: "#374151",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        ) : (
          <p style={{ fontSize: 13, color: "#c4c7ce" }}>No skills added</p>
        )}
      </div>

      {/* T&C */}
      <p
        style={{
          fontSize: 12,
          color: "#9ca3af",
          textAlign: "center",
          marginBottom: 16,
          lineHeight: 1.6,
        }}
      >
        By creating your profile you agree to our{" "}
        <a href="#" style={{ color: "#374151", textDecoration: "underline" }}>
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" style={{ color: "#374151", textDecoration: "underline" }}>
          Privacy Policy
        </a>
        .
      </p>

      <BtnPrimary onClick={handle} disabled={launching}>
        {launching ? (
          <>
            <svg
              style={{ animation: "spin .7s linear infinite" }}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="3"
              />
              <path
                fill="white"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Creating profile…
          </>
        ) : (
          <>
            <span>Create My Profile</span>
            <Icon.Arrow />
          </>
        )}
      </BtnPrimary>
    </>
  );
}

/* ════════════════════════════════════════════════════════════
   SHARED STYLES
════════════════════════════════════════════════════════════ */
const S = {
  label: {
    display: "block",
    fontSize: 13.5,
    fontWeight: 600,
    color: "#1f2937",
    marginBottom: 7,
  },
  input: {
    display: "block",
    width: "100%",
    boxSizing: "border-box",
    padding: "12px 14px",
    border: "1.5px solid #e2e4e9",
    borderRadius: 10,
    fontSize: 14,
    color: "#111827",
    background: "#fff",
    outline: "none",
    transition: "border-color .18s, box-shadow .18s",
  },
  iconWrap: {
    position: "absolute",
    left: 13,
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    pointerEvents: "none",
    zIndex: 1,
  },
  h2: {
    fontSize: 28,
    fontWeight: 800,
    color: "#111827",
    marginBottom: 8,
    letterSpacing: "-0.025em",
    lineHeight: 1.2,
  },
  sub: {
    fontSize: 14,
    color: "#6b7280",
    lineHeight: 1.65,
    marginBottom: 28,
    maxWidth: 500,
  },
  formHeader: { marginBottom: 4 },
  btnRow: { display: "flex", gap: 14, marginTop: 6 },
  btnPrimary: {
    flex: 1.6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: "13px 20px",
    border: "none",
    borderRadius: 10,
    background: "#111827",
    color: "#fff",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all .2s",
  },
  btnSecondary: {
    flex: 1,
    padding: "13px 20px",
    border: "1.5px solid #d1d5db",
    borderRadius: 10,
    background: "#fff",
    color: "#374151",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all .18s",
  },
};

/* ════════════════════════════════════════════════════════════
   ROOT
════════════════════════════════════════════════════════════ */
export default function CondidateSignup() {
  const [step, setStep] = useState(1);
  const [personal, setP] = useState({
    name: "",
    title: "",
    location: "",
    email: "",
  });
  const [experience, setE] = useState({
    company: "",
    url: "",
    level: "",
    domain: "",
    avail: "",
    size: "",
  });
  const [skillsData, setSk] = useState({ skills: [] });

  const updP = (k, v) => setP((p) => ({ ...p, [k]: v }));
  const updE = (k, v) => setE((p) => ({ ...p, [k]: v }));
  const updSk = (k, v) => setSk((p) => ({ ...p, [k]: v }));

  return (
    <div
      style={{
        fontFamily: "'Inter', 'DM Sans', system-ui, sans-serif",
        minHeight: "100vh",
        background: "#f4f5f7",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #f4f5f7; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes spin { to { transform: rotate(360deg); } }
        .tf-slide { animation: fadeUp .32s ease forwards; }
        input::placeholder, select { color: #9ca3af; }
        a { transition: color .15s; }
      `}</style>

      {/* ── NAV ── */}
      <header
        style={{
          background: "#fff",
          borderBottom: "1px solid #e9eaec",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 28px",
          height: 56,
          flexShrink: 0,
        }}
      >
        <span
          className="logo"
          style={{
            fontWeight: 800,
            fontSize: 17,
            color: "#111827",
            letterSpacing: "-0.025em",
          }}
        >
          Credify
        </span>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "#f5f6f8",
            border: "1px solid #e5e7eb",
            borderRadius: 20,
            padding: "6px 15px",
            fontSize: 13,
            fontWeight: 500,
            color: "#374151",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#eef0f3")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#f5f6f8")}
        >
          <Icon.Globe /> Help
        </button>
      </header>

      {/* ── MAIN ── */}
      <main style={{ flex: 1, padding: "44px 20px 60px" }}>
        <div style={{ maxWidth: 620, margin: "0 auto" }}>
          {/* Step bar — only show on steps 1-3 */}
          {step < 4 && <StepBar current={step} />}

          {/* Card */}
          <div
            key={step}
            className="tf-slide"
            style={{
              background: "#fff",
              border: "1px solid #e9eaec",
              borderRadius: 18,
              padding: "36px 40px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
              marginBottom: 20,
            }}
          >
            {step === 1 && (
              <Step1 d={personal} set={updP} onNext={() => setStep(2)} />
            )}
            {step === 2 && (
              <Step2
                d={experience}
                set={updE}
                onNext={() => setStep(3)}
                onBack={() => setStep(1)}
              />
            )}
            {step === 3 && (
              <Step3
                d={skillsData}
                set={updSk}
                onNext={() => setStep(4)}
                onBack={() => setStep(2)}
              />
            )}
            {step === 4 && (
              <Step4
                personal={personal}
                experience={experience}
                skills={skillsData.skills}
              />
            )}
          </div>

          {/* Info cards — only steps 1-3 */}
          {step < 4 && (
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <InfoCard
                icon={<Icon.Shield />}
                title="Data Integrity"
                desc="Your profile is encrypted and only visible to authorized hiring managers."
                iconBg="#eef0fb"
                iconColor="#4338ca"
              />
              <InfoCard
                icon={<Icon.CheckBadge />}
                title="Precision Match"
                desc="Accurate details help our engine calibrate assessments to your seniority level."
                iconBg="#eff6ff"
                iconColor="#2563eb"
              />
            </div>
          )}
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer
        style={{
          borderTop: "1px solid #e9eaec",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
          padding: "14px 28px",
          fontSize: 12,
          color: "#9ca3af",
        }}
      >
        <span>© 2024 Credify Inc. All rights reserved.</span>
        <div style={{ display: "flex", gap: 22 }}>
          {[
            "Privacy Policy",
            "Terms of Service",
            "Security",
            "Cookie Settings",
          ].map((l) => (
            <a
              key={l}
              href="#"
              style={{ color: "#9ca3af", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#374151")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
            >
              {l}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
