const express = require("express");
const app = express();
const path = require("path");
const helmet = require("helmet");
const connectDB = require("./config/db");
require("dotenv").config();

// Connect Database
connectDB();

// Init Middleware
app.use(require("cors")());
app.use(helmet());
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("../client/build"));

  app.get("*", (_, res) => {
    res.sendFile(path.resolve(__dirname, "/../client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
