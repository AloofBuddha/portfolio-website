import { projects } from "../data/projects";
import { FaExternalLinkAlt } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-16">
          Exploring AI-native interfaces, real-time systems, and modern web
          tooling
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>

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
