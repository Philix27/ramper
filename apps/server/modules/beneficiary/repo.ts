import { db } from "../../db";
import { beneficiarySchema } from "../../db/schema";
import { eq } from "drizzle-orm";

export class BeneficiaryRepository {
  async getById(params: { id: number }) {
    try {
      const res = await db.query.beneficiarySchema.findFirst({
        where: (user, { eq }) => eq(beneficiarySchema.id, params.id),
        columns: {
          id: true,
        },
      });
      return res;
    } catch (error) {
      throw new Error("Oops an error ocurred");
    }
  }
  async getAll(params: { user_id: number }) {
    try {
      const res = await db.query.beneficiarySchema.findMany({
        where: (user, { eq }) => eq(beneficiarySchema.user_id, params.user_id),
        columns: {
          id: true,
          phone: true,
          title: true,
        },
      });
      return res;
    } catch (error) {
      throw new Error("Oops an error ocurred");
    }
  }

  async create(params: { phone: string; title: string; user_id: number }) {
    try {
      const res = await db.insert(beneficiarySchema).values({
        phone: params.phone,
        title: params.title,
        user_id: params.user_id,
      });
      return { msg: "success" };
    } catch (error) {
      throw new Error("Could not add to database");
    }
  }

  async delete(params: { id: number }) {
    try {
      const res = await db
        .delete(beneficiarySchema)
        .where(eq(beneficiarySchema.id, params.id))
        .returning();
      return res;
    } catch (error) {
      // todo: Log
      throw new Error("Could not delete");
    }
  }
}
