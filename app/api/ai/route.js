import express from "express";
import { generateReply } from "../../../lib/ai.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ reply: "Message required" });
    }

    const reply = await generateReply(message);
    res.json({ reply });

  } catch (err) {
    console.error("AI ROUTE ERROR:", err);
    res.status(500).json({ reply: "Internal server error" });
  }
});

export default router;