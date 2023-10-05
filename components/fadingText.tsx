import React, { useEffect, useState } from 'react';
import { FadingTextContent } from '../styles';

type FadingTextProps = {
  text: string;
  timeout?: number;
};

export const FadingText = ({ text, timeout = 3000 }: FadingTextProps) => {
  const [isFading, setIsFading] = useState(false);
  const [isAppearing, setIsAppearing] = useState(true);

  useEffect(() => {
    if (isFading) {
      return;
    }
    setTimeout(() => {
      setIsFading(true);
    }, timeout);
  }, [isFading]);

  useEffect(() => {
    if (!isFading) {
      return;
    }
    setIsFading(false);
  }, [text]);

  const renderText = () => {
    let classes = [isFading ? 'fade' : '', isAppearing && !isFading ? 'appear' : ''].join(' ');
    return <div className={classes}>{text}</div>;
  };

  return <FadingTextContent>{renderText()}</FadingTextContent>;
};
