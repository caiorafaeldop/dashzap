import { DashboardRepository } from "./dashboard.repository";

export class DashboardService {
  private repository = new DashboardRepository();

  create(title: string, data: any) {
    return this.repository.create(title, data);
  }

  findAll() {
    return this.repository.findAll();
  }

  findById(id: string) {
    return this.repository.findById(id);
  }

  update(id: string, title: string, data: any) {
    return this.repository.update(id, title, data);
  }

  delete(id: string) {
    return this.repository.delete(id);
  }
}
