import { request } from "../utils";
import { z } from "zod";

//* Input Schema
const schema = {
  create: z.object({
    user_id: z.number(),
    phone: z.string(),
    name: z.string(),
  }),
  delete: z.object({
    user_id: z.string(),
    beneficiary_id: z.string(),
  }),
  getAll: z.object({
    user_id: z.number(),
  }),
};

export const AirtimeBeneficiarySchema = schema;
//* Return Schema
export type IWorkspaceCreate = {
  phone: string;
  name: string;
};
export type IAirtimeBeneficiaryGetAll = { phone: string; name: string }[];
export type IAirtimeBeneficiaryDelete = {
  user_id: string;
};
export type IAirtimeBeneficiaryCreate = {
  user_id: string;
  beneficiary_id: string;
};
//* Interface for Service and RPC
export interface IAirtimeBeneficiary {
  create(
    props: z.infer<typeof schema.create>
  ): Promise<IAirtimeBeneficiaryCreate>;
  getAll(
    props: z.infer<typeof schema.getAll>
  ): Promise<IAirtimeBeneficiaryGetAll>;
  delete(
    props: z.infer<typeof schema.delete>
  ): Promise<IAirtimeBeneficiaryDelete>;
}

//* RPC Schema
export class AirtimeBeneficiaryRpc implements IAirtimeBeneficiary {
  async create(
    props: z.infer<typeof schema.create>
  ): Promise<IAirtimeBeneficiaryCreate> {
    return await request(props);
  }
  async getAll(
    props: z.infer<typeof schema.getAll>
  ): Promise<IAirtimeBeneficiaryGetAll> {
    return await request(props);
  }
  async delete(
    props: z.infer<typeof schema.delete>
  ): Promise<IAirtimeBeneficiaryDelete> {
    return await request(props);
  }
}
