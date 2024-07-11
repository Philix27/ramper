import { getAllSchema } from "./schema";
import { Hono } from "hono";
import { AirtimePlanService } from "./service";
import { AirtimeRepository } from "../../db";

const service = new AirtimePlanService(new AirtimeRepository());

export const airtimePlanRoutes = new Hono().get(
  "/",
  getAllSchema,
  async (c) => {
    try {
      const payload = c.req.valid("json");

      await service.getAll({
        user_id: 0,
      });
      return c.json({
        msg: "get workspace",
      });
    } catch (error) {
      return c.json({
        msg: error,
      });
    }
  }
);
