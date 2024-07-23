import { Hono } from "hono";
import { BeneficiaryService } from "./service";
import { BeneficiaryRepository } from "../../db";
import { AirtimeBeneficiarySchema as schema } from "@repo/rpc";
import { zValidator } from "@hono/zod-validator";

const service = new BeneficiaryService(new BeneficiaryRepository());

export const beneficiaryRoutes = new Hono()
  .post("/", zValidator("json", schema.create), async (c) => {
    try {
      const payload = c.req.valid("json");
      return c.json(await service.create(payload));
    } catch (error) {
      return c.json({
        msg: error,
      });
    }
  })
  .get("/all", zValidator("json", schema.getAll), async (c) => {
    try {
      const payload = c.req.valid("json");
      return c.json(await service.getAll(payload));
    } catch (error) {
      return c.json({
        msg: error,
      });
    }
  })
  .delete("/:id", zValidator("json", schema.delete), async (c) => {
    try {
      const payload = c.req.valid("json");
      return c.json(await service.delete(payload));
    } catch (error) {
      return c.json({
        msg: error,
      });
    }
  });
