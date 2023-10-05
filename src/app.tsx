import React from 'react';
import { BottomPosition, ColumnGroup, Content } from './styles';
import { useAppState } from './appState';
import { defaultConfig } from './users.example';

export const App = () => {
  return (
    <Content>
      <BottomPosition>{defaultConfig.bottom}</BottomPosition>
      <ColumnGroup>{defaultConfig.left}</ColumnGroup>
      <ColumnGroup>{defaultConfig.right}</ColumnGroup>
    </Content>
  );
};
