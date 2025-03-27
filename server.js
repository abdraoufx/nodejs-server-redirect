import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;
const url = "http://169.254.169.254/latest/meta-data/"

// Enable CORS for all routes
app.use(
  cors({
    origin: "*", // Allow all origins
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", (req, res) => {
  return res.redirect(303, url);
});

app.post("/", (req, res) => {
  return res.redirect(303, url);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Try: http://localhost:${PORT}/?url=https://example.com`);
});
