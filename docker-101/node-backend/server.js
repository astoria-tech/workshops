const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 8080;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Enable CORS for localhost:80
app.use(
  cors({
    origin: "http://localhost",
  })
);

// API endpoint to get blog posts
app.get("/api/posts", (req, res) => {
  const posts = [
    {
      id: 1,
      title: "First Post",
      content: "This is the first post.",
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

// Catch-all handler to serve the React app for any other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

app.listen(port, () => {
  console.log(`Test app listening at http://localhost:${port}`);
});
