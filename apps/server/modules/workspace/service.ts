import { WorkspaceRepository } from "../../db";

export class WorkspaceService {
  constructor(private readonly repo: WorkspaceRepository) {}

  async create(props: { name: string; desc?: string; owner_id: number }) {
    await this.repo.create({
      name: props.name,
      desc: props.desc,
      owner_id: props.owner_id,
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
