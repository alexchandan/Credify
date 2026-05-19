export default function Footer() {
  return (
    <footer className="border-t border-t-[#e9eaec] flex items-center justify-between flex-wrap gap-2.5 px-7 py-3.5 text-[12px] w-full text-[#9ca3af]">
      <span>© 2026 Credify Inc. All rights reserved.</span>
      <div className="flex gap-5">
        {[
          "Privacy Policy",
          "Terms of Service",
          "Security",
          "Cookie Settings",
        ].map((l) => (
          <a
            key={l}
            href="#"
            className="text-[#9ca3af] no-underline"
            onMouseEnter={(e) => (e.currentTarget.style.color = "#374151")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
          >
            {l}
          </a>
        ))}
      </div>
    </footer>
  );
}
