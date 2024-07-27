import { Hono } from "hono";
import { TransactionService } from "./service";
import { TransactionsRepository } from "./repo";
import { TransactionSchema as schema } from "@repo/rpc";
import { zValidator } from "@hono/zod-validator";
import { HttpStatusCode } from "axios";

const service = new TransactionService(new TransactionsRepository());

export const beneficiaryRoutes = new Hono().post(
  "/get_all",
  zValidator("json", schema.getAll),
  async (c) => {
    try {
      const payload = c.req.valid("json");
      return c.json(await service.getAll(payload));
    } catch (error) {
      return c.json(
        {
          msg: error,
        },
        HttpStatusCode.InternalServerError
      );
    }
  }
);
