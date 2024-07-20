import { z } from "zod";

export const epicSchema = {
  createSchema: z.object({
    name: z.string(),
    desc: z.string().optional(),
    workspaceId: z.number(),
    projectId: z.number(),
  }),
  updateSchema: z.object({
    name: z.string().optional(),
    desc: z.string().optional(),
    workspaceId: z.number(),
    projectId: z.number(),
    epicId: z.number(),
  }),
  getAllSchema: z.object({
    workspaceId: z.number(),
    projectId: z.number(),
  }),
  getOne: z.object({
    workspaceId: z.number(),
    projectId: z.number(),
    epicId: z.number(),
  }),
};

export type IEpicCreate = {};
export type IEpicGetAll = {
  name: string;
  desc: string | null;
  id: number;
}[];
export type IEpicGetOne = {
  name: string;
  desc: string | null;
  id: number;
};

export type IEpicUpdate = {
  name: string;
  desc: string | null;
  id: number;
  createdAt: Date;
  updatedAt: Date;
  workspace_id: number;
  project_id: number;
}[];
export type IEpicDelete = {};
