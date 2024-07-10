import { db } from "..";
import { workspaceSchema } from "../schema";
import { eq } from "drizzle-orm";

export class BeneficiaryRepository {
  async getById(params: { id: number }) {
    try {
      const res = await db.query.workspaceSchema.findFirst({
        where: (user, { eq }) => eq(workspaceSchema.id, params.id),
        columns: {
          id: true,
        },
      });
      return res;
    } catch (error) {
      throw new Error("Oops an error ocurred");
    }
  }

  async create(params: { name: string; desc?: string; owner_id: number }) {
    try {
      const res = await db.insert(workspaceSchema).values({
        name: params.name,
        desc: params.desc,
        owner_id: params.owner_id,
      });
      return res;
    } catch (error) {
      throw new Error("Could not add to database");
    }
  }

  async update(params: { id: number; name?: string; desc?: string }) {
    try {
      const res = await db
        .update(workspaceSchema)
        .set({
          name: params.name,
          desc: params.desc,
        })
        .where(eq(workspaceSchema.id, params.id));
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
        .delete(workspaceSchema)
        .where(eq(workspaceSchema.id, params.id));
      // todo: Log
      return res;
    } catch (error) {
      // todo: Log
      throw new Error("Could not delete");
    }
  }
}
