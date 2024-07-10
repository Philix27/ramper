import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

export const createSchema = zValidator(
  "json",
  z.object({
    workspaceId: z.number(),
    name: z.string(),
    desc: z.string().optional(),
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
    limit: z.number(),
    offset: z.number(),
  })
);
