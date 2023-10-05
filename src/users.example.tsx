import React from 'react';
import { Clock } from './components/clock/clock';
import { LargeText } from './styles';
import { FadingText } from './components/fadingText/fadingText';

type Config = { left?: any[]; right?: any[]; bottom?: any[]; startAt?: { hour: number; minute: number } };
type UsersConfigType = { [key: string]: Config };

export const defaultConfig: Config = {
  left: [<Clock />],
  right: [],
  bottom: [
    <FadingText timeout={12000}>
      <LargeText>Hello!</LargeText>
    </FadingText>,
  ],
};

export const usersConfig: UsersConfigType = {};
