import express from "express";
import Checkin from "../../../models/Checkin.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const checkin = await Checkin.create(req.body);
    res.json(checkin);
  } catch (err) {
    res.status(500).json({ error: "DB error" });
  }
});

export default router;
