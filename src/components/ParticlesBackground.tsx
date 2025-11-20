import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from '../contexts/ThemeContext';

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return null;
  }

  // Different colors for light/dark mode - red for light, cyan for dark
  const particleColor = theme === 'dark' ? '#22d3ee' : '#ef4444';
  const lineColor = theme === 'dark' ? '#22d3ee' : '#ef4444';

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
      <Particles
        id="tsparticles"
        className="w-full h-full pointer-events-auto"
        options={{
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 120,
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
              },
            },
            color: {
              value: particleColor,
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 0.85,
            },
            size: {
              value: { min: 1, max: 3 },
            },
            links: {
              enable: true,
              distance: 150,
              color: lineColor,
              opacity: 0.65,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: false,
              straight: false,
              outModes: {
                default: 'out',
              },
            },
          },
          interactivity: {
            detectsOn: 'window',
            events: {
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              onClick: {
                enable: true,
                mode: 'push',
              },
              resize: {
                enable: true,
                delay: 0.5,
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
