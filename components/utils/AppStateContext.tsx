import React, { createContext, useState, ReactNode } from "react";
import { usePathname } from "next/navigation";

interface AppState {
  activePage: string;
  setActivePage: (page: string) => void;
}

const AppStateContext = createContext<AppState | undefined>(undefined);

interface AppStateProviderProps {
  children: ReactNode;
}

const AppStateProvider: React.FC<AppStateProviderProps> = ({ children }) => {
  const pathname = usePathname();
  const currentPage = pathname.split("/")[1];
  const [activePage, setActivePage] = useState(
    currentPage === "" ? "home" : currentPage
  );

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
