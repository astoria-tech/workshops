import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Blog Posts</h1>
        {posts.length > 0 ? (
          <ul className="post-list">
            {posts.map((post) => (
              <li key={post.id} className="post-item">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-content">{post.content}</p>
                <p className="post-date">
                  {new Date(post.created).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading posts...</p>
        )}
      </header>
    </div>
  );
}

export default App;
