import { useState } from "react";
import Footer from "../components/Footer";
import {
  ArrowIcon,
  ShieldIcon,
  CheckBadgeIcon,
  CheckIcon,
  UserIcon,
  CodeIcon,
  PinIcon,
  MailIcon,
  ConfettiIcon,
  BriefcaseIcon,
  LinkIcon,
  ClockIcon,
  PlusIcon,
  XIcon,
  EyeIcon,
} from "../assets/Icons";
import SharedNav from "../components/SharedNav";

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
  name,
}) {
  return (
    <div className="mb-4.5">
      {label && (
        <label className="mb-2 block text-[13.5px] font-semibold text-gray-800">
          {label}
        </label>
      )}

      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
            {icon}
          </span>
        )}

        <input
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full rounded-[10px] border border-[#e2e4e9] bg-white py-3 pr-3.5 text-sm text-[#111827] outline-none transition focus:border-[#111827] focus:ring-4 focus:ring-black/5 ${
            icon ? "pl-10" : "pl-3.5"
          }`}
        />
      </div>
    </div>
  );
}

function SelectField({ label, icon, options, value, onChange }) {
  return (
    <div className="mb-4.5">
      {label && <label className={styles.label}>{label}</label>}

      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-[13px] top-1/2 z-[1] flex -translate-y-1/2">
            {icon}
          </span>
        )}

        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`
            ${styles.input}
            ${icon ? "pl-10" : ""}
            pr-9
            appearance-none
            cursor-pointer
            ${value ? "text-[#111827]" : "text-[#9ca3af]"}
          `}
        >
          {options.map((o) => (
            <option
              key={o.value}
              value={o.value}
              disabled={o.disabled}
              className="text-[#111827]"
            >
              {o.label}
            </option>
          ))}
        </select>

        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
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
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${styles.btnPrimary}
        ${
          green
            ? "bg-green-600 hover:bg-green-700"
            : "bg-[#111827] hover:bg-gray-800"
        }
        ${
          disabled
            ? "cursor-not-allowed opacity-60 hover:translate-y-0 hover:shadow-none"
            : "cursor-pointer hover:-translate-y hover:shadow-[0_8px_22px_rgba(0,0,0,0.22)]"
        }
      `}
    >
      {children}
    </button>
  );
}

