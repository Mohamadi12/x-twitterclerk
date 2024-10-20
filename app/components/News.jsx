"use client";
import { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState([]);
  const [articlesNum, setArticlesNum] = useState(3);

  useEffect(() => {
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/us.json")
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);

  return (
    <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-3">
      <h4 className="font-bold text-sl px-4">Whats happening</h4>
      {news.slice(0, articlesNum).map((article) => (
        <div key={article.url}>
          <a href={article.url} target="_blank">
            <div className="flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-200 transition duration-200">
              <div className="space-y-0.5">
                <h6 className="text-sm font-bold">{article.title}</h6>
                <p className="text-xs font-medium text-gray-500">
                  {article.source.name}
                </p>
              </div>
              <img
                src={article.urlToImage}
                alt="Image"
                width={70}
                className="rounded-xl"
              />
            </div>
          </a>
        </div>
      ))}
      <button
        onClick={() => setArticlesNum(articlesNum + 3)}
        className="text-blue-300 pl-4 hover:text-blue-400 text-sm"
      >
        Load more
      </button>
    </div>
  );
};

export default News;
