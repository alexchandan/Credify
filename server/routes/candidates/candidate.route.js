import express from "express";
const router = express.Router();

router.get("/candidate", (req, res) => {
  console.log("condidate route console");
  res.send("candidate route working");
});

export default router;
