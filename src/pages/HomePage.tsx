import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaChevronDown,
  FaDownload,
} from "react-icons/fa";

const HomePage = () => {
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHero(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    // min-h-screen so the splash fills the viewport on initial load —
    // nothing below should peek above the fold.
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <div
        className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
          showHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
          Hi, I'm{" "}
          <span className="text-red-500 dark:text-cyan-400">Ben Cohen</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-2">
          <span className="font-bold">Senior Frontend Engineer</span> &{" "}
          <span className="font-bold">Game Developer</span>
        </p>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Design-oriented engineer who owns the frontend end-to-end and ships
          polished, real-time, AI-native interfaces. Hobbyist game dev on the
          side.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://github.com/AloofBuddha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-cyan-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://linkedin.com/in/aloofbuddha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-cyan-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="mailto:bac1087@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-cyan-400 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope size={28} />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="#projects"
            className="bg-red-500 hover:bg-red-600 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white font-medium px-6 py-2.5 rounded-lg transition-colors shadow-lg"
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            download
            aria-label="Download resume PDF"
            className="inline-flex items-center justify-center gap-2 border-2 border-red-500 dark:border-cyan-400 text-red-500 dark:text-cyan-400 hover:bg-red-500 dark:hover:bg-cyan-500 hover:text-white font-medium px-6 py-2.5 rounded-lg transition-colors"
          >
            <FaDownload size={16} />
            <span>Resume</span>
          </a>
        </div>
      </div>

      {/* Scroll invitation — bounces at the bottom of the splash. Clicking
          it scrolls to the first content section. */}
      <a
        href="#about"
        aria-label="Scroll to next section"
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-cyan-400 transition-colors ${
          showHero ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <FaChevronDown size={20} className="animate-bounce" />
      </a>
    </div>
  );
};

export default HomePage;
