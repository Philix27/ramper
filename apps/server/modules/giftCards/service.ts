import { GiftCardRepository } from "../../db";
import { MobileVtu } from "../../integrations";
import { appLogger } from "../../lib";

export class GiftCardService {
  constructor(
    private readonly repo: GiftCardRepository,
    private readonly mobile: MobileVtu
  ) {}

  name = GiftCardService.name;

  async create(props: {
    purpose: string;
    amount: number;
    user_wallet_address: string;
    phone?: string;
    email?: string;
  }) {
    // appLogger(this.name, this.create.name);
    const res = await this.repo.create({
      amount: props.amount,
      user_wallet_address: props.user_wallet_address,
      purpose: props.purpose,
      phone: props.phone,
      email: props.email,
    });

    return res;
  }
  async redeemCard(props: { amount: number; phone: string; cardId: number }) {
    appLogger(this.name, this.redeemCard.name);
    // Call mobile vtu to credit amount and phone
    try {
      const res = await this.mobile.topUp({
        operator: "MTN",
        type: "airtime",
        value: props.amount,
        phone: props.phone,
      });
      // const res = await this.repo.update({
      //   is_redeemed: true,
      //   id: props.cardId,
      // });
      return res;
    } catch (error) {
      appLogger.err(this.name, this.redeemCard.name, error as string);
    }
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
