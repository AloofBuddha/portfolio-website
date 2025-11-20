import { experience } from "../data/experience";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const ResumePage = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Resume
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
          New York, NY · Open to relocation
        </p>
        {/* Download Resume Button */}
        <div className="text-center mb-12">
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-red-500 hover:bg-red-600 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Download Resume PDF
          </a>
        </div>
        <div className="space-y-8">
          {experience.map((item, index) => (
            <div
              key={index}
              className="glass-card border border-gray-200 dark:border-slate-700 rounded-lg p-6 hover:border-red-500 dark:hover:border-cyan-400 transition-all shadow-sm hover:shadow-lg hover:shadow-red-500/10 dark:hover:shadow-cyan-400/10"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  {item.type === "work" ? (
                    <FaBriefcase
                      className="text-red-500 dark:text-cyan-400"
                      size={24}
                    />
                  ) : (
                    <FaGraduationCap
                      className="text-red-500 dark:text-cyan-400"
                      size={24}
                    />
                  )}
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-red-500 dark:text-cyan-400 font-medium mb-2">
                    {item.company}
                  </p>
                  {item.location && (
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      {item.location}
                    </p>
                  )}
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {item.description}
                  </p>
                  {item.achievements && item.achievements.length > 0 && (
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm leading-relaxed">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-red-50 dark:bg-cyan-500/10 border border-red-100 dark:border-cyan-500/30 text-red-600 dark:text-cyan-400 px-3 py-1 rounded text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
