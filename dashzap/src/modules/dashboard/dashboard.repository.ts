import { prisma } from "../../shared/prisma";

export class DashboardRepository {
  async create(title: string, data: any) {
    return prisma.dashboard.create({
      data: {
        title,
        data,
      },
    });
  }

  async findAll() {
    return prisma.dashboard.findMany();
  }

  async findById(id: string) {
    return prisma.dashboard.findUnique({ where: { id } });
  }

  async update(id: string, title: string, data: any) {
    return prisma.dashboard.update({
      where: { id },
      data: { title },
    });
  }

  async delete(id: string) {
    return prisma.dashboard.delete({ where: { id } });
  }
}
