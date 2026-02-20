import express from "express";
import { generateReply } from "../../../lib/ai.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;
    const reply = await generateReply(message);
    res.json({ reply });
  } catch (err) {
    res.status(500).json({ reply: "AI error" });
  }
});

export default router;
