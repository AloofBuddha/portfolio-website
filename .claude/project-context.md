# Portfolio Website - Project Context

## Project Overview

This is a **multi-page** portfolio website built with React + Vite + TypeScript, featuring an interactive particle background using TSParticles. The site showcases Benjamin Cohen's resume, projects, and contact information.

## Tech Stack

- **Frontend**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite 6
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v4
- **Particles**: @tsparticles/react v3 (NOT the deprecated react-tsparticles v2)
- **Icons**: react-icons
- **Linting**: ESLint with TypeScript support

## Important Notes

### Particle Library
- Using **@tsparticles/react v3**, not react-tsparticles v2
- Packages installed:
  - `@tsparticles/react`
  - `@tsparticles/engine`
  - `@tsparticles/slim`
- Import syntax: `import Particles from "@tsparticles/react";`
- Uses `loadSlim` from `@tsparticles/slim`

### Architecture Decisions

1. **Multi-Page Design**: Separate pages with React Router navigation (Home, Resume, Projects, About)
2. **TypeScript**: Full TypeScript implementation for type safety
3. **Data Separation**: All content (projects, skills, experience) is stored in `/src/data/` as TypeScript files with type definitions
4. **Page Structure**: Each page is a separate component in `/src/pages/`
5. **Particle Background**: Only on home page, fixed background with z-index: -10
6. **Entrance Animation**: Home page shows particles first, then hero text fades in after 800ms
7. **Responsive Design**: Mobile-first approach using Tailwind breakpoints

## File Structure

```
src/
├── components/
│   ├── ParticlesBackground.tsx  # Particle network effect (TypeScript)
│   └── Navbar.tsx              # Multi-page navigation with React Router
├── pages/
│   ├── HomePage.tsx            # Landing page with particles + hero
│   ├── ResumePage.tsx          # Work experience + education display
│   ├── ProjectsPage.tsx        # Portfolio projects grid
│   └── AboutPage.tsx           # Bio + skills + contact
├── data/
│   ├── skills.ts               # Skills array with TypeScript types
│   ├── projects.ts             # Projects array with types
│   └── experience.ts           # Work experience + education with types
├── types/
│   └── index.ts                # TypeScript type definitions
├── App.tsx                     # Main component with Router setup
├── main.tsx                    # Entry point (TypeScript)
├── index.css                   # Tailwind directives + global styles
└── App.css                     # Additional styles if needed
```

## Key Features Implemented

1. **Interactive Particle Background**:
   - Particles (dots) connect with lines when close to each other
   - "Grab" mode on hover - particles connect to mouse cursor
   - "Push" mode on click - adds new particles
   - Only appears on home page
   - Configured in `src/components/ParticlesBackground.tsx`

2. **Entrance Animation**:
   - Particle background appears immediately
   - Hero text fades in after 800ms delay
   - Smooth opacity and transform transition
   - Implemented in `src/pages/HomePage.tsx`

3. **Multi-Page Navigation**:
   - React Router v7 for client-side routing
   - Navbar with active page highlighting
   - Mobile-responsive hamburger menu
   - Pages: Home (`/`), Resume (`/resume`), Projects (`/projects`), About (`/about`)

4. **TypeScript Integration**:
   - Full TypeScript conversion complete
   - Type definitions in `src/types/index.ts`
   - Typed data files and components
   - ESLint configured for TypeScript

5. **Page Structure**:
   - **HomePage**: Particle background + hero with entrance animation
   - **ResumePage**: Full work history and education
   - **ProjectsPage**: Project showcase with links
   - **AboutPage**: Bio, skills, and contact information

## Current Data

All data is already populated with Benjamin Cohen's information:

**Personal Info:**
- Name: Benjamin Cohen
- Title: Senior Frontend Engineer
- Email: bac1087@gmail.com
- Phone: (516) 668-3981
- Location: Salt Lake City, UT
- GitHub: github.com/AloofBuddha
- LinkedIn: linkedin.com/in/aloofbuddha

**Experience:** SoFi, Code Platoon, DUOS, ServiceMaster, Fullstack Academy, Microsoft, Johns Hopkins University

**Featured Project:** CollabCanvas (AI-powered collaborative whiteboard)

## Customization Points

To add more content:
1. Add more projects to `src/data/projects.ts`
2. Add project screenshots to `public/images/`
3. Add resume PDF to `public/resume.pdf`
4. Adjust particle settings in `src/components/ParticlesBackground.tsx`
5. Modify entrance animation in `src/pages/HomePage.tsx`

## Running the Project

**Development**:
```bash
npm run dev
```
Server runs on http://localhost:5173

**Build**:
```bash
npm run build
```
Output in `dist/` folder

**Preview Production**:
```bash
npm run preview
```

## Development Guidelines

- **DO NOT** run long-running processes (dev servers) - user prefers to run these manually
- Provide clear instructions instead of running servers
- Particle configuration can be adjusted in ParticlesBackground.jsx
- All colors use Tailwind classes for consistency
- Maintain mobile-first responsive design

## Known Considerations

- Particle background is performance-intensive; reduce particle count on mobile if needed
- Smooth scrolling CSS is in App.css
- Navbar has backdrop blur for modern glass effect
- All external links use `target="_blank"` and `rel="noopener noreferrer"` for security

## Future Enhancement Ideas

- Add dark/light mode toggle
- Implement actual GitHub API integration for dynamic project loading
- Add contact form with email service (EmailJS, Formspree, etc.)
- Add loading animations / scroll reveal effects
- Add project filter by technology
- Add blog section
- Implement SEO optimizations
- Add analytics

## User Preferences

- User does NOT want long-running tasks (like dev servers) executed by Claude
- Provide instructions for running such tasks instead
- Keep this context file updated for future sessions
