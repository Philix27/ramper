import { WorkspaceEpicRepository } from "@server/db";
import { updateSchema, createSchema, getAllSchema } from "./schema";
import { Hono } from "hono";
import { WorkspaceEpicsService } from "./service";

const service = new WorkspaceEpicsService(new WorkspaceEpicRepository());

export const workspaceEpicRoutes = new Hono()

  .post("/", createSchema, async (c) => {
    try {
      const payload = c.req.valid("json");
      const res = await service.create(payload);

      return c.json({
        msg: "Created an epic",
        res,
      });
    } catch (error) {
      return c.json({
        msg: error,
      });
    }
  })
  .patch("/", updateSchema, async (c) => {
    return c.json({
      msg: "Otp verified",
    });
  })
  .get("/:id", async (c) => {
    return c.json({ msg: "Otp Sent" }, 200);
  })
  .get("/", getAllSchema, async (c) => {
    return c.json({ msg: "Get all" }, 200);
  })
  .delete("/:id", async (c) => {
    return c.json({
      msg: "Otp verified",
    });
  });
