import React, { useState, createContext, useContext, ReactNode } from 'react';

const users: string[] = [];

export interface IAppContext {
  user: string;
}

interface IState {
  appState: IAppContext;
  setAppState: (newState: IAppContext) => void;
}

const initState: IAppContext = {
  user: '',
};

const AppCtx = createContext<IState>({
  appState: initState,
  setAppState: () => {},
});

export const useAppState = () => useContext(AppCtx);

type AppStateProviderType = {
  children: ReactNode;
};

export const AppStateProvider = ({ children }: AppStateProviderType) => {
  const [appState, updateAppState] = useState<IAppContext>(initState);

  const setAppState = (newState: IAppContext) => {
    if (!users.includes(newState.user)) {
      newState.user = '';
    }

    const updatedState = { ...appState, ...newState };
    updateAppState(updatedState);
  };

  return <AppCtx.Provider value={{ appState, setAppState }}>{children}</AppCtx.Provider>;
};
