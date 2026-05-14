import express from "express";
import connectDB from "./db/connectDB.js";
import dotenv from "dotenv";
import candidateRoute from "./routes/candidates/candidate.route.js";

// dot env config
dotenv.config({
  path: [".eng.local", ".env"],
});

const app = express();

// middlewares
app.use(express.json());

// Database connection
connectDB(process.env.DB_URI);

// app.get("/", (req, res) => {
//   res.send("credify");
//   console.log("Api is running");
// });
// 
app.use("/api", candidateRoute);

app.listen(process.env.PORT, (req, res) => {
  console.log(`App listening to port ${process.env.PORT}`);
});
