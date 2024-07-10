import { db } from "..";
import { workspaceEpicSchema } from "../schema";
import { eq } from "drizzle-orm";

export class WorkspaceEpicRepository {
  async getById(params: { id: number }) {
    try {
      const res = await db.query.workspaceEpicSchema.findFirst({
        where: (user, { eq }) => eq(workspaceEpicSchema.id, params.id),
        columns: {
          id: true,
        },
      });
      return res;
    } catch (error) {
      throw new Error("Oops an error ocurred");
    }
  }

  async create(params: { name: string; desc?: string; workspaceId: number }) {
    try {
      const res = await db
        .insert(workspaceEpicSchema)
        .values({
          name: params.name,
          desc: params.desc,
          workspace_id: params.workspaceId,
        });
    } catch (error) {
      throw new Error("Could not add to database");
    }
  }

  async update(params: { id: number; name?: string; desc?: string }) {
    try {
      const res = await db
        .update(workspaceEpicSchema)
        .set({
          name: params.name,
          desc: params.desc,
        })
        .where(eq(workspaceEpicSchema.id, params.id));
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
        .delete(workspaceEpicSchema)
        .where(eq(workspaceEpicSchema.id, params.id));
      // todo: Log
      return res;
    } catch (error) {
      // todo: Log
      throw new Error("Could not delete");
    }
  }
}
