import React, { createContext, FC, ReactNode, useContext, useState } from 'react';

const AppContext = createContext<AppState | null>(null);

//provide state types to interface
interface AppState {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  pageId: string;
  setPageId: (id: string) => void;
}

const AppProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  //*--state values and functions--*//
  ////////////////////////////////////////////////////////////////////////

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const [pageId, setPageIdImp] = useState('');
  const setPageId = (id: string) => setPageIdImp(id);
  ///////////////////////////////////////////////////////////////////////
  return (
    <AppContext.Provider
      value={{
        //add state to Provider
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        pageId,
        setPageId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//hook
export const useGlobalContext = (): AppState => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within AppProvider');
  }
  return context;
};

export default AppProvider;
