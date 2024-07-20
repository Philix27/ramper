import { z } from "zod";

export const workspaceSchema = {
  createSchema: z.object({
    owner_id: z.number(),
    name: z.string(),
    desc: z.string().optional(),
  }),
  updateSchema: z.object({
    name: z.string().optional(),
    desc: z.string().optional(),
  }),
  getAllSchema: z.object({
    limit: z.number().optional(),
    offset: z.number().optional(),
  }),
};

export type IWorkspaceCreate = {};
export type IWorkspaceGetAll = {};
export type IWorkspaceGetOne = {};
export type IWorkspaceUpdate = {};
export type IWorkspaceDelete = {};