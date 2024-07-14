import {
  updateSchema,
  createSchema,
  getAllSchema,
  redeemCardSchema,
} from "./schema";
import { Hono } from "hono";
import { GiftCardService } from "./service";
import { GiftCardRepository } from "../../db";
import { appLogger } from "../../lib";
import { MobileVtu } from "../../integrations";

const page = "GiftCardRoutes";
const service = new GiftCardService(new GiftCardRepository(), new MobileVtu());

export const giftCardRoutes = new Hono()
  .post("/", createSchema, async (c) => {
    appLogger(page, "create");

    try {
      const payload = c.req.valid("json");
      const res = await service.create({
        ...payload,
        user_wallet_address: payload.user_wallet_address,
      });

      return c.json({
        msg: "Created a new gift card",
        res,
      });
    } catch (error) {
      appLogger.err(page, "create", error as string);
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
  })
  .post("/redeem", redeemCardSchema, async (c) => {
    appLogger(page, "redeem");

    try {
      const payload = c.req.valid("json");
      const res = await service.redeemCard(payload);
      return c.json({
        msg: "Redeemed gift card",
        res,
      });
    } catch (error) {
      // appLogger.err(page, "redeem", error as string);
      return c.json({
        msg: error,
      });
    }
  });
