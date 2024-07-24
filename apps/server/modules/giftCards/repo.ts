import { db, giftCardSchema } from "@server/db";

import { eq } from "drizzle-orm";
import { appLogger } from "@server/lib";

export class GiftCardRepository {
  name = GiftCardRepository.name;
  async getAll(params: { walletAddress: string }) {
    try {
      const res = await db.query.giftCardSchema.findMany({
        where: (user, { eq }) =>
          eq(giftCardSchema.creator_wallet_address, params.walletAddress),
      });
      return res;
    } catch (error) {
      throw new Error("Oops an error ocurred");
    }
  }

  async getByWalletAddress(params: { walletAddress: string }) {
    try {
      const res = await db.query.giftCardSchema.findFirst({
        where: (user, { eq }) =>
          eq(giftCardSchema.creator_wallet_address, params.walletAddress),
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

  delete(arg0: { id: number }) {
    throw new Error("Method not implemented.");
  }
}
