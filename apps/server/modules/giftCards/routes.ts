import {
  updateSchema,
  createSchema,
  getAllSchema,
  redeemCardSchema,
} from "./schema";
import { Hono } from "hono";
import { GiftCardService } from "./service";
import { GiftCardRepository } from "./repo";
import { appLogger } from "@server/lib";
import { MobileVtu } from "@server/integrations";

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
  .get("/:wallet_address", async (c) => {
    try {
      const payload = c.req.param("wallet_address");

      await service.get({ walletAddress: payload });

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

      const result = await service.getAll({
        walletAddress: payload.walletAddress,
      });
      return c.json({
        result,
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
  .post("/claim", redeemCardSchema, async (c) => {
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
