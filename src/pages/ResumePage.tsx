import { experience } from '../data/experience';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const ResumePage = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Resume
        </h1>
        <p className="text-gray-400 text-center mb-12">
          Salt Lake City, UT · Open to relocation
        </p>

        <div className="space-y-8">
          {experience.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-[#e40027] transition-all hover:shadow-lg hover:shadow-[#e40027]/10"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  {item.type === 'work' ? (
                    <FaBriefcase className="text-[#e40027]" size={24} />
                  ) : (
                    <FaGraduationCap className="text-[#e40027]" size={24} />
                  )}
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <span className="text-sm text-gray-400">{item.period}</span>
                  </div>
                  <p className="text-[#e40027] font-medium mb-2">{item.company}</p>
                  {item.location && (
                    <p className="text-gray-400 text-sm mb-3">{item.location}</p>
                  )}
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  {item.achievements && item.achievements.length > 0 && (
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm">{achievement}</li>
                      ))}
                    </ul>
                  )}
                  {item.technologies && item.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-[#fff3f5] border border-[#ffe1e7] text-[#e40027] px-3 py-1 rounded text-xs font-mono"
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

        {/* Download Resume Button */}
        <div className="text-center mt-12">
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-[#e40027] hover:bg-[#c00022] text-white font-medium px-8 py-3 rounded-lg transition-colors"
          >
            Download Resume PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
