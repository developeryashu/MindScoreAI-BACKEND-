import express from "express";
import { calculateScore } from "../../../lib/scoring.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { mood, stress, sleep } = req.body;
  const score = calculateScore(mood, stress, sleep);
  res.json({ score });
});

export default router;
