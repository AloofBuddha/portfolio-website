# Portfolio Website

A modern, multi-page portfolio website built with React 18, TypeScript, Vite 6, Tailwind CSS v4, and an interactive particle background using TSParticles. Features a clean glass-morphism design with light/dark mode support.

## Features

- **Interactive Particle Background**: Dynamic particle network visible across all pages with connecting lines, mouse repulsion, and click-to-add particles
- **Dark Mode Toggle**: Light/dark theme switcher with localStorage persistence
- **Glass-Morphism Design**: Translucent cards and navbar showing particles behind
- **Multi-Page Navigation**: React Router v7 with Home, Resume, Projects, and About pages
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Mobile-first design that looks great on all devices
- **Modern Color Scheme**: Red accents for light mode, cyan for dark mode

## Project Structure

```
portfolio-website/
├── src/
│   ├── components/              # React components
│   │   ├── ParticlesBackground.tsx  # Interactive particle effect (all pages)
│   │   └── Navbar.tsx              # Navigation with dark mode toggle
│   ├── pages/                   # Page components
│   │   ├── HomePage.tsx        # Landing page with hero
│   │   ├── ResumePage.tsx      # Work experience & education
│   │   ├── ProjectsPage.tsx    # Portfolio projects showcase
│   │   └── AboutPage.tsx       # Bio, skills, and contact
│   ├── contexts/               # React contexts
│   │   └── ThemeContext.tsx   # Dark mode state management
│   ├── data/                   # Data files (TypeScript)
│   │   ├── skills.ts          # Skills with categories
│   │   ├── projects.ts        # Project details with links
│   │   └── experience.ts      # Work history & education
│   ├── types/                  # TypeScript type definitions
│   │   └── index.ts
│   ├── App.tsx                 # Main app with routing
│   ├── main.tsx                # Entry point
│   └── index.css               # Tailwind + custom utilities
├── public/                     # Static assets
│   ├── resume.pdf             # Downloadable resume
│   ├── collab-canvas-pic.png  # Project images
│   └── llm-ui-pic.png
├── .claude/                    # Claude Code documentation
│   ├── project-context.md     # Project context for future sessions
│   └── DEPLOY.md              # Deployment instructions
├── package.json
├── vite.config.ts
└── tailwind.config.js
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or another port if 5173 is busy).

### Build for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Customization Guide

### 1. Personal Information

Update the data files in `src/data/`:
- **`experience.ts`**: Add your work history and education
- **`projects.ts`**: Add your projects with links, descriptions, and technologies
- **`skills.ts`**: List your technical skills with categories

Update the pages:
- **`src/pages/HomePage.tsx`**: Update hero text and description
- **`src/pages/AboutPage.tsx`**: Update bio and contact information

### 2. Resume PDF

Replace `public/resume.pdf` with your own resume PDF for the download button.

### 3. Project Images

Add project screenshots to the `public/` folder and reference them in `src/data/projects.ts`:
```typescript
image: '/your-project-image.png'
```

### 4. Color Scheme

The site uses:
- **Light mode**: Red (#ef4444, `red-500`) accents
- **Dark mode**: Cyan (#22d3ee, `cyan-400`) accents

To change colors, update Tailwind class names throughout components:
- Replace `red-500` with your preferred light mode color
- Replace `cyan-400`/`cyan-500` with your preferred dark mode color

### 5. Particle Background

Customize in `src/components/ParticlesBackground.tsx`:
```typescript
particles: {
  number: { value: 150 },        // Particle count
  opacity: { value: 0.85 },      // Particle opacity
  size: { value: { min: 1, max: 3 } },  // Particle size
  links: {
    distance: 150,               // Connection distance
    opacity: 0.65,               // Line opacity
  },
  move: {
    speed: 1,                    // Movement speed
  },
}
```

### 6. Glass Effect

Glass-morphism effect is defined in `src/index.css`:
```css
.glass-card {
  background: rgba(255, 255, 255, 0.7) !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
```

**Important**: Do NOT use `backdrop-filter` - it breaks transparency in this setup.

## Deployment

See detailed deployment instructions in `.claude/DEPLOY.md`.

### Quick Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy to production
vercel --prod
```

### GitHub Pages Alternative

See `.claude/DEPLOY.md` for full GitHub Pages setup instructions.

## Technologies Used

- **React 18**: UI library with hooks
- **TypeScript**: Type-safe JavaScript
- **Vite 6**: Fast build tool and dev server
- **React Router v7**: Client-side routing
- **Tailwind CSS v4**: Utility-first CSS framework
- **TSParticles v3**: Interactive particle background (@tsparticles/react, @tsparticles/slim)
- **React Icons**: Icon library (FaGithub, FaLinkedin, etc.)

## Technical Implementation Notes

### Z-Index Architecture
- Body background: layer 0
- Particles: `z-index: 1` (fixed positioning)
- Main content: `z-index: 10`
- Navbar: `z-index: 50`

### Dark Mode
- Uses Tailwind v4 class-based dark mode with custom `@variant dark (.dark &);` directive
- Theme state managed via React Context (ThemeContext)
- Persists preference in localStorage

### Glass-Morphism Effect
- **Critical**: Uses pure `rgba()` transparency, NOT `backdrop-filter`
- `backdrop-filter` causes transparency to fail completely in this setup
- Depth achieved with `box-shadow` instead of blur

### Particle Background
- Uses @tsparticles/react v3 (NOT deprecated react-tsparticles v2)
- Rendered globally in App.tsx, visible on all pages
- Fixed positioning with pointer-events management for interactivity

## Troubleshooting

### Particles not showing
- Verify @tsparticles packages are installed: `@tsparticles/react`, `@tsparticles/engine`, `@tsparticles/slim`
- Check console for initialization errors
- Ensure ParticlesBackground is rendered in App.tsx

### Glass effect not working (cards appear opaque)
- **DO NOT use `backdrop-filter`** - it breaks rgba transparency
- Verify `.glass-card` utility in `src/index.css` uses pure `rgba()` values
- Check that `!important` flags are present in the utility definitions

### Dark mode not working
- Ensure `@variant dark (.dark &);` is in `src/index.css`
- Check ThemeContext is wrapping the app in App.tsx
- Verify dark mode classes use `dark:` prefix correctly

### Build errors with Tailwind v4
- Don't use slashes in custom utility names (use `@layer utilities` instead of `@utility`)
- Ensure content paths in `tailwind.config.js` include all component files

### TypeScript errors
- Run `npm run build` to see all type errors
- Check type definitions in `src/types/index.ts`
- Ensure all data files export properly typed objects

## License

MIT License - feel free to use this template for your own portfolio!
