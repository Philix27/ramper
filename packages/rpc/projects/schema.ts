import { z } from "zod";

export const projectsSchema = {
  createSchema: z.object({
    userId: z.number(),
    workspaceId: z.number(),
    name: z.string(),
    desc: z.string().optional(),
  }),
  updateSchema: z.object({
    name: z.string().optional(),
    desc: z.string().optional(),
  }),
  getAllSchema: z.object({
    workspaceId: z.number(),
    userId: z.number(),
  }),
  getOneSchema: z.object({
    projectId: z.number(),
  }),
  deleteSchema: z.object({
    projectId: z.number(),
  }),
};

export type IProjectCreate = {};
export type IProjectGetAll = {};
export type IProjectGetOne = {
  name: string;
  id: number;
  desc: string | null;
};
export type IProjectUpdate = {};
export type IProjectDelete = {};