import express from "express";

const app = express();

app.get("/", () => {
  console.log("Skill Probe");
});

app.listen(3000, () => {
  console.log("Listening at port 3000");
});
