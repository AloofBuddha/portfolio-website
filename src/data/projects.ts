import type { Project } from "../types";

export const projects: Project[] = [
  {
    name: "CollabCanvas",
    description:
      "Real-time collaborative whiteboard with AI-assisted shape composition. Say 'make me a firetruck' and the AI agent assembles it out of primitive shapes on the canvas; multiplayer state is synced via PartyKit so everyone sees the build happen live. Built to push on a specific question: how far can an LLM get at spatial reasoning when the only output is a list of shapes, positions, and colors?",
    technologies: [
      "React",
      "TypeScript",
      "PartyKit",
      "Firebase",
      "Konva",
      "OpenAI API",
      "Vercel",
    ],
    github: "https://github.com/AloofBuddha/collab-canvas-v2",
    demo: "https://collab-canvas-ben-cohen.vercel.app/",
    video: "https://www.youtube.com/watch?v=5cwvJYZQS9s",
    image: "/collab-canvas-pic.png",
    icon: "🎨",
    todos: [
      "Swap OpenAI for Claude API and rerun prompt engineering on shape composition",
    ],
  },
  {
    name: "Fraction Dojo",
    description:
      "Karate-themed math tutor that teaches fraction equivalence (½ = 2/4 = 4/8). The whole is a wooden board; chop it in half, glue pieces back, or simplify — three tools that turn 'equivalent fractions' from abstract notation into something you can see and feel. An animated sensei guides the lesson belt-by-belt. Built in a week as a Synthesis-Tutor clone, with a framework-agnostic core/ layer so the game logic could be ported to React Native later.",
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind v4",
      "shadcn/ui",
      "Zustand",
      "Vitest",
    ],
    github: "https://github.com/AloofBuddha/fraction-dojo",
    demo: "https://fraction-dojo.vercel.app/",
    image: "/fraction-dojo.png",
    icon: "🥋",
    todos: [
      "Record a short demo walkthrough video",
    ],
  },
  {
    name: "LLM UI",
    description:
      "Chat interface powered by Claude (Anthropic API) featuring real-time streaming responses and an innovative explanation pane for contextual lookups. Select any text in the chat to get instant explanations from Dictionary, Wikipedia, or AI-powered summaries. Includes persistent chat history, markdown rendering with GitHub-flavored syntax, and LaTeX equation support.",
    technologies: ["React", "TypeScript", "Vite", "Vercel", "Anthropic API", "SSE"],
    github: "https://github.com/AloofBuddha/llm-ui",
    demo: "https://llm-ui-ben-cohen.vercel.app/",
    video: "https://www.youtube.com/watch?v=7MZHiNXoswg",
    image: "/llm-ui-pic.png",
    icon: "💬",
  },
  {
    name: "ASV Fleet Command",
    description:
      "Real-time command and monitoring interface for a fleet of autonomous surface vehicles. Live telemetry streams over PartyKit, interactive Leaflet map with geospatial calculations (bearing, distance along route), and an operational UI designed for at-a-glance vessel status. Built to demonstrate real-time data streaming and operational tooling design.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "PartyKit",
      "Leaflet",
      "Turf.js",
      "StyleX",
    ],
    github: "https://github.com/AloofBuddha/asv-fleet-command",
    demo: "https://asv-fleet-command.vercel.app",
    image: "/asv-fleet-command.png",
    icon: "🛥️",
    todos: [
      "Record short demo video showing vessels moving along routes",
    ],
  },
  {
    name: "Quantamental Dashboard",
    description:
      "High-performance stock screening and analysis dashboard. Real-time price updates over WebSockets, AG Grid for tens of thousands of rows, and customizable factor scoring with conditional color rules so quant patterns pop visually. Built to explore the UI side of a quant workflow — making large tabular data legible and actionable.",
    technologies: [
      "React",
      "TypeScript",
      "AG Grid",
      "WebSockets",
      "Node.js",
      "Vite",
    ],
    github: "https://github.com/AloofBuddha/quantamental-dashboard",
    demo: "https://quantamental-dashboard.vercel.app/",
    image: "/quantamental-dashboard.png",
    icon: "📈",
    todos: [
      "Host the Node WebSocket server (Fly.io or Render)",
    ],
  },
  {
    name: "LangSmith Trace Viewer",
    description:
      "Hierarchical viewer for LangSmith execution traces. Navigate execution trees, inspect LLM inputs/outputs at each step, and see timing and cost rolled up per branch. Originally built as a take-home — kept as a portfolio piece because the UI patterns (collapsible trees over large nested JSON, latency/cost visualisation) generalise well to any observability tool.",
    technologies: ["React", "TypeScript", "Node.js", "LangSmith API"],
    github: "https://github.com/AloofBuddha/langchain-takehome",
    demo: "https://langsmith-trace-viewer.vercel.app/",
    image: "/langchain-trace-viewer.png",
    icon: "🔍",
    todos: [
      "Host backend server (Fly.io or Render)",
    ],
  },
  {
    name: "OpenEMR Agent (Gauntlet AI)",
    description:
      "Agentic AI work on the OpenEMR healthcare platform, built during the Gauntlet AI cohort. Includes a custom validation chain for OpenEMR's PHP codebase and PHPStan baseline tooling. Live demo isn't practical (OpenEMR is heavy to keep running) — the work is best shown as a recorded walkthrough.",
    technologies: ["PHP", "OpenEMR", "PHPStan", "AI Agents"],
    video: "https://www.youtube.com/watch?v=cW_nqSDpTPg&t=1s",
    image: "/openemr-agent.png",
    icon: "🏥",
    todos: [
      "Decide whether to link the agent fork or keep source private",
    ],
  },
  {
    name: "Warehouse Wreckage",
    description:
      "Carnival-style knock-down-the-barrels game written in Unreal Engine 5 to learn UE physics, UI, and game-loop logic in C++. Spawn projectiles, watch the barrel pyramid collapse, and chase the win state.",
    technologies: ["C++", "Unreal Engine 5"],
    github: "https://github.com/AloofBuddha/WarehouseWreckage",
    download: "https://github.com/AloofBuddha/WarehouseWreckage/releases/download/v1/Windows.zip",
    image: "/warehouse-wreckage.png",
    icon: "🎯",
    todos: [
      "Record gameplay video for embedding",
      "Investigate UE5 → browser export (likely needs the community HTML5 fork; may not be feasible)",
    ],
  },
];
