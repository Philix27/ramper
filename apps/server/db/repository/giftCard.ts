import { db } from "..";

import { eq } from "drizzle-orm";
import { giftCardSchema } from "../schema";
import { appLogger } from "../../lib";

export class GiftCardRepository {
  name = GiftCardRepository.name;
  getAll(arg0: { user_id: number }) {
    throw new Error("Method not implemented.");
  }
  delete(arg0: { id: number }) {
    throw new Error("Method not implemented.");
  }
  async getById(params: { id: number }) {
    try {
      const res = await db.query.giftCardSchema.findFirst({
        where: (user, { eq }) => eq(giftCardSchema.id, params.id),
        columns: {
          id: true,
        },
      });
      return res;
    } catch (error) {
      throw new Error("Oops an error ocurred");
    }
  }

  async create(params: {
    amount: number;
    phone?: string;
    email?: string;
    purpose?: string;
    user_wallet_address: string;
  }) {
    try {
      appLogger(this.name, "create");
      const res = await db.insert(giftCardSchema).values({
        amount: params.amount,
        phone: params.phone,
        email: params.email,
        purpose: params.purpose,
        creator_wallet_address: params.user_wallet_address,
      });
      return res;
    } catch (error) {
      appLogger.err(this.name, "create", error as string);
      throw new Error("Could not add to database");
    }
  }

  async update(params: { id: number; is_redeemed: boolean }) {
    appLogger(this.name, "update");
    try {
      const res = await db
        .update(giftCardSchema)
        .set({
          is_redeem: params.is_redeemed,
        })
        .where(eq(giftCardSchema.id, params.id));
      // todo: Log
      return res;
    } catch (error) {
      // todo: Log
      throw new Error("Could not update");
    }
  }
}
