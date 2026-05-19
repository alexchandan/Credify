import { useState, useRef } from "react";
import Footer from "../components/Footer";

// ── Tiny icons ─────────────────────────────────────────────────────────────
const Icon = ({ d, size = 14 }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24">
    <path
      d={d}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const CheckMark = ({ color = "white", size = 12 }) => (
  <svg width={size} height={size} fill="none" viewBox="0 0 24 24">
    <path
      d="M5 13l4 4L19 7"
      stroke={color}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const ArrowRight = () => <Icon d="M5 12h14M13 6l6 6-6 6" />;
const ArrowLeft = () => <Icon d="M19 12H5M11 18l-6-6 6-6" />;
const GlobeIco = () => (
  <svg width="13" height="13" fill="none" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M12 3c-2 2.5-3.5 5-3.5 9s1.5 6.5 3.5 9M12 3c2 2.5 3.5 5 3.5 9s-1.5 6.5-3.5 9M3 12h18"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);
const MailIco = () => (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
    <rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M3 8l9 6 9-6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);
const ShieldIco = () => (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
    <path
      d="M12 2l7 4v6c0 4.4-3 8.5-7 9.5C8 20.5 5 16.4 5 12V6l7-4z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);
const InfoIco = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M12 8v4M12 16v.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);
const UploadIco = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path
      d="M12 16V8M8 12l4-4 4 4"
      stroke="#818cf8"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="3"
      y="16"
      width="18"
      height="5"
      rx="1.5"
      stroke="#818cf8"
      strokeWidth="1.3"
    />
  </svg>
);

// ── Reusable sub-components ────────────────────────────────────────────────
const SectionDivider = ({ label }) => (
  <div className="flex items-center gap-2 my-5">
    <hr className="flex-1 border-t border-gray-100" />
    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap">
      {label}
    </span>
    <hr className="flex-1 border-t border-gray-100" />
  </div>
);

const Field = ({ label, optional, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[12px] font-medium text-gray-800 tracking-wide">
      {label}
      {optional && (
        <span className="font-normal text-gray-400 ml-1">(optional)</span>
      )}
    </label>
    {children}
  </div>
);

const TextInput = ({ placeholder, icon, type = "text", value, onChange }) => (
  <div className="relative">
    {icon && (
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 opacity-50">
        {icon}
      </span>
    )}
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full border border-gray-200 rounded-lg bg-white text-[13px] text-gray-900 placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent hover:border-gray-300
        transition-all py-2.5 ${icon ? "pl-9 pr-3.5" : "px-3.5"}`}
    />
  </div>
);

const SelectInput = ({ placeholder, options, icon }) => (
  <div className="relative">
    {icon && (
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 opacity-50 z-10">
        {icon}
      </span>
    )}
    <select
      defaultValue=""
      className={`w-full border border-gray-200 rounded-lg bg-white text-[13px] text-gray-500
        focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent hover:border-gray-300
        transition-all py-2.5 appearance-none cursor-pointer pr-8 ${icon ? "pl-9" : "pl-3.5"}`}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
    <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
        <path
          d="M1 1l4 4 4-4"
          stroke="#9ca3af"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  </div>
);

const TagPicker = ({ tags: init }) => {
  const [sel, setSel] = useState(init.filter((t) => t.on).map((t) => t.label));
  const toggle = (l) =>
    setSel((s) => (s.includes(l) ? s.filter((x) => x !== l) : [...s, l]));
  return (
    <div className="flex flex-wrap gap-2 mt-1">
      {init.map(({ label }) => (
        <button
          key={label}
          onClick={() => toggle(label)}
          className={`px-3 py-1.5 rounded-full text-[12px] font-medium border transition-all
            ${
              sel.includes(label)
                ? "bg-indigo-50 border-indigo-300 text-indigo-600"
                : "bg-white border-gray-200 text-gray-500 hover:border-gray-300"
            }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

const Banner = ({ icon, text }) => (
  <div className="w-full max-w-[580px] bg-blue-50 border border-blue-100 rounded-2xl p-3.5 flex items-start gap-3 mb-3">
    <span className="text-blue-400 mt-0.5 shrink-0">{icon}</span>
    <p className="text-[12px] text-blue-700 leading-relaxed">{text}</p>
  </div>
);

const BtnPrimary = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-900 text-white text-[13px] font-medium hover:bg-gray-700 active:scale-[0.98] transition-all"
  >
    {children}
  </button>
);
const BtnOutline = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 text-[13px] font-medium hover:bg-gray-50 active:scale-[0.98] transition-all"
  >
    {children}
  </button>
);

// ── Step indicator ─────────────────────────────────────────────────────────
const STEP_LABELS = ["Company", "Work Info", "Verification"];
const StepBar = ({ current }) => (
  <div className="flex items-start justify-center w-full max-w-[580px] mb-6">
    {STEP_LABELS.map((label, i) => {
      const n = i + 1;
      const done = n < current;
      const active = n === current;
      return (
        <div key={label} className="flex items-start">
          <div className="flex flex-col items-center gap-1.5">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-medium transition-all duration-300
              ${active ? "bg-gray-900 text-white shadow-md shadow-gray-300" : ""}
              ${done ? "bg-indigo-500 text-white" : ""}
              ${!active && !done ? "bg-white border border-gray-200 text-gray-400" : ""}`}
            >
              {done ? <CheckMark /> : n}
            </div>
            <span
              className={`text-[11px] font-medium transition-colors ${active ? "text-gray-900" : done ? "text-indigo-500" : "text-gray-400"}`}
            >
              {label}
            </span>
          </div>
          {i < STEP_LABELS.length - 1 && (
            <div
              className={`h-px w-28 md:w-40 mt-5 mx-2 transition-all duration-500 ${done ? "bg-indigo-400" : "bg-gray-200"}`}
            />
          )}
        </div>
      );
    })}
  </div>
);

const ProgressBar = ({ step }) => (
  <div className="w-full max-w-[580px] mb-5">
    <div className="h-[3px] bg-gray-100 rounded-full overflow-hidden">
      <div
        className="h-full bg-indigo-500 rounded-full transition-all duration-500"
        style={{ width: `${(step / 3) * 100}%` }}
      />
    </div>
    <div className="flex justify-between mt-1.5">
      {["Company details", "Work info", "Verification"].map((l, i) => (
        <span
          key={l}
          className={`text-[10px] font-medium ${i === step - 1 ? "text-indigo-600" : "text-gray-400"}`}
        >
          {l}
        </span>
      ))}
    </div>
  </div>
);

// ── Step 1: Company ────────────────────────────────────────────────────────
const Step1 = ({ onNext }) => {
  const [desc, setDesc] = useState("");
  return (
    <>
      <div className="w-full max-w-[580px] bg-white border border-gray-100 rounded-2xl p-8 shadow-sm mb-3">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-xl border-2 border-dashed border-indigo-200 bg-indigo-50 flex flex-col items-center justify-center cursor-pointer shrink-0 hover:bg-indigo-100 transition-colors">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path
                d="M12 16V8M8 12l4-4 4 4"
                stroke="#818cf8"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[8px] text-indigo-400 font-bold tracking-widest mt-0.5">
              LOGO
            </span>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900 tracking-tight mb-0.5">
              Company Details
            </h1>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              Tell us about your organization to tailor your recruitment
              dashboard and assessment flows.
            </p>
          </div>
        </div>
        <hr className="border-t border-gray-100 mb-5" />

        <div className="flex flex-col gap-4">
          <Field label="Company Name">
            <TextInput
              placeholder="Acme Corp"
              icon={
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M9 9h6M9 13h4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              }
            />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Industry">
              <SelectInput
                placeholder="Select industry"
                options={[
                  "Technology",
                  "Finance",
                  "Healthcare",
                  "E-commerce",
                  "Education",
                  "Media",
                  "Manufacturing",
                  "Other",
                ]}
                icon={
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M3 21h18M6 21V9l6-6 6 6v12M10 21v-5h4v5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              />
            </Field>
            <Field label="Company Size">
              <SelectInput
                placeholder="Select size"
                options={[
                  "1 – 10",
                  "11 – 50",
                  "51 – 200",
                  "201 – 1000",
                  "1000+",
                ]}
                icon={
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                    <circle
                      cx="9"
                      cy="7"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M3 20c0-3.314 2.686-6 6-6s6 2.686 6 6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="17"
                      cy="8"
                      r="2"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M21 20c0-2.21-1.79-4-4-4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                }
              />
            </Field>
          </div>
          <Field label="Company Website">
            <TextInput
              placeholder="https://www.company.com"
              icon={<GlobeIco />}
            />
          </Field>
          <Field label="LinkedIn Company Page" optional>
            <TextInput
              placeholder="linkedin.com/company/..."
              icon={
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M7 10v7M7 7v.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M11 17v-4c0-1.657 1.343-3 3-3s3 1.343 3 3v4M11 10v7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              }
            />
          </Field>
          <Field label="Brief Company Description" optional>
            <textarea
              rows={2}
              maxLength={200}
              value={desc}
              onChange={(e) => setDesc(e.target.value.slice(0, 200))}
              placeholder="What does your company do? Appears on candidate-facing assessment pages."
              className="w-full border border-gray-200 rounded-lg text-[13px] text-gray-900 placeholder-gray-400 px-3.5 py-2.5 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent hover:border-gray-300 transition-all leading-relaxed"
            />
            <span className="text-[10px] text-gray-400 text-right">
              {desc.length} / 200
            </span>
          </Field>
        </div>

        <div className="flex flex-col gap-2.5 mt-6">
          <BtnPrimary onClick={onNext}>
            Continue to Work Info <ArrowRight />
          </BtnPrimary>
        </div>
      </div>
      <Banner
        icon={<InfoIco />}
        text="Your company details will be used to generate branded assessment invites for your candidates. You can update these settings later in your profile."
      />
    </>
  );
};

// ── Step 2: Work Info ──────────────────────────────────────────────────────
const ROLE_TAGS = [
  "Engineering",
  "Product",
  "Design",
  "Data & Analytics",
  "Operations",
  "Sales",
  "Marketing",
  "Finance",
  "Legal",
].map((l, i) => ({ label: l, on: i === 1 || i === 4 }));
const GOAL_TAGS = [
  { label: "Screen candidates faster", on: true },
  { label: "Reduce bias", on: false },
  { label: "Improve offer acceptance", on: false },
  { label: "Benchmark skills", on: false },
];

const Step2 = ({ onNext, onBack }) => (
  <>
    <div className="w-full max-w-[580px] bg-white border border-gray-100 rounded-2xl p-8 shadow-sm mb-3">
      <h1 className="text-xl font-semibold text-gray-900 tracking-tight mb-1.5">
        Work Info
      </h1>
      <p className="text-[13px] text-gray-500 leading-relaxed mb-5">
        Tell us about your role so we can personalise your hiring dashboard and
        recommendation engine.
      </p>
      <hr className="border-t border-gray-100" />

      <SectionDivider label="Your role" />
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Your Full Name">
            <TextInput placeholder="e.g. Sarah Mitchell" />
          </Field>
          <Field label="Job Title">
            <TextInput placeholder="e.g. Head of Talent" />
          </Field>
        </div>
        <Field label="Work Email">
          <TextInput
            placeholder="sarah@acmecorp.com"
            type="email"
            icon={<MailIco />}
          />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Department">
            <SelectInput
              placeholder="Select dept."
              options={[
                "Human Resources",
                "Engineering",
                "Product",
                "Finance",
                "Operations",
                "Sales",
              ]}
            />
          </Field>
          <Field label="Hiring Region">
            <SelectInput
              placeholder="Select region"
              options={[
                "North America",
                "Europe",
                "Asia Pacific",
                "Latin America",
                "Middle East & Africa",
                "Global",
              ]}
            />
          </Field>
        </div>
      </div>

      <SectionDivider label="Hiring preferences" />
      <div className="flex flex-col gap-4">
        <Field label="Roles you typically hire for">
          <TagPicker tags={ROLE_TAGS} />
        </Field>
        <Field label="Typical hiring volume per month">
          <SelectInput
            placeholder="Select volume"
            options={[
              "1 – 5 hires",
              "6 – 15 hires",
              "16 – 30 hires",
              "30+ hires",
            ]}
          />
        </Field>
        <Field label="Assessment goal">
          <TagPicker tags={GOAL_TAGS} />
        </Field>
      </div>

      <div className="flex flex-col gap-2.5 mt-6">
        <BtnPrimary onClick={onNext}>
          Continue to Verification <ArrowRight />
        </BtnPrimary>
        <BtnOutline onClick={onBack}>
          <ArrowLeft /> Back
        </BtnOutline>
      </div>
    </div>
    <Banner
      icon={<MailIco />}
      text="Your work email will be verified in the next step. Use your official company email to unlock team collaboration features and branded assessments."
    />
  </>
);

// ── Step 3: Verification ───────────────────────────────────────────────────
const OTPInput = () => {
  const refs = Array.from({ length: 6 }, () => useRef(null));
  const handleInput = (e, i) => {
    e.target.value = e.target.value.replace(/\D/g, "");
    if (e.target.value && i < 5) refs[i + 1].current.focus();
  };
  const handleKey = (e, i) => {
    if (e.key === "Backspace" && !e.target.value && i > 0)
      refs[i - 1].current.focus();
  };
  return (
    <div className="flex gap-2.5 mt-2">
      {refs.map((ref, i) => (
        <input
          key={i}
          ref={ref}
          type="text"
          maxLength={1}
          onInput={(e) => handleInput(e, i)}
          onKeyDown={(e) => handleKey(e, i)}
          className="w-12 h-14 text-center text-xl font-semibold border border-gray-200 rounded-xl bg-white text-gray-900
            focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
        />
      ))}
    </div>
  );
};

const Step3 = ({ onNext, onBack }) => {
  const [uploaded, setUploaded] = useState(false);
  const [resentShown, setResentShown] = useState(false);
  const showResent = () => {
    setResentShown(true);
    setTimeout(() => setResentShown(false), 3000);
  };

  return (
    <>
      <div className="w-full max-w-[580px] bg-white border border-gray-100 rounded-2xl p-8 shadow-sm mb-3">
        <h1 className="text-xl font-semibold text-gray-900 tracking-tight mb-1.5">
          Verify Your Identity
        </h1>
        <p className="text-[13px] text-gray-500 leading-relaxed mb-5">
          One last step. Verify your work email and confirm your company to
          protect candidates on the platform.
        </p>
        <hr className="border-t border-gray-100" />

        <SectionDivider label="Email verification" />
        <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 mb-4">
          <div className="flex items-center gap-2.5 text-[13px] text-gray-700">
            <MailIco /> sarah@acmecorp.com
          </div>
          <span className="text-[11px] text-indigo-600 font-medium cursor-pointer">
            Change
          </span>
        </div>
        <Field label="Enter the 6-digit code we sent you">
          <p className="text-[11px] text-gray-400">
            Check your inbox — the code expires in 10 minutes.
          </p>
          <OTPInput />
          <p className="text-[12px] text-gray-400 text-center mt-2">
            Didn't receive it?{" "}
            <span
              className="text-indigo-600 cursor-pointer hover:underline"
              onClick={showResent}
            >
              Resend code
            </span>
            {resentShown && (
              <span className="text-green-600 ml-1">✓ Sent!</span>
            )}
          </p>
        </Field>

        <SectionDivider label="Identity document" />
        <Field label="Upload company verification" optional>
          <p className="text-[11px] text-gray-400 mb-2">
            Business registration, tax ID, or official letterhead. Max 5 MB. PDF
            or image.
          </p>
          <div
            onClick={() => setUploaded(true)}
            className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center gap-2 cursor-pointer transition-all
              ${uploaded ? "border-indigo-300 bg-indigo-50" : "border-gray-200 bg-gray-50 hover:border-indigo-300 hover:bg-indigo-50"}`}
          >
            <UploadIco />
            <span className="text-[13px] font-medium text-gray-800">
              {uploaded
                ? "business_registration.pdf"
                : "Drag & drop or click to upload"}
            </span>
            <span className="text-[11px] text-gray-400">
              {uploaded
                ? "3.2 MB — ready to submit"
                : "PDF, PNG, JPG up to 5 MB"}
            </span>
          </div>
        </Field>

        <SectionDivider label="Terms & consent" />
        <div className="flex flex-col gap-3 mb-2">
          <label className="flex items-start gap-2.5 cursor-pointer text-[13px] text-gray-500 leading-relaxed">
            <input
              type="checkbox"
              className="mt-0.5 accent-indigo-500 w-4 h-4 shrink-0"
            />
            I agree to the{" "}
            <a
              href="#"
              className="text-indigo-600 underline underline-offset-2"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-indigo-600 underline underline-offset-2"
            >
              Privacy Policy
            </a>
          </label>
          <label className="flex items-start gap-2.5 cursor-pointer text-[13px] text-gray-500 leading-relaxed">
            <input
              type="checkbox"
              className="mt-0.5 accent-indigo-500 w-4 h-4 shrink-0"
            />
            I confirm I am authorized to recruit on behalf of my organization
          </label>
        </div>

        <div className="flex flex-col gap-2.5 mt-6">
          <BtnPrimary onClick={onNext}>
            Complete Verification <CheckMark size={14} color="white" />
          </BtnPrimary>
          <BtnOutline onClick={onBack}>
            <ArrowLeft /> Back
          </BtnOutline>
        </div>
      </div>
      <Banner
        icon={<ShieldIco />}
        text="Verification protects candidates by ensuring all recruiters on Credify represent legitimate organizations. Your data is encrypted and never shared."
      />
    </>
  );
};

// ── Success ────────────────────────────────────────────────────────────────
const SuccessScreen = () => (
  <div className="w-full max-w-[580px] bg-white border border-gray-100 rounded-2xl p-8 shadow-sm text-center">
    <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-5">
      <CheckMark color="#16a34a" size={28} />
    </div>
    <h1 className="text-xl font-semibold text-gray-900 mb-2 tracking-tight">
      You're all set, Sarah 🎉
    </h1>
    <p className="text-[13px] text-gray-500 leading-relaxed max-w-sm mx-auto mb-6">
      Your recruiter account has been verified. Your dashboard is ready — start
      building assessments and inviting candidates right away.
    </p>
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {["Company verified", "Email confirmed", "Profile complete"].map((c) => (
        <span
          key={c}
          className="px-3.5 py-1.5 rounded-full text-[12px] font-medium bg-green-50 text-green-700 border border-green-200"
        >
          ✓ {c}
        </span>
      ))}
    </div>
    <BtnPrimary>
      Go to Dashboard <ArrowRight />
    </BtnPrimary>
  </div>
);

// ── Root ───────────────────────────────────────────────────────────────────
export default function RecruiterSignup() {
  const [step, setStep] = useState(1);
  return (
    <div
      className="min-h-screen flex flex-col bg-gray-50"
      style={{
        fontFamily: "'Inter', 'DM Sans', system-ui, sans-serif",
        // fontFamily: "'DM Sans', sans-serif"
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');`}</style>

      <nav className="bg-white border-b border-gray-100 px-6 md:px-10 py-3.5 flex items-center justify-between sticky top-0 z-10">
        <span className="text-[17px] logo font-semibold text-gray-900 tracking-tight">
          Credity
        </span>
        <button className="flex items-center gap-1.5 text-[13px] text-gray-500 border border-gray-200 rounded-full px-3.5 py-1.5 hover:bg-gray-50 transition-colors">
          <GlobeIco /> Help
        </button>
      </nav>

      <main className="flex-1 flex flex-col items-center px-4 py-10">
        {step <= 3 && <StepBar current={step} />}
        {step <= 3 && <ProgressBar step={step} />}

        {step === 1 && <Step1 onNext={() => setStep(2)} />}
        {step === 2 && (
          <Step2 onNext={() => setStep(3)} onBack={() => setStep(1)} />
        )}
        {step === 3 && (
          <Step3 onNext={() => setStep(4)} onBack={() => setStep(2)} />
        )}
        {step === 4 && <SuccessScreen />}
      </main>
      <Footer />

      {/* <footer className="px-6 md:px-10 py-4 flex items-center justify-between text-[11px] text-gray-400 border-t border-gray-100 bg-white">
        <span>© 2024  Inc. All rights reserved.</span>
        <div className="flex gap-4">
          {[
            "Privacy Policy",
            "Terms of Service",
            "Security",
            "Cookie Settings",
          ].map((l) => (
            <a
              key={l}
              href="#"
              className="underline underline-offset-2 hover:text-gray-600 transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      </footer> */}
    </div>
  );
}
