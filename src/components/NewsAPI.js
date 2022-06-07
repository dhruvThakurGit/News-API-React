import React from "react";
import axios from "axios";
import News from "./News";
import { useState, useEffect } from "react";

const NewsAPI = () => {
  const [press, setPress] = useState(false);
  const [articles, setArticles] = useState([]);

  const fetchNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=keyword&apiKey=ee9cc00726e74f79a35f4c41469b17b2"
      )
      .then((data) => {
        setArticles(data.data.articles);
      })
      .catch(console.log("Kuch dikkat ara"));
  };

  const render = (
    <div class="container">
      <div className="row">
        {articles.map((article) => (
          <News article={article} />
        ))}
      </div>
    </div>
  );

  return (
    <>
      <button
        className="btn btn-primary  "
        onClick={() => {
          fetchNews();
          setPress(true);
        }}
      >
        FetchNews
      </button>

      <hr />

      {press && render}
    </>
  );
};

export default NewsAPI;
