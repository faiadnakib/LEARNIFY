const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.get("/", (req, res) => {
  res.status(200).send({
    message: "server is running",
  });
});

//port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(
    `Server is running on ${
      process.env.NODE_MODE || "development"
    } Mode on port ${port}`.green
  );
});
