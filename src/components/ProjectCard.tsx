import { FaGithub, FaExternalLinkAlt, FaYoutube } from "react-icons/fa";
import type { Project } from "../types";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="glass-card border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden hover:border-red-500 dark:hover:border-cyan-400 transition-all shadow-sm hover:shadow-lg hover:shadow-red-500/10 dark:hover:shadow-cyan-400/10 flex flex-col">
      {/* Thumbnail */}
      {project.image ? (
        <div className="h-48 bg-slate-700 overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="h-48 bg-linear-to-br from-slate-700 to-slate-800 flex items-center justify-center">
          <span className="text-6xl">{project.icon || "📦"}</span>
        </div>
      )}

      {/* Body */}
      <div className="p-6 grow flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {project.name}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 grow">
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

        {/* TODOs — visible reminders so they can't be forgotten */}
        {project.todos && project.todos.length > 0 && (
          <details className="mb-4 text-sm">
            <summary className="cursor-pointer text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-cyan-400 select-none">
              {project.todos.length} TODO
              {project.todos.length === 1 ? "" : "s"}
            </summary>
            <ul className="mt-2 ml-4 list-disc text-gray-600 dark:text-gray-400 space-y-1">
              {project.todos.map((todo, i) => (
                <li key={i}>{todo}</li>
              ))}
            </ul>
          </details>
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
          {project.download && (
            <a
              href={project.download}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-cyan-400 transition-colors"
            >
              <FaExternalLinkAlt size={18} />
              <span>Download</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
