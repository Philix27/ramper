import { request } from "../utils";
import { z } from "zod";

//* Input Schema
const schema = {
  create: z.object({
    user_id: z.number(),
    phone: z.string(),
    first_name: z.string().optional(),
    last_name: z.string().optional(),
  }),
  kyc: z.object({
    bvn: z.number(),
    nin: z.number(),
    nin_url: z.string(),
    first_name: z.string(),
    last_name: z.string(),
  }),
};

export const UserSchema = schema;
//* Return Schema
export type IUserCreate = {
  phone: string;
  first_name: string;
};

//* Interface for Service and RPC
export interface IUser {
  create(props: z.infer<typeof schema.create>): Promise<IUserCreate>;
  kyc(props: z.infer<typeof schema.kyc>): Promise<IUserCreate>;
}

//* RPC Schema
export class UserRpc implements IUser {
  async kyc(props: z.infer<typeof schema.kyc>): Promise<IUserCreate> {
    return await request(props);
  }
  async create(props: z.infer<typeof schema.create>): Promise<IUserCreate> {
    return await request(props);
  }
}
