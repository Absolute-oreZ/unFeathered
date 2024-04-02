import { newsConfig } from "./config";

export async function fetchNewsArticles() {
  const newsApiKey = newsConfig.apiKey;
  const apiUrl = `https://gnews.io/api/v4/search?q=financial%20fraud&in=title&lang=en&country=my&max=30&sortby=relevance&apikey=${newsApiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const articles = data.articles;
    return articles;
  } catch (error) {
    console.error('Error fetching news articles:', error);
    throw error;
  }
}
