import { useState, useEffect } from 'react';
import { fetchNewsArticles } from '@/lib/news/api';
import { INewsArticle } from '@/types';
import { formatDateString } from '@/lib/utils';

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
  }, [sortBy, sortDirection]); // Remove filteredNews dependency
  const sortNews = () => {
    const sortedNews = news.slice().sort((a, b) => {
      let valueA: string | number = 0; // Default value for comparison
      let valueB: string | number = 0; // Default value for comparison

      if (sortBy === 'publishedAt') {
        valueA = new Date(a.publishedAt).getTime();
        valueB = new Date(b.publishedAt).getTime();
      } else if (sortBy === 'title') {
        valueA = a.title.toLowerCase();
        valueB = b.title.toLowerCase();
      }

      // Sorting based on sort direction
      if (sortDirection === 'desc') {
        return valueB < valueA ? -1 : valueB > valueA ? 1 : 0;
      } else {
        return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
      }
    });
    setFilteredNews(sortedNews);
  };


  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
    sortNews(); // Call sortNews when sortBy changes
  };

  const handleSortDirectionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortDirection(event.target.value);
    sortNews(); // Call sortNews when sortDirection changes
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
                {article.image && (
                  <img src={article.image} alt="News Thumbnail" className="w-48 h-auto mr-4" />
                )}
                <div className="flex flex-col text-justify">
                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  <p className="text-gray-600 mb-2">{article.description}</p>
                  <p><a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Read more</a></p>
                </div>
              </div>
              <div className="flex-col mt-4 sm:mt-0 sm:w-1/4 mx-4">
                <p><span className="font-semibold">Published at:</span></p>
                <p> {formatDateString(article.publishedAt)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
