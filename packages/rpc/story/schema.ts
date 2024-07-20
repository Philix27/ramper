import { z } from "zod";

export const storySchema = {
  updateSchema: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),

  createSchema: z.object({
    name: z.string(),
    desc: z.string().optional(),
    epicId: z.number().optional(),
  }),
  getAll: z.object({
    epicId: z.number().optional(),
    projectId: z.number().optional(),
    workspaceId: z.number().optional(),
  }),
};

export type IStoryCreate = {};
export type IStoryGetAll = {};
export type IStoryGetOne = {};
export type IStoryUpdate = {};
export type IStoryDelete = {};
