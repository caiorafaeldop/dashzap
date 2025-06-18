import { Router } from "express";

import { DashboardController } from "./dashboard.controller";

const router = Router();
const controller = new DashboardController();

router.post("/", async (req, res) => {
  try {
    await controller.create(req, res);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/", async (req, res) => {
  try {
    await controller.findAll(req, res);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/:id", async (req, res) => {
  try {
    await controller.findById(req, res);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
router.put("/:id", async (req, res) => {
  try {
    await controller.update(req, res);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    await controller.delete(req, res);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
