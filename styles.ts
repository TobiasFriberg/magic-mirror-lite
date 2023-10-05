import styled, { keyframes } from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ClockWrapper = styled.div`
  display: flex;
`;

export const Hours = styled.div`
  font-size: 10em;
  margin: -0.13em 0;
  margin-left: -0.06em;
  margin-right: 0.1em;
`;

export const Seconds = styled.div`
  font-size: 5em;
  opacity: 0.7;
`;

export const DateWrapper = styled.div`
  font-size: 3em;
  font-weight: bold;
`;

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

export const NewsContent = styled.div`
  margin: 3em 0;
  position: absolute;
  bottom: 0;

  width: 100vw;
`;

export const NewsTitle = styled.div`
  font-size: 1.2em;
`;

export const NewsArticle = styled.div`
  font-size: 2.5em;
`;

const breatheAnimation = keyframes`
 0% { opacity: 1; }
 100% { opacity: 0; }
`;

const appearAnim = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`;

export const FadingTextContent = styled.div`
  & .appear {
    animation-name: ${appearAnim};
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }

  & .fade {
    animation-name: ${breatheAnimation};
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }
`;

export const ChartWrapper = styled.div`
  margin-top: 2em;
  width: 400px;
`;

export const ChartTitle = styled.div`
  margin-bottom: 1em;
`;

export const CurrencyInfo = styled.div`
  font-size: 1.5em;
  margin-bottom: 0.3em;

  & .pos {
    color: #6eeb83;
  }

  & .neg {
    color: #eb816e;
  }
`;

export const CurrencyTitle = styled.span`
  font-size: 0.8em;
`;

export const CurrencyWrapper = styled.div`
  margin-top: 2em;
`;

export const PokemonTitle = styled.div`
  position: relative;
  font-size: 1.5em;
  font-weight: 200;
  z-index: 1;
`;

export const PokemonName = styled.div`
  position: relative;
  font-size: 2em;
  font-weight: 400;
  text-transform: capitalize;
  z-index: 1;
`;

export const PokemonWrapper = styled.div`
  margin-top: 2em;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

  img {
    position: relative;
    z-index: 0;
    width: 80%;
    margin-top: -20%;
    margin-left: 10%;
  }
`;

export const PlannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  font-size: 1.1em;
`;

export const Day = styled.div<{ today: boolean }>`
  padding: 0.5em;
  border-bottom: 1px solid white;
  white-space: break-spaces;

  ${(p) => p.today && 'background-color: rgba(255, 255, 255, .12);'}

  > span {
    display: block;
    font-size: 1.5em;
    margin-bottom: 5px;
  }

  &:last-child {
    border-bottom: none;
  }
`;
