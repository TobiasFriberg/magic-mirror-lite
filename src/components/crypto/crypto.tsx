import React, { useEffect, useState } from 'react';
import { CurrencyInfo, CurrencyTitle } from './crypto.style';

type CurrencyProps = {
  code: string;
  title: string;
};

export const Crypto = ({ code, title }: CurrencyProps) => {
  const [currency, setCurrency] = useState<any>();
  useEffect(() => {
    updateCurrency();

    setInterval(() => {
      updateCurrency();
    }, 60000);
  }, []);

  const updateCurrency = async () => {
    const response = await (
      await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${code.toLocaleLowerCase()}&vs_currencies=usd&include_24hr_change=true`
      )
    ).json();

    setCurrency(response[code.toLocaleLowerCase()]);
  };

  if (!currency) {
    return null;
  }

  const value = currency.usd.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const getPercent = () => {
    let prefix = '+';
    let className = 'pos';

    if (currency.usd_24h_change < 0) {
      prefix = '';
      className = 'neg';
    }

    return (
      <span className={className}>
        ({prefix}
        {currency.usd_24h_change.toFixed(3)}%)
      </span>
    );
  };

  return (
    <CurrencyInfo>
      <CurrencyTitle>{title.toUpperCase()}:</CurrencyTitle> {value} {getPercent()}
    </CurrencyInfo>
  );
};
