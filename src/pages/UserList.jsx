import React, { useEffect, useState } from "react";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://nc-daily-news.onrender.com/api/users")
            .then((res) => res.json())
            .then((data) => {
                setUsers(data.users);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) return <p>Loading users...</p>;

    return (
        <div className="user-list">
            <h2>Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.username}>
                        <strong>{user.username}</strong> - {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
