import { z } from "zod";

export const taskSchema = {
  updateSchema: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
  createSchema: z.object({
    parastatal: z.string(),
    country: z.string(),
  }),
  getAll: z.object({
    parastatal: z.string(),
    country: z.string(),
  }),
};

export type ITaskCreate = {};
export type ITaskGetAll = {};
export type ITaskGetOne = {};
export type ITaskUpdate = {};
export type ITaskDelete = {};