import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (_req: any, res: { send: (arg0: string) => void }) => {
  res.send("✅ Dashzap API Online");
});

export default app;
