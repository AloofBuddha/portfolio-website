# Portfolio Website

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and an interactive particle background using TSParticles.

## Features

- **Interactive Particle Background**: Dynamic particle network with connecting lines that respond to mouse movement
- **Responsive Design**: Mobile-first design that looks great on all devices
- **Smooth Scrolling**: Navigate between sections with smooth scroll animations
- **Modern Tech Stack**: Built with React, Vite, and Tailwind CSS
- **Easy Customization**: All content is stored in data files for easy updates

## Project Structure

```
portfolio-website/
├── src/
│   ├── components/          # React components
│   │   ├── ParticlesBackground.jsx  # Interactive particle effect
│   │   ├── Navbar.jsx              # Sticky navigation bar
│   │   ├── Hero.jsx                # Landing section
│   │   ├── About.jsx               # About section with skills
│   │   ├── Experience.jsx          # Work experience & education
│   │   ├── Projects.jsx            # Portfolio projects
│   │   ├── Contact.jsx             # Contact section
│   │   └── Footer.jsx              # Footer
│   ├── data/                # Data files (easy to customize)
│   │   ├── skills.js       # Your skills list
│   │   ├── projects.js     # Your projects
│   │   └── experience.js   # Work experience & education
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # App entry point
│   └── index.css           # Global styles with Tailwind
├── public/                 # Static assets
├── package.json
├── vite.config.js
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

Update the following files with your information:

**Hero Section** (`src/components/Hero.jsx`):
- Replace "Your Name" with your actual name
- Update job title and description
- Add your social media links (GitHub, LinkedIn, Email)

**Contact Section** (`src/components/Contact.jsx`):
- Update social media links
- Replace email address

**Footer** (`src/components/Footer.jsx`):
- Replace "Your Name" with your actual name

**index.html**:
- Update the `<title>` tag

### 2. Projects

Edit `src/data/projects.js` to add your projects:
- Replace placeholder projects with your own
- Add project screenshots (place images in `public/images/projects/`)
- Update GitHub and demo links
- Customize technologies used

### 3. Experience & Education

Edit `src/data/experience.js`:
- Add your work experience
- Update education details
- Add relevant achievements

### 4. Skills

Edit `src/data/skills.js`:
- Add your tech skills
- Customize skill categories
- Update icons (using emojis or you can integrate react-icons)

### 5. Resume

Add your resume PDF to `public/resume.pdf` for the download button to work.

### 6. Color Scheme

The site uses a dark blue theme. To customize colors, edit:
- Tailwind classes in components
- `src/components/ParticlesBackground.jsx` for particle colors
- `tailwind.config.js` for custom theme colors

### 7. Particle Background

Customize the particle effect in `src/components/ParticlesBackground.jsx`:
- Adjust `number.value` for more/fewer particles
- Change `color.value` for different particle colors
- Modify `links.distance` for connection range
- Adjust `move.speed` for particle movement speed

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy (it will auto-detect Vite configuration)

### Netlify

1. Push your code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages

1. Install gh-pages: `npm install -D gh-pages`
2. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Update `vite.config.js` base to your repo name
4. Run: `npm run deploy`

## Technologies Used

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **TSParticles**: Interactive particle background
- **React Icons**: Icon library

## Development Notes

- The particle background is fixed and sits behind all content (z-index: -10)
- Smooth scrolling is enabled via CSS in `App.css`
- The navbar is sticky and has a backdrop blur effect
- All sections are responsive with mobile-first design
- The project uses the newer @tsparticles/react v3 package (not the deprecated react-tsparticles)

## Troubleshooting

### Particles not showing
- Check console for errors
- Ensure @tsparticles packages are installed correctly
- Verify the ParticlesBackground component is rendered

### Tailwind styles not working
- Ensure Tailwind directives are in `src/index.css`
- Check `tailwind.config.js` content paths
- Clear cache and rebuild: `npm run dev`

### Smooth scroll not working
- Check that section IDs match navbar href values
- Ensure `scroll-behavior: smooth` is in CSS

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

Built with ❤️ using React, Vite, Tailwind CSS, and TSParticles.
