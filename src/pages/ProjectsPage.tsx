import { projects } from '../data/projects';
import { FaGithub, FaExternalLinkAlt, FaYoutube } from 'react-icons/fa';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
          Exploring AI-native interfaces and modern web technologies
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden hover:border-red-500 dark:hover:border-cyan-400 transition-all shadow-sm hover:shadow-lg hover:shadow-red-500/10 dark:hover:shadow-cyan-400/10 flex flex-col"
            >
              {/* Project Image/Thumbnail */}
              {project.image ? (
                <div className="h-48 bg-slate-700 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <span className="text-6xl">{project.icon || '📦'}</span>
                </div>
              )}

              {/* Project Info */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-red-50 dark:bg-cyan-500/10 border border-red-100 dark:border-cyan-500/30 text-red-600 dark:text-cyan-400 px-2 py-1 rounded text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-4 flex-wrap">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-cyan-400 transition-colors"
                    >
                      <FaGithub size={20} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-cyan-400 transition-colors"
                    >
                      <FaExternalLinkAlt size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.video && (
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-cyan-400 transition-colors"
                    >
                      <FaYoutube size={20} />
                      <span>Video</span>
                    </a>
                  )}
                </div>

                {/* Status/Stats */}
                {project.stars !== undefined && (
                  <div className="mt-4 pt-4 border-t border-slate-700 text-sm text-gray-400">
                    ⭐ {project.stars} stars
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View More on GitHub */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/AloofBuddha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-red-500 dark:text-cyan-400 hover:text-red-600 dark:hover:text-cyan-500 font-medium transition-colors"
          >
            <span>View More Projects on GitHub</span>
            <FaExternalLinkAlt size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
