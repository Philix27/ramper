import { AirtimeRepository } from "../../db";

export class AirtimePlanService {
  constructor(private readonly repo: AirtimeRepository) {}


  async getAll(props: { user_id: number }) {
    const res = await this.repo.getAll();
    return res;
  }
}
