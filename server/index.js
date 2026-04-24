import express from "express";
import connectDB from "./db/connectDB.js";

const app = express();

// Database connection
const DB_URI = "mongodb://127.0.0.1:27017/stackmark";
connectDB(DB_URI);

app.get("/", (req, res) => {
  res.send("stackmark");
  console.log("Api is running");
});

app.listen(3000, (req, res) => {
  console.log("App listening at port 3000");
});
