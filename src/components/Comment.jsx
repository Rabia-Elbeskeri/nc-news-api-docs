import React from "react";
import "./Comment.css";

const Comment = ({ comment }) => {
    return (
        <div className="comment">
            <p><strong>{comment.author}</strong> says:</p>
            <p>{comment.body}</p>
            <p className="comment-date">🗓️ {new Date(comment.created_at).toLocaleString()}</p>
        </div>
    );
};

export default Comment;