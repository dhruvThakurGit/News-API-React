import React from "react";

const News = ({ article }) => {
  return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={article.urlToImage} class="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
          <p className="card-text">{article.description}</p>
          <a href={article.url} className="btn btn-primary">
            Main
          </a>
        </div>
      </div>
  );
};

export default News;
