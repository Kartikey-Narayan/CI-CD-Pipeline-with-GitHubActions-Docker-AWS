// Import the Express framework
import express from "express";

// Initialize the Express application
const app = express();

// Define the port the server will listen on
const PORT = 3000;

// Home
app.get("/api", (req, res) => {
  res.status(200).json({
    status: "✅ OK",
    message: "🚀 Hello from Node.js App! 🌐"
  });
});

// Message
app.get("/api/message", (req, res) => {
    res.status(200).json({
      status: "✅ OK",
      message: "🚀 Hello from Node.js backend for Cloud Deployer App! 🌐"
    });
  });

// Health
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "✅ OK",
    message: "💚 Healthy and running smoothly!"
  });
});

// Catch-all route for undefined paths
app.use((req, res) => {
  res.status(404).json({
    error: "❌ Not Found",
    message: `⚠️ The route '${req.originalUrl}' does not exist.`
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Node.js server is running at http://localhost:${PORT}`);
});