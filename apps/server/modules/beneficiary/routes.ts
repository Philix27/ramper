import { updateSchema, createSchema, getAllSchema } from "./schema";
import { Hono } from "hono";
import { BeneficiaryService } from "./service";
import { BeneficiaryRepository } from "../../db";

const service = new BeneficiaryService(new BeneficiaryRepository());

export const beneficiaryRoutes = new Hono()
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

      await service.getAll({
        user_id: 0
      });
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
