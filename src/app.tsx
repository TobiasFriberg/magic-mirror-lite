import React from 'react';
import { BottomPosition, Content } from './styles';
import { useAppState } from './appState';
import { usersConfig } from './users';
import { defaultConfig } from './users.example';

export const App = () => {
  const { appState } = useAppState();

  const getUserConfig = () => {
    if (!usersConfig[appState.user]) {
      return defaultConfig;
    }

    return usersConfig[appState.user];
  };

  return (
    <Content>
      <BottomPosition>{getUserConfig().bottom}</BottomPosition>
      <div>{getUserConfig().left}</div>
      <div>{getUserConfig().right}</div>
    </Content>
  );
};
