import { parse } from 'rss-to-json';
import React, { useEffect, useState } from 'react';
import { NewsContent, NewsTitle, NewsArticle } from '../styles';
import { FadingText } from './fadingText';

type News = {
  title: string;
  description: string;
  link: string;
  image: string;
  category: string;
  items: any[];
};

const MAX_NEWS_ARTICLES = 8;

const READ_TIMEOUT = 15000;

type NewsProps = {
  rss: string[];
};

export const News = ({ rss }: NewsProps) => {
  const [news, setNews] = useState<News[]>();
  const [newsArticleNumber, setNewsArticleNumber] = useState(0);
  const [rssNumber, setRssNumber] = useState(0);

  useEffect(() => {
    updateNews();
    setTimeout(() => {
      updateNews();
    }, 90000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      let nextRssNumber = rssNumber + 1;
      let nextArticleNumber = newsArticleNumber;

      if (nextRssNumber > rss.length - 1) {
        nextArticleNumber++;
        if (nextArticleNumber >= MAX_NEWS_ARTICLES) {
          nextArticleNumber = 0;
        }
        nextRssNumber = 0;
      }

      setNewsArticleNumber(nextArticleNumber);
      setRssNumber(nextRssNumber);
    }, READ_TIMEOUT);
  }, [rssNumber]);

  const updateNews = async () => {
    const promises = rss.map(async (url) => await parse(url));
    const rssNews = await Promise.all(promises);
    setNews(rssNews);
  };

  if (!news) {
    return null;
  }

  return (
    <NewsContent>
      <NewsTitle>
        <FadingText text={news[rssNumber].title} timeout={READ_TIMEOUT - 2000} />
      </NewsTitle>
      <NewsArticle>
        <FadingText text={news[rssNumber].items[newsArticleNumber].title} timeout={READ_TIMEOUT - 2000} />
      </NewsArticle>
    </NewsContent>
  );
};
