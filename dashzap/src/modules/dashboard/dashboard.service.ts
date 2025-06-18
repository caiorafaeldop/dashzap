import { DashboardRepository } from "./dashboard.repository";

export class DashboardService {
  private repository = new DashboardRepository();

  async create(title: string, data: any) {
    return this.repository.create(title, data);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async findById(id: string) {
    return this.repository.findById(id);
  }

  async update(id: string, title: string) {
    return this.repository.update(id, title);
  }

  async delete(id: string) {
    return this.repository.delete(id);
  }
}
