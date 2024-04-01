import { INewsArticle } from "@/types";
import { newsConfig } from "./config";

export async function fetchNewsArticles() {
  const newsApiKey = newsConfig.apiKey;
  const keywords = 'financial fraud OR identity theft OR investment scam OR ponzi scheme OR pyramid scheme OR online scam OR cyber scam OR money laundering OR embezzlement OR insider trading OR bribery OR corruption OR white-collar crime OR cybercrime OR phishing OR ransomware OR risk management OR fraud detection OR fraud prevention OR fraud awareness OR anti-fraud measures OR security protocols OR compliance measures OR regulatory compliance';
  const apiUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(keywords)}&apiKey=${newsApiKey}`;

  try {
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error('Failed to fetch news articles');
    }
    
    const data = await response.json();

    if (!data.articles || !Array.isArray(data.articles)) {
      throw new Error('Invalid response format: missing articles array');
    }

    // Filter out articles with missing or invalid data
    const filteredArticles = data.articles.filter((article: INewsArticle) => (
      article.title &&
      article.description &&
      article.urlToImage &&
      article.source?.name &&
      article.publishedAt &&
      article.url
    ));

    // Remove duplicate authors if present
    const uniqueArticles = filteredArticles.map((article: INewsArticle) => {
      if (article.author && article.author.includes(',')) {
        const uniqueAuthor = article.author.split(',')[0];
        return { ...article, author: uniqueAuthor };
      }
      return article;
    });

    return uniqueArticles;
  } catch (error) {
    console.error('Error fetching news articles:', error);
    throw error;
  }
}
