import React from "react";
import {
  ShieldIcon,
  CheckIcon,
  SearchIcon,
  StarIcon,
  ArrowIcon,
  RecruiterIcon,
} from "../assets/Icons";

const JourneyCard = ({ icon, iconBg, title, description, ctaLabel }) => (
  <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-8 flex flex-col cursor-pointer group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
    <div
      className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-6`}
    >
      {icon}
    </div>
    <h2 className="text-xl font-semibold text-gray-900 mb-3">{title}</h2>
    <p className="text-gray-500 text-sm leading-relaxed flex-1">
      {description}
    </p>
    <div className="mt-8 pt-6 border-t border-gray-100">
      <button className="flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-indigo-600 transition-colors group-hover:gap-3">
        {ctaLabel}
        <ArrowIcon />
      </button>
    </div>
  </div>
);

const TrustItem = ({ icon, iconBg, title, subtitle }) => (
  <div className="flex items-center gap-3">
    <span
      className={`w-8 h-8 rounded-full ${iconBg} flex items-center justify-center`}
    >
      {icon}
    </span>
    <div>
      <div className="text-sm font-semibold text-gray-800">{title}</div>
      <div className="text-xs text-gray-400">{subtitle}</div>
    </div>
  </div>
);

export default function ChooseJourney() {
  return (
    <div
      className="min-h-screen flex flex-col bg-[#f0f4fb]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between">
        <span className=" logo text-xl font-bold tracking-tight text-gray-900">
          Credify
        </span>
        <button className="text-sm text-gray-500 hover:text-gray-800 font-medium transition-colors">
          Support
        </button>
      </nav>

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <h1
          className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          Choose your journey
        </h1>
        <p className="text-gray-500 text-center max-w-md mb-12 text-base leading-relaxed">
          Welcome to TalentScale. Tell us how you plan to use the platform
          <br className="hidden md:block" /> so we can tailor your experience.
        </p>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-3xl mb-10">
          <JourneyCard
            icon={<SearchIcon />}
            iconBg="bg-indigo-100"
            title="I am a Candidate"
            description="Build your professional profile, verify your technical skills through our assessments, and get discovered by top companies."
            ctaLabel="Get Started"
          />
          <JourneyCard
            icon={<RecruiterIcon />}
            iconBg="bg-slate-200"
            title="I am a Recruiter"
            description="Post assessments, evaluate candidates with data-driven insights, and streamline your technical hiring process."
            ctaLabel="Hire Talent"
          />
        </div>

        {/* Trust Bar */}
        <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-2xl px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <TrustItem
            icon={<StarIcon />}
            iconBg="bg-amber-50"
            title="Verified Skills"
            subtitle="Industry standard assessments"
          />
          <div className="hidden md:block w-px h-8 bg-gray-100" />
          <TrustItem
            icon={<CheckIcon />}
            iconBg="bg-green-50"
            title="Faster Hiring"
            subtitle="Reduce time-to-hire by 40%"
          />
          <div className="hidden md:block w-px h-8 bg-gray-100" />
          <TrustItem
            icon={<ShieldIcon />}
            iconBg="bg-blue-50"
            title="Secure Platform"
            subtitle="Enterprise-grade data protection"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400">
        <span>© 2024 TalentScale Systems. All rights reserved.</span>
        <div className="flex items-center gap-6">
          {["Privacy Policy", "Terms of Service", "Security", "Status"].map(
            (link) => (
              <a
                key={link}
                href="#"
                className="hover:text-gray-600 transition-colors underline underline-offset-2"
              >
                {link}
              </a>
            ),
          )}
        </div>
      </footer>
    </div>
  );
}
