import { differenceInDays, isBefore } from 'date-fns';
import React from 'react';
import { MediumText } from '../../styles';

type DaysCountdownProps = {
  month: number;
  day: number;
  prefix?: string;
  suffix?: string;
};

export const DaysCountdown = ({ day, month, prefix = '', suffix = '' }: DaysCountdownProps) => {
  const getDaysTil = () => {
    const date = new Date();

    let parsedDate = new Date(`${date.getFullYear()}/${month}/${day}`);
    if (isBefore(parsedDate, date)) {
      parsedDate = new Date(`${date.getFullYear() + 1}/${month}/${day}`);
    }

    return differenceInDays(parsedDate, date) + 1;
  };

  const getDays = () => <b>{getDaysTil()}</b>;

  return (
    <MediumText>
      {`${prefix} `}
      {getDays()}
      {` ${suffix}`}
    </MediumText>
  );
};
