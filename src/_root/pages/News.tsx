import { useState, useEffect } from 'react';
import { fetchNewsArticles } from '@/lib/news/api';
import { INewsArticle } from '@/types';

function News() {
  const [news, setNews] = useState<INewsArticle[]>([]);
  const [filteredNews, setFilteredNews] = useState<INewsArticle[]>([]);
  const [sortBy, setSortBy] = useState('publishedAt');
  const [sortDirection, setSortDirection] = useState('desc');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getNews = async () => {
      try {
        const articles = await fetchNewsArticles();
        setNews(articles);
        setFilteredNews(articles); // Initialize filteredNews with all news articles
      } catch (error) {
        console.error('Error fetching news articles:', error);
      }
    };

    getNews();
  }, []);

  useEffect(() => {
    sortNews();
  }, [sortBy, sortDirection]);

  const sortNews = () => {
    const sortedNews = filteredNews.slice().sort((a, b) => {
      // @ts-ignore
      let valueA = sortBy === 'publishedAt' ? new Date(a.publishedAt).getTime() : a[sortBy];
      // @ts-ignore
      let valueB = sortBy === 'publishedAt' ? new Date(b.publishedAt).getTime() : b[sortBy];

      // Convert to lower case if values are strings
      if (typeof valueA === 'string') {
        valueA = valueA.toLowerCase();
      }
      if (typeof valueB === 'string') {
        valueB = valueB.toLowerCase();
      }

      // Check if values are valid strings before using localeCompare
      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return sortDirection === 'desc' ? valueB.localeCompare(valueA) : valueA.localeCompare(valueB);
      } else {
        // Fallback comparison for non-string values
        return sortDirection === 'desc' ? valueB - valueA : valueA - valueB;
      }
    });
    setFilteredNews(sortedNews);
  };


  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const handleSortDirectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortDirection(event.target.value);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = news.filter(article =>
      article.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredNews(filtered);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold mb-6">Latest News</h2>
      <div className="w-5/6 mx-auto mb-4">
        <div className="flex items-center mb-4">
          <label htmlFor="search" className="mr-4">Search:</label>
          <input
            type="text"
            id="search"
            value={searchQuery}
            onChange={handleSearch}
            className="border px-2 py-1"
            placeholder="Search news..."
          />
        </div>
        <div className="flex">
          <div className="mx-1">
            <label htmlFor="sort-by-select">Sort by:</label>
            <select id="sort-by-select" value={sortBy} onChange={handleSortChange} className="border px-2 py-1">
              <option value="publishedAt">Date</option>
              <option value="title">Title</option>
            </select>
          </div>
          <div className="mx-1">
            <label htmlFor="sort-direction-select">Sort direction:</label>
            <select id="sort-direction-select" value={sortDirection} onChange={handleSortDirectionChange} className="border px-2 py-1">
              <option value="desc">Descending</option>
              <option value="asc">Ascending</option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-5/6 mx-auto">
        {filteredNews.map((article, index) => (
          <div key={index} className="border-b py-6">
            <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
              <div className="flex items-center mb-4 sm:mb-0 sm:w-3/4">
                {article.urlToImage && (
                  <img src={article.urlToImage} alt="News Thumbnail" className="w-32 h-auto mr-4" />
                )}
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-2">{article.description}</p>
                  <p><a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read more</a></p>
                </div>
              </div>
              <div className="mt-4 sm:mt-0 sm:w-1/4">
                <p><span className="font-semibold">Author:</span> {article.author || 'Unknown'}</p>
                <p><span className="font-semibold">Published at:</span> {new Date(article.publishedAt).toLocaleDateString("ms-MY")}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
