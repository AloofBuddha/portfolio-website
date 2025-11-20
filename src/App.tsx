import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-slate-900">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
