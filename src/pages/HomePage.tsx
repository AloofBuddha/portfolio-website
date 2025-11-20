import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HomePage = () => {
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    // Delay hero appearance for entrance animation
    const timer = setTimeout(() => {
      setShowHero(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div
        className={`max-w-4xl mx-auto px-4 py-20 text-center transition-all duration-1000 ${
          showHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I'm{" "}
          <span className="text-red-500 dark:text-cyan-400">Ben Cohen</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
          Senior Software Engineer
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          <Link
            to="/resume"
            className="text-red-500 dark:text-cyan-400 font-semibold hover:underline"
          >
            Design-oriented senior engineer
          </Link>{" "}
          who owns the frontend end-to-end (React, TypeScript, GraphQL, testing,
          CI/CD) and partners closely with product and design to ship polished,
          delightful, high-conversion experiences. Passionate about exploring
          how{" "}
          <Link
            to="/projects"
            className="text-red-500 dark:text-cyan-400 font-semibold hover:underline"
          >
            AI-native interfaces
          </Link>{" "}
          can make powerful tools more intuitive and accessible—especially for
          developers.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/AloofBuddha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-cyan-400 transition-colors"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://linkedin.com/in/aloofbuddha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-cyan-400 transition-colors"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="mailto:bac1087@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-cyan-400 transition-colors"
          >
            <FaEnvelope size={32} />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/projects"
            className="bg-red-500 hover:bg-red-600 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white font-medium px-8 py-3 rounded-lg transition-colors shadow-lg"
          >
            View My Work
          </Link>
          <Link
            to="/about"
            className="border-2 border-red-500 dark:border-cyan-400 text-red-500 dark:text-cyan-400 hover:bg-red-500 dark:hover:bg-cyan-500 hover:text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
