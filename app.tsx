import React from 'react';
import { Content, CurrencyWrapper } from './styles';

import { Clock } from './components/clock';
import { Weather } from './components/weather';
import { Chart } from './components/chart';
import { News } from './components/news';
import { Currency } from './components/currency';
import { Pokemon } from './components/pokemon';
import { FribergPlanner } from './components/fribergPlanner';

export const App = () => {
  return (
    <>
      <News
        rss={['https://rss.aftonbladet.se/rss2/small/pages/sections/senastenytt/', 'https://www.di.se/digital/rss']}
      />
      <Content>
        <div>
          <Clock />
          <CurrencyWrapper>
            <Currency code="bitcoin" title="btc" />
            <Currency code="ethereum-wormhole" title="eth" />
            <Currency code="cardano" title="ada" />
          </CurrencyWrapper>
          <FribergPlanner />
        </div>
        <div>
          <Weather id="2705055" />
          <Pokemon />
        </div>
      </Content>
    </>
  );
};
