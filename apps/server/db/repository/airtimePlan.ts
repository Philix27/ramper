import { db } from "..";
import { airtimePlanSchema } from "../schema";
import { eq } from "drizzle-orm";

export class AirtimeRepository {
  async create(params: { amount: number; network: string; owner_id: number }) {
    try {
      const res = await db.insert(airtimePlanSchema).values({
        amount: params.amount,
        network: params.network,
      });
      return res;
    } catch (error) {
      throw new Error("Could not add to database");
    }
  }

  async update(params: { id: number; amount: number }) {
    try {
      const res = await db
        .update(airtimePlanSchema)
        .set({
          amount: params.amount,
        })
        .where(eq(airtimePlanSchema.id, params.id));
      // todo: Log
      return res;
    } catch (error) {
      // todo: Log
      throw new Error("Could not update");
    }
  }

  async delete(params: { id: number }) {
    try {
      const res = await db
        .delete(airtimePlanSchema)
        .where(eq(airtimePlanSchema.id, params.id));
      // todo: Log
      return res;
    } catch (error) {
      // todo: Log
      throw new Error("Could not delete");
    }
  }
}
