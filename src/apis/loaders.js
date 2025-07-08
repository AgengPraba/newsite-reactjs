import axios from "axios";

export const getNews = async ({ request }) => {
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  const urlParams = new URL(request.url).searchParams;
  const page = parseInt(urlParams.get("page")) || 1;

  // Ambil headline 1x (misal 30)
  const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&pageSize=50&apiKey=${apiKey}`);
  const data = response.data;

  const topHeadlines = data.articles.slice(0, 5); // 4 teratas
  const remainingArticles = data.articles.slice(5); // sisanya

  const pageSize = 5;
  const start = (page - 1) * pageSize;
  const end = page * pageSize;
  const latestNews = remainingArticles.slice(start, end);

  return {
    topHeadlines,
    latestNews,
    page,
    totalPages: Math.ceil(remainingArticles.length / pageSize),
  };
};

export const getNewsByCategory = (category) => {
  return async ({ request }) => {
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;
    const urlParams = new URL(request.url).searchParams;
    const page = parseInt(urlParams.get("page")) || 1;

    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=50&apiKey=${apiKey}`
    );
    const data = response.data;

    const topHeadlines = data.articles.slice(0, 5);
    const remainingArticles = data.articles.slice(5);

    const pageSize = 5;
    const start = (page - 1) * pageSize;
    const end = page * pageSize;
    const latestNews = remainingArticles.slice(start, end);

    return {
      topHeadlines,
      latestNews,
      page,
      totalPages: Math.ceil(remainingArticles.length / pageSize),
      category: category[0].toUpperCase() + category.slice(1), // Capitalize
    };
  };
};