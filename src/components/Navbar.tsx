import { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaDownload,
} from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

/**
 * Track which section is currently in view so the matching nav item can
 * be highlighted. `rootMargin: -40% 0px -40% 0px` means a section "wins"
 * the highlight once it crosses the middle 20% of the viewport.
 */
function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const active = useActiveSection(navLinks.map((l) => l.href.slice(1)));

  const isActive = (href: string) => active === href.slice(1);

  return (
    <nav className="fixed top-0 left-0 right-0 glass-nav z-50 border-b border-gray-200/50 dark:border-slate-800/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / name */}
          <div className="shrink-0">
            <a
              href="#home"
              className="text-xl font-bold text-gray-900 dark:text-white hover:text-red-500 dark:hover:text-cyan-400 transition-colors"
            >
              Ben Cohen
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-1 gap-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-white bg-red-500 dark:bg-cyan-500"
                    : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800"
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* Resume download — always one click away */}
            <a
              href="/resume.pdf"
              download
              className="ml-2 inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium border border-red-500 dark:border-cyan-400 text-red-500 dark:text-cyan-400 hover:bg-red-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-white transition-colors"
              aria-label="Download resume PDF"
            >
              <FaDownload size={14} />
              <span>Resume</span>
            </a>

            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>

          {/* Mobile menu button and dark mode */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-cyan-400 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-cyan-400 focus:outline-none transition-colors"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden glass-nav border-t border-gray-200/50 dark:border-slate-700/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-white bg-red-500 dark:bg-cyan-500"
                    : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-700"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-red-500 dark:text-cyan-400 hover:bg-gray-100 dark:hover:bg-slate-700"
            >
              <FaDownload size={14} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
