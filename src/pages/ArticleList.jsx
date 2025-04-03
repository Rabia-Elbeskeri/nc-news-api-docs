import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";
import "./ArticleList.css";

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://nc-daily-news.onrender.com/api/articles")
            .then((response) => {
                if (!response.ok) throw new Error("Failed to fetch articles");
                return response.json();
            })
            .then((data) => {
                setArticles(data.articles);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) return <p>Loading articles...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="article-list">
            <h2>📰 All Articles</h2>
            {articles.map((article) => (
                <Link key={article.article_id} to={`/articles/${article.article_id}`}>
                    <ArticleCard article={article} />
                </Link>
            ))}
        </div>
    );
};

export default ArticleList;
