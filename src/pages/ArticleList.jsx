
import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import "./CommentList.css";

const CommentList = ({ article_id }) => {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://nc-daily-news.onrender.com/api/articles/${article_id}/comments`)
            .then((response) => response.json())
            .then((data) => {
                setComments(data.comments);
                setIsLoading(false);
            })
            .catch((err) => {
                setError("Failed to load comments");
                setIsLoading(false);
            });
    }, [article_id]);

    if (isLoading) return <p>Loading comments...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="comment-list">
            {comments.map((comment) => (
                <Comment key={comment.comment_id} comment={comment} />
            ))}
        </div>
    );
};

export default CommentList;