function BtnSecondary({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        ${styles.btnSecondary}
        border-gray-300
        bg-white
        hover:border-gray-400
        hover:bg-[#f5f6f8]
      `}
    >
      {children}
    </button>
  );
}

function InfoCard({ icon, title, desc, iconBg, iconColor }) {
  return (
    <div className="flex flex-1 min-w-[200px] gap-3.5 rounded-[14px] border border-[#e9eaec] bg-white px-5 py-[18px]">
      <div
        className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px]"
        style={{
          background: iconBg,
          color: iconColor,
        }}
      >
        {icon}
      </div>

      <div>
        <p className="mb-1 text-[13.5px] font-bold text-[#111827]">{title}</p>

        <p className="text-[12.5px] leading-[1.55] text-[#6b7280]">{desc}</p>
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
    <div className="mx-auto mb-9 flex max-w-[580px] items-start">
      {steps.map((s, i) => {
        const done = current > s.n;
        const active = current === s.n;

        return (
          <div
            key={s.n}
            className={`flex items-start ${
              i < steps.length - 1 ? "flex-1" : "flex-none"
            }`}
          >
            <div className="flex flex-col items-center gap-2">
              <div
                className={`
                  flex h-[42px] w-[42px] items-center justify-center rounded-full text-sm font-bold transition-all duration-300
                  ${
                    active || done
                      ? "bg-[#111827] text-white"
                      : "border-[1.5px] border-gray-300 bg-white text-gray-400"
                  }
                  ${active ? "shadow-[0_4px_14px_rgba(0,0,0,0.2)]" : ""}
                `}
              >
                {done ? <CheckIcon /> : s.n}
              </div>

              <span
                className={`
                  text-[11.5px] transition-colors duration-300
                  ${
                    active
                      ? "font-semibold text-[#111827]"
                      : done
                        ? "text-gray-700"
                        : "text-gray-400"
                  }
                `}
              >
                {s.label}
              </span>
            </div>

            {i < steps.length - 1 && (
              <div
                className={`
                  mt-5 mx-1.5 h-[1.5px] flex-1 transition-colors duration-300
                  ${done ? "bg-[#111827]" : "bg-gray-200"}
                `}
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

function Step1({ formData, set, onNext }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="mb-1">
        <h2 className={styles.h2}>Personal Details</h2>

        <p className={styles.sub}>
          Precision starts with identity. Tell us about your professional
          background to personalize your assessment journey.
        </p>
      </div>

      <InputField
        label="Full Name"
        placeholder="e.g. Alexander Pierce"
        value={formData.name}
        onChange={(v) => set("name", v)}
        icon={<UserIcon />}
      />

      <InputField
        label="Professional Title"
        placeholder="e.g. Senior Software Engineer"
        value={formData.title}
        onChange={(v) => set("title", v)}
        icon={
          <div className="h-3.5 w-3.5 stroke-[1.8] text-[#aab]">
            <CodeIcon />
          </div>
        }
      />

      <InputField
        label="Location"
        placeholder="City, Country"
        value={formData.location}
        onChange={(v) => set("location", v)}
        icon={<PinIcon />}
      />

      <InputField
        label="Email Address"
        type="email"
        placeholder="name@company.com"
        value={formData.email}
        onChange={(v) => set("email", v)}
        icon={<MailIcon />}
      />

      <div className="grid grid-cols-2 gap-x-4">
        <div className="relative">
          <InputField
            label="Password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={(v) => set("password", v)}
            className={
              "input-field w-full pl-4 py-3.5 pr-12 rounded-xl border text-sm text-gray-900 placeholder-gray-400 bg-white "
            }
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="eye-btn absolute right-4 top-[42px] -translate-y-1/2 text-gray-400"
          >
            <EyeIcon open={showPassword} />
          </button>
        </div>
        <div>
          <InputField
            label="Confirm Password"
            type={showPassword ? "text" : "password"}
            value={formData.confirmPassword}
            onChange={(v) => set("confirmPassword", v)}
          />
        </div>
      </div>

      <div className="mt-1.5 flex gap-3.5">
        <BtnPrimary onClick={onNext}>
          <span>Next: Experience</span>
          <ArrowIcon />
        </BtnPrimary>
      </div>
    </>
  );
}
/* ════════════════════════════════════════════════════════════
   STEP 2 — EXPERIENCE
════════════════════════════════════════════════════════════ */
function Step2({ formData, set, onNext, onBack }) {
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
      <div className="mb-1">
        <h2 className={styles.h2}>Work Experience</h2>

        <p className={styles.sub}>
          Help us tailor assessments to the right seniority level and
          engineering domain for your profile.
        </p>
      </div>

      <InputField
        label="Current / Last Company"
        placeholder="e.g. Stripe, Google, Startup"
        value={formData.company}
        onChange={(v) => set("company", v)}
        icon={<BriefcaseIcon />}
      />

      <InputField
        label="LinkedIn / Portfolio URL"
        placeholder="https://linkedin.com/in/yourname"
        value={formData.url}
        onChange={(v) => set("url", v)}
        icon={<LinkIcon />}
      />

      <div className="grid grid-cols-2 gap-x-4">
        <SelectField
          label="Experience Level"
          options={levels}
          value={formData.level}
          onChange={(v) => set("level", v)}
        />

        <SelectField
          label="Primary Domain"
          options={domains}
          value={formData.domain}
          onChange={(v) => set("domain", v)}
        />
      </div>

      <div className="grid grid-cols-2 gap-x-4">
        <SelectField
          label="Availability"
          options={avails}
          value={formData.avail}
          onChange={(v) => set("avail", v)}
          icon={
            <div className="h-auto w-1.5 stroke-[1.8] text-[#aab]">
              <ClockIcon />
            </div>
          }
        />

        <SelectField
          label="Company Size Pref."
          options={sizes}
          value={formData.size}
          onChange={(v) => set("size", v)}
        />
      </div>

      <div className="mt-1.5 flex gap-3.5">
        <BtnSecondary onClick={onBack}>← Back</BtnSecondary>

        <BtnPrimary onClick={onNext}>
          <span>Next: Skills</span>
          <ArrowIcon />
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

function Step3({ formData, set, onNext, onBack }) {
  const [inp, setInp] = useState("");

  const availableSkills = QUICK_SKILLS.filter(
    (s) => !formData.skills.includes(s),
  );

  const add = (skill) => {
    const trimmed = skill.trim();

    const exists = formData.skills.some(
      (s) => s.toLowerCase() === trimmed.toLowerCase(),
    );

    if (!trimmed || exists) return;

    set("skills", [...formData.skills, trimmed]);
    setInp("");
  };

  const removeSkill = (skill) => {
    set(
      "skills",
      formData.skills.filter((s) => s !== skill),
    );
  };

  return (
    <>
      <div className="mb-1">
        <h2 className={styles.h2}>Technical Skills</h2>

        <p className={styles.sub}>
          Add your core technologies so we can match you to the right assessment
          modules and opportunities.
        </p>
      </div>

      <div className="mb-[22px]">
        <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.08em] text-gray-400">
          Quick add
        </p>

        <div className="flex flex-wrap gap-2">
          {availableSkills.map((skill) => (
            <QuickChip key={skill} label={skill} onClick={() => add(skill)} />
          ))}
        </div>
      </div>

      <div className="mb-5">
        <label className={styles.label}>Or type a skill</label>

        <div className="flex gap-2">
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
            className={`${styles.input} flex-1`}
          />

          <button
            type="button"
            onClick={() => add(inp)}
            disabled={!inp.trim()}
            className={`
              rounded-[10px] px-[18px] text-[13px] font-semibold transition-all duration-200
              ${
                inp.trim()
                  ? "cursor-pointer bg-[#111827] text-white hover:bg-gray-800"
                  : "cursor-not-allowed bg-gray-200 text-gray-400"
              }
            `}
          >
            Add
          </button>
        </div>
      </div>

      {formData.skills.length > 0 ? (
        <div className="mb-6 flex flex-wrap gap-2 rounded-[12px] border border-[#e9eaec] bg-[#f9fafb] px-4 py-[14px]">
          {formData.skills.map((skill) => (
            <SkillChip
              key={skill}
              label={skill}
              onRemove={() => removeSkill(skill)}
            />
          ))}
        </div>
      ) : (
        <div className="mb-5 rounded-[12px] border-[1.5px] border-dashed border-[#c4c7ce] bg-[#fafafa] p-5 text-center text-[13px] text-[#6b6b6b]">
          No skills added yet — click chips above or type one
        </div>
      )}

      <div className="mt-1.5 flex gap-3.5">
        <BtnSecondary onClick={onBack}>← Back</BtnSecondary>

        <BtnPrimary onClick={onNext}>
          <span>Complete Profile</span>
          <ArrowIcon />
        </BtnPrimary>
      </div>
    </>
  );
}

function QuickChip({ label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        flex cursor-pointer items-center gap-1 rounded-full border-[1.5px] border-dashed border-gray-300 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 transition-all duration-150
        hover:border-gray-900 hover:bg-gray-100
      "
    >
      <PlusIcon />
      {label}
    </button>
  );
}

function SkillChip({ label, onRemove }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border-[1.5px] border-[#e2e4e9] bg-white py-1 pl-3 pr-2.5 text-[13px] font-medium text-gray-700">
      {label}

      <button
        type="button"
        onClick={onRemove}
        className="
          flex cursor-pointer p-0 text-[#9ca3af]
          transition-colors duration-150
          hover:text-[#ef4444]
        "
      >
        <XIcon />
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
      <div className="pb-2.5 pt-5 text-center">
        <div className="mb-5">
          <ConfettiIcon />
        </div>

        <h2 className={`${styles.h2} mb-2.5`}>You're all set! 🎉</h2>

        <p className={`${styles.sub} mx-auto mb-8 max-w-[380px]`}>
          Your candidate profile has been created. We're matching you to
          relevant assessments and opportunities now.
        </p>

        <div className="mx-auto mb-8 flex max-w-[340px] flex-col gap-3">
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
              className="
                flex cursor-pointer items-center gap-3.5 rounded-xl
                border border-[#e9eaec] bg-gray-50 px-4 py-3.5
                text-left transition-colors duration-150
                hover:bg-gray-100
              "
            >
              <span className="text-[22px]">{item.icon}</span>

              <div>
                <p className="text-[13.5px] font-semibold text-[#111827]">
                  {item.title}
                </p>

                <p className="text-xs text-[#6b7280]">{item.desc}</p>
              </div>

              <span className="ml-auto text-gray-300">
                <ArrowIcon />
              </span>
            </div>
          ))}
        </div>

        <button
          type="button"
          className={`${styles.btnPrimary} w-full justify-center bg-[#111827] hover:bg-gray-800`}
        >
          Go to Dashboard
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="mb-1">
        <h2 className={styles.h2}>Review & Confirm</h2>

        <p className={styles.sub}>
          Everything look right? You can always update your profile later from
          settings.
        </p>
      </div>

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
          className="mb-3.5 rounded-[14px] border border-[#e9eaec] bg-[#f9fafb] px-5 py-[18px]"
        >
          <div className="mb-[14px] flex items-center justify-between">
            <p className="text-[13px] font-bold tracking-[0.01em] text-[#111827]">
              {section.title}
            </p>

            <span
              className="
                cursor-pointer rounded-md border border-[#e2e4e9]
                bg-white px-2 py-[2px] text-xs font-medium
                text-[#6b7280]
              "
            >
              Edit
            </span>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
            {section.rows.map(([k, v]) => (
              <div key={k}>
                <p className="mb-0.5 text-[11px] font-semibold uppercase tracking-[0.07em] text-gray-400">
                  {k}
                </p>

                <p
                  className={`text-[13.5px] ${
                    v === "—"
                      ? "font-normal text-[#c4c7ce]"
                      : "font-medium text-[#111827]"
                  }`}
                >
                  {v}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Skills */}
      <div className="mb-6 rounded-[14px] border border-[#e9eaec] bg-[#f9fafb] px-5 py-[18px]">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-[13px] font-bold text-[#111827]">
            Technical Skills
          </p>

          <span
            className="
              cursor-pointer rounded-md border border-[#e2e4e9]
              bg-white px-2 py-[2px] text-xs font-medium
              text-[#6b7280]
            "
          >
            Edit
          </span>
        </div>

        {skills.length > 0 ? (
          <div className="flex flex-wrap gap-[7px]">
            {skills.map((s) => (
              <span
                key={s}
                className="
                  rounded-full border border-[#e2e4e9]
                  bg-white px-3 py-1 text-[12.5px]
                  font-medium text-gray-700
                "
              >
                {s}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-[13px] text-[#c4c7ce]">No skills added</p>
        )}
      </div>

      {/* Terms */}
      <p className="mb-4 text-center text-xs leading-[1.6] text-gray-400">
        By creating your profile you agree to our{" "}
        <a href="#" className="text-gray-700 underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="text-gray-700 underline">
          Privacy Policy
        </a>
        .
      </p>

      <BtnPrimary onClick={handle} disabled={launching}>
        {launching ? (
          <>
            <svg
              className="animate-spin"
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
            <ArrowIcon />
          </>
        )}
      </BtnPrimary>
    </>
  );
}

/* ════════════════════════════════════════════════════════════
   SHARED STYLES
════════════════════════════════════════════════════════════ */

const styles = {
  input:
    "block w-full rounded-[10px] border border-[#e2e4e9] bg-white px-3.5 py-3 text-sm text-[#111827] outline-none transition focus:border-[#111827] focus:ring-4 focus:ring-black/5",

  label: "mb-[7px] block text-[13.5px] font-semibold text-gray-800",

  h2: "mb-2 text-[28px] font-extrabold leading-[1.2] tracking-[-0.025em] text-[#111827]",

  sub: "mb-7 max-w-[500px] text-sm leading-[1.65] text-gray-500",

  btnPrimary:
    "flex flex-[1.7] items-center justify-center gap-2 rounded-[10px] bg-[#111827] px-5 py-[13px] text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-[1px] hover:bg-gray-800 hover:shadow-[0_8px_22px_rgba(0,0,0,0.22)]",

  btnSecondary:
    "flex-1 rounded-[10px] border border-gray-300 bg-white px-5 py-[13px] text-sm font-semibold text-gray-700 transition hover:bg-gray-50 hover:cursor-pointer transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_8px_22px_rgba(0,0,0,0.12)]",
};
/* ════════════════════════════════════════════════════════════
   ROOT
════════════════════════════════════════════════════════════ */
export default function CandidateSignup() {
  const [step, setStep] = useState(1);
  const [personal, setPersonal] = useState({
    name: "",
    title: "",
    location: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [experience, setExperience] = useState({
    company: "",
    url: "",
    level: "",
    domain: "",
    avail: "",
    size: "",
  });
  const [skillsData, setSkillsData] = useState({ skills: [] });

  const updatePersonal = (k, v) => setPersonal((p) => ({ ...p, [k]: v }));
  const updateExperience = (k, v) => setExperience((p) => ({ ...p, [k]: v }));
  const updateSkillsData = (k, v) => setSkillsData((p) => ({ ...p, [k]: v }));

  return (
    <div className="page-light-bg font-['Syne', 'DM Sans', system-ui, sans-serif] min-h-100vh flex flex-col">
      {/* Navbar */}
      <SharedNav />

      {/* ── MAIN ── */}
      <main className="className=flex-1 pt-11 px-5 pb-15 ">
        <div className="max-w-155 mx-auto">
          {/* Step bar — only show on steps 1-3 */}
          {step < 4 && <StepBar current={step} />}

          {/* Card */}
          <div
            key={step}
            className="tf-slide glass-bg border border-[#e9eaec] px-10 py-9 mb-5"
          >
            {step === 1 && (
              <Step1
                formData={personal}
                set={updatePersonal}
                onNext={() => setStep(2)}
              />
            )}
            {step === 2 && (
              <Step2
                formData={experience}
                set={updateExperience}
                onNext={() => setStep(3)}
                onBack={() => setStep(1)}
              />
            )}
            {step === 3 && (
              <Step3
                formData={skillsData}
                set={updateSkillsData}
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
            <div className="flex flex-wrap gap-3.5">
              <InfoCard
                icon={<CheckIcon />}
                title="Data Integrity"
                desc="Your profile is encrypted and only visible to authorized hiring managers."
                iconBg="#eef0fb"
                iconColor="#4338ca"
              />
              <InfoCard
                icon={<CheckBadgeIcon />}
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
      <Footer />
    </div>
  );
}
