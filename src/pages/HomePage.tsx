import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ParticlesBackground from '../components/ParticlesBackground';

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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticlesBackground />

      <div
        className={`relative z-10 max-w-4xl mx-auto px-4 text-center transition-all duration-1000 ${
          showHero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Hi, I'm <span className="text-[#e40027]">Benjamin Cohen</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Senior Frontend Engineer
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          <strong className="text-white">Design-oriented senior engineer</strong> who owns the frontend
          end-to-end (React, TypeScript, GraphQL, testing, CI/CD) and partners
          closely with product and design to ship polished, delightful, high-conversion experiences.
          Passionate about exploring how <span className="text-[#e40027] font-semibold">AI-native interfaces</span> can make
          powerful tools more intuitive and accessible—especially for developers.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/AloofBuddha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#e40027] transition-colors"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://linkedin.com/in/aloofbuddha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#e40027] transition-colors"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="mailto:bac1087@gmail.com"
            className="text-gray-300 hover:text-[#e40027] transition-colors"
          >
            <FaEnvelope size={32} />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/projects"
            className="bg-[#e40027] hover:bg-[#c00022] text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            View My Work
          </Link>
          <Link
            to="/about"
            className="border border-[#e40027] text-[#e40027] hover:bg-[#e40027]/10 font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
