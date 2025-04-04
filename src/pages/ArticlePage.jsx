
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "../components/ArticleCard.jsx";
import CommentList from "../components/CommentList.jsx";
import NewCommentForm from "../components/NewCommentForm.jsx";
import "./ArticlePage.css";


const ArticlePage = () => {
    const { article_id } = useParams();
    const [article, setArticle] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://nc-daily-news.onrender.com/api/articles/${article_id}`)
            .then((response) => {
                if (!response.ok) throw new Error("Article not found");
                return response.json();
            })
            .then((data) => {
                setArticle(data.article);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setIsLoading(false);
            });
    }, [article_id]);

    const fetchComments = () => {
        fetch(`https://nc-daily-news.onrender.com/api/articles/${article_id}/comments`)
            .then((response) => response.json())
            .then((data) => {
                setComments(data.comments);
            })
            .catch(() => {
                setComments([]);
            });
    };

    useEffect(() => {
        fetchComments();
    }, [article_id]);

    const handleCommentPosted = (newComment) => {
        setComments((prev) => [newComment, ...prev]);
    };

    if (isLoading) return <p>Loading article...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="article-page">
            <ArticleCard article={article} fullView={true} />
            <h3 className="comments-heading">Comments</h3>
            <NewCommentForm article_id={article_id} onCommentPosted={handleCommentPosted} />
            <CommentList comments={comments} />
        </div>
    );
};

export default ArticlePage;

