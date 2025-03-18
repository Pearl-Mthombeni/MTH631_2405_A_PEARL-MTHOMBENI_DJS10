import React, { useState, useEffect } from "react";

export default function FetchAllBlogPosts() {
  // State management for blogs, errors and loading
  const [error, setError] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      // Loading state is enabled when fetching data
      setLoading(true);
      try {
        // Fetches blog posts
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setBlogs(data);
        console.log(data);
      } catch (err) {
        // Checks for any errors
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {"Data fetching failed"}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id} style={{ marginBottom: "20px" }}>
            <div style={{ fontWeight: "bold" }}>
              {blog.id}. {blog.title}
            </div>
            <div>{blog.body}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
