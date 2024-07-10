import { WorkspaceEpicRepository } from "@server/db";

export class WorkspaceEpicsService {
  constructor(private readonly repo: WorkspaceEpicRepository) {}

  async create(props: { name: string; desc?: string; workspaceId: number }) {
    await this.repo.create({
      name: props.name,
      desc: props.desc,
      workspaceId: props.workspaceId,
    });
  }
  async get(props: { id: number }) {
    await this.repo.getById({ id: props.id });
  }
  async getAll(props: {}) {}
  async update(props: { id: number; name?: string; desc?: string }) {
    await this.repo.update({ id: props.id });
  }
  async delete(props: { id: number }) {
    await this.repo.delete({ id: props.id });
  }
}
