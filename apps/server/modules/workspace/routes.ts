import { updateSchema, createSchema, getAllSchema } from "./schema";
import { Hono } from "hono";
import { WorkspaceService } from "./service";
import { WorkspaceRepository } from "../../db";

const service = new WorkspaceService(new WorkspaceRepository());

export const workspaceRoutes = new Hono()
  .post("/", createSchema, async (c) => {
    try {
      const payload = c.req.valid("json");
      const res = await service.create(payload);
      return c.json({
        msg: "Created a new workspace",
      });
    } catch (error) {
      return c.json({
        msg: error,
      });
    }
  })
  .put("/:id", updateSchema, async (c) => {
    try {
      const param = c.req.param("id");
      const payload = c.req.valid("json");

      await service.update({ id: parseInt(param), ...payload });

      return c.json({
        msg: "Update workspace",
      });
    } catch (error) {
      return c.json({
        msg: error,
      });
    }
  })
  .get("/:id", async (c) => {
    try {
      const payload = c.req.param("id");

      await service.get({ id: parseInt(payload) });

      return c.json({
        msg: "get workspace",
      });
    } catch (error) {
      return c.json({
        msg: error,
      });
    }
  })
  .get("/", getAllSchema, async (c) => {
    try {
      const payload = c.req.valid("json");

      await service.getAll({});
      return c.json({
        msg: "get workspace",
      });
    } catch (error) {
      return c.json({
        msg: error,
      });
    }
  })
  .delete("/:id", async (c) => {
    try {
      const payload = c.req.param("id");
      const res = await service.delete({ id: parseInt(payload) });
      return c.json({
        msg: "Created a new workspace",
      });
    } catch (error) {
      return c.json({
        msg: error,
      });
    }
  });
