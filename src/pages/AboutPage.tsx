const AboutPage = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          About Me
        </h1>

        <div className="text-gray-700 dark:text-gray-300 space-y-4">
          <p className="text-lg">
            I'm a{" "}
            <span className="text-red-500 dark:text-cyan-400 font-semibold">
              design-oriented senior frontend engineer
            </span>{" "}
            who owns the frontend end-to-end (React, TypeScript, GraphQL,
            testing, CI/CD) and partners closely with product and design to ship
            polished, delightful, high-conversion experiences.
          </p>
          <p className="text-lg">
            With a strong foundation in{" "}
            <span className="text-red-500 dark:text-cyan-400 font-semibold">
              teaching developers
            </span>
            , building design systems, and architecting complex UIs, I bring
            both technical depth and a collaborative mindset to every project.
          </p>
          <p className="text-lg">
            I'm particularly passionate about exploring how{" "}
            <span className="text-red-500 dark:text-cyan-400 font-semibold">
              AI-native interfaces
            </span>{" "}
            can make powerful tools more intuitive and accessible—especially for
            developers. My projects like CollabCanvas demonstrate this
            exploration, where I've learned firsthand where LLMs excel and where
            they struggle.
          </p>
          <p className="text-lg">
            Outside of work my main passions are Buddhism/mysticism, improv
            comedy, and wheel throw pottery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
