import React from "react";
import {
  ShieldIcon,
  CheckIcon,
  SearchIcon,
  StarIcon,
  ArrowIcon,
  RecruiterIcon,
} from "../assets/Icons";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import SharedNav from "../components/SharedNav";

const JourneyCard = ({ icon, iconBg, title, description, ctaLabel }) => (
  <div className="flex-1 glass-bg border border-gray-200 rounded-2xl p-8 flex flex-col cursor-pointer group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
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
    <div className="min-h-screen flex flex-col page-light-bg font-['DM Sans, sans-serif']">
      {/* Navbar */}
      <SharedNav />

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 fade-in delay-1">
        <h1 className="text-4xl md:text-5xl text-gray-900 text-center mb-4 font-['Syne', sans-serif] font-extrabold">
          Choose your journey
        </h1>
        <p className="text-gray-500 text-center max-w-md mb-12 text-base leading-relaxed">
          Welcome to TalentScale. Tell us how you plan to use the platform so we
          can tailor your experience.
        </p>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-3xl mb-10 fade-in delay-2">
          <NavLink to={"/candidate-signup"}>
            <JourneyCard
              icon={<SearchIcon />}
              iconBg="bg-indigo-100"
              title="I am a Candidate"
              description="Build your professional profile, verify your technical skills through our assessments, and get discovered by top companies."
              ctaLabel="Get Started"
            />
          </NavLink>
          <NavLink to={"/recruiter-signup"}>
            <JourneyCard
              icon={<RecruiterIcon />}
              iconBg="bg-slate-200"
              title="I am a Recruiter"
              description="Post assessments, evaluate candidates with data-driven insights, and streamline your technical hiring process."
              ctaLabel="Hire Talent"
            />
          </NavLink>
        </div>

        {/* Trust Bar */}
        <div className="w-full max-w-3xl glass-bg border border-gray-200 rounded-2xl px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 fade-in delay-3">
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
      <Footer />
    </div>
  );
}
