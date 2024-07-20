import a from "axios";
import { API_BASE_URL } from "../utils";
import { z } from "zod";
import {
  IStoryCreate,
  IStoryGetAll,
  IStoryUpdate,
  storySchema,
} from "./schema";
import { IWorkspaceGetAll, IWorkspaceUpdate } from "../workspace";

export interface IStory {
  create(
    props: z.infer<typeof storySchema.createSchema>
  ): Promise<IStoryCreate>;
  getAll(props: z.infer<typeof storySchema.getAll>): Promise<IStoryGetAll>;
  update(
    props: z.infer<typeof storySchema.updateSchema>
  ): Promise<IStoryUpdate>;
}

export class StoriesRpc implements IStory {
  async create(
    props: z.infer<typeof storySchema.createSchema>
  ): Promise<IStoryCreate> {
    return await a.post(API_BASE_URL, props);
  }
  async getAll(
    props: z.infer<typeof storySchema.getAll>
  ): Promise<IWorkspaceGetAll> {
    return await a.post(API_BASE_URL, props);
  }
  async update(
    props: z.infer<typeof storySchema.updateSchema>
  ): Promise<IWorkspaceUpdate> {
    return await a.post(API_BASE_URL, props);
  }
}
