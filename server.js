import express from "express";
import { URL } from "url";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(
  cors({
    origin: "*", // Allow all origins
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Root route with redirect functionality
app.get("/", (req, res) => {
  const { url } = req.query;

  if (!url) {
    console.log(`Invalid redirect URL: ${url}`);
    return res.status(400).send("Invalid redirect URL provided");
  }
  return res.redirect(url);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Try: http://localhost:${PORT}/?url=https://example.com`);
});
