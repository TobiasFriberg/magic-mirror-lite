import styled from 'styled-components';

export const WeatherHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2em;
  gap: 0.8em;
`;

export const WeatherWrapper = styled.div`
  display: inline-block;
`;

export const WeatherMain = styled.div`
  display: flex;
  align-items: center;
  font-size: 7em;
  font-weight: 400;
  justify-content: space-around;

  > svg {
    width: 1em;
    height: 1em;
  }
`;

export const WeatherSecondary = styled.div`
  text-align: right;
  font-size: 3em;
  opacity: 0.75;
`;

export const WeatherForecastList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WeatherForecastItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6em;
  font-size: 1.6em;

  > div {
    width: 25%;
  }

  > svg {
    width: 1em;
    height: 1em;
  }
`;

export const WeatherForecastFeelsLike = styled.div`
  opacity: 0.75;
`;

export const WeatherForecastTitle = styled.div`
  font-size: 1.5em;
  border-bottom: 2px solid white;
  padding: 0.3em 0;
  margin-bottom: 0.2em;
  margin-top: 1em;
`;
