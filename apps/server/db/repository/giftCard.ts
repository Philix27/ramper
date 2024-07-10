import { db } from "..";

import { eq } from "drizzle-orm";
import { giftCardSchema } from "../schema";

export class GiftCardRepository {
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
    user_id: number;
  }) {
    try {
      const res = await db.insert(giftCardSchema).values({
        amount: params.amount,
        phone: params.phone,
        email: params.email,
        purpose: params.purpose,
        user_id: params.user_id,
      });
      return res;
    } catch (error) {
      throw new Error("Could not add to database");
    }
  }

  async update(params: { id: number; redeem: boolean }) {
    try {
      const res = await db
        .update(giftCardSchema)
        .set({
          is_redeem: params.redeem,
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
