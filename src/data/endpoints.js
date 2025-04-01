


const endpoints = [
    {
        section: "General",
        method: "GET",
        path: "/api",
        description: "Returns JSON describing all available API endpoints."
    },

    // Topics
    {
        section: "Topics",
        method: "GET",
        path: "/api/topics",
        description: "Returns an array of all topics."
    },

    {
        section: "Topics",
        method: "POST",
        path: "/api/topics",
        description: "Adds a new topic (slug, description, and optional img_url)."
    },


    // Articles
    {
        section: "Articles",
        method: "GET",
        path: "/api/articles",
        description: "Returns all articles, with support for filtering, sorting, pagination.",
        queries: {
            topic: "Filter by topic (e.g. cats)",
            sort_by: "Sort by column (e.g. created_at, votes)",
            order: "Order results asc or desc (default: desc)",
            limit: "Limit number of results per page (default: 10)",
            p: "Page number for pagination (default: 1)"
        }
    },
    {
        section: "Articles",
        method: "GET",
        path: "/api/articles/:article_id",
        description: "Returns an article by ID with comment count."
    },
    {
        section: "Articles",
        method: "PATCH",
        path: "/api/articles/:article_id",
        description: "Updates an article's vote count."
    },
    {
        section: "Articles",
        method: "DELETE",
        path: "/api/articles/:article_id",
        description: "Deletes an article by ID."
    },
    {
        section: "Articles",
        method: "POST",
        path: "/api/articles",
        description: "Adds a new article."
    },
    {
        section: "Articles",
        method: "GET",
        path: "/api/articles/:article_id/comment-count",
        description: "Returns article with number of comments."
    },

    // Comments
    {
        section: "Comments",
        method: "GET",
        path: "/api/articles/:article_id/comments",
        description: "Returns all comments for an article.",
        queries: {
            limit: "Limit number of comments per page (default: 10)",
            p: "Page number for pagination (default: 1)"
        }
    },
    {
        section: "Comments",
        method: "POST",
        path: "/api/articles/:article_id/comments",
        description: "Adds a comment to an article."
    },
    {
        section: "Comments",
        method: "PATCH",
        path: "/api/comments/:comment_id",
        description: "Updates a comment's votes."
    },
    {
        section: "Comments",
        method: "DELETE",
        path: "/api/comments/:comment_id",
        description: "Deletes a comment by ID."
    },
    {
        section: "Comments",
        method: "GET",
        path: "/api/comments",
        description: "Returns all comments (BONUS).",
        queries: {
            sort_by: "Sort by comment_id, created_at, or votes",
            order: "asc or desc (default: desc)",
            limit: "Limit number of comments per page (default: 10)",
            p: "Page number for pagination (default: 1)"
        }
    },

    // Users
    {
        section: "Users",
        method: "GET",
        path: "/api/users",
        description: "Returns all users."
    },
    {
        section: "Users",
        method: "GET",
        path: "/api/users/:username",
        description: "Returns a user by username."
    },
    {
        section: "Users",
        method: "POST",
        path: "/api/users",
        description: "Creates a new user."
    },
    {
        section: "Users",
        method: "PATCH",
        path: "/api/users/:username",
        description: "Updates user avatar or name."
    }
];

export default endpoints;

