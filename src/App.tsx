import { ThemeProvider } from "./contexts/ThemeContext";
import { DevModeProvider } from "./contexts/DevModeContext";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

/**
 * Single-page layout. All sections render in order; the navbar uses
 * anchor links (#home, #projects, …) to scroll between them. Section IDs
 * live here so the page components stay framework-agnostic.
 *
 * `scroll-mt-24` gives each section enough top padding so anchor jumps
 * land below the fixed navbar (h-16) instead of behind it.
 */
function App() {
  return (
    <ThemeProvider>
      <DevModeProvider>
        <div className="relative min-h-screen text-gray-900 dark:text-white transition-colors">
          <ParticlesBackground />
          <Navbar />
          <main className="relative z-10">
            <section id="home" className="scroll-mt-24">
              <HomePage />
            </section>
            <section id="about" className="scroll-mt-24">
              <AboutPage />
            </section>
            <section id="projects" className="scroll-mt-24">
              <ProjectsPage />
            </section>
            <section id="contact" className="scroll-mt-24">
              <ContactPage />
            </section>
          </main>
        </div>
      </DevModeProvider>
    </ThemeProvider>
  );
}

export default App;
