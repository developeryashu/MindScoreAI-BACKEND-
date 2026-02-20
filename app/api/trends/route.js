import express from "express";
import Checkin from "../../../models/Checkin.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await Checkin.find().sort({ createdAt: -1 }).limit(30);
  res.json(data);
});

export default router;
