import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { ClockWrapper, DateWrapper, Hours } from '../styles';

export const Clock = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    updateTime();

    setInterval(() => {
      updateTime();
    }, 5000);
  }, []);

  const updateTime = () => {
    const formattedTime = format(new Date(), 'HH:mm');
    const formattedDate = format(new Date(), 'ccc, dd LLL yyyy');

    setTime(formattedTime);
    setDate(formattedDate);
  };

  return (
    <>
      <DateWrapper>{date}</DateWrapper>
      <ClockWrapper>
        <Hours>{time}</Hours>
      </ClockWrapper>
    </>
  );
};
