import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import "./NewCommentForm.css";

const NewCommentForm = ({ article_id, onCommentPosted }) => {
    const { username } = useContext(UserContext);
    const [commentBody, setCommentBody] = useState("");
    const [isPosting, setIsPosting] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsPosting(true);
        setError(null);

        fetch(`https://nc-daily-news.onrender.com/api/articles/${article_id}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, body: commentBody })
        })
            .then((response) => {
                if (!response.ok) throw new Error("Failed to post comment");
                return response.json();
            })
            .then(({ comment }) => {
                if (onCommentPosted) onCommentPosted(comment); // Optional callback
                setCommentBody("");
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setIsPosting(false);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="new-comment-form">
      <textarea
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
          placeholder="Write your comment..."
          required
      />
            <button type="submit" disabled={isPosting}>
                {isPosting ? "Posting..." : "Post Comment"}
            </button>
            {error && <p className="error-msg">{error}</p>}
        </form>
    );
};

export default NewCommentForm;
