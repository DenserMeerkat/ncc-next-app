import React, { createContext, useState, ReactNode } from "react";

interface AppState {
  activePage: string;
  setActivePage: (page: string) => void;
}

const AppStateContext = createContext<AppState | undefined>(undefined);

interface AppStateProviderProps {
  children: ReactNode;
}

const AppStateProvider: React.FC<AppStateProviderProps> = ({ children }) => {
  const [activePage, setActivePage] = useState("home");

  const state: AppState = {
    activePage,
    setActivePage,
  };

  return (
    <AppStateContext.Provider value={state}>
      {children}
    </AppStateContext.Provider>
  );
};

export { AppStateContext, AppStateProvider };
