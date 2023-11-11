import { format, fromUnixTime } from 'date-fns';
import React, { useEffect, useState } from 'react';
/*@ts-ignore */
import * as Unicons from '@iconscout/react-unicons';
import { Sunrise, Sunset } from 'react-feather';
import {
  WeatherWrapper,
  WeatherHeader,
  WeatherMain,
  WeatherSecondary,
  WeatherForecastTitle,
  WeatherForecastList,
  WeatherForecastFeelsLike,
  WeatherForecastItem,
} from '../styles';

type WeatherInfoType = {
  time: number;
  temp: string;
  temp_min: string;
  temp_max: string;
  feels_like: string;
  wind_speed: number;
  sunrise?: number;
  sunset?: number;
  icon: string;
};

type WeatherType = {
  name: string;
  current: WeatherInfoType;
  forecast: WeatherInfoType[];
};

type WeatherProps = {
  id: string;
};

export const Weather = ({ id }: WeatherProps) => {
  const [weather, setWeather] = useState<WeatherType>();

  useEffect(() => {
    updateWeather();

    setInterval(() => {
      updateWeather();
    }, 900000);
  }, []);

  const getForecastForDays = (forecastData: any) => {
    let lastDayChecked = parseInt(format(new Date(), 'DDD'));
    const filteredForecast: any[] = forecastData
      .filter((info: any) => {
        const dayInYear = parseInt(format(fromUnixTime(info.dt), 'DDD'), 10);
        if (info.dt_txt.includes('12:00') && dayInYear > lastDayChecked) {
          lastDayChecked = dayInYear;
          return true;
        }
      })
      .map((info: any) => {
        return {
          time: info.dt,
          temp: info.main.temp.toFixed(1),
          temp_min: info.main.temp_min.toFixed(1),
          temp_max: info.main.temp_max.toFixed(1),
          feels_like: info.main.feels_like.toFixed(1),
          wind_speed: Math.round(info.wind.speed),
          icon: info.weather[0].icon,
        };
      });

    return filteredForecast;
  };

  const updateWeather = async () => {
    const currentWeatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=${WEATHER_APP_TOKEN}`
    );
    const responseCurrent = await currentWeatherData.json();

    const forecastWeatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&appid=${WEATHER_APP_TOKEN}`
    );
    const responseForecast = await forecastWeatherData.json();

    const currentData = {
      name: `${responseCurrent.name}, ${responseCurrent.sys.country}`,
      current: {
        time: responseCurrent.dt,
        temp: responseCurrent.main.temp.toFixed(1),
        temp_min: responseCurrent.main.temp_min.toFixed(1),
        temp_max: responseCurrent.main.temp_max.toFixed(1),
        feels_like: responseCurrent.main.feels_like.toFixed(1),
        wind_speed: Math.round(responseCurrent.wind.speed),
        sunrise: responseCurrent.sys.sunrise,
        sunset: responseCurrent.sys.sunset,
        icon: responseCurrent.weather[0].icon,
      },
    };

    const forecastData = getForecastForDays(responseForecast.list);

    setWeather({ ...currentData, forecast: forecastData });
  };

  const getWeatherIcon = (icon: string) => {
    switch (icon.substring(0, 2)) {
      case '01':
        return <Unicons.UilSun />;
      case '02':
        return <Unicons.UilCloudSun />;
      case '03':
        return <Unicons.UilCloud />;
      case '04':
        return <Unicons.UilClouds />;
      case '09':
        return <Unicons.UilCloudShowers />;
      case '10':
        return <Unicons.UilCloudSunRain />;
      case '11':
        return <Unicons.UilThunderstorm />;
      case '13':
        return <Unicons.UilSnowflake />;
      case '50':
        return <Unicons.UilAlignCenterAlt />;
      default:
        return null;
    }
  };

  const renderForecast = () =>
    weather?.forecast.map((info, i) => {
      return (
        <WeatherForecastItem key={i}>
          <div>{format(fromUnixTime(info.time), 'ccc')}</div>
          <div>{getWeatherIcon(info.icon)}</div>
          <div>{info.temp}°</div>
          <WeatherForecastFeelsLike>({info.feels_like}°)</WeatherForecastFeelsLike>
        </WeatherForecastItem>
      );
    });

  return (
    <WeatherWrapper>
      <WeatherHeader>
        <div>
          <Unicons.UilWind /> {weather?.current.wind_speed}ms
        </div>
        <div>
          <Sunrise /> {format(fromUnixTime(weather?.current.sunrise || 0), 'HH:mm')}
        </div>
        <div>
          <Sunset /> {format(fromUnixTime(weather?.current.sunset || 0), 'HH:mm')}
        </div>
      </WeatherHeader>
      <WeatherMain>
        {weather?.current?.icon && getWeatherIcon(weather?.current?.icon)}
        {weather?.current.temp}°
      </WeatherMain>
      <WeatherSecondary>(Feels: {weather?.current.feels_like}°)</WeatherSecondary>
      <WeatherForecastTitle>Forecast {weather?.name}</WeatherForecastTitle>
      <WeatherForecastList>{renderForecast()}</WeatherForecastList>
    </WeatherWrapper>
  );
};
