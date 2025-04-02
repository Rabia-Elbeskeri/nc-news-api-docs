
import React from "react";

const ArticleCard = ({ article }) => {
    const { title, author, created_at, votes, article_img_url } = article;

    return (
        <div className="article-card">
            <img src={article_img_url} alt={title} className="article-img" />
            <h3>{title}</h3>
            <p><strong>By:</strong> {author}</p>
            <p><strong>Posted:</strong> {new Date(created_at).toLocaleDateString()}</p>
            <p><strong>Votes:</strong> {votes} 👍</p>
        </div>
    );
};

export default ArticleCard;
