import type { Project } from '../types';

export const projects: Project[] = [
  {
    name: 'CollabCanvas',
    description: 'Real-time collaborative whiteboard with AI-powered natural language commands. Users can manipulate canvas elements through conversational prompts (\'create 10 red circles, align vertically with 10px gaps\') leveraging GPT-4 with custom RAG for canvas context awareness. Supports batch operations and high-level UI generation. Built to explore AI-native interaction patterns—learning firsthand where LLMs excel (structured commands) vs. struggle (complex spatial reasoning, layering).',
    technologies: ['React', 'Firebase', 'TypeScript', 'Konva', 'Zustand', 'OpenAI API'],
    github: 'https://github.com/AloofBuddha/CollabCanvas',
    demo: 'https://collab-canvas-ben-cohen.vercel.app/',
    video: 'https://www.youtube.com/watch?v=5cwvJYZQS9s',
    image: null,
    icon: '🎨',
    featured: true,
  },
  // Add more projects here as needed
];
