import { AirtimeRepository } from "./repo";

export class AirtimePlanService {
  constructor(private readonly repo: AirtimeRepository) {}

  async getAll() {
    const res = await this.repo.getAll();
    return res;
  }
}
