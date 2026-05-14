import express from "express";

const app = express();

const getCandidate = (req, res) => {
    res.send("get Candidate");
};




export { getCandidate };