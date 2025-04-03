import React, { useEffect, useState } from "react";

const TopicList = () => {
    const [topics, setTopics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://nc-daily-news.onrender.com/api/topics")
            .then((res) => res.json())
            .then((data) => {
                setTopics(data.topics);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) return <p>Loading topics...</p>;

    return (
        <div className="topic-list">
            <h2>Topics</h2>
            <ul>
                {topics.map((topic) => (
                    <li key={topic.slug}>
                        <strong>{topic.slug}</strong>: {topic.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopicList;

