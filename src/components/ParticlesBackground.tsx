import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      console.log('Particles initializing...');
      await loadSlim(engine);
      console.log('Particles initialized!');
    }).then(() => {
      setInit(true);
      console.log('Particles ready!');
    });
  }, []);

  if (!init) {
    return null;
  }

  return (
    <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: 'transparent',
            },
          },
          fpsLimit: 120,
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
              },
            },
            color: {
              value: '#e40027', // Resume red accent
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 0.3,
            },
            size: {
              value: { min: 1, max: 3 },
            },
            links: {
              enable: true,
              distance: 150,
              color: '#e40027',
              opacity: 0.2,
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
                mode: 'grab',
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
              grab: {
                distance: 140,
                links: {
                  opacity: 0.5,
                },
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
