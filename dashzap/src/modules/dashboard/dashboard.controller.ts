// dashboard.controller.ts
import { Request, Response } from "express";
import { DashboardService } from "./dashboard.service";

export class DashboardController {
  private service = new DashboardService();

  async create(req: Request, res: Response) {
    const { title, data } = req.body;
    const dashboard = await this.service.create(title, data);
    return res.status(201).json(dashboard);
  }

  async findAll(req: Request, res: Response) {
    const dashboards = await this.service.findAll();
    return res.json(dashboards);
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;
    const dashboard = await this.service.findById(id);
    return res.json(dashboard);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { title } = req.body;
    const dashboard = await this.service.update(id, title);
    return res.json(dashboard);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await this.service.delete(id);
    return res.status(204).send();
  }
}
