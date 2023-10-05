import { format, fromUnixTime, getDayOfYear, getISOWeek, getYear } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Day, PlannerWrapper } from '../styles';

export const FribergPlanner = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    updatePlanner();

    setInterval(() => {
      updatePlanner();
    }, 60000);
  }, []);

  const updatePlanner = async () => {
    const year = getYear(new Date());
    const week = getISOWeek(new Date());
    const response = await (await fetch(`http://planner.fribium.com/api/post/get/${year}/${week}`)).json();

    setDays(response.data.days);
  };

  const renderDays = () =>
    days.map((day: any) => {
      if (!day.data) {
        return null;
      }
      const isToday = getDayOfYear(fromUnixTime(day.date)) === getDayOfYear(new Date());
      console.log(isToday);
      return (
        <Day key={day._id} today={isToday}>
          <span>{format(fromUnixTime(day.date), 'dd MMM')}</span>
          <b>{day.data}</b>
        </Day>
      );
    });

  return <PlannerWrapper>{renderDays()}</PlannerWrapper>;
};
