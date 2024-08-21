const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 8080;

// Enable CORS to allow the frontend to fetch this API
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// API endpoint to get blog posts
app.get("/api/posts", (req, res) => {
  const posts = [
    {
      id: 1,
      title: "First Post",
      content: "This is the first post!",
      created: new Date("2024-04-01T00:00:00Z"),
    },
    {
      id: 2,
      title: "Second Post",
      content: "This is the second post.",
      created: new Date("2024-05-02T00:00:00Z"),
    },
  ];
  res.json(posts);
});

app.listen(port, () => {
  console.log(`Test app listening at http://localhost:${port}`);
});
