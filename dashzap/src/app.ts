import express from "express";
import dashboardRoutes from "./modules/dashboard/dashboard.routes";

const app = express();

app.use(express.json());

// Atenção: aqui passamos o Router, nunca um método de controller
app.use("/dashboards", dashboardRoutes);

export default app;
