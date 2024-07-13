import { GiftCardRepository } from "../../db";

export class GiftCardService {
  constructor(private readonly repo: GiftCardRepository) {}

  async create(props: {
    purpose: string;
    amount: number;
    user_wallet_address: string;
    phone?: string;
    email?: string;
  }) {
    const res = await this.repo.create({
      amount: props.amount,
      user_wallet_address: props.user_wallet_address,
      purpose: props.purpose,
      phone: props.phone,
      email: props.email,
    });
    console.log("Backend: Create Service");
    return res;
  }

  async get(props: { id: number }) {
    const res = await this.repo.getById({ id: props.id });
    return res;
  }
  async getAll(props: { user_id: number }) {
    const res = await this.repo.getAll({ user_id: props.user_id });
    return res;
  }

  async delete(props: { id: number }) {
    const res = await this.repo.delete({ id: props.id });
    return res;
  }
}
