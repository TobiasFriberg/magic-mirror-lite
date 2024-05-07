import { getHours } from 'date-fns';
import React, { useState, createContext, useContext, ReactNode, useEffect } from 'react';
import { usersConfig } from './users.example';
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

  useEffect(() => {
    setInterval(() => {
      let configToSet = '';
      const date = new Date();
      const hour = date.getHours();
      const minute = date.getMinutes();
      Object.entries(usersConfig).forEach((user) => {
        const configKey = user[0];
        const startAt = usersConfig[configKey].startAt;

        if (startAt && hour >= startAt?.hour && minute >= startAt?.minute) {
          configToSet = configKey;
        }
      });

      if (configToSet !== appState.user) {
        setAppState({ user: configToSet });
      }
    }, 30000);
  }, []);

  const setAppState = (newState: IAppContext) => {
    const updatedState = { ...appState, ...newState };
    updateAppState(updatedState);
  };

  return <AppCtx.Provider value={{ appState, setAppState }}>{children}</AppCtx.Provider>;
};
