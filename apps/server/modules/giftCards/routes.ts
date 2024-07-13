import { updateSchema, createSchema, getAllSchema } from "./schema";
import { Hono } from "hono";
import { GiftCardService } from "./service";
import { GiftCardRepository } from "../../db";
import { appLogger, debug } from "../../lib";

const service = new GiftCardService(new GiftCardRepository());

export const giftCardRoutes = new Hono()
  .post("/", createSchema, async (c) => {
    try {
      debug("create card routes");
      const payload = c.req.valid("json");
      const res = await service.create({
        ...payload,
        user_wallet_address: payload.user_wallet_address,
      });
      console.log("Backend: Create routes");

      return c.json({
        msg: "Created a new gift card",
      });
    } catch (error) {
      appLogger.err("create card routes", error as string);
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
