import dotenv from "dotenv";
dotenv.config();   // MUST be first line

import express from "express";
import cors from "cors";

import aiRoute from "./app/api/ai/route.js";
import checkinRoute from "./app/api/checkin/route.js";
import scoreRoute from "./app/api/score/route.js";
import trendsRoute from "./app/api/trends/route.js";

import { connectDB } from "./lib/db.js";

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("MindScoreAI Backend Running 🚀");
});

app.use("/api/ai", aiRoute);
app.use("/api/checkin", checkinRoute);
app.use("/api/score", scoreRoute);
app.use("/api/trends", trendsRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

console.log("API KEY:", process.env.OPENAI_API_KEY ? "Loaded ✅" : "Missing ❌");
