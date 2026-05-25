import { createContext, useContext, useEffect, useState } from "react";

interface DevModeContextType {
  devMode: boolean;
  toggleDevMode: () => void;
}

const DevModeContext = createContext<DevModeContextType | undefined>(undefined);

/**
 * Dev mode gates developer-only UI (TODO lists, etc.) from public visitors.
 * Off by default. Toggle via `?dev=1` or `?dev=0` in the URL — the value
 * is then persisted to localStorage so subsequent visits remember it.
 */
export function DevModeProvider({ children }: { children: React.ReactNode }) {
  const [devMode, setDevMode] = useState<boolean>(() => {
    const params = new URLSearchParams(window.location.search);
    const param = params.get("dev");
    if (param === "1") return true;
    if (param === "0") return false;
    return localStorage.getItem("devMode") === "1";
  });

  useEffect(() => {
    localStorage.setItem("devMode", devMode ? "1" : "0");
  }, [devMode]);

  const toggleDevMode = () => setDevMode((v) => !v);

  return (
    <DevModeContext.Provider value={{ devMode, toggleDevMode }}>
      {children}
    </DevModeContext.Provider>
  );
}

export function useDevMode() {
  const ctx = useContext(DevModeContext);
  if (ctx === undefined) {
    throw new Error("useDevMode must be used within a DevModeProvider");
  }
  return ctx;
}
