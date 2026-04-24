export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div>
          <span className="logo text-base text-gray-900">Credify</span>
          <p className="text-gray-400 text-xs mt-1">
            © 2026 Credify Systems. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-6 flex-wrap">
          {["Privacy Policy", "Terms of Service", "Security", "Status"].map(
            (link) => (
              <a
                key={link}
                href="#"
                className="text-gray-400 hover:text-gray-700 text-xs transition-colors"
              >
                {link}
              </a>
            ),
          )}
        </div>
      </div>
    </footer>
  );
}
