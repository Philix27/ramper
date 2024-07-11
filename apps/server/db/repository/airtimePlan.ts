import { db } from "..";
import { airtimePlanSchema } from "../schema";
import { eq } from "drizzle-orm";

export class AirtimeRepository {
  async getAll() {
    try {
      const res = await db.query.airtimePlanSchema.findMany({
        columns: {
          amount: true,
          network: true,
        },
      });
      return res;
    } catch (error) {
      throw new Error("Oops an error ocurred");
    }
  }
}
