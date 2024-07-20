import a from "axios";
import { API_BASE_URL } from "../utils";
import { z } from "zod";
import { ITaskCreate, ITaskGetAll, ITaskUpdate, taskSchema } from "./schema";
import { IWorkspaceGetAll, IWorkspaceUpdate } from "../workspace";

export interface ITask {
  create(props: z.infer<typeof taskSchema.createSchema>): Promise<ITaskCreate>;
  getAll(props: z.infer<typeof taskSchema.getAll>): Promise<ITaskGetAll>;
  update(props: z.infer<typeof taskSchema.updateSchema>): Promise<ITaskUpdate>;
}

export class TaskRpc implements ITask {
  async create(
    props: z.infer<typeof taskSchema.createSchema>
  ): Promise<ITaskCreate> {
    return await a.post(API_BASE_URL, props);
  }
  async getAll(
    props: z.infer<typeof taskSchema.getAll>
  ): Promise<IWorkspaceGetAll> {
    return await a.post(API_BASE_URL, props);
  }
  async update(
    props: z.infer<typeof taskSchema.updateSchema>
  ): Promise<IWorkspaceUpdate> {
    return await a.post(API_BASE_URL, props);
  }
}
