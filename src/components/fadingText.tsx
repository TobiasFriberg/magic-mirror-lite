import React, { ReactNode, useEffect, useState } from 'react';
import { FadingTextContent } from '../styles';

type FadingTextProps = {
  timeout?: number;
  loop?: boolean;
  children: ReactNode;
};

export const FadingText = ({ timeout = 3000, children, loop = false }: FadingTextProps) => {
  const [isFading, setIsFading] = useState(false);
  const [isAppearing, setIsAppearing] = useState(false);

  useEffect(() => {
    setIsAppearing(true);
    setIsFading(false);
  }, [children]);

  useEffect(() => {
    if (!isAppearing) {
      return;
    }
    setIsFading(false);
    setIsAppearing(false);
  }, [isAppearing]);

  useEffect(() => {
    if (isFading) {
      setTimeout(() => {
        setIsAppearing(loop);
      }, 2200);
      return;
    }
    setTimeout(() => {
      setIsFading(true);
    }, timeout);
  }, [isFading]);

  const renderText = () => {
    let classes = [isFading ? 'fade' : 'appear'].join(' ');
    return <div className={classes}>{children}</div>;
  };

  return <FadingTextContent>{renderText()}</FadingTextContent>;
};
