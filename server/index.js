import express from "express";
import connectDB from "./db/connectDB.js";
import dotenv from "dotenv";
import candidateRoute from "./routes/candidates/candidate.route.js";

const app = express();

// dot env config
dotenv.config({
  path: [".eng.local", ".env"],
});

// Database connection
connectDB(process.env.DB_URI);

// middlewares
app.use(express.json());

app.use("/api", candidateRoute);

app.listen(process.env.PORT, (req, res) => {
  console.log(`App listening to port ${process.env.PORT}`);
});
