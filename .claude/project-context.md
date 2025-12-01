# Portfolio Website - Project Context

## Project Overview

This is a **multi-page** portfolio website built with React + Vite + TypeScript, featuring an interactive particle background using TSParticles visible across all pages. The site showcases Ben Cohen's resume, projects, and contact information with a modern glass-morphism design and dark mode support.

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
5. **Particle Background**: Visible on ALL pages, rendered at app level in App.tsx with fixed positioning and z-index: 1
6. **Z-Index Stacking**: Body background → Particles (z-index: 1) → Content (z-index: 10)
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

   - 150 particles that connect with lines when within 150px distance
   - "Repulse" mode on hover - particles scatter from mouse cursor
   - "Push" mode on click - adds 4 new particles
   - Visible on ALL pages (rendered in App.tsx)
   - Red (#ef4444) particles in light mode, cyan (#22d3ee) in dark mode
   - Opacity: 0.85 for particles, 0.65 for connection lines
   - Configured in `src/components/ParticlesBackground.tsx`

2. **Dark Mode Toggle**:

   - Light/dark theme switcher in navbar
   - Defaults to light mode
   - Persists preference in localStorage
   - Uses Tailwind v4 class-based dark mode with custom `@variant dark (.dark &);` directive
   - Context-based state management via ThemeContext

3. **Glass-Morphism Design**:

   - Translucent cards and navbar showing particles behind
   - Custom `.glass-card` and `.glass-nav` utilities in index.css
   - Uses pure `rgba()` transparency (NO backdrop-filter due to rendering issues)
   - Light mode: `rgba(255, 255, 255, 0.7)` with red accents
   - Dark mode: `rgba(30, 41, 59, 0.5)` with cyan accents

4. **Multi-Page Navigation**:

   - React Router v7 for client-side routing
   - Navbar with active page highlighting
   - Mobile-responsive hamburger menu
   - Translucent navbar showing particles
   - Pages: Home (`/`), Resume (`/resume`), Projects (`/projects`), About (`/about`)

5. **Color Scheme**:

   - **Light Mode**: White/gray backgrounds with red (#ef4444) accents
   - **Dark Mode**: Slate backgrounds with cyan (#22d3ee) accents
   - Consistent accent colors across all interactive elements (links, buttons, borders)

6. **TypeScript Integration**:

   - Full TypeScript conversion complete
   - Type definitions in `src/types/index.ts`
   - Typed data files and components
   - ESLint configured for TypeScript

7. **Page Structure**:
   - **HomePage**: Hero section with links to Resume and Projects pages
   - **ResumePage**: Full work history, education, and downloadable resume PDF
   - **ProjectsPage**: Featured projects (CollabCanvas and LLM UI) with links and images
   - **AboutPage**: Bio, skills grid, and contact information

## Current Data

All data is already populated with Benjamin Cohen's information:

**Personal Info:**

- Name: Ben Cohen
- Title: Senior Software Engineer
- Email: bac1087@gmail.com
- Phone: (516) 668-3981
- Location: Salt Lake City, UT
- GitHub: github.com/AloofBuddha
- LinkedIn: linkedin.com/in/aloofbuddha

**Experience:** SoFi, Code Platoon, DUOS, ServiceMaster, Fullstack Academy, Microsoft, Johns Hopkins University

**Featured Projects:**
- **CollabCanvas**: AI-powered collaborative whiteboard with natural language commands
- **LLM UI**: Claude-inspired chat interface for xAI's Grok API with streaming responses

## Customization Points

To modify the site:

1. **Add/Edit Projects**: Update `src/data/projects.ts` with project details
2. **Project Images**: Place images in `public/` folder and reference them in projects data
3. **Resume PDF**: Replace `public/resume.pdf` with your own resume
4. **Particle Settings**: Adjust particle count, colors, and behavior in `src/components/ParticlesBackground.tsx`
5. **Color Scheme**: Modify colors in component className props (red-500 for light, cyan-400 for dark)
6. **Content**: Update bio, skills, and experience in respective data files

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

## Technical Notes & Known Issues

### Glass Effect Implementation
- **IMPORTANT**: Do NOT use `backdrop-filter` CSS property - it causes rgba transparency to fail completely
- Current implementation uses pure `rgba()` transparency with `box-shadow` for depth
- This was discovered through extensive debugging where backdrop-filter made cards render as solid opaque white

### Tailwind v4 Dark Mode
- Uses custom `@variant dark (.dark &);` directive in index.css for class-based dark mode
- Standard `darkMode: 'class'` config exists but the CSS variant is what actually works

### Performance
- Particle background with 150 particles is moderately performance-intensive
- Could reduce particle count on mobile if needed via responsive logic

### Z-Index Architecture
- Body background (layer 0)
- Particles: `z-index: 1` with `position: fixed`
- Main content: `z-index: 10`
- Navbar: `z-index: 50`
- This stacking ensures particles show through translucent elements

### Other Notes
- All external links use `target="_blank"` and `rel="noopener noreferrer"` for security
- Pages use `pt-24 pb-20 px-4` for proper navbar clearance
- Particle container has `pointer-events-none`, Particles component has `pointer-events-auto` for interactivity

## Future Enhancement Ideas

- Implement actual GitHub API integration for dynamic project loading
- Add contact form with email service (EmailJS, Formspree, etc.)
- Add loading animations / scroll reveal effects
- Add project filter by technology
- Add blog section
- Implement SEO optimizations (meta tags, OpenGraph, etc.)
- Add analytics (Google Analytics, Plausible, etc.)
- Consider adding a resume builder/editor interface

## User Preferences

- User does NOT want long-running tasks (like dev servers) executed by Claude
- Provide instructions for running such tasks instead
- Keep this context file updated for future sessions
- **DO NOT create extra documentation files** (like CHANGES.md, QUICKSTART.md, etc.)
  - Use .claude/ folder for long-term context
  - Use README.md for developer documentation
  - Can create terminal artifacts to communicate but don't save them to repo
  - Don't pollute the repo with documentation files
