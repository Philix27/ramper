import a from "axios";
import { API_BASE_URL } from "../utils";
import {
  IProjectCreate,
  IProjectGetAll,
  IProjectGetOne,
  IProjectUpdate,
  projectsSchema,
} from "./schema";
import { z } from "zod";

export interface IProject {
  create(
    props: z.infer<typeof projectsSchema.createSchema>
  ): Promise<IProjectCreate>;
  getAll(
    props: z.infer<typeof projectsSchema.getAllSchema>
  ): Promise<IProjectGetAll>;
  update(
    props: z.infer<typeof projectsSchema.updateSchema>
  ): Promise<IProjectUpdate>;
  getOne(
    props: z.infer<typeof projectsSchema.getOneSchema>
  ): Promise<IProjectGetOne>;
}

export class ProjectRpc implements IProject {
  async create(
    props: z.infer<typeof projectsSchema.createSchema>
  ): Promise<IProjectCreate> {
    return await a.post(API_BASE_URL, props);
  }
  async getAll(
    props: z.infer<typeof projectsSchema.getAllSchema>
  ): Promise<IProjectGetAll> {
    return await a.post(API_BASE_URL, props);
  }
  async update(
    props: z.infer<typeof projectsSchema.updateSchema>
  ): Promise<IProjectUpdate> {
    return await a.post(API_BASE_URL, props);
  }
  async getOne(
    props: z.infer<typeof projectsSchema.getOneSchema>
  ): Promise<IProjectGetOne> {
    return await a.post(API_BASE_URL, props);
  }
}
