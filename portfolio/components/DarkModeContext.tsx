import React, { createContext, useState, useMemo } from "react";

interface DarkModeContextValue {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DarkModeContext = createContext<DarkModeContextValue | undefined>(
  undefined
);

export const DarkModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState(true);

  const value = useMemo(() => {
    return {
      darkMode,
      setDarkMode,
    };
  }, [darkMode, setDarkMode]);

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};
