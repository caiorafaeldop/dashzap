import express from "express";
import dotenv from "dotenv";
import dashboardRoutes from "modules/dashboard/dashboard.routes";

dotenv.config();

const app = express();

app.use(express.json());

// usar as rotas de dashboard
app.use("/dashboards", dashboardRoutes);

app.get("/", (_req: any, res: { send: (arg0: string) => void }) => {
  res.send("✅ Dashzap API Online");
});

export default app;
