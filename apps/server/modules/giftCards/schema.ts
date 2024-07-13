import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

export const createSchema = zValidator(
  "json",
  z.object({
    user_wallet_address: z.string(),
    amount: z.number(),
    purpose: z.string(),
    phone: z.string().optional(),
    email: z.string().optional(),
    //  purpose: string;
    // user_id: number;
    // phone: string;
    // amount: number;
  })
);

export const updateSchema = zValidator(
  "json",
  z.object({
    name: z.string().optional(),
    desc: z.string().optional(),
  })
);
export const getAllSchema = zValidator(
  "json",
  z.object({
    user_id: z.number(),
    limit: z.number().optional(),
    offset: z.number().optional(),
  })
);
