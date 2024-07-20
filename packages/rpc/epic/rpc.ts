import a from "axios";
import { API_BASE_URL } from "../utils";
import { z } from "zod";
import {
  IEpicCreate,
  IEpicGetAll,
  IEpicGetOne,
  IEpicUpdate,
  epicSchema,
} from "./schema";

export interface IAbstractEpic {
  create(props: z.infer<typeof epicSchema.createSchema>): Promise<IEpicCreate>;
  getAll(props: z.infer<typeof epicSchema.getAllSchema>): Promise<IEpicGetAll>;
  getOne(props: z.infer<typeof epicSchema.getOne>): Promise<IEpicGetOne>;
  update(props: z.infer<typeof epicSchema.updateSchema>): Promise<IEpicUpdate>;
}

export class EpicRpc implements IAbstractEpic {
  async create(
    props: z.infer<typeof epicSchema.createSchema>
  ): Promise<IEpicCreate> {
    return await a.post(API_BASE_URL, props);
  }
  async getAll(
    props: z.infer<typeof epicSchema.getAllSchema>
  ): Promise<IEpicGetAll> {
    return await a.post(API_BASE_URL, props);
  }
  async getOne(props: z.infer<typeof epicSchema.getOne>): Promise<IEpicGetOne> {
    return await a.post(API_BASE_URL, props);
  }
  async update(
    props: z.infer<typeof epicSchema.updateSchema>
  ): Promise<IEpicUpdate> {
    return await a.post(API_BASE_URL, props);
  }
}
