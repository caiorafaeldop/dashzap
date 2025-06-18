import { Router, Request, Response } from "express";
import { DashboardController } from "./dashboard.controller";

const router = Router();
const controller = new DashboardController();

// Aqui usamos arrow functions async que chamam o método, garantindo o contexto correto e tratamento de erros
router.post("/", async (req: Request, res: Response, next) => {
  try {
    await controller.create(req, res);
  } catch (err) {
    next(err);
  }
});
router.get("/", async (req: Request, res: Response, next) => {
  try {
    await controller.findAll(req, res);
  } catch (err) {
    next(err);
  }
});
router.get("/:id", async (req: Request, res: Response, next) => {
  try {
    await controller.findById(req, res);
  } catch (err) {
    next(err);
  }
});
router.put("/:id", async (req: Request, res: Response, next) => {
  try {
    await controller.update(req, res);
  } catch (err) {
    next(err);
  }
});
router.delete("/:id", async (req: Request, res: Response, next) => {
  try {
    await controller.delete(req, res);
  } catch (err) {
    next(err);
  }
});

export default router;
