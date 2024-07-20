import a from "axios";
import { API_BASE_URL } from "../utils";
import {
  IWorkspaceCreate,
  IWorkspaceGetAll,
  IWorkspaceUpdate,
  workspaceSchema,
} from "./schema";
import { z } from "zod";

export interface IWorkspace {
  create(
    props: z.infer<typeof workspaceSchema.createSchema>
  ): Promise<IWorkspaceCreate>;
  getAll(
    props: z.infer<typeof workspaceSchema.getAllSchema>
  ): Promise<IWorkspaceGetAll>;
  update(
    props: z.infer<typeof workspaceSchema.updateSchema>
  ): Promise<IWorkspaceUpdate>;
}

export class WorkspaceRpc implements IWorkspace {
  async create(
    props: z.infer<typeof workspaceSchema.createSchema>
  ): Promise<IWorkspaceCreate> {
    return await a.post(API_BASE_URL, props);
  }
  async getAll(
    props: z.infer<typeof workspaceSchema.getAllSchema>
  ): Promise<IWorkspaceGetAll> {
    return await a.post(API_BASE_URL, props);
  }
  async update(
    props: z.infer<typeof workspaceSchema.updateSchema>
  ): Promise<IWorkspaceUpdate> {
    return await a.post(API_BASE_URL, props);
  }
}
