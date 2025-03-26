import express from "express"
import { URL } from "url"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 3000

// Enable CORS for all routes
app.use(
  cors({
    origin: "*", // Allow all origins
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
)

// Root route with redirect functionality
app.get("/", (req, res) => {
  const { url } = req.query


    if (!url) {
      console.log(`Invalid redirect URL: ${redirectUrl}`)
      return res.status(400).send("Invalid redirect URL provided")
    }
      return res.redirect(redirectUrl) 
  }

  // If no redirect parameter is provided, show a simple HTML page
  res.send(`
    <html>
      <head>
        <title>URL Redirect Service</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
          code { background: #f4f4f4; padding: 2px 5px; border-radius: 3px; }
        </style>
      </head>
      <body>
        <h1>URL Redirect Service</h1>
        <p>Use this service by adding a <code>redirect_to</code> query parameter:</p>
        <p><code>/?redirect_to=https://example.com</code></p>
        <p>Also supports <code>target</code> or <code>url</code> as parameter names.</p>
      </body>
    </html>
  `)
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
  console.log(`Try: http://localhost:${PORT}/?url=https://example.com`)
})